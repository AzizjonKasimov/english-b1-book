#!/usr/bin/env node
/* Checks lesson files against the format in AUTHORING.md: required fields, counts, minutes,
   HTML tag balance, placeholders, which language each field is in, speaker names, duplicates.
   Usage: node tools/check-lessons.js            (every data/dayNN.js)
          node tools/check-lessons.js 5 12       (days 5 and 12 only)
   Prints one summary line per day plus its errors and warnings; exits 1 when any day has an error. */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const F = require('./lesson-fields.js');
global.window = global;
const V = require(path.join(ROOT, 'data', 'voices.js'));

const DEFAULT_MINS = { warmup: 15, dialogue: 45, vocab: 45, grammar: 60, practice: 45, reading: 40, listen: 0, speak: 20, write: 20, quiz: 10 };
const HTML_TAGS = ['p', 'b', 'i', 'u', 'em', 'strong', 'table', 'tr', 'td', 'th', 'thead', 'tbody', 'div', 'ul', 'ol', 'li', 'span', 'mark', 'h4', 'small', 'a'];
const PLACEHOLDER = /TODO|FIXME|lorem ipsum|\?\?\?|XXX|\[TR\]|\[EN\]|<<|>>|\bTBD\b/i;
const TR_CHARS = /[çğıöşüÇĞİÖŞÜ]/;
const DISALLOWED_TAG = /<(script|style|iframe|img|button|input|form)\b/i;

function words(s) { return V.ttsText(s).split(/\s+/).filter(Boolean).length; }
function isStr(s) { return typeof s === 'string' && s.trim().length > 0; }
function isPair(it) { return Array.isArray(it) && it.length >= 2 && it.length <= 3 && it.every(isStr); }

function dayFiles(days) {
  const all = fs.readdirSync(path.join(ROOT, 'data')).filter(f => /^day\d\d\.js$/.test(f)).sort();
  if (!days.length) return all;
  return days.map(d => 'day' + String(d).padStart(2, '0') + '.js');
}

function loadDay(file) {
  const p = path.join(ROOT, 'data', file);
  if (!fs.existsSync(p)) return { error: 'file missing: data/' + file };
  global.LESSONS = [];
  delete require.cache[require.resolve(p)];
  try { require(p); } catch (e) { return { error: 'cannot load: ' + e.message.split('\n')[0] }; }
  const list = global.LESSONS;
  if (list.length !== 1) return { error: 'expected exactly one window.LESSONS.push(...) in the file, found ' + list.length };
  return { lesson: list[0] };
}

