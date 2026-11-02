/* Shared between the page (browser) and the tools (node): which voice speaks which line,
   how a content string becomes spoken text, and how a text is keyed to its audio clip. */
(function (root) {
  var V = {
    /* voice tags used in the page -> Microsoft Edge neural voices used at generation time.
       A mix of British and American voices on purpose: a B1 learner must understand both. */
    voices: {
      f1: 'en-GB-SoniaNeural', f2: 'en-US-JennyNeural', f3: 'en-GB-LibbyNeural',
      m1: 'en-GB-RyanNeural', m2: 'en-US-AndrewNeural', m3: 'en-GB-ThomasNeural'
    },
    rates: { dialogue: '-8%', vocab: '+0%', reading: '-5%', listen: '-5%' },
    /* extra listening items rotate through these; the reading text alternates by day */
    LISTEN_VOICES: ['m1', 'f3', 'm2', 'f1', 'm3', 'f2'],
    READING_VOICES: ['m2', 'f1'],
    /* the recurring cast and the usual walk-on roles */
    speakers: {
      'Elif': 'f1', 'Priya': 'f3', 'Mrs Taylor': 'f3', 'Mrs. Taylor': 'f3', 'Aylin': 'f1', 'Sarah': 'f2',
      'Emma': 'f2', 'Lucy': 'f3', 'Hannah': 'f2', 'Zeynep': 'f1', 'Mum': 'f3', 'Mother': 'f3',
      'James': 'm1', 'Tom': 'm2', 'Mert': 'm3', 'Daniel': 'm3', 'Mr Patel': 'm1', 'Mr. Patel': 'm1',
      'Ben': 'm2', 'Oliver': 'm1', 'Dad': 'm1', 'Father': 'm1',
      'Receptionist': 'f3', 'Shop assistant': 'f2', 'Assistant': 'f2', 'Waiter': 'm3', 'Waitress': 'f3',
      'Doctor': 'm1', 'Nurse': 'f2', 'Pharmacist': 'f3', 'Dentist': 'm2', 'Teacher': 'f1', 'Tutor': 'f1',
      'Interviewer': 'm2', 'Announcer': 'f2', 'Announcement': 'f2', 'Voice': 'f2', 'Recording': 'f2',
      'Customer': 'm3', 'Neighbour': 'f3', 'Driver': 'm1', 'Bank clerk': 'm3', 'Clerk': 'm3',
      'Landlady': 'f3', 'Landlord': 'm1', 'Manager': 'm1', 'Boss': 'm1', 'Colleague': 'm2', 'Friend': 'f2',
      'Guest': 'm2', 'Tourist': 'f2', 'Police officer': 'm1', 'Officer': 'm1', 'Presenter': 'm2',
      'Host': 'f2', 'Student': 'm3', 'Woman': 'f3', 'Man': 'm3', 'Agent': 'm1', 'Operator': 'f3',
      'Librarian': 'f3', 'Caller': 'm2', 'Examiner': 'm1', 'Candidate': 'f1', 'Reporter': 'f2'
    },
    voiceFor: function (who) {
      if (!who) return 'f2';
      who = String(who).replace(/\s*\(.*\)\s*$/, '');   /* "Tom (on the phone)" -> "Tom" */
      if (V.speakers[who]) return V.speakers[who];
      return /^(Mrs|Ms|Miss|Woman|Girl|Lady|Mother|Mum|Aunt|Grandma|Sister|Daughter|Wife|Queen)\b|a$|e$/.test(who) ? 'f3' : 'm3';
    },
    /* the plain text that is spoken for a content string: tags and [[ ]] markers removed, entities decoded */
    ttsText: function (s) {
      return String(s || '')
        .replace(/<br\s*\/?>/gi, ' ')
        .replace(/<\/(p|li|tr|div|h[1-6])>/gi, ' ')
        .replace(/<[^>]+>/g, '')
        .replace(/\[\[|\]\]/g, '')
        .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
        .replace(/&#39;|&apos;/g, "'").replace(/&nbsp;/g, ' ').replace(/&hellip;/g, '')
        .replace(/…/g, '')
        /* dictionary shorthand is read as words, and notes such as (AmE: …) or (+ -ing) are not read */
        .replace(/\bsb\b/g, 'somebody').replace(/\bsth\b/g, 'something')
        .replace(/\((?:AmE|BrE|\+)[^)]*\)/g, '')
        .replace(/[()]/g, '')
        .replace(/\s*\/\s*/g, ', ')
        .replace(/\s{2,}/g, ' ')
        .replace(/\s+,/g, ',')
        .replace(/([?!.]),/g, '$1')
        .replace(/,\s*$/, '')
        .trim();
    },
    verbText: function (v) { return v[0] + ', ' + v[1] + ', ' + v[2]; },
    /* FNV-1a 32-bit over voice|text; identical in node and the browser */
    key: function (voiceTag, text) {
      var s = voiceTag + '|' + text, h = 0x811c9dc5;
      for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
      return ('0000000' + h.toString(16)).slice(-8);
    }
  };
  root.VOICES = V;
  if (typeof module !== 'undefined' && module.exports) module.exports = V;
})(typeof window !== 'undefined' ? window : globalThis);
