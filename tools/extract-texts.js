#!/usr/bin/env node
/* Step 1 of the audio pipeline: collect every English text the page can play, with its voice and
   speaking rate, into tools/texts.json. Dialogue lines, vocabulary words and their example sentences,
   the reading text and its glossary words, the extra listening items, every [[spoken example]] in the
   lesson's HTML, and the start page and appendix texts (group "extra").
   Usage: node tools/extract-texts.js */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const F = require('./lesson-fields.js');

global.window = global;
const V = require(path.join(ROOT, 'data', 'voices.js'));
global.LESSONS = [];
/* a day file that does not load (still being written) is skipped with a warning, not fatal */
fs.readdirSync(path.join(ROOT, 'data')).filter(f => /^day\d\d\.js$/.test(f)).sort().forEach(f => {
  const before = global.LESSONS.length;
  try { require(path.join(ROOT, 'data', f)); }
  catch (e) { global.LESSONS.length = before; console.log('skipped ' + f + ': ' + e.message.split('\n')[0]); }
});
require(path.join(ROOT, 'data', 'appendix.js'));

const items = new Map();
function add(group, voiceTag, rawText, rate) {
  const text = V.ttsText(rawText);
  if (!text) return;
  const id = V.key(voiceTag, text);
  let it = items.get(id);
  if (!it) { it = { id, voice: V.voices[voiceTag], rate, text, groups: [] }; items.set(id, it); }
  if (!it.groups.includes(group)) it.groups.push(group);
}
const sayRe = /data-say=(?:"([^"]*)"|'([^']*)')/g;
function addDataSay(group, html) {
  let m; sayRe.lastIndex = 0;
  while ((m = sayRe.exec(html))) add(group, 'f2', m[1] != null ? m[1] : m[2], V.rates.vocab);
}

for (const L of window.LESSONS) {
  const g = 'day' + L.day;
  if (L.dialogue) L.dialogue.lines.forEach(l => { if (l[0]) add(g, V.voiceFor(l[0]), l[1], V.rates.dialogue); });
  (L.vocab || []).forEach(v => { add(g, 'f2', v[0], V.rates.vocab); add(g, 'f2', v[2], V.rates.vocab); });
  if (L.reading && L.reading.text) add(g, V.READING_VOICES[L.day % V.READING_VOICES.length], L.reading.text, V.rates.reading);
  if (L.reading) (L.reading.glossary || []).forEach(gl => add(g, 'f2', gl[0], V.rates.vocab));
  (L.listen || []).forEach((it, i) => add(g, V.LISTEN_VOICES[i % V.LISTEN_VOICES.length], it.text, V.rates.listen));
  F.htmlStrings(L).forEach(({ text }) => { F.markers(text).forEach(m => add(g, 'f2', m, V.rates.vocab)); addDataSay(g, text); });
}

/* start page and appendix: pronunciation examples, irregular verbs, phrases, corrected mistakes */
const page = fs.readFileSync(path.join(ROOT, 'src', 'page.html'), 'utf8');
const tplRe = /<template id="tpl-[a-z]+">([\s\S]*?)<\/template>/g;
let t; while ((t = tplRe.exec(page))) { addDataSay('extra', t[1]); F.markers(t[1]).forEach(m => add('extra', 'f2', m, V.rates.vocab)); }
(window.VERBS || []).forEach(v => add('extra', 'f2', V.verbText(v), V.rates.vocab));
(window.PHRASES || []).forEach(gp => gp.items.forEach(p => add('extra', 'f2', p[0], V.rates.vocab)));
(window.MISTAKES || []).forEach(gp => gp.items.forEach(m => add('extra', 'f2', m[1], V.rates.vocab)));

const out = [...items.values()];
fs.writeFileSync(path.join(ROOT, 'tools', 'texts.json'), JSON.stringify(out));
const counts = {}; let chars = 0;
out.forEach(it => { chars += it.text.length; it.groups.forEach(g => { counts[g] = (counts[g] || 0) + 1; }); });
console.log(out.length + ' unique clips, ' + Math.round(chars / 1000) + 'k characters');
console.log(Object.entries(counts).sort((a, b) => (parseInt(a[0].slice(3)) || 99) - (parseInt(b[0].slice(3)) || 99)).map(([g, n]) => g + ':' + n).join('  '));