function check(L, file) {
  const errs = [], warns = [];
  const err = (m) => errs.push(m), warn = (m) => warns.push(m);
  const expectDay = parseInt(file.slice(3, 5), 10);
  const kind = L.kind || 'lesson';
  if (L.day !== expectDay) err('day is ' + L.day + ' but the file is ' + file);
  if (!['lesson', 'review', 'exam'].includes(kind)) err('kind must be lesson, review or exam');
  if (!isStr(L.title)) err('title missing');
  if (!isStr(L.tr)) err('tr (Turkish subtitle) missing');
  if (!Array.isArray(L.goals) || L.goals.length < 3 || L.goals.length > 6 || !L.goals.every(isStr)) err('goals: 3 to 6 strings');

  /* minutes */
  const mins = Object.assign({}, DEFAULT_MINS, L.mins || {});
  Object.keys(L.mins || {}).forEach(k => { if (!(k in DEFAULT_MINS)) err('mins has an unknown section "' + k + '"'); });
  const sum = Object.keys(DEFAULT_MINS).reduce((a, k) => a + (L[k] ? mins[k] : 0), 0);
  if (sum !== 300) err('minutes of the sections present add up to ' + sum + ', not 300 (set mins to redistribute)');
  if (L.listen && L.listen.length && !mins.listen) err('listen items are present, so set mins.listen (and take the minutes from other sections)');
  if (L.labels) Object.keys(L.labels).forEach(k => {
    if (!(k in DEFAULT_MINS)) err('labels has an unknown section "' + k + '"');
    const v = L.labels[k]; if (!Array.isArray(v) || v.length !== 2 || !v.every(isStr)) err('labels.' + k + ' must be [English, Turkish]');
  });

  /* warm-up */
  if (!L.warmup) err('warmup missing');
  else {
    if (!isStr(L.warmup.intro)) err('warmup.intro missing');
    const n = (L.warmup.items || []).length;
    if (n < 6 || n > 12) err('warmup.items: 6 to 12 items, found ' + n);
    (L.warmup.items || []).forEach((it, i) => { if (!isPair(it)) err('warmup.items[' + i + '] must be [prompt, answer] or [prompt, answer, note]'); });
  }

  /* dialogue */
  let spoken = 0;
  if (!L.dialogue) { if (kind !== 'exam') err('dialogue missing'); }
  else {
    const D = L.dialogue;
    if (!isStr(D.title)) err('dialogue.title missing');
    if (!isStr(D.scene)) err('dialogue.scene missing');
    (D.lines || []).forEach((l, i) => {
      if (!Array.isArray(l) || l.length !== 3 || !l.every(s => typeof s === 'string')) { err('dialogue.lines[' + i + '] must be [speaker, English, Turkish]'); return; }
      if (l[0]) {
        spoken++;
        if (!isStr(l[1]) || !isStr(l[2])) err('dialogue.lines[' + i + '] has an empty line or translation');
        const who = l[0].replace(/\s*\(.*\)\s*$/, '');
        if (!V.speakers[who]) warn('speaker "' + who + '" is not in data/voices.js (a default voice will be guessed)');
        if (TR_CHARS.test(l[1])) err('dialogue.lines[' + i + '] English line contains Turkish letters');
        if (/[()]/.test(l[1])) warn('dialogue.lines[' + i + '] has parentheses; the audio reads what is inside, so put stage directions in the scene or a narration line');
      }
    });
    const lo = kind === 'lesson' ? 10 : 6, hi = 22;
    if (spoken < lo || spoken > hi) err('dialogue: ' + lo + ' to ' + hi + ' spoken lines, found ' + spoken);
    const q = (D.questions || []).length;
    if (q < 3 || q > 8) err('dialogue.questions: 3 to 8 items, found ' + q);
    (D.questions || []).forEach((it, i) => { if (!isPair(it)) err('dialogue.questions[' + i + '] must be [question, answer]'); });
    if (!isStr(D.note)) warn('dialogue.note missing (point out the useful chunks)');
  }

  /* vocabulary */
  const vocab = L.vocab || [];
  const vlo = kind === 'lesson' ? 28 : (kind === 'review' ? 20 : 8), vhi = 40;
  if (vocab.length < vlo || vocab.length > vhi) err('vocab: ' + vlo + ' to ' + vhi + ' items, found ' + vocab.length);
  const seen = new Set();
  vocab.forEach((v, i) => {
    if (!Array.isArray(v) || v.length !== 4 || !v.every(isStr)) { err('vocab[' + i + '] must be [word, Turkish, example, example in Turkish]'); return; }
    const k = v[0].toLowerCase().trim();
    if (seen.has(k)) err('vocab: "' + v[0] + '" appears twice'); seen.add(k);
    if (TR_CHARS.test(v[0]) || TR_CHARS.test(v[2])) err('vocab[' + i + '] English fields contain Turkish letters: ' + v[0]);
    if (!TR_CHARS.test(v[1] + ' ' + v[3])) warn('vocab[' + i + '] Turkish fields have no Turkish letters, check them: ' + v[1]);
    const ew = words(v[2]); if (ew < 5 || ew > 20) warn('vocab[' + i + '] example sentence has ' + ew + ' words (aim for 6 to 14): ' + v[0]);
  });

  /* grammar */
  const gram = L.grammar || [];
  const glo = kind === 'lesson' ? 2 : 1;
  if (gram.length < glo || gram.length > 5) err('grammar: ' + glo + ' to 5 blocks, found ' + gram.length);
  gram.forEach((g, i) => {
    if (!g || !isStr(g.h) || !isStr(g.body)) { err('grammar[' + i + '] needs h and body'); return; }
    if (kind === 'lesson' && g.body.length < 500) err('grammar[' + i + '].body is short (' + g.body.length + ' chars); explain the rule, give a table and examples');
    if (!TR_CHARS.test(g.body)) err('grammar[' + i + '].body has no Turkish letters: the explanation must be in Turkish');
    if (kind === 'lesson' && F.markers(g.body).length < 3) warn('grammar[' + i + '].body has fewer than 3 [[spoken examples]]');
  });

  /* practice */
  const prac = L.practice || [];
  let items = 0;
  if (prac.length < 3 || prac.length > 8) err('practice: 3 to 8 sets, found ' + prac.length);
  prac.forEach((s, i) => {
    if (!s || !isStr(s.h) || !Array.isArray(s.items)) { err('practice[' + i + '] needs h and items'); return; }
    if (s.items.length < 4 || s.items.length > 15) err('practice[' + i + '] "' + s.h + '": 4 to 15 items, found ' + s.items.length);
    s.items.forEach((it, j) => { if (!isPair(it)) err('practice[' + i + '].items[' + j + '] must be [question, answer] or [question, answer, remark]'); });
    items += s.items.length;
  });
  if (kind === 'lesson' && items < 25) err('practice has ' + items + ' items in total; aim for 30 to 45');

  /* reading */
  let rwords = 0;
  if (!L.reading) err('reading missing');
  else {
    const R = L.reading;
    if (!isStr(R.title)) err('reading.title missing');
    if (!isStr(R.intro)) err('reading.intro missing');
    if (!isStr(R.text)) err('reading.text missing');
    else {
      rwords = words(R.text);
      if (rwords < 200 || rwords > 450) err('reading.text has ' + rwords + ' words; write 250 to 350');
      else if (rwords < 240 || rwords > 370) warn('reading.text has ' + rwords + ' words; 250 to 350 is the target');
      if (TR_CHARS.test(R.text)) err('reading.text contains Turkish letters');
      if (/[()]/.test(R.text)) warn('reading.text has parentheses; the audio reads what is inside them');
      if (!/<p>/.test(R.text)) err('reading.text must be paragraphs in <p> tags');
    }
    const gl = (R.glossary || []).length; if (gl < 6 || gl > 16) err('reading.glossary: 6 to 16 items, found ' + gl);
    (R.glossary || []).forEach((it, i) => { if (!Array.isArray(it) || it.length !== 2 || !it.every(isStr)) err('reading.glossary[' + i + '] must be [word, Turkish]'); });
    const rq = (R.questions || []).length; if (rq < 5 || rq > 12) err('reading.questions: 5 to 12 items, found ' + rq);
    (R.questions || []).forEach((it, i) => { if (!isPair(it)) err('reading.questions[' + i + '] must be [question, answer]'); });
  }

  /* extra listening */
  (L.listen || []).forEach((it, i) => {
    if (!it || !isStr(it.text) || !isStr(it.q) || !isStr(it.a)) { err('listen[' + i + '] needs text, q and a'); return; }
    const w = words(it.text); if (w < 25 || w > 160) warn('listen[' + i + '].text has ' + w + ' words (aim for 40 to 120)');
    if (TR_CHARS.test(it.text)) err('listen[' + i + '].text contains Turkish letters');
  });

  /* speaking and writing */
  if (!isStr(L.speak)) err('speak missing'); else if (L.speak.length < 300) err('speak is short; give three tasks (shadowing, a monologue with a model, a role-play)');
  if (!L.write) err('write missing');
  else {
    if (!isStr(L.write.task)) err('write.task missing');
    if (!isStr(L.write.model)) err('write.model missing');
    else {
      const mw = words(L.write.model);
      const maxModel = kind === 'exam' ? 260 : 200;   /* an exam day may hold two model answers */
      if (mw < 60 || mw > maxModel) err('write.model has ' + mw + ' words; write 90 to 130' + (kind === 'exam' ? ', or up to 250 for two exam tasks' : ''));
      if (TR_CHARS.test(L.write.model)) err('write.model contains Turkish letters: the model answer is English');
    }
    const cl = (L.write.checklist || []).length; if (cl < 3 || cl > 7) err('write.checklist: 3 to 7 items, found ' + cl);
  }

  /* quiz, can-do, tip */
  const qn = (L.quiz || []).length; if (qn < 8 || qn > 15) err('quiz: 8 to 15 items (10 is the norm), found ' + qn);
  (L.quiz || []).forEach((it, i) => { if (!isPair(it)) err('quiz[' + i + '] must be [question, answer]'); });
  const cn = (L.cando || []).length; if (cn < 3 || cn > 8) err('cando: 3 to 8 items, found ' + cn);
  if (!L.tip || !isStr(L.tip.h) || !isStr(L.tip.body)) err('tip needs h and body');
  else if (!TR_CHARS.test(L.tip.body)) err('tip.body must be in Turkish');

  /* language sanity on Turkish fields */
  [['warmup.intro', L.warmup && L.warmup.intro], ['speak', L.speak], ['write.task', L.write && L.write.task], ['reading.intro', L.reading && L.reading.intro]]
    .forEach(([where, s]) => { if (isStr(s) && !TR_CHARS.test(s)) err(where + ' has no Turkish letters: instructions are in Turkish'); });
  if (Array.isArray(L.goals) && !TR_CHARS.test(L.goals.join(' '))) err('goals must be in Turkish');
  if (Array.isArray(L.cando) && !TR_CHARS.test(L.cando.join(' '))) err('cando must be in Turkish');

  /* HTML balance, disallowed tags, placeholders, markers in the wrong place */
  F.htmlStrings(L).forEach(({ where, text }) => {
    HTML_TAGS.forEach(t => {
      const open = (text.match(new RegExp('<' + t + '(\\s[^>]*)?>', 'gi')) || []).length;
      const close = (text.match(new RegExp('</' + t + '\\s*>', 'gi')) || []).length;
      if (open !== close) err(where + ': <' + t + '> opened ' + open + ' times, closed ' + close);
    });
    if (DISALLOWED_TAG.test(text)) err(where + ' uses a tag that is not allowed (' + text.match(DISALLOWED_TAG)[1] + ')');
    if (/\[\[[^\]]*\[\[|\]\][^\[]*\]\]\]/.test(text) || (text.split('[[').length !== text.split(']]').length)) err(where + ': unbalanced [[ ]] markers');
    F.markers(text).forEach(m => {
      if (/<[a-z\/]/i.test(m.replace(/<\/?(b|i)>/gi, ''))) err(where + ': HTML other than <b> or <i> inside a [[ ]] marker: ' + m.slice(0, 40));
      if (TR_CHARS.test(m)) err(where + ': Turkish inside a [[ ]] marker: ' + m.slice(0, 40));
    });
  });
  F.escapedStrings(L).forEach(({ where, text }) => {
    if (where !== 'reading.text' && /<[a-z]+[^>]*>/i.test(text)) err(where + ' is shown as plain text, but contains an HTML tag');
    if (/\[\[/.test(text)) err(where + ' is shown as plain text, but contains a [[ ]] marker');
  });
  F.htmlStrings(L).concat(F.escapedStrings(L)).forEach(({ where, text }) => { if (PLACEHOLDER.test(text)) err(where + ' looks unfinished: ' + text.match(PLACEHOLDER)[0]); });

  return { errs, warns, stats: { spoken, vocab: vocab.length, sets: prac.length, items, rwords, quiz: qn, listen: (L.listen || []).length, kind } };
}

function main() {
  const days = process.argv.slice(2).map(Number).filter(n => n > 0);
  const files = dayFiles(days);
  if (!files.length) { console.log('no lesson files found'); process.exit(1); }
  let failed = 0; const wordsByDay = {};
  for (const file of files) {
    const r = loadDay(file);
    if (r.error) { console.log(file + '  ERROR  ' + r.error); failed++; continue; }
    const L = r.lesson;
    const { errs, warns, stats } = check(L, file);
    (L.vocab || []).forEach(v => { if (Array.isArray(v) && typeof v[0] === 'string') (wordsByDay[v[0].toLowerCase().trim()] = wordsByDay[v[0].toLowerCase().trim()] || []).push(L.day); });
    const line = file.padEnd(10) + (errs.length ? 'FAIL ' : 'ok   ') + stats.kind.padEnd(7) + ' dialogue ' + String(stats.spoken).padStart(2) + ' lines · vocab ' + String(stats.vocab).padStart(2)
      + ' · practice ' + stats.sets + ' sets/' + String(stats.items).padStart(2) + ' items · reading ' + String(stats.rwords).padStart(3) + ' words · quiz ' + stats.quiz + (stats.listen ? ' · listen ' + stats.listen : '');
    console.log(line);
    errs.forEach(e => console.log('   error: ' + e));
    warns.forEach(w => console.log('   warn:  ' + w));
    if (errs.length) failed++;
  }
  if (files.length > 1) {
    const dups = Object.entries(wordsByDay).filter(([, d]) => d.length > 1);
    if (dups.length) console.log('\nwords taught on more than one day (fine for review days, otherwise pick another word): ' + dups.map(([w, d]) => w + ' (' + d.join(', ') + ')').join('; '));
  }
  console.log('\n' + (failed ? failed + ' file(s) with errors' : 'all ' + files.length + ' file(s) ok'));
  process.exit(failed ? 1 : 0);
}
main();
