#!/usr/bin/env node
/* Prints a compact summary of the lessons: title, grammar headings, the vocabulary words, the reading
   and writing tasks. Review-day authors read this instead of the full files; it is also a quick way
   to see the course at a glance.
   Usage: node tools/lesson-summary.js            (every day)
          node tools/lesson-summary.js 1-6        (a range)
          node tools/lesson-summary.js 8 9 10     (a list) */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
global.window = global;
const V = require(path.join(ROOT, 'data', 'voices.js'));

function plain(s) { return V.ttsText(s); }
function wanted() {
  const out = [];
  process.argv.slice(2).forEach(a => {
    const m = a.match(/^(\d+)-(\d+)$/);
    if (m) { for (let i = +m[1]; i <= +m[2]; i++) out.push(i); } else if (+a > 0) out.push(+a);
  });
  return out;
}
const days = wanted();
const files = fs.readdirSync(path.join(ROOT, 'data')).filter(f => /^day\d\d\.js$/.test(f)).sort()
  .filter(f => !days.length || days.includes(parseInt(f.slice(3, 5), 10)));
for (const f of files) {
  global.LESSONS = [];
  try { require(path.join(ROOT, 'data', f)); } catch (e) { console.log('## ' + f + ': cannot load (' + e.message.split('\n')[0] + ')\n'); continue; }
  const L = global.LESSONS[0]; if (!L) continue;
  console.log('## Day ' + L.day + (L.kind && L.kind !== 'lesson' ? ' (' + L.kind + ')' : '') + ' — ' + L.title + ' · ' + L.tr);
  console.log('Goals: ' + (L.goals || []).map(plain).join(' | '));
  console.log('Grammar: ' + (L.grammar || []).map(g => plain(g.h)).join(' | '));
  if (L.dialogue) console.log('Dialogue: ' + L.dialogue.title + ' (' + (L.dialogue.lines || []).filter(l => l[0]).length + ' lines; ' + [...new Set((L.dialogue.lines || []).map(l => l[0]).filter(Boolean))].join(', ') + ')');
  console.log('Vocab (' + (L.vocab || []).length + '): ' + (L.vocab || []).map(v => v[0]).join(', '));
  if (L.reading) console.log('Reading: ' + L.reading.title + ' (' + plain(L.reading.text).split(/\s+/).length + ' words)');
  if (L.write) console.log('Writing: ' + plain(L.write.task).slice(0, 160));
  console.log('Practice sets: ' + (L.practice || []).map(s => plain(s.h)).join(' | '));
  console.log('');
}
