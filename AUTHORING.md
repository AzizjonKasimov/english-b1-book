# Authoring guide: 30 Günde İngilizce (A2 → B1, 5 hours a day)

This file is the contract for every lesson file in `data/`. Read it fully before writing or changing a day, then read `data/day01.js`, which follows it exactly. Check your work with `node tools/check-lessons.js NN` until it prints `ok`.

## Who the book is for

- A Turkish speaker at CEFR A2 who wants to reach B1 in 30 days, studying **5 hours a day** (300 minutes of focused work, plus breaks that are not counted). An adult, self-studying, with no teacher.
- Explanations are in Turkish. Everything the learner must understand or produce is in English. Every English example is recorded, so the learner hears it.
- By day 30 the learner has met all B1 grammar, about 900 new words and chunks, 30 dialogues, 30 readings, 30 writing tasks, and a B1 exam rehearsal (Cambridge B1 Preliminary format).

## Language policy

- **Turkish** for explanations, instructions, notes, goals, can-do statements and tips. Address the learner as *sen*, warmly and directly, in short plain sentences. Explain each grammar term once per day in Turkish; after that use the English name in italics (`<i>present perfect</i>`).
- **English** for dialogue lines, vocabulary, example sentences, reading texts, listening texts and model answers. Natural, contemporary, B1-level English. British spelling (colour, organise, travelling, flat, lift), with the American word noted in the Turkish meaning when it is common: `"lift (AmE: elevator)"`.
- Comprehension questions (dialogue, reading, listening) and their answers are in **simple English**: answering them is practice. Exercise instructions (`note`) are Turkish; items may be English (gap-fill, error correction) or Turkish (translation).
- **Every English sentence in a Turkish explanation gets a Turkish translation** right after it: `[[She has lived here since 2019.]] – 2019'dan beri burada yaşıyor.` Wrap the English in `[[ ]]`: the page renders it as a speaker button followed by the sentence, and the audio pipeline records it. Use `[[ ]]` for every English sentence in grammar bodies, tips, speaking and writing tasks, the model answers of translation and transformation exercises, and quiz answers. Not for gap-fill prompts (nothing to say). Inside the brackets only English, with `<b>` or `<i>` allowed to highlight the changed part of an answer (`[[She <b>has lived</b> here since 2019.]]`); never Turkish or any other HTML.
- Turkish place and person names inside English text use plain letters where English does (Izmir, Istanbul, Ankara); first names keep their spelling (Elif, Mert, Zeynep).
- Quotes inside strings: curly “ ” for quotes, straight ' for apostrophes (it's, don't, London'da, 2019'dan). Never a straight double quote inside a string (it would end the JavaScript string).
- Dashes: ` – ` (en dash with spaces) between an English example and its Turkish translation.
- Never invent facts about real companies, prices or laws; keep readings generic or clearly fictional (the cast's lives).

## Turkish grammar terms (use exactly these)

| English | Turkish |
|---|---|
| tense | zaman |
| verb / noun / adjective / adverb | fiil / isim / sıfat / zarf |
| pronoun / preposition / conjunction | zamir / edat / bağlaç |
| article (a, an, the) | tanımlık (a/an/the) |
| subject / object | özne / nesne |
| auxiliary verb / main verb | yardımcı fiil / ana fiil |
| infinitive / gerund (-ing form) | mastar (to + fiil) / -ing hali |
| past simple form (V2) / past participle (V3) | ikinci hal (V2) / üçüncü hal (V3) |
| regular / irregular verb | düzenli / düzensiz fiil |
| countable / uncountable noun | sayılabilen / sayılamayan isim |
| singular / plural | tekil / çoğul |
| affirmative / negative / question | olumlu / olumsuz / soru |
| statement / word order | düz cümle / sözcük dizilişi |
| clause / main clause | yan cümle / ana cümle |
| modal verb | modal (kiplik) fiil |
| conditional sentence | koşul cümlesi |
| passive / active | edilgen / etken |
| reported speech | dolaylı anlatım |
| relative clause | ilgi cümleciği (relative clause) |
| phrasal verb | phrasal verb (deyimsel fiil) |
| collocation / chunk | eşdizim (collocation) / kalıp |
| comparative / superlative | karşılaştırma / en üstünlük derecesi |
| stress / intonation / syllable | vurgu / tonlama / hece |
| formal / informal | resmi / samimi |
| native speaker | ana dili İngilizce olan kişi |

Tense names stay in English (present simple, past continuous, present perfect), with a Turkish gloss the first time each day: *present perfect* (yakın geçmiş).

## The day: 300 minutes

| Minutes | Section | Key | What the learner does | Content |
|---|---|---|---|---|
| 15 | Isınma · Warm-up | `warmup` | recalls yesterday aloud, reveals model answers | 8–10 quick items that recycle the previous days |
| 45 | Dinleme ve diyalog · Listening | `dialogue` | listens without reading, reads along, answers, shadows | 12–18 spoken lines, 4–6 comprehension questions, a note on 3–4 useful chunks |
| 45 | Kelimeler · Vocabulary | `vocab` | hears and repeats each word and example, self-tests | 30–36 items with an example sentence each |
| 60 | Dilbilgisi · Grammar | `grammar` | reads the rule, says every example, compares with Turkish | 2–3 blocks, each with a table, 4–8 spoken examples, a comparison with Turkish, a Dikkat box |
| 45 | Alıştırmalar · Practice | `practice` | writes answers by hand, reveals, scores | 4–6 sets, 30–45 items in total |
| 40 | Okuma · Reading | `reading` | reads for gist, then in detail, then aloud with the audio | 250–350 words, glossary 8–12, questions 6–8 |
| 20 | Konuşma · Speaking | `speak` | shadows, speaks a monologue, plays a role | 3 tasks, with a spoken model |
| 20 | Yazma · Writing | `write` | writes 90–120 words, compares with the model, checks | 1 B1 task with a model answer and a checklist |
| 10 | Günün sınavı · Day quiz | `quiz` | answers 10 quick items from memory | 10 items |

Breaks: 10 minutes after each hour, not counted. The learner marks the day as done at the end; the "Artık yapabiliyorum" (`cando`) list closes the day, and the `tip` sits above it.

Override the minutes with `mins` only when the day's shape differs (review and exam days); the present sections must add up to 300.

## Data format

Each file `data/dayNN.js` (two digits: `day01.js` … `day30.js`) pushes exactly one object:

```js
window.LESSONS = window.LESSONS || [];
window.LESSONS.push({
  day: 9,
  kind: "lesson",                      // "lesson" (default, may be omitted), "review" (days 7, 14, 21, 28) or "exam" (29, 30)
  title: "How long have you…?",        // English, on the blue plate
  tr: "Ne kadar zamandır? for / since", // Turkish subtitle
  goals: ["…"],                        // 4–5 Turkish items; HTML and [[ ]] allowed
  mins: {warmup:15, dialogue:45, …},   // optional overrides; keys: warmup dialogue vocab grammar practice reading listen speak write quiz
  labels: {grammar: ["Grammar review", "Dilbilgisi tekrarı"]},   // optional [English, Turkish] renames per section

  warmup: { intro: "Turkish", items: [["prompt", "answer", "optional note"]] },

  dialogue: {
    title: "English title", scene: "Turkish: who, where, what is happening",
    lines: [["Elif", "English line", "Türkçe çevirisi"], ["", "Later, at home", "Daha sonra, evde"]],   // empty speaker = narration (not spoken)
    note: "Turkish: 3–4 chunks worth stealing from the dialogue, with their meaning",
    questions: [["English question", "English answer"]]
  },

  vocab: [["word or chunk", "Türkçe anlamı (kısa not)", "English example sentence, 6–14 words.", "Örnek cümlenin Türkçesi."]],

  grammar: [{ h: "Heading (may mix English and Turkish)", body: "<p>Turkish HTML …</p>" }],

  practice: [{ h: "A. Başlık", note: "Turkish instruction", items: [["question", "answer", "optional remark"]] }],

  reading: {
    title: "English title", intro: "Turkish: what kind of text, how to read it, the gist question",
    text: "<p>English paragraph.</p><p>…</p>",          // 250–350 words, only <p> tags; recorded as one clip
    glossary: [["word or phrase", "Türkçesi"]],        // 8–12 words that are in the text but not in today's vocab
    questions: [["English question", "English answer"]]  // 6–8: true/false with the reason, short answers, one "find a word that means …"
  },

  listen: [{ text: "English monologue or announcement, 40–120 words", q: "question", a: "answer" }],   // optional extra listening (review and exam days); set mins.listen

  speak: "<p>Turkish HTML: three tasks</p>",
  write: { task: "<p>Turkish HTML</p>", model: "<p>English, 90–130 words</p>", checklist: ["Turkish check item"] },

  quiz: [["question", "answer"]],      // 10 items
  cando: ["Turkish can-do statement"],  // 4–6
  tip: { h: "Turkish heading", body: "<p>Turkish HTML, 120–200 words</p>" }
});
```

### Which strings may hold HTML

- **HTML and `[[ ]]` allowed:** goals, warmup intro and items, dialogue scene, note and questions, grammar headings and bodies, practice headings, notes and items, reading intro and questions, listen questions and answers, speak, write task, model and checklist, quiz items, cando, tip.
- **Plain text (escaped, no tags, no markers):** title, tr, dialogue title and lines, vocab (all four fields), reading title, glossary and text (the text takes `<p>` tags only), listen text.
- Allowed tags: `p b i u em strong br ul ol li table tr th td div span mark h4 small a`. Attributes use single quotes: `class='tbl'`.
- Tables: `<div class='scroll'><table class='tbl'><tr><th>…</th></tr><tr><td class='k'>…</td><td>…</td></tr></table></div>`; `class='k'` marks the key column.
- Boxes: `<div class='rule'><b>Dikkat:</b> …</div>` for a warning or rule; `<h4>Türkçe ile karşılaştır</h4>` for the comparison paragraph; `<span class='hl'>` for a light inline highlight; `<mark>` for a strong one.

## Section rules

**Warm-up.** 8–10 items: translate a sentence into English (answer in `[[ ]]`), answer a question, correct a typical error, name five words of a field, say a chunk. At least half recycle the previous day; the rest reach further back. The intro says what today's warm-up recycles.

**Dialogue.** A realistic scene with the cast, 12–18 spoken lines of 6–20 words, natural speech (contractions, short answers, *well*, *actually*, *right*). The day's grammar appears naturally at least five times. One or two narration lines may split the scene (`["", "Later, in the kitchen", "Daha sonra, mutfakta"]`). The Turkish translation of each line is natural Turkish, not word for word. Four to six English questions test understanding, not memory of exact words. The `note` names three or four chunks from the dialogue worth memorising, in Turkish, each in `<b>bold</b>`.

**Vocabulary.** 30–36 items: words and collocations from the day's field, plus 4–6 chunks from the dialogue. Form rules: nouns as bare words (add *a* only when the chunk needs it: *a sense of humour*); verbs in the base form with their preposition (*apply for*); phrasal verbs with a placeholder object where the object goes in the middle (*pick sb up*, *turn sth off*); adjectives with their dependent preposition (*interested in*). Turkish meaning: short, with a usage note in parentheses when it saves a mistake. Example sentence: one natural B1 sentence of 6–14 words that shows the word in use (not a definition), with a natural Turkish translation. No word repeats within the book except on review days; `check-lessons.js` lists repeats across days.

**Grammar.** 2–3 blocks of about 60 minutes together. Each block: the rule in plain Turkish (what it means, when to use it); a form table (olumlu / olumsuz / soru) where there is a form to learn; 4–8 examples in `[[ ]]` with translations, each showing a different use; a `<h4>Türkçe ile karşılaştır</h4>` paragraph that names the error Turkish speakers make here and how to avoid it; a `<div class='rule'>` Dikkat box with the one thing to remember. Do not teach grammar the syllabus puts on a later day beyond a one-line "bunu X. günde göreceksin".

**Practice.** 4–6 sets, 30–45 items in total, with the day's grammar and vocabulary. Rotate these types and name the set after the type: gap-fill with the verb in brackets · choose the right option · rewrite (negative, question, other tense, passive) · find and correct the mistake (typical Turkish-speaker errors) · translate into English (Türkçeden İngilizceye) · build the sentence from prompts (`I / not / see / him / since / May`) · collocation or preposition choice · complete the mini-dialogue. Every day has one translation set and one error-correction set. Answers show the full sentence, in `[[ ]]`, with the changed part in `<b>` where helpful; a third element gives a short Turkish remark when an answer needs one (why, or an alternative).

**Reading.** An original text of 250–350 words at B1: a blog post, email, article, story, advert, interview or review, tied to the cast or the day's theme, recycling the day's words. The Turkish intro says what kind of text it is, sets a two-minute gist question, and tells the learner to read three times (gist, detail with the glossary, aloud with the audio). Glossary: 8–12 words or phrases from the text that are not in today's vocab. Questions: 6–8 in English: two or three true/false (answer `True.`/`False.` plus the reason), three or four short-answer, one *Find a word in the text that means …*.

**Speaking.** Three tasks in Turkish, about 20 minutes: (1) shadow the dialogue, with the Elif (or another) role taken over on the third pass; (2) a one-minute monologue on the day's theme with 4–5 guiding questions in English and a spoken model of 5–6 `[[ ]]` sentences; (3) a role-play that changes one thing in the dialogue's situation. Tell the learner to record on the phone and listen once.

**Writing.** One B1 task type: informal email or message, story, review, article, opinion paragraph or short essay, formal email or complaint, description, report of a conversation. 90–120 words, with 3–4 content points in a list, a given opening line where useful. The model answer is 90–130 words of good B1 English that uses the day's grammar and 5–8 of the day's words. The checklist has 4–5 Turkish checks (the target grammar, linking, articles, the task's content points, length).

**Quiz.** 10 short items from memory: 4 vocabulary (Turkish → English or the reverse), 4 grammar (a gap, a transformation, an error), 2 translations. Answers in `[[ ]]` where they are English sentences.

**Can-do.** 4–6 concrete Turkish statements starting with a verb phrase the learner can tick: "geçmişte yaşadığım bir olayı sırasıyla anlatabilirim".

**Tip.** 120–200 words in Turkish on a learning strategy (how to use the audio, error notebook, spaced review, shadowing, reading aloud, exam strategy) or on English-speaking culture and pragmatics (politeness, small talk, email manners, British vs American English). Heading in Turkish.

## Review days (7, 14, 21, 28)

`kind: "review"`. Rename the sections and reshape the minutes, for example:

```js
labels: { warmup: ["Quick recall", "Hızlı hatırlama"], dialogue: ["The story so far", "Haftanın diyaloğu"], vocab: ["Words of the week", "Haftanın kelimeleri"],
          grammar: ["Grammar review", "Dilbilgisi tekrarı"], practice: ["Mini test", "Mini sınav"], listen: ["Listening test", "Dinleme sınavı"], quiz: ["Final check", "Son kontrol"] },
mins: { warmup: 15, dialogue: 35, vocab: 40, grammar: 40, practice: 70, reading: 30, listen: 20, speak: 20, write: 20, quiz: 10 }
```

- Warm-up: 10 items across the whole week. Dialogue: 14–18 lines that bring the week's grammar together in one scene. Vocab: 30–36 of the week's hardest words with **new** example sentences (repeats are expected here). Grammar: 2–3 compact review blocks with summary tables and a "haftanın hataları" list. Practice = the mini test: 5–6 sets, 50–60 items (gap-fill, choose, error correction, translation, vocabulary), and the last set's `note` gives the scoring guide (50+: hazırsın; 40–49: hatalarını bir daha çalış; 40'ın altı: haftanın iki gününü yeniden yap). Reading: a text that recycles the week's words. `listen`: 3 items of 50–100 words with a question each. Writing: a 100–120-word task combining the week's grammar. Quiz: 10. Tip: how to review.
- Read `node tools/lesson-summary.js 1-6` (the week's days) before writing, and test only what those days taught.

## Exam days (29, 30)

`kind: "exam"`. Day 29 rehearses the B1 Preliminary format with original material: Reading (three short parts: multiple choice on signs and messages, matching people to texts, a gapped text), Listening (`listen`: 4 items), Writing (an email of about 100 words and a story of about 100 words with a given first line, both with model answers), Speaking (the four parts with model answers). Day 30 is the final test and the way forward: a 60-item test across the whole book with a scoring guide, a reading, 3 listening items, a writing task, a B1 can-do self-assessment (the CEFR B1 descriptors in Turkish as the `cando` list), and a tip on how to continue toward B2. Both days keep every required field except `dialogue`, which is optional on exam days; use `labels` and `mins` to fit the shape. On exam days `write.model` may hold two model answers (up to 250 words in total).

## The cast

The dialogues follow the same people, so situations build on each other.

- **Elif Kaya**, 27, from Izmir. Moved to London one month before day 1; day 1 is her first day as a junior marketing specialist at Brightside, a small marketing agency. Lives in a shared flat in Camden. Hard-working, a little shy, loves tea and walking. The 30 days are a loose timeline over her first year in London: later days may be weeks or months later, but nothing contradicts an earlier day.
- **James Walker**, 30, Elif's flatmate, a nurse at a big hospital, from Leeds. Easy-going, direct, casual British English, works shifts.
- **Priya Shah**, 34, Elif's manager at Brightside. Patient, organised, gives clear instructions.
- **Daniel**, 38, designer at Brightside, from Manchester. Talkative, funny, not a morning person.
- **Tom Reyes**, 26, American from Chicago, a master's student in London. Elif's friend from a language exchange; says *apartment* and *elevator*.
- **Mrs Taylor**, 68, the landlady, lives downstairs. Kind but particular about the rules.
- **Mert Kaya**, 24, Elif's cousin, receptionist at a hotel in Antalya, speaks English with guests all day; appears in calls and messages.
- **Zeynep**, Elif's mother in Izmir, on video calls (speaks Turkish, so her lines are rare and simple).
- Walk-on roles (Doctor, Receptionist, Shop assistant, Waiter, Bank clerk, Interviewer, Announcer, Customer, Neighbour, Driver …) are listed in `data/voices.js`; add a new name there if a day needs one, with a voice tag.

## Syllabus

Weeks: 1 Günlük hayat (days 1–7) · 2 Deneyimler, kurallar, olasılıklar (8–14) · 3 İletişim (15–21) · 4 B1'e doğru (22–30).

| Day | Title · Turkish | Grammar | Vocabulary field | Reading | Writing | Tip |
|---|---|---|---|---|---|---|
| 1 | Nice to meet you! · Tanışma, küçük sohbet ve günlük rutin | present simple vs continuous, stative verbs, question word order, adverbs of frequency | daily routine, work, personality | Elif's blog: first month in London | email introducing yourself to a colleague | how to use the 5 hours |
| 2 | Last weekend · Geçmiş zaman: past simple | past simple regular/irregular, negatives, questions, time expressions (ago, last, in 2019), -ed pronunciation | life events, weekend activities, time expressions | How James became a nurse | what you did last weekend | learning irregular verbs in groups |
| 3 | What were you doing? · Past continuous | past continuous vs past simple, when/while/as, used to | feelings and reactions, accidents and incidents, weather words | A strange day in the city (anecdote) | an anecdote: a day everything went wrong | shadowing |
| 4 | Plans and predictions · Gelecek: will, going to, present continuous | will vs going to vs present continuous for arrangements; present simple for timetables; I think/hope + will | jobs and work, plans, calendar and appointments | Tom's plan for next year / the office of the future | your plans for next year | Turkish -ecek vs the three futures |
| 5 | How much is it? · Sayılabilen, sayılamayan, a/an/the | countable/uncountable; some/any/no; much/many/a lot of/a few/a little/too much; a/an/the/zero article basics | food, shopping, containers, money | Shopping in London: markets vs supermarkets | describe a traditional Turkish dish | articles: the three questions |
| 6 | Bigger, better, cheaper · Karşılaştırma | comparatives/superlatives incl. irregular, as…as, not as…as, too/enough, the same as/different from | cities, housing, describing places, adjectives | Izmir and London: two cities | compare two places you know | British vs American words |
| 7 | Review 1 · Haftanın tekrarı ve mini sınav | review of days 1–6 | the week's words | a text recycling the week | 100 words mixing the tenses | spaced review |
| 8 | Have you ever…? · Present perfect (1) | present perfect form; ever/never/just/already/yet; vs past simple (finished time) | experiences, travel, achievements | Tom's travel blog: things I have done in London | email to a friend about what you've done in a city | Turkish -dım/-mışım vs present perfect |
| 9 | How long have you…? · Present perfect (2): for, since | for/since, how long, present perfect continuous (basic), been vs gone | hobbies, skills, learning, sport | The man who learned ten languages | something you have been doing for a long time | do/make/play/go collocations |
| 10 | You should see a doctor · Zorunluluk ve tavsiye | must/have to/don't have to/mustn't/should/shouldn't/ought to/had better/need to | health, body, at the doctor's, rules at work | Staying healthy in a new country | advice email to a friend moving abroad | -meli/-malı vs must and have to |
| 11 | It might rain · Olasılık ve çıkarım | may/might/could (possibility), must/can't (deduction), be able to, probably/definitely | weather, nature, environment | Why is British weather so changeable? | your city in 20 years (will/might) | softeners and hedging |
| 12 | If you need help, call me · Koşul (1) ve zaman cümleleri | zero and first conditional; when/as soon as/until/before/after/unless + present; imperatives | money, banking, bills, problems and solutions, phone | How to open a bank account | a message giving conditions | if + will trap, -se/-sa |
| 13 | What would you do? · Koşul (2) ve dilekler | second conditional; would/could; I wish + past; If I were you | dreams, lifestyle, life choices, housing | Elif's big decision (interviews) | What would you do if…? | advice with If I were you |
| 14 | Review 2 · Mini sınav | review of days 8–13 | the week's words | | email combining the week | midpoint self-assessment |
| 15 | I enjoy going out · Fiil kalıpları: -ing mi, to mu? | verb + -ing, verb + to, both with a change of meaning (remember/forget/stop), preposition + -ing, adjective + to | free time, entertainment, cinema, music, going out | a film review | a review of a film or series | the 30 verb patterns to memorise |
| 16 | The app that changed my life · İlgi cümlecikleri | defining relative clauses who/which/that/where/whose/when; omitting the pronoun; non-defining in brief | technology, phones, apps, online life | Five apps that make life in a new city easier | describe a person, place and thing with relatives | Turkish -en/-an vs relative clauses |
| 17 | It was built in 1894 · Edilgen çatı | present and past simple passive; by; passive with modals; when the passive is used | products, processes, materials, buildings, news | How tea is made / Tower Bridge | describe a process or a famous place | Turkish -il/-in vs the passive |
| 18 | She said she was busy · Dolaylı anlatım | say vs tell; reported statements (backshift), questions (if/whether, word order), commands and requests | communication, phone calls, messages, meetings, reporting verbs | The message that went wrong (story) | report a conversation | dedi ki vs backshift |
| 19 | Turn it off and pick it up · Phrasal verbs | separable/inseparable, pronoun position, 30 high-frequency phrasal verbs, get expressions | phrasal verbs for daily life and relationships | A day in phrasal verbs (Elif's diary) | informal message with eight phrasal verbs | learn phrasal verbs by situation |
| 20 | Could you tell me where…? · Kibar İngilizce | indirect questions, question tags, polite requests (Would you mind…?), too/either/so/neither | services, customer service, complaints, shops, returns, hotel | a complaint email and the reply | a polite complaint email | please is not enough: softeners |
| 21 | Review 3 · Mini sınav | review of days 15–20 | the week's words | | | the 4-3-2 fluency drill |
| 22 | By the time we arrived… · Past perfect ve hikâye anlatımı | past perfect; after/before/by the time/as soon as; narrative tenses together; used to/would; story linkers | stories, mystery, emotions, travel mishaps | The wrong suitcase (short story) | a story with a given first line | -mişti = past perfect |
| 23 | The, a, or nothing? · Tanımlıklar ve belirteçler | articles with places, meals, institutions, generalisations; each/every/all/both/either/neither/none; another/other; so/such | education, exams, university, courses | Learning English: classroom or online? | opinion paragraph: studying abroad | the article decision table |
| 24 | Although it was hard… · Bağlaçlar ve paragraf yazma | although/even though/however/despite/in spite of; because of/so/therefore; in order to/so that; both…and, not only…but also; paragraph structure | work, careers, job interviews, skills, applications | a job advert and how to prepare for the interview | a short cover letter or your ideal job | the B1 writing rubric |
| 25 | I'm interested in… · Edatlar ve -ed/-ing sıfatlar | adjective + preposition, verb + preposition, look forward to + -ing, -ed vs -ing adjectives, make/let/be allowed to | feelings, relationships, friendship, family (adult) | What makes a good friend? | describe a friend and why you get on | dependent prepositions as chunks |
| 26 | In my opinion… · Fikir belirtme ve tartışma | opinion, agreeing, disagreeing; so/neither do I; gradable adverbs (quite, rather, pretty, a bit); would rather/prefer | media, news, social media, society | Should phones be banned in schools? (two opinions) | a for-and-against essay | PREP: a one-minute spoken opinion |
| 27 | Getting around · Seyahat ve zamanların özeti | mixed tense review in travel situations; be able to/manage to/could; so that/in case; directions and prepositions of movement | airport, hotel, transport, tickets, travel problems, directions | Elif's weekend in Edinburgh | email to a hotel or about a trip | survival listening at stations |
| 28 | Review 4 · Kitabın tekrarı ve mini sınav | the whole book | hardest words of the book | | | self-assessing B1 |
| 29 | Exam practice · B1 Preliminary provası | exam strategies | key exam vocabulary | Reading parts 1–3 | email and story | exam day tips |
| 30 | Final test and what next · Son sınav ve devamı | the whole book | | | | from B1 to B2 |

## Process for an author

1. Read this file, `data/day01.js` and the syllabus row(s) for your days. Run `node tools/lesson-summary.js` to see the words the finished days already teach (and, for a review day, what its week taught); don't repeat those words.
2. Write `data/dayNN.js` for each of your days, nothing else. Do not edit other files; if a speaker is missing from `data/voices.js`, use a listed one instead and say so in your report. A lesson is about 40 KB, so write it in two or three parts: Write the first part ending in a marker comment line such as `/*__PART2__*/`, then Edit the marker into the next part, and close the file with `});` at the end.
3. Run `node tools/check-lessons.js NN` and fix every error and warning until it prints `ok` for your file. Then run `node tools/check-lessons.js` once for all days and, if it lists a repeated word that involves your days, replace your word (not the other day's). Ignore errors in other days' files: other authors may be writing them at the same time.
4. Report in five lines: the files written, their counts (the tool's summary lines), and anything you left out or were unsure of.
