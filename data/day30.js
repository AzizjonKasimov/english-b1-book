window.LESSONS = window.LESSONS || [];
window.LESSONS.push(
/* ===================== DAY 30 ===================== */
{
  day: 30,
  kind: "exam",
  title: "Final test and what next",
  tr: "Son sınav ve devamı",
  goals: [
    "kitabın bütün dilbilgisini 60 soruluk son sınavla ölçmek ve hangi konuları tekrar etmen gerektiğini bulmak",
    "B1 düzeyinde bir makaleyi okuyup üç kaydı dinleyerek anladığını göstermek",
    "otuz gününü anlatan 100–120 kelimelik bir e-posta yazmak ve iki dakika boyunca neler öğrendiğini anlatmak",
    "Diller için Avrupa Ortak Başvuru Metni'nin (CEFR) B1 tanımlarıyla kendini dürüstçe değerlendirmek",
    "B2'ye doğru gerçekçi bir çalışma planı kurmak ve yolda işine yarayacak 30 kelime ve kalıp öğrenmek"
  ],
  mins: { warmup: 10, dialogue: 20, vocab: 30, grammar: 25, practice: 90, reading: 30, listen: 20, speak: 30, write: 35, quiz: 10 },
  labels: {
    dialogue: ["One year in London", "Londra'da bir yıl"],
    vocab: ["Words for the road", "Yol için kelimeler"],
    grammar: ["How to keep improving", "Nasıl ilerlemeye devam edersin?"],
    practice: ["Final test", "Son sınav"],
    reading: ["Final reading", "Son okuma"],
    listen: ["Listening test", "Dinleme sınavı"],
    speak: ["Speaking: looking back", "Konuşma: geriye bakış"],
    write: ["Writing: an email to Elif", "Yazma: Elif'e e-posta"],
    quiz: ["Last quiz", "Son kontrol"]
  },
  warmup: {
    intro: "Son gün! Isınma, dünkü sınav provasını hatırlatıyor: sınavın yapısı, okuma ve konuşma stratejileri ve sınav kalıpları. İki soru da kitabın en inatçı hatalarına uzanıyor. Her soruyu sesli cevapla, sonra cevabı aç. Bugün seni 60 soruluk son sınav bekliyor; ısınmayı hızlı geç ama atlama.",
    items: [
      ["İngilizcesi: deneme sınavı", "mock test"],
      ["Ana fikir için hızlıca okumaya ne denir? Belirli bir bilgiyi bulmak için metni taramaya?", "skim · scan"],
      ["B1 Preliminary'nin dört kâğıdını İngilizce say.", "Reading, Writing, Listening, Speaking"],
      ["Konuşma sınavında soruyu anlamadın. Ne dersin?", "[[Could you repeat the question, please?]]", "<i>Sorry, I didn't catch that.</i> da olur."],
      ["Fotoğrafı anlat: Ön planda bisikletli bir adam var.", "[[In the foreground, there's a man with a bike.]]"],
      ["Partnerine söyle: Yemek kursunu seçelim.", "[[Let's go with the cooking class.]]", "<i>Shall we choose the cooking class?</i> da olur."],
      ["Adını bilmediğin bir eşyayı anlat: <i>tirbuşon</i>", "[[I don't know the word, but it's a thing you use for opening bottles of wine.]]"],
      ["Hatayı bul ve düzelt: <i>I have finished the course last week.</i>", "[[I finished the course last week.]]", "last week bitmiş bir zaman: <i>past simple</i> (8. gün)."],
      ["Hatayı bul ve düzelt: <i>She explained me the rules.</i>", "[[She explained the rules to me.]]", "explain + şey + to + kişi (18. gün)."],
      ["Samimi bir e-postanın sonuna ne yazarsın? Bir kalıp söyle.", "[[Write back soon.]]", "<i>Hope to hear from you soon.</i> ya da <i>Love,</i> da olur."]
    ]
  },
  dialogue: {
    title: "One year later",
    scene: "Elif'in Londra'daki ilk yılı doldu. Yağmurlu bir pazar öğleden sonrası; Camden'daki dairede James ve Tom'la çay içiyorlar. Elif cuma günü Priya'yla bir görüşme yaptı ve paylaşmak istediği bir haberi var.",
    lines: [
      ["James", "Right, you've been smiling all weekend. What's going on?", "Pekâlâ, bütün hafta sonu gülümseyip durdun. Neler oluyor?"],
      ["Elif", "Well, Priya asked to see me on Friday afternoon. At first I thought I'd done something wrong.", "Şey, Priya cuma öğleden sonra benimle görüşmek istedi. İlk başta yanlış bir şey yaptığımı sandım."],
      ["Tom", "And? Come on, don't keep us waiting!", "Eee? Hadi ama, bizi merakta bırakma!"],
      ["Elif", "She offered me a promotion! From next month I won't be a junior any more. I'm going to run my own campaigns.", "Bana terfi teklif etti! Gelecek aydan itibaren artık yardımcı uzman değilim. Kendi kampanyalarımı yöneteceğim."],
      ["James", "That's brilliant, Elif! Well done. You've worked so hard this year.", "Harika, Elif! Aferin sana. Bu yıl çok çalıştın."],
      ["Tom", "Congratulations! Do you remember the night we met at the language exchange? You hardly said a word.", "Tebrikler! Dil değişimi buluşmasında tanıştığımız akşamı hatırlıyor musun? Neredeyse ağzını açmamıştın."],
      ["Elif", "Don't remind me! I was so shy. And when people said “You alright?”, I thought I looked ill.", "Hatırlatma! Çok utangaçtım. Bir de insanlar “You alright?” dediğinde hasta göründüğümü sanıyordum."],
      ["James", "Mind you, now you complain about the weather like a real Londoner.", "Gerçi artık hava hakkında gerçek bir Londralı gibi söyleniyorsun."],
      ["Elif", "I've had a lot of practice! Seriously, though, thank you both. You made this year so much easier.", "Bol bol pratik yaptım! Ama ciddi söylüyorum, ikinize de teşekkürler. Bu yılı benim için çok daha kolay hale getirdiniz."],
      ["Tom", "Hey, you helped me too. Who listened to me complaining about my thesis every single week?", "Hey, sen de bana yardım ettin. Her hafta tezim hakkında söylenmemi kim dinledi?"],
      ["James", "So, what's next? Are you going to stay in London?", "Peki, sırada ne var? Londra'da kalacak mısın?"],
      ["Elif", "Definitely. And I've signed up for an upper-intermediate course. I'd like to take the B2 exam next spring.", "Kesinlikle. Bir de orta üstü düzeyde bir kursa yazıldım. Gelecek bahar B2 sınavına girmek istiyorum."],
      ["Tom", "B2? Some days your English is better than mine!", "B2 mi? Bazı günler İngilizcen benimkinden iyi!"],
      ["Elif", "Says the man who still calls a flat an apartment!", "Bunu daireye hâlâ “apartment” diyen adam söylüyor!"],
      ["James", "Right, this calls for cake. Mrs Taylor brought us a lemon cake this morning.", "Tamam, bu haber kek ister. Mrs Taylor bu sabah bize limonlu kek getirdi."],
      ["Elif", "Perfect. Tea, cake, rain on the window and my two best friends. I feel at home.", "Mükemmel. Çay, kek, cama vuran yağmur ve en yakın iki arkadaşım. Kendimi evimde hissediyorum."]
    ],
    note: "Son sahneden dört kalıp: <b>What's going on?</b> (Neler oluyor?), <b>Don't keep us waiting!</b> (Bizi merakta bırakma!), <b>Mind you, …</b> (Gerçi …; az önce söylenene küçük bir ekleme ya da düzeltme yaparken) ve <b>This calls for cake!</b> (Bu haber kek ister!, yani bunu kutlamalıyız; <i>this calls for …</i> = bu, … gerektirir). Sahnede kitabın zamanları bir arada: <i>you've been smiling</i> (<i>present perfect continuous</i>), <i>I thought I'd done something wrong</i> (<i>past perfect</i>), <i>I'm going to run</i> (<i>going to</i>), <i>Who listened to me complaining?</i> (fiil + kişi + -ing).",
    questions: [
      ["Why was Elif worried on Friday afternoon?", "Priya asked to see her, and at first she thought she had done something wrong."],
      ["What will change for Elif at work next month?", "She won't be a junior any more. She's going to run her own campaigns."],
      ["What does Tom remember about the night they met?", "Elif hardly said a word, because she was very shy."],
      ["What are Elif's plans for the future?", "She's going to stay in London. She has signed up for an upper-intermediate course, and she'd like to take the B2 exam next spring."],
      ["Why does Elif laugh at Tom at the end?", "Because he still says “apartment” instead of “flat”, so his English isn't perfect British English either."]
    ]
  },
  vocab: [
    ["fluency", "akıcılık", "Reading aloud every day really helped my fluency.", "Her gün sesli okumak akıcılığıma gerçekten yardım etti."],
    ["accuracy", "doğruluk, hatasızlık", "At B2, accuracy becomes as important as fluency.", "B2'de doğruluk da akıcılık kadar önemli hale gelir."],
    ["a wide range of", "çok çeşitli, geniş bir yelpaze", "Try to use a wide range of words in your writing.", "Yazarken çok çeşitli kelimeler kullanmaya çalış."],
    ["collocation", "eşdizim (birlikte kullanılan kelimeler)", "Learn collocations like heavy rain and strong coffee, not single words.", "Tek tek kelimeler değil, heavy rain ve strong coffee gibi eşdizimler öğren."],
    ["context", "bağlam", "You can often guess a new word from its context.", "Yeni bir kelimeyi çoğu zaman bağlamından tahmin edebilirsin."],
    ["word family", "kelime ailesi (decide, decision, decisive)", "When you learn a new word, learn its word family too.", "Yeni bir kelime öğrenirken kelime ailesini de öğren."],
    ["hit a plateau", "yerinde saymak, ilerleyememek", "Most learners hit a plateau somewhere around B1.", "Öğrencilerin çoğu B1 civarında bir yerde yerinde saymaya başlar."],
    ["setback", "aksilik, geri adım", "A bad exam result is a setback, not the end of the road.", "Kötü bir sınav sonucu bir aksiliktir, yolun sonu değil."],
    ["consistent", "istikrarlı, tutarlı", "Be consistent: a little every day is better than a lot once a week.", "İstikrarlı ol: her gün biraz, haftada bir kez çok çalışmaktan iyidir."],
    ["self-discipline", "öz disiplin", "Studying on your own takes a lot of self-discipline.", "Kendi başına çalışmak çok öz disiplin ister."],
    ["stick to sth", "(bir plana) sadık kalmak, bırakmamak", "Make a simple plan and stick to it.", "Basit bir plan yap ve ondan şaşma."],
    ["brush up on sth", "(unutulmaya yüz tutmuş bir bilgiyi) tazelemek", "I need to brush up on my grammar before the exam.", "Sınavdan önce dilbilgimi tazelemem gerekiyor."],
    ["get the hang of sth", "bir şeyin püf noktasını kapmak, alışmak", "Phrasal verbs are hard at first, but you'll get the hang of them.", "Phrasal verb'ler başta zordur ama zamanla alışırsın."],
    ["out of practice", "pratikten uzak kalmış", "I haven't spoken French for years, so I'm out of practice.", "Yıllardır Fransızca konuşmadım, bu yüzden pratikten uzak kaldım."],
    ["rusty", "paslanmış (uzun süre kullanılmamış bir beceri için)", "My German is a bit rusty, but I can still order food.", "Almancam biraz paslandı ama hâlâ yemek siparişi verebilirim."],
    ["bit by bit", "azar azar, yavaş yavaş", "Bit by bit, the news on the radio became easier to follow.", "Radyodaki haberleri takip etmek yavaş yavaş kolaylaştı."],
    ["from scratch", "sıfırdan", "She started learning Japanese from scratch at the age of forty.", "Kırk yaşında Japoncayı sıfırdan öğrenmeye başladı."],
    ["make a habit of (-ing)", "(-meyi) alışkanlık haline getirmek", "Make a habit of reading something in English every day.", "Her gün İngilizce bir şey okumayı alışkanlık haline getir."],
    ["track your progress", "ilerlemeni takip etmek", "Record yourself once a month to track your progress.", "İlerlemeni takip etmek için ayda bir kendini kaydet."],
    ["step out of your comfort zone", "konfor alanından çıkmak", "Talking to strangers helped me step out of my comfort zone.", "Yabancılarla konuşmak konfor alanımdan çıkmama yardım etti."],
    ["graded reader", "seviyeli okuma kitabı (öğrenciler için sadeleştirilmiş)", "I read a graded reader on the bus every morning.", "Her sabah otobüste seviyeli bir okuma kitabı okuyorum."],
    ["upper-intermediate", "orta üstü (B2 düzeyi)", "Next term I'm going to join an upper-intermediate class.", "Gelecek dönem orta üstü düzeyde bir sınıfa katılacağım."],
    ["take sth to the next level", "bir şeyi bir üst seviyeye taşımak", "A month abroad could take your English to the next level.", "Yurt dışında geçireceğin bir ay İngilizceni bir üst seviyeye taşıyabilir."],
    ["overcome (overcame, overcome)", "üstesinden gelmek", "She overcame her fear of speaking in public.", "Topluluk önünde konuşma korkusunun üstesinden geldi."],
    ["on the whole", "genel olarak, bütününe bakınca","On the whole, I'm happy with my progress this month.", "Genel olarak bu ayki ilerlememden memnunum."],
    ["as far as I know", "bildiğim kadarıyla", "As far as I know, the new course starts in September.", "Bildiğim kadarıyla yeni kurs eylülde başlıyor."],
    ["in other words", "başka bir deyişle", "He isn't very keen on the idea. In other words, he hates it.", "Fikre pek sıcak bakmıyor. Başka bir deyişle, nefret ediyor."],
    ["whereas", "oysa, -ken (iki şeyi karşılaştırırken)", "My sister loves grammar, whereas I prefer speaking.", "Kız kardeşim dilbilgisine bayılır, oysa ben konuşmayı tercih ederim."],
    ["look back on sth", "(geçmişe) dönüp bakmak", "When I look back on these thirty days, I feel proud.", "Bu otuz güne dönüp baktığımda gurur duyuyorum."],
    ["Keep it up!", "Böyle devam et!", "Your writing has improved a lot. Keep it up!", "Yazman çok gelişti. Böyle devam et!"]
  ],
  grammar: [
    { h: "B1'den sonra: nasıl ilerlemeye devam edersin?",
      body: "<p>B1'e ulaşmak, İngilizcenin temel binasını bitirmek demek: zamanların, modal fiillerin, koşul cümlelerinin, edilgenin ve dolaylı anlatımın hepsini gördün. Bundan sonra ilerleme yeni kurallardan çok <b>düzenli temastan</b> gelir: her gün İngilizce duymak, okumak ve kullanmak. Dört alışkanlık seni B2'ye taşır.</p><div class='scroll'><table class='tbl'><tr><th>Alışkanlık</th><th>Ne yaparsın?</th><th>Ne kazandırır?</th></tr><tr><td class='k'>Bol girdi (<i>input</i>)</td><td>her gün 20–30 dakika seviyene yakın bir şey dinlemek ve okumak: podcast, dizi, seviyeli kitap, haber</td><td>kelime, kalıp, doğal ritim</td></tr><tr><td class='k'>Fark etme (<i>noticing</i>)</td><td>okuduğun ve dinlediğin metinlerdeki eşdizimleri ve kalıpları deftere yazmak</td><td>doğru kelime seçimi, doğal İngilizce</td></tr><tr><td class='k'>Çıktı (<i>output</i>)</td><td>haftada en az iki kez konuşmak, bir kez yazmak ve düzeltilmesini istemek</td><td>akıcılık, özgüven</td></tr><tr><td class='k'>Aralıklı tekrar</td><td>yeni kelimeleri 1, 3, 7 ve 30 gün sonra yeniden görmek</td><td>kalıcı hafıza</td></tr></table></div><p>Kelimeyi tek başına değil, yanındaki kelimelerle birlikte öğren:<br>[[I made a mistake.]] – Bir hata yaptım. (<i>did a mistake</i> değil)<br>[[It depends on the weather.]] – Havaya bağlı. (<i>depends of</i> değil)<br>[[She's responsible for the budget.]] – Bütçeden o sorumlu.<br>[[We had a long discussion about it.]] – Bunu uzun uzun tartıştık.</p><p>Duyduğun bir cümleyi alıp bir parçasını değiştirerek kendi cümleni kur:<br>[[I've been meaning to call you for weeks.]] – Haftalardır seni aramayı düşünüyordum.<br>[[I've been meaning to start a podcast for months.]] – Aylardır bir podcast başlatmayı düşünüyorum.</p><h4>Türkçe ile karşılaştır</h4><p>Okulda İngilizce çoğu zaman kurallarla ve test çözerek öğretilir; bu yüzden pek çok kişi kuralı bilir ama konuşurken takılır. B1'den sonra oranı tersine çevir: zamanının büyük kısmı dinlemeye, okumaya ve konuşmaya, küçük bir kısmı kurallara gitsin. Dilbilgisi kitabını en çok bir hatanı anlamak için aç.</p><div class='rule'><b>Dikkat:</b> B1'de yerleşen hatalar kendiliğinden gitmez. Türkçe konuşanlarda en inatçı olanlar <b>a/an/the</b>, üçüncü tekil <b>-s</b>, <i>present perfect</i> ile <i>past simple</i> farkı ve edatlardır. Hata defterini kapatma: B2 yolunda da en iyi öğretmenin o.</div>" },
    { h: "B2'de seni neler bekliyor? Kısa bir ön izleme",
      body: "<p>B2'de çok az yeni zaman gelir; asıl yenilik, bildiğin yapıların daha ince kullanımlarıdır. Aşağıdakileri şimdi ezberlemen gerekmiyor; ama dinlerken ve okurken karşına çıktıklarında tanı ve deftere yaz.</p><div class='scroll'><table class='tbl'><tr><th>B1'de öğrendiğin</th><th>B2'de gelen</th><th>Örnek</th></tr><tr><td class='k'>second conditional</td><td><i>third conditional</i>: geçmişle ilgili hayal</td><td>[[If I had known, I would have helped you.]] – Bilseydim sana yardım ederdim.</td></tr><tr><td class='k'>I wish + past</td><td>I wish + <i>past perfect</i>: geçmiş için pişmanlık</td><td>[[I wish I had started earlier.]] – Keşke daha erken başlasaydım.</td></tr><tr><td class='k'>must / might / can't</td><td>geçmiş için çıkarım: must have, might have, can't have</td><td>[[She must have missed the train.]] – Treni kaçırmış olmalı.</td></tr><tr><td class='k'>should</td><td>should have: geçmişteki bir hata</td><td>[[You should have told me.]] – Bana söylemeliydin.</td></tr><tr><td class='k'>is done / was done</td><td>daha çok zamanda edilgen: has been done, is being done</td><td>[[The road is being repaired.]] – Yol tamir ediliyor.</td></tr><tr><td class='k'>will</td><td><i>future continuous</i> ve <i>future perfect</i></td><td>[[This time next year, I'll be living in London.]] – Gelecek yıl bu zamanlar Londra'da yaşıyor olacağım.</td></tr></table></div><h4>Türkçe ile karşılaştır</h4><p>Bu yapıların çoğunun Türkçede tek ekli bir karşılığı vardır: <i>-seydim, -meliydin, -mış olmalı</i>. İngilizcede ise iki üç kelimelik kalıplar gerekir: <i>would have done, should have done, must have done</i>. Onları tek tek kurallar yerine bütün kalıplar olarak dinle ve sesli tekrar et.</p><div class='rule'><b>Dikkat:</b> B2'ye geçmek B1'i unutmak demek değil. Bugünkü son sınavda zayıf çıktığın konuyu önce sağlamlaştır; temel sağlam olmadan üst katlar sallanır.</div>" }
  ],
  practice: [
    { h: "A. Zamanlar (1–4, 8, 9 ve 22. günler)", note: "Altı seti tek oturuşta, yaklaşık 60 dakikada çöz; cevapları en sonda aç ve puanla. Her doğru cevap 1 puan. Cevabı açınca yanındaki gün numarasına bak: yanlış yaptığın konu o gündedir. Bu sette parantezdeki fiili doğru zamanda yaz ya da hatayı düzelt.", items: [
      ["Listen! Someone ___ (knock) at the door.", "[[Listen! Someone <b>is knocking</b> at the door.]]", "Şu an olan bir eylem: <i>present continuous</i> (1. gün)."],
      ["I ___ (not / understand) what this word means.", "[[I <b>don't understand</b> what this word means.]]", "understand bir durum fiili, -ing almaz (1. gün)."],
      ["We ___ (walk) home when it started to rain.", "[[We <b>were walking</b> home when it started to rain.]]", "Süren eylem <i>past continuous</i>, araya giren kısa eylem <i>past simple</i> (3. gün)."],
      ["When I was a child, I ___ (hate) vegetables, but now I love them. (used to ile)", "[[When I was a child, I <b>used to hate</b> vegetables, but now I love them.]]", "Geçmişte olan ama artık olmayan durum: used to + yalın fiil (3. gün)."],
      ["Look at those dark clouds! It ___ (rain).", "[[Look at those dark clouds! It<b>'s going to rain</b>.]]", "Gördüğün kanıta dayanan tahmin: going to (4. gün)."],
      ["I ___ (meet) Priya at ten tomorrow. It's in my diary.", "[[I<b>'m meeting</b> Priya at ten tomorrow. It's in my diary.]]", "Ayarlanmış bir randevu: <i>present continuous</i> (4. gün)."],
      ["I ___ (not / see) Mert since last summer.", "[[I <b>haven't seen</b> Mert since last summer.]]", "since + başlangıç noktası: <i>present perfect</i> (9. gün)."],
      ["How long ___ you ___ (learn) English?", "[[How long <b>have</b> you <b>been learning</b> English?]]", "Hâlâ süren bir eylemin süresi: <i>present perfect continuous</i> (9. gün)."],
      ["Hatayı düzelt: <i>I have visited Edinburgh last month.</i>", "[[I <b>visited</b> Edinburgh last month.]]", "last month bitmiş bir zaman: <i>past simple</i> (2. ve 8. gün)."],
      ["When we got to the cinema, the film ___ already ___ (start).", "[[When we got to the cinema, the film <b>had</b> already <b>started</b>.]]", "Geçmişteki bir andan daha önce olan: <i>past perfect</i> (22. gün)."]
    ]},
    { h: "B. Modal fiiller ve koşul cümleleri (10–13. günler)", note: "Doğru seçeneği seç, boşluğu doldur ya da cümleyi istenen kelimeyle yeniden yaz.", items: [
      ["You (mustn't / don't have to) pay to visit the museum. It's free.", "[[You <b>don't have to</b> pay to visit the museum. It's free.]]", "don't have to = gerek yok; mustn't = yasak (10. gün)."],
      ["Yeniden yaz (had better): <i>It's very late. It's a good idea for us to leave now.</i>", "[[It's very late. We<b>'d better leave</b> now.]]", "had better + yalın fiil; to gelmez (10. gün)."],
      ["She's been working for twelve hours. She (must / can't) be exhausted.", "[[She's been working for twelve hours. She <b>must</b> be exhausted.]]", "Kanıta dayanan, neredeyse kesin çıkarım: must (11. gün)."],
      ["That (must / can't) be Tom at the door. He's in Chicago this week.", "[[That <b>can't</b> be Tom at the door. He's in Chicago this week.]]", "İmkânsız olduğunu düşündüğün şey: can't (11. gün)."],
      ["Take an umbrella. It (might / must) rain later.", "[[Take an umbrella. It <b>might</b> rain later.]]", "Emin olmadığın bir olasılık: might (11. gün)."],
      ["Sorry, I won't ___ come to your party on Saturday. (can / be able to)", "[[Sorry, I won't <b>be able to</b> come to your party on Saturday.]]", "will'den sonra can gelmez: be able to (11. gün)."],
      ["If it ___ (rain) tomorrow, we ___ (stay) at home.", "[[If it <b>rains</b> tomorrow, we<b>'ll stay</b> at home.]]", "if'li yan cümlede will yok: <i>first conditional</i> (12. gün)."],
      ["Yeniden yaz (unless): <i>If you don't hurry, you'll miss the bus.</i>", "[[<b>Unless</b> you hurry, you'll miss the bus.]]", "unless = if … not; ardından olumlu fiil gelir (12. gün)."],
      ["If I ___ (have) more free time, I ___ (learn) the guitar.", "[[If I <b>had</b> more free time, I <b>would learn</b> the guitar.]]", "Hayalî bir durum: if + past, would + fiil (13. gün)."],
      ["Hatayı düzelt: <i>I wish I can speak Italian.</i>", "[[I wish I <b>could</b> speak Italian.]]", "Şimdiki zaman için dilek: wish + past, yani can → could (13. gün)."]
    ]},
    { h: "C. Edilgen ve dolaylı anlatım (17 ve 18. günler)", note: "Cümleyi edilgen yap, dolaylı anlatıma çevir ya da hatayı düzelt.", items: [
      ["Edilgen yap: <i>They grow tea in Rize.</i>", "[[Tea <b>is grown</b> in Rize.]]", "<i>present simple passive</i>: is/are + üçüncü hal (17. gün)."],
      ["Edilgen yap: <i>Someone stole my bike last night.</i>", "[[My bike <b>was stolen</b> last night.]]", "Yapanın kim olduğu bilinmiyorsa by kullanılmaz (17. gün)."],
      ["Edilgen yap: <i>You must send the form by Friday.</i>", "[[The form <b>must be sent</b> by Friday.]]", "modal + be + üçüncü hal (17. gün)."],
      ["Hatayı düzelt: <i>This letter was wrote by my grandfather.</i>", "[[This letter was <b>written</b> by my grandfather.]]", "Edilgende fiilin üçüncü hali gelir: write, wrote, written (17. gün)."],
      ["She ___ me that she was tired. (said / told)", "[[She <b>told</b> me that she was tired.]]", "tell + kişi; say kişiyi doğrudan almaz (18. gün)."],
      ["Aktar: <i>“I'm working from home today,” Daniel said.</i>", "[[Daniel said that he <b>was working</b> from home <b>that day</b>.]]", "Zaman bir adım geri gider, today → that day (18. gün)."],
      ["Aktar: <i>“I'll call you tomorrow,” Tom told me.</i>", "[[Tom told me that he <b>would call</b> me <b>the next day</b>.]]", "will → would, tomorrow → the next day (18. gün)."],
      ["Aktar: <i>“Where do you live?” the receptionist asked me.</i>", "[[The receptionist asked me where I <b>lived</b>.]]", "Aktarılan soruda düz cümle dizilişi; do kullanılmaz (18. gün)."],
      ["Aktar: <i>“Are you hungry?” James asked me.</i>", "[[James asked me <b>if I was</b> hungry.]]", "Evet/hayır sorusu: if ya da whether (18. gün)."],
      ["Aktar: <i>“Don't be late,” Priya said to us.</i>", "[[Priya told us <b>not to be</b> late.]]", "Olumsuz emir: told + kişi + not to (18. gün)."]
    ]},
    { h: "D. Fiil kalıpları, ilgi cümlecikleri ve phrasal verb'ler (15, 16 ve 19. günler)", note: "Boşluğu doldur, doğru seçeneği seç, cümleleri birleştir ya da hatayı düzelt.", items: [
      ["I really enjoy ___ (cook) for my friends.", "[[I really enjoy <b>cooking</b> for my friends.]]", "enjoy + -ing (15. gün)."],
      ["We decided ___ (stay) at home because of the storm.", "[[We decided <b>to stay</b> at home because of the storm.]]", "decide + to (15. gün)."],
      ["Please remember (to lock / locking) the door when you leave.", "[[Please remember <b>to lock</b> the door when you leave.]]", "remember + to: yapman gereken bir şeyi unutmamak (15. gün)."],
      ["Hatayı düzelt: <i>I'm interested in learn Spanish.</i>", "[[I'm interested in <b>learning</b> Spanish.]]", "Edattan sonra fiil -ing alır (15. ve 25. gün)."],
      ["Birleştir: <i>That's the woman. She helped me at the station.</i>", "[[That's the woman <b>who</b> helped me at the station.]]", "Kişi için who ya da that (16. gün)."],
      ["That's the café ___ we first met.", "[[That's the café <b>where</b> we first met.]]", "Yer için where (16. gün)."],
      ["I've got a friend ___ sister is a famous singer.", "[[I've got a friend <b>whose</b> sister is a famous singer.]]", "Sahiplik için whose (16. gün)."],
      ["Hangi kelime atılabilir? <i>The film that we watched last night was brilliant.</i>", "[[The film we watched last night was brilliant.]]", "that atılabilir, çünkü cümlecikte nesne: filmi biz izledik (16. gün)."],
      ["Hatayı düzelt: <i>Your music is too loud. Please turn down it.</i>", "[[Your music is too loud. Please <b>turn it down</b>.]]", "Ayrılabilen phrasal verb'de zamir ortaya girer (19. gün)."],
      ["I can't ___ the noise from upstairs any more. (put up with / get on with / look after)", "[[I can't <b>put up with</b> the noise from upstairs any more.]]", "put up with = katlanmak (19. gün)."]
    ]},
    { h: "E. Tanımlıklar, miktar sözcükleri ve edatlar (5, 23, 25 ve 27. günler)", note: "Boşluğu doldur, doğru seçeneği seç ya da hatayı düzelt.", items: [
      ["She's ___ engineer, and she works at ___ university in Leeds.", "[[She's <b>an</b> engineer, and she works at <b>a</b> university in Leeds.]]", "university “yu” sesiyle başlar, bu yüzden a gelir (5. gün)."],
      ["Hatayı düzelt: <i>The life in London is expensive.</i>", "[[<b>Life</b> in London is expensive.]]", "Genel anlamda soyut isim tanımlık almaz (23. gün)."],
      ["My grandmother is in (hospital / the hospital) after a fall, so we visit her every day.", "[[My grandmother is in <b>hospital</b> after a fall, so we visit her every day.]]", "Hasta olarak yatıyorsa: in hospital (İngiliz İngilizcesi, 23. gün)."],
      ["How (much / many) money do you need for the trip?", "[[How <b>much</b> money do you need for the trip?]]", "money sayılamayan bir isim (5. gün)."],
      ["Can I ask you (a few / a little) questions?", "[[Can I ask you <b>a few</b> questions?]]", "questions sayılabilen ve çoğul (5. gün)."],
      ["There isn't ___ milk left. Could you buy ___ on your way home?", "[[There isn't <b>any</b> milk left. Could you buy <b>some</b> on your way home?]]", "Olumsuzda any, rica ve teklifte some (5. gün)."],
      ["I've got two brothers, but (neither / both / none) of them lives in Turkey.", "[[I've got two brothers, but <b>neither</b> of them lives in Turkey.]]", "İki kişi ve olumsuz anlam: neither (23. gün)."],
      ["The meeting is ___ Monday ___ ten o'clock ___ the morning.", "[[The meeting is <b>on</b> Monday <b>at</b> ten o'clock <b>in</b> the morning.]]", "on + gün, at + saat, in + the morning: A2'den gelen zaman edatları."],
      ["She's very good ___ maths, but she's afraid ___ flying.", "[[She's very good <b>at</b> maths, but she's afraid <b>of</b> flying.]]", "Sıfat + edat kalıpları: good at, afraid of (25. gün)."],
      ["We drove (through / across / along) a long tunnel under the mountains.", "[[We drove <b>through</b> a long tunnel under the mountains.]]", "Kapalı bir yerin içinden geçmek: through (27. gün)."]
    ]},
    { h: "F. Kelimeler ve bağlaçlar (6, 9, 13, 23, 24, 25 ve 27. günler)", note: "Doğru kelimeyi ya da bağlacı seç, boşluğu doldur.<br><br><b>Puanlama</b> (altı setin her sorusu 1 puan, toplam 60):<br><b>50–60:</b> B1 hazır. Sınava girebilirsin; yanlışlarını yine de hata defterine yaz.<br><b>40–49:</b> B1'e çok yakınsın. Hangi setlerde hata yaptığına bak ve o setlerin başlığındaki günlerden zayıf konuları tekrar et.<br><b>40'ın altı:</b> 2. ve 3. haftayı (8–21. günler) tekrar et, sonra bu testi bir kez daha çöz.", items: [
      ["___ the rain, we really enjoyed the trip. (Although / Despite)", "[[<b>Despite</b> the rain, we really enjoyed the trip.]]", "despite + isim; although + özne + fiil (24. gün)."],
      ["Birleştir (although): <i>It was expensive. We bought it.</i>", "[[<b>Although</b> it was expensive, we bought it.]]", "although bir yan cümle başlatır (24. gün)."],
      ["I was really tired. (However / Because / So), I finished the report.", "[[I was really tired. <b>However</b>, I finished the report.]]", "however cümle başında, virgülle kullanılır (24. gün)."],
      ["I'm saving money (so that / because / although) I can travel next summer.", "[[I'm saving money <b>so that</b> I can travel next summer.]]", "Amaç: so that + can (24. gün)."],
      ["It was ___ a good film that I watched it twice. (so / such)", "[[It was <b>such</b> a good film that I watched it twice.]]", "such + a + sıfat + isim (23. gün)."],
      ["The lecture was really ___ (bore), so I fell asleep.", "[[The lecture was really <b>boring</b>, so I fell asleep.]]", "Duyguya sebep olan şey -ing alır (25. gün)."],
      ["I need to ___ a decision about the job by Friday. (do / make / take)", "[[I need to <b>make</b> a decision about the job by Friday.]]", "Eşdizim: make a decision (13. gün)."],
      ["Could you ___ me a favour and post this letter? (do / make / give)", "[[Could you <b>do</b> me a favour and post this letter?]]", "Eşdizim: do sb a favour (9. gün: do ve make)."],
      ["Our flight was ___ because of the storm. (cancelled / closed / stopped)", "[[Our flight was <b>cancelled</b> because of the storm.]]", "Uçuş, tren ya da toplantı için: cancelled (27. gün)."],
      ["Kelimeyi bul: the money you pay every month to live in a flat that isn't yours", "rent", "Ev ve kira kelimeleri (6. gün)."]
    ]}
  ],
  reading: {
    title: "Stuck at B1? You're not alone",
    intro: "Bir dil öğrenme dergisinden bir makale; içinde üç öğrencinin kısa hikâyesi var, biri de tanıdık bir isim! Önce iki dakika göz gezdir ve şu soruyu cevapla: Yazara göre B1'de ilerleme neden yavaşlar ve ne yapmak gerekir? Sonra sözlükçeye bakarak bir daha oku ve soruları cevapla. En son metni dinleyerek sesli oku: bu kitaptaki son sesli okuman!",
    text: "<p>Almost every language learner knows the feeling. At the beginning, progress is fast: every week you learn new words, and soon you can order food, ask for directions and talk about your family. Then, somewhere around B1, everything seems to slow down. You study just as hard, but you don't feel any better. Teachers call this the intermediate plateau.</p><p>Why does it happen? At lower levels, there is a lot of basic language to learn, so it is easy to notice your progress. At B1, you can already survive in most everyday situations, so you stop pushing yourself. You use the same few hundred words again and again, because they work. The problem is that “working” is not the same as “improving”.</p><p>We asked three learners how they got off the plateau.</p><p>Ana, 31, a nurse from Brazil, says the answer was reading. “I chose novels that were a little too difficult for me,” she explains. “I didn't understand everything, but I learnt hundreds of new expressions in context.”</p><p>Kenji, 24, a student from Japan, started recording himself. “Every Friday I recorded a two-minute talk about my week. When I listened back, I could hear the same mistakes every time. Once I had noticed them, I could fix them.”</p><p>Elif, a marketing specialist from Turkey, moved to London last year. “After six months, I was comfortable at work, but my English wasn't growing,” she says. “So I joined a walking group where nobody spoke Turkish. Now I talk about everything from football to politics, and I've made some great friends.”</p><p>The message from all three is the same: if you want to keep improving, you have to step out of your comfort zone. Choose something that is slightly too hard, do it regularly and pay attention to your mistakes. The plateau is not a wall. It is a sign that you are ready for the next step.</p>",
    glossary: [
      ["progress", "ilerleme"],
      ["slow down", "yavaşlamak"],
      ["intermediate", "orta seviye"],
      ["push yourself", "kendini zorlamak"],
      ["improve", "gelişmek, ilerlemek"],
      ["get off the plateau", "duraklama döneminden çıkmak"],
      ["novel", "roman"],
      ["expression", "ifade, deyim"],
      ["listen back", "(kaydı) geri dönüp dinlemek"],
      ["fix", "düzeltmek"],
      ["pay attention to", "-e dikkat etmek"],
      ["slightly", "biraz, hafifçe"]
    ],
    questions: [
      ["True or false? According to the writer, learners usually make fast progress at the beginning.", "True. Every week they learn new words, and soon they can order food, ask for directions and talk about their family."],
      ["Why do many learners stop improving at B1?", "Because they can already survive in most everyday situations, so they stop pushing themselves and use the same words again and again."],
      ["What kind of books did Ana choose, and what did she learn from them?", "Novels that were a little too difficult for her. She learnt hundreds of new expressions in context."],
      ["How did recording himself help Kenji?", "When he listened back, he could hear the same mistakes every time, so he noticed them and could fix them."],
      ["True or false? Elif joined a walking group to practise her Turkish.", "False. Nobody in the group spoke Turkish; she joined it to use her English."],
      ["What three things does the writer advise at the end?", "Choose something slightly too hard, do it regularly and pay attention to your mistakes."],
      ["Find a word in the text that means “to manage to live or continue in a difficult situation”.", "survive"]
    ]
  },
  listen: [
    { text: "Hi Elif, it's Mert. Auntie Zeynep told me about your promotion. Congratulations! I'm so proud of you. I've got some news too. My hotel is sending me to London for a two-week training course in May. It's for staff who train new receptionists, like me. The course is in central London, and the hotel is paying for my room, but I'm free at the weekends. Could I come and see you on the first Saturday? Call me back when you can. Bye!",
      q: "<small>Part 2 tarzı</small><br>You will hear a message from Elif's cousin, Mert. Why is he coming to London?<br>A) to celebrate Elif's promotion with her<br>B) to do a training course for his job<br>C) to look for a job in a London hotel",
      a: "B. His hotel is sending him on a two-week training course for staff who train new receptionists." },
    { text: "Are you ready to take your English to the next level? Northgate College is starting new upper-intermediate evening classes in September. Classes meet twice a week, on Mondays and Wednesdays, from half past six to half past eight. There are no more than twelve students in each group, so everyone gets plenty of time to speak. Before you join, you'll take a short online test to check your level. Places are limited, so please book before the thirty-first of August.",
      q: "<small>Part 3 tarzı</small><br>You will hear an advert for an English course. Complete the notes with one word or a number.<br>Classes: Mondays and ___<br>Maximum number of students in a group: ___<br>Book before: ___ August",
      a: "Wednesdays · 12 (twelve) · 31st (the thirty-first). You also take a short online test before you join." },
    { text: "A lot of my students ask me what they should do after they pass an exam. My answer is always the same: don't stop, but don't try to do everything either. Some people buy five grammar books and give up after a week. It's much better to choose one thing you enjoy, like a podcast, a TV series or a club, and do it in English every day. Fifteen minutes a day is better than three hours on a Sunday. And talk to people! Mistakes are not the problem. Silence is.",
      q: "<small>Part 4 tarzı</small><br>You will hear a teacher giving advice to his students. What is his main advice?<br>A) Buy good grammar books and study them carefully.<br>B) Do something you enjoy in English for a short time every day.<br>C) Study for a few hours every weekend.",
      a: "B. He says choose one thing you enjoy and do it in English every day: fifteen minutes a day is better than three hours on a Sunday." }
  ],
  speak: "<p><b>1. Shadowing (5 dk).</b> Son diyaloğu bir kez baştan sona dinle. Sonra her satırı tek tek çal ve hemen ardından aynı hız ve tonlamayla tekrar et. Üçüncü turda “Çeviriyi gizle” düğmesine bas ve Elif'in satırlarını sen söyle: bu kitaptaki son Elif rolün!</p><p><b>2. İki dakikalık konuşma: What I learned in thirty days (15 dk).</b> Önce iki dakika boyunca yalnızca anahtar kelimelerden oluşan notlar al. Sonra telefonuna kaydederek iki dakika kesintisiz konuş. Birinci günde kendini kaydettiysen iki kaydı art arda dinle: farkı kendin duyacaksın.</p><ul><li>Why did you start this course, and how did you study every day?</li><li>What was the most useful thing you learned? Give an example.</li><li>What was the most difficult part, and how did you deal with it?</li><li>How has your English changed since day 1?</li><li>What are you going to do next?</li></ul><p>Örnek:<br>[[Thirty days ago, I decided to take my English from A2 to B1, so I studied for five hours every day.]] – Otuz gün önce İngilizcemi A2'den B1'e taşımaya karar verdim, bu yüzden her gün beş saat çalıştım.<br>[[The most useful thing I learned was the difference between the present perfect and the past simple.]] – Öğrendiğim en faydalı şey <i>present perfect</i> ile <i>past simple</i> arasındaki farktı.<br>[[I used to say “I have seen him yesterday”, but now I know that's wrong.]] – Eskiden “I have seen him yesterday” derdim ama artık bunun yanlış olduğunu biliyorum.<br>[[The hardest part was listening, because people speak so fast, so I listened to every dialogue three times.]] – En zor kısım dinlemeydi, çünkü insanlar çok hızlı konuşuyor; bu yüzden her diyaloğu üç kez dinledim.<br>[[I'm much more confident now, although I still make mistakes with articles.]] – Tanımlıklarda hâlâ hata yapsam da artık kendime çok daha fazla güveniyorum.<br>[[Next, I'm going to read a graded reader every week and take the B1 exam in the spring.]] – Sırada her hafta seviyeli bir okuma kitabı okumak ve baharda B1 sınavına girmek var.</p><p><b>3. Mini konuşma sınavı (10 dk).</b> Bir arkadaşından şu soruları sana sormasını iste ya da soruları kendin sesli oku. Her birine bir görüş, bir gerekçe ve bir örnekle, 30–40 saniyede cevap ver. Kendini kaydet ve dünkü stratejileri kullan: zaman kazanmak için <i>Let me think …</i>, bilmediğin kelime için <i>It's a thing you use for …</i></p><ul><li>Why are you learning English?</li><li>In your opinion, what's the best way to learn new words?</li><li>Would you like to live in another country one day? Why or why not?</li><li>Is it better to learn a language at school or on your own?</li></ul>",
  write: {
    task: "<p>Bu kitabın son yazma görevi: Elif'e otuz gününü anlatan bir e-posta yaz (100–120 kelime). Elif bir yıl önce senin gibi yeni bir hayata başladı; şimdi de senin hikâyeni merak ediyor. Şunları yaz:</p><ul><li>kursu bitirdiğini ve nasıl çalıştığını,</li><li>en çok neyi sevdiğini ve neden,</li><li>en zor neyin olduğunu ve şimdi neyi daha iyi yaptığını (<i>I used to … but now …</i>),</li><li>bundan sonraki planını (<i>going to</i>) ve samimi bir kapanış.</li></ul><p>Başlangıç: <i>Hi Elif,</i> Bitiş: <i>Best wishes, …</i> Kitaptaki zamanlardan en az üçünü (<i>present perfect, past simple, going to</i>) ve en az iki bağlacı (<i>however, although, because, so</i>) kullan. Önce yaz, sonra örnek cevapla karşılaştır.</p>",
    model: "<p>Hi Elif,</p><p>I've just finished my thirty-day English course, and I wanted to tell you about it. It was hard work, because studying for five hours a day isn't easy when you have a job! However, I've learnt a lot.</p><p>My favourite part was the dialogues, because I felt as if I knew you, James and Tom. The most difficult thing for me was the present perfect. I used to say “I have seen him yesterday”, but now I know why that's wrong.</p><p>Although I still make mistakes, I'm much more confident when I speak. Next, I'm going to read a graded reader every week and take the B1 exam in the spring. Wish me luck!</p><p>Best wishes,<br>Selin</p>",
    checklist: [
      "Görevdeki dört noktanın hepsini yazdın mı (kurs, en sevdiğin şey, en zor şey, planın)?",
      "En az üç zaman kullandın mı: <i>present perfect</i> (<i>I've learnt</i>), <i>past simple</i> (<i>It was</i>), <i>going to</i>?",
      "En az iki bağlaç var mı (<i>however, although, because, so</i>) ve virgülleri doğru mu?",
      "E-posta samimi bir açılışla başlayıp samimi bir kapanışla bitiyor mu?",
      "Kelime sayısı 100–120 arasında mı? Tanımlıkları ve üçüncü tekil -s'yi kontrol ettin mi?"
    ]
  },
  quiz: [
    ["İngilizcesi: akıcılık", "fluency"],
    ["İngilizcesi: konfor alanından çıkmak", "step out of your comfort zone"],
    ["Türkçesi: <i>My German is a bit rusty.</i>", "Almancam biraz paslandı (pratiğimi kaybettim)."],
    ["İngilizcesi: (unutulmaya yüz tutmuş bir bilgiyi) tazelemek", "brush up on sth"],
    ["Boşluğu doldur: <i>I've been learning English ___ two years.</i>", "[[I've been learning English <b>for</b> two years.]]"],
    ["Edilgen yap: <i>People speak English all over the world.</i>", "[[English <b>is spoken</b> all over the world.]]"],
    ["Aktar: <i>“I can help you,” she said to me.</i>", "[[She told me that she <b>could</b> help me.]]"],
    ["Hatayı düzelt: <i>If I will have time, I'll call you.</i>", "[[If I <b>have</b> time, I'll call you.]]"],
    ["İngilizcesi: Otuz günde çok şey öğrendim.", "[[I've learnt a lot in thirty days.]]"],
    ["İngilizcesi: Gelecek yıl B2 sınavına girmeyi planlıyorum.", "[[I'm planning to take the B2 exam next year.]]"]
  ],
  cando: [
    "<b>Dinleme:</b> iş, okul ve boş zaman gibi tanıdık konularda açık ve standart bir konuşmanın ana noktalarını anlayabilirim",
    "<b>Dinleme:</b> konuşma görece yavaş ve netse, güncel olaylar ya da ilgi alanlarım hakkındaki radyo ve televizyon programlarının ana fikrini yakalayabilirim",
    "<b>Okuma:</b> günlük hayatta ve işte sık kullanılan bir dille yazılmış metinleri anlayabilir, kişisel mektup ve e-postalarda anlatılan olayları, duyguları ve dilekleri takip edebilirim",
    "<b>Karşılıklı konuşma:</b> İngilizcenin konuşulduğu bir yerde seyahat ederken karşılaşabileceğim durumların çoğuyla başa çıkabilirim",
    "<b>Karşılıklı konuşma:</b> aile, hobiler, iş, seyahat ve güncel olaylar gibi tanıdık konularda hazırlıksız bir sohbete katılabilirim",
    "<b>Sözlü anlatım:</b> deneyimlerimi, hayallerimi, umutlarımı ve hedeflerimi basitçe birbirine bağlayarak anlatabilir, görüşlerim ve planlarım için kısa gerekçeler verebilirim",
    "<b>Sözlü anlatım:</b> bir hikâyeyi ya da bir kitabın veya filmin konusunu anlatıp ona dair tepkimi söyleyebilirim",
    "<b>Yazma:</b> tanıdık konularda basit ve bağlantılı metinler, deneyimlerimi ve izlenimlerimi anlatan kişisel mektuplar ve e-postalar yazabilirim"
  ],
  tip: { h: "B1'den B2'ye: gerçekçi bir plan",
    body: "<p>B2'ye ulaşmak genellikle aylar sürer; bu yüzden bir sprint değil, bir yaşam tarzı kur. Günde beş saat yerine <b>günde 45–60 dakika</b>, ama her gün.</p><p><b>Her gün:</b> 20 dakika dinleme (podcast, dizi, haber; altyazıyı önce İngilizce aç, zamanla kapat), 15 dakika okuma (seviyeli kitap, blog, kısa haber), 10 dakika kelime tekrarı (aralıklı tekrar yapan bir kart uygulaması ya da kâğıt kartlar).</p><p><b>Her hafta:</b> bir kez konuş (dil değişimi buluşması, çevrim içi bir öğretmen ya da bir arkadaş) ve bir metin yaz (e-posta, yorum, kısa makale); düzeltilmesini iste ve hatalarını deftere ekle.</p><p><b>Her ay:</b> kendini iki dakika kaydet ve bir önceki kayıtla karşılaştır; B2 formatındaki bir deneme testinin bir bölümünü çöz.</p><p>Kaynak seçerken tek bir kural yeter: metnin ya da kaydın aşağı yukarı %80'ini anlamalısın. Daha kolayı sıkar, daha zoru yorar. Aşağıdaki liste B1 düzeyinin resmî tanımlarından (CEFR) oluşuyor: her maddeyi dürüstçe işaretle; işaretleyemediğin madde, planının ilk adımıdır. Otuz gün boyunca her gün beş saat çalışabildiysen bu adımı da atabilirsin. [[Good luck!]] – Bol şans!</p>" }
});
