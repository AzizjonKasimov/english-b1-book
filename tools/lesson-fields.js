/* Which strings of a lesson may hold HTML and [[ ]] speaker markers, and which are shown escaped.
   Shared by check-lessons.js and extract-texts.js so both see the same fields. */
'use strict';

function pairs(list, out, where) {
  (list || []).forEach(function (it, i) {
    if (Array.isArray(it)) it.forEach(function (s, j) { if (typeof s === 'string') out.push({ where: where + '[' + i + '][' + j + ']', text: s }); });
    else if (typeof it === 'string') out.push({ where: where + '[' + i + ']', text: it });
  });
}

/* every string that the page renders as HTML (may contain tags and [[English]] markers) */
function htmlStrings(L) {
  var out = [];
  function add(where, s) { if (typeof s === 'string') out.push({ where: where, text: s }); }
  (L.goals || []).forEach(function (g, i) { add('goals[' + i + ']', g); });
  if (L.warmup) { add('warmup.intro', L.warmup.intro); pairs(L.warmup.items, out, 'warmup.items'); }
  if (L.dialogue) { add('dialogue.scene', L.dialogue.scene); add('dialogue.note', L.dialogue.note); pairs(L.dialogue.questions, out, 'dialogue.questions'); }
  (L.grammar || []).forEach(function (g, i) { add('grammar[' + i + '].h', g.h); add('grammar[' + i + '].body', g.body); });
  (L.practice || []).forEach(function (s, i) { add('practice[' + i + '].h', s.h); add('practice[' + i + '].note', s.note); pairs(s.items, out, 'practice[' + i + '].items'); });
  if (L.reading) { add('reading.intro', L.reading.intro); pairs(L.reading.questions, out, 'reading.questions'); }
  (L.listen || []).forEach(function (it, i) { add('listen[' + i + '].q', it.q); add('listen[' + i + '].a', it.a); });
  add('speak', L.speak);
  if (L.write) { add('write.task', L.write.task); add('write.model', L.write.model); pairs(L.write.checklist, out, 'write.checklist'); }
  pairs(L.quiz, out, 'quiz');
  pairs(L.cando, out, 'cando');
  if (L.tip) { add('tip.h', L.tip.h); add('tip.body', L.tip.body); }
  return out;
}

/* every string the page escapes: no tags, no markers allowed */
function escapedStrings(L) {
  var out = [];
  function add(where, s) { if (typeof s === 'string') out.push({ where: where, text: s }); }
  add('title', L.title); add('tr', L.tr);
  if (L.dialogue) { add('dialogue.title', L.dialogue.title); pairs(L.dialogue.lines, out, 'dialogue.lines'); }
  pairs(L.vocab, out, 'vocab');
  if (L.reading) { add('reading.title', L.reading.title); add('reading.text', L.reading.text); pairs(L.reading.glossary, out, 'reading.glossary'); }
  (L.listen || []).forEach(function (it, i) { add('listen[' + i + '].text', it.text); });
  return out;
}

/* the [[English]] markers inside a string */
function markers(s) {
  var out = [], re = /\[\[([^\[\]]+?)\]\]/g, m;
  while ((m = re.exec(s))) out.push(m[1]);
  return out;
}

module.exports = { htmlStrings: htmlStrings, escapedStrings: escapedStrings, markers: markers };
