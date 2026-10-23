/* ============ COPY — all strings live here (marketing edits text, not layout) ============ */
const BRAND={ game:'Kaveos', intuition:'Kaveos', shake:'Kaveos', trader:null, learn:null };
const UNBRANDED={
  en:{legal:"[Legal entity · reg. no. · address]",shortLegal:"Short trades"},
  id:{legal:"[Badan hukum · no. reg. · alamat]",shortLegal:"Trade singkat"}
};
function brandOf(track){ return BRAND[track]||null; }
const C = {
  common:{
    en:{help:"Help",lang:"EN",legal:"Kaveos · [legal entity from Footer library]",age:"18+",langLabel:"English",footerNote:"Footer component from Design system: legal entity, 18+, language.",moneyTitle:"What about money?"},
    id:{help:"Bantuan",lang:"ID",legal:"Kaveos · [badan hukum dari Footer library]",age:"18+",langLabel:"Bahasa Indonesia",footerNote:"Komponen Footer dari Design system: badan hukum, 18+, bahasa.",moneyTitle:"Soal uang"}
  },
  game:{
    en:{
      h1:"What's\nyour call?",
      points:"You play with Kavo points. Points can't be cashed out.",
      agree:"{p}% think so too",
      how:"How it works",
      steps:["Pick yes or no","The event happens","Get points and a spot on the board"],
      hot:"What people argue about today",
      tabs:["Tech","AI","Sport","Culture","Indonesia"],
      board:"This week's board",
      cols:["Player","Points","Streak"],
      mySpot:"your spot",
      moneyLines:["The game is free.","Points can't be bought or exchanged.","A real-money account is a separate mode. We'll explain it inside."],
      faq:[["Is it free?","Yes. There's nothing to buy to play."],["Can I cash out points?","No. Points are score, not money. They show your rank."],["Who decides how an event ended?","The public source named on each card: official announcements or final results. The outcome is posted the day it's known."],["Do I need the app?","No. It works in the browser. The app is optional."]],
      cta:"Keep my streak",
      sheetTitle:"3 answers saved after sign-in",
      sheetCap:"Your streak starts now. Sign in to keep it.",
      input:"Phone or email",
      cards:[
        {cat:"AI",q:"GPT-6 out before the end of 2026?",y:62},
        {cat:"Culture",q:"An AI-made film gets an Oscar nomination this season?",y:41},
        {cat:"Tech",q:"Apple outsells Samsung in Indonesia this quarter?",y:33},
        {cat:"Indonesia",q:"Timnas Indonesia reaches the next round?",y:71},
        {cat:"Tech",q:"EVs pass 10% of new car sales in Jakarta by December?",y:48},
        {cat:"AI",q:"A new data center is announced in Batam this month?",y:55}
      ]
    },
    id:{
      h1:"Menurutmu\ngimana?",
      points:"Main pakai poin Kavo. Poin nggak bisa ditarik.",
      agree:"{p}% mikir sama kayak kamu",
      how:"Cara mainnya",
      steps:["Pilih ya atau nggak","Kejadiannya berlangsung","Dapat poin dan posisi di papan"],
      hot:"Yang lagi diributin hari ini",
      tabs:["Tech","AI","Olahraga","Budaya","Indonesia"],
      board:"Papan minggu ini",
      cols:["Pemain","Poin","Streak"],
      mySpot:"tempatmu",
      moneyLines:["Mainnya gratis.","Poin nggak bisa dibeli atau ditukar.","Akun uang asli itu mode terpisah. Kami jelaskan di dalam."],
      faq:[["Ini gratis?","Ya. Nggak ada yang perlu dibeli buat main."],["Poin bisa ditarik?","Nggak. Poin itu skor, bukan uang. Poin nunjukin peringkatmu."],["Siapa yang nentuin hasil kejadian?","Sumber publik yang disebut di tiap kartu: pengumuman resmi atau hasil akhir. Hasilnya diposting di hari yang sama begitu diketahui."],["Perlu install aplikasi?","Nggak. Bisa di browser. Aplikasi opsional."]],
      cta:"Simpan skorku",
      sheetTitle:"3 jawaban disimpan setelah masuk",
      sheetCap:"Streak-mu mulai sekarang. Masuk biar nggak hilang.",
      input:"Nomor HP atau email",
      cards:[
        {cat:"AI",q:"GPT-6 rilis sebelum akhir 2026?",y:62},
        {cat:"Budaya",q:"Film buatan AI dapat nominasi Oscar musim ini?",y:41},
        {cat:"Tech",q:"Apple ngalahin Samsung di Indonesia kuartal ini?",y:33},
        {cat:"Indonesia",q:"Timnas Indonesia lolos ke babak berikutnya?",y:71},
        {cat:"Tech",q:"Mobil listrik tembus 10% penjualan mobil baru di Jakarta sampai Desember?",y:48},
        {cat:"AI",q:"Ada data center baru diumumkan di Batam bulan ini?",y:55}
      ]
    }
  },
  intuition:{
    en:{
      h1:"How good is your gut?\n5 questions, 60 seconds.",
      start:"Start",
      startCap:"No sign-up to play. Sign up only to save your score.",
      today:"played today",
      with:"{p}% with you",
      closes:"Closes {d}",
      qs:[
        {t:"AI",q:"GPT-6 out before the end of 2026?",y:62,d:"31 Dec"},
        {t:"Film",q:"An AI-made film gets an Oscar nomination?",y:41,d:"22 Jan"},
        {t:"Phones",q:"Apple outsells Samsung in Indonesia this quarter?",y:33,d:"15 Dec"},
        {t:"EV",q:"EVs pass 10% of new car sales in Jakarta by December?",y:48,d:"5 Jan"},
        {t:"Data",q:"A new data center is announced in Batam this month?",y:55,d:"30 Nov"}
      ],
      types:{contrarian:["Contrarian","You go against the room. We'll see who's right."],early:["Early","You're ahead of most answers. Let's see if the room catches up."],mixed:["Mixed","Half with the room, half your own way."],crowd:["With the crowd","You read the room well. Now see if the room was right."]},
      resultLead:"Your gut type",
      yourCall:"Your call",
      crowd:"crowd",
      save:"Save my result & see how it ends",
      share:"Share",
      points:"Inside you play with Kavo points. Points can't be cashed out.",
      next:"What's next",
      nextSteps:["The events resolve on their dates","You get a score for each one","New questions every day"],
      faq:[["Is it free?","Yes. There's nothing to buy."],["Can I cash out points?","No. Points are score, not money."],["Who decides how an event ended?","The public source named on each card. The outcome is posted the day it's known."],["Do I need the app?","No. It works in the browser."]],
      moneyLines:["The game is free.","Points can't be bought or exchanged.","A real-money account is a separate mode. We'll explain it inside."],
      sheetTitle:"Save your result",
      sheetCap:"We'll tell you how each of the 5 events ends.",
      input:"Phone or email",
      returned:"You've already played. 2 of 5 events have closed.",
      seeResult:"See my result",
      shareLabel:"Share card · 9:16 story frame"
    },
    id:{
      h1:"Seberapa tajam instingmu?\n5 pertanyaan, 1 menit.",
      start:"Mulai",
      startCap:"Nggak perlu daftar buat main. Daftar cuma buat simpan skor.",
      today:"orang main hari ini",
      with:"{p}% sama kayak kamu",
      closes:"Ditutup {d}",
      qs:[
        {t:"AI",q:"GPT-6 rilis sebelum akhir 2026?",y:62,d:"31 Des"},
        {t:"Film",q:"Film buatan AI dapat nominasi Oscar?",y:41,d:"22 Jan"},
        {t:"HP",q:"Apple ngalahin Samsung di Indonesia kuartal ini?",y:33,d:"15 Des"},
        {t:"EV",q:"Mobil listrik tembus 10% penjualan mobil baru di Jakarta sampai Desember?",y:48,d:"5 Jan"},
        {t:"Data",q:"Ada data center baru diumumkan di Batam bulan ini?",y:55,d:"30 Nov"}
      ],
      types:{contrarian:["Pelawan arus","Kamu beda dari kebanyakan. Kita lihat siapa yang benar."],early:["Lebih dulu","Kamu di depan kebanyakan jawaban. Kita lihat apa yang lain nyusul."],mixed:["Campuran","Setengah ikut ramai, setengah jalan sendiri."],crowd:["Ikut arus","Kamu paham suasana. Sekarang lihat apa ramai-ramai itu benar."]},
      resultLead:"Tipe instingmu",
      yourCall:"Pilihanmu",
      crowd:"ramai",
      save:"Simpan hasil & lihat akhirnya",
      share:"Bagikan",
      points:"Di dalam, main pakai poin Kavo. Poin nggak bisa ditarik.",
      next:"Selanjutnya",
      nextSteps:["Kejadian ditutup sesuai tanggalnya","Kamu dapat skor untuk tiap kejadian","Pertanyaan baru tiap hari"],
      faq:[["Ini gratis?","Ya. Nggak ada yang perlu dibeli."],["Poin bisa ditarik?","Nggak. Poin itu skor, bukan uang."],["Siapa yang nentuin hasil kejadian?","Sumber publik yang disebut di tiap kartu. Hasil diposting di hari yang sama begitu diketahui."],["Perlu install aplikasi?","Nggak. Bisa di browser."]],
      moneyLines:["Mainnya gratis.","Poin nggak bisa dibeli atau ditukar.","Akun uang asli itu mode terpisah. Kami jelaskan di dalam."],
      sheetTitle:"Simpan hasilmu",
      sheetCap:"Kami kabari gimana akhir tiap kejadian dari 5 itu.",
      input:"Nomor HP atau email",
      returned:"Kamu sudah main. 2 dari 5 kejadian sudah ditutup.",
      seeResult:"Lihat hasilku",
      shareLabel:"Kartu share · frame story 9:16"
    }
  },
  trader:{
    en:{
      h1:"Short trades on gold, EUR and crypto. Payout up to 80%. Entry from $10.",
      cta:"Open account",
      asset:"Gold",pair:"XAU/USD",tfs:["60 s","2 m","5 m"],up:"Up",down:"Down",
      quoteAmt:"Amount",quotePay:"Payout 80%",quoteRet:"Return at close",
      lockNote:"Controls unlock after sign-up",
      nums:[["Rp 160.000","Min deposit"],["Rp 16.000","Min trade"],["60 s","Trade from"],["80%","Payout up to"]],
      moneyTitle:"Money goes in and out one way",
      moneySub:"Only methods that work for both deposit and withdrawal in your country.",
      methods:["QRIS","DANA","OVO"],
      rows:[["Withdrawal method","Same as deposit method"],["Withdrawal time","Up to 24 h on business days"],["Minimum withdrawal","Rp 160.000"],["Needed for first withdrawal","Verified phone + 2FA"],["Fee if turnover is under 2× deposit","10% of the withdrawal"]],
      howTitle:"How a trade goes",
      scr:[["1 · Choose asset","Gold · 60 s"],["2 · Amount and direction","$10 · Down"],["3 · Result after 60 s","Gold closed above. −$10"]],
      scrLabels:{asset:"Asset",amount:"Amount",dir:"Direction",closed:"Closed",result:"Result"},
      assetsTitle:"Assets and payout now",
      assets:[["Z-CRY/IDX","Crypto index",80],["EUR/USD","Forex",78],["AUD/USD","Forex",75],["Gold","XAU/USD",80],["BTC","BTC/USD",76]],
      whoTitle:"Who we are",
      who:[["Company","[legal entity from Footer library]"],["Operating since","2023"],["Countries","Indonesia, Malaysia"],["Support","Chat in app and email, 7 days a week"]],
      risk:"Short trades can lose the full amount you put in.",
      faq:[["How do I withdraw?","Cashier → Withdraw → the method you deposited with. Enter the amount, confirm with 2FA."],["How long does a withdrawal take?","Up to 24 hours on business days. Weekend requests are processed on Monday."],["Why can a withdrawal be declined?","The method differs from the deposit method; the phone isn't verified; the amount is below the minimum; the account has an open dispute; or turnover is under 2× the deposit without the fee applied."],["What does payout 80% mean?","On a $10 trade that closes in your direction you get $18 back: your $10 plus 80%. If it closes against you, the $10 is lost."],["Can I try without money?","Yes. A demo account with the same trade sizes as the real one."]],
      sheetTitle:"Open account",
      sheetCap:"Phone or email. One screen, then the cashier.",
      input:"Phone or email"
    },
    id:{
      h1:"Trade singkat emas, EUR, dan kripto. Payout sampai 80%. Mulai dari Rp 160.000.",
      cta:"Buka akun",
      asset:"Emas",pair:"XAU/USD",tfs:["60 dtk","2 mnt","5 mnt"],up:"Naik",down:"Turun",
      quoteAmt:"Jumlah",quotePay:"Payout 80%",quoteRet:"Kembali saat tutup",
      lockNote:"Kontrol aktif setelah daftar",
      nums:[["Rp 160.000","Deposit min"],["Rp 16.000","Trade min"],["60 dtk","Trade mulai"],["80%","Payout sampai"]],
      moneyTitle:"Uang masuk dan keluar lewat jalur yang sama",
      moneySub:"Hanya metode yang bisa untuk setor dan tarik di negaramu.",
      methods:["QRIS","DANA","OVO"],
      rows:[["Metode penarikan","Sama dengan metode setor"],["Waktu penarikan","Sampai 24 jam di hari kerja"],["Penarikan minimum","Rp 160.000"],["Syarat penarikan pertama","HP terverifikasi + 2FA"],["Biaya jika turnover di bawah 2× deposit","10% dari jumlah penarikan"]],
      howTitle:"Jalannya satu trade",
      scr:[["1 · Pilih aset","Emas · 60 dtk"],["2 · Jumlah dan arah","Rp 160.000 · Turun"],["3 · Hasil setelah 60 dtk","Emas tutup di atas. −Rp 160.000"]],
      scrLabels:{asset:"Aset",amount:"Jumlah",dir:"Arah",closed:"Tutup",result:"Hasil"},
      assetsTitle:"Aset dan payout sekarang",
      assets:[["Z-CRY/IDX","Indeks kripto",80],["EUR/USD","Forex",78],["AUD/USD","Forex",75],["Emas","XAU/USD",80],["BTC","BTC/USD",76]],
      whoTitle:"Siapa kami",
      who:[["Perusahaan","[badan hukum dari Footer library]"],["Beroperasi sejak","2023"],["Negara","Indonesia, Malaysia"],["Dukungan","Chat di aplikasi dan email, 7 hari seminggu"]],
      risk:"Trade singkat bisa menghabiskan seluruh uang yang kamu setor.",
      faq:[["Gimana cara tarik dana?","Kasir → Tarik → metode yang kamu pakai untuk setor. Masukkan jumlah, konfirmasi dengan 2FA."],["Berapa lama penarikan?","Sampai 24 jam di hari kerja. Permintaan di akhir pekan diproses hari Senin."],["Kenapa penarikan bisa ditolak?","Metode beda dari metode setor; HP belum diverifikasi; jumlah di bawah minimum; akun punya sengketa terbuka; atau turnover di bawah 2× deposit tanpa biaya diterapkan."],["Apa arti payout 80%?","Trade Rp 160.000 yang tutup sesuai arahmu mengembalikan Rp 288.000: Rp 160.000 kamu plus 80%. Kalau tutup berlawanan, Rp 160.000 itu hilang."],["Bisa coba tanpa uang?","Bisa. Akun demo dengan ukuran trade yang sama seperti akun asli."]],
      sheetTitle:"Buka akun",
      sheetCap:"HP atau email. Satu layar, lalu kasir.",
      input:"Nomor HP atau email"
    }
  },
  learn:{
    en:{
      h1:"Learn how a short trade works. *10 minutes*, free, no deposit.",
      cta2:"Continue course",
      sub:"Lesson 1 starts right here. Try one demo trade before you sign up.",
      cta:"Start lesson 1",
      demoAsset:"Gold",demoPair:"XAU/USD",demoAmt:"Demo amount",demoLen:"60 s, shortened to 5 s here",
      pick:"Where will the price close?",up:"Up",down:"Down",waiting:"Closing in",
      lost:["Closed against you.","The price closed on the other side of your entry. In a real account this trade would lose its amount."],
      won:["Closed in your direction.","In a real account you would get your amount back plus 80%. Lesson 3 shows what that means in money."],
      again:"Try again",
      demoLine:"This is a demo. Nothing is deposited, nothing is paid out.",
      progress:"of 5 lessons",
      courseTitle:"The course",
      lessons:[["What a short trade is","Entry, expiry, Up or Down.","2 min",false],["Reading the chart","What moves in 60 seconds and what doesn't.","2 min",false],["Amount, payout and what you lose","The one lesson you can't skip.","3 min",true],["Demo: your first 5 trades","Same chart and sizes as the real account.","3 min",false],["Money in and out: the rules","Deposit, withdrawal, what can be declined.","2 min",true]],
      must:"Required",
      cmpTitle:"Demo and real account",
      cmpCols:["","Demo","Real"],
      cmp:[["Chart and assets","Same","Same"],["Trade size","Same","Same"],["Trade length","60 s and up","60 s and up"],["Deposit","None","From Rp 160.000"],["Payout","None","Up to 80%"],["Can lose money","No","Yes, the amount you put in"]],
      termsTitle:"Terms you'll meet",
      terms:[["Entry","The price at the moment you open the trade."],["Expiry","When the trade closes: 60 s, 2 min, 5 min."],["Payout","What you get back on top of your amount if the trade closes your way."],["Asset","What you trade on: gold, a currency pair, a crypto index."]],
      risk:"A real account can lose what you put in. The course exists so you know that before you deposit.",
      faq:[["Do I need money to learn?","No. The course and the demo account are free, no deposit."],["Is the demo the same as the real account?","Same chart, same trade sizes, same timing. The difference is that nothing is deposited and nothing is paid out."],["When do I get a real account?","After lesson 5, if you want one. It's a separate step inside the app, with the money rules shown again."],["How long is the course?","12 minutes in total. Lessons 3 and 5 are required."]],
      sheetTitle:"Your first demo trade is done",
      sheetCap:"Sign up to keep the course progress.",
      sheetBtn:"Continue course",
      input:"Phone or email"
    },
    id:{
      h1:"Pelajari cara kerja trade singkat. *10 menit*, gratis, tanpa deposit.",
      cta2:"Lanjutkan kursus",
      sub:"Pelajaran 1 mulai di sini. Coba satu trade demo sebelum daftar.",
      cta:"Mulai pelajaran 1",
      demoAsset:"Emas",demoPair:"XAU/USD",demoAmt:"Jumlah demo",demoLen:"60 dtk, dipersingkat jadi 5 dtk di sini",
      pick:"Harga tutup di mana?",up:"Naik",down:"Turun",waiting:"Tutup dalam",
      lost:["Tutup berlawanan.","Harga tutup di sisi lain dari entry-mu. Di akun asli, trade ini kehilangan jumlahnya."],
      won:["Tutup searah.","Di akun asli, kamu dapat jumlahmu kembali plus 80%. Pelajaran 3 nunjukin artinya dalam uang."],
      again:"Coba lagi",
      demoLine:"Ini demo. Nggak ada yang disetor, nggak ada yang dibayar.",
      progress:"dari 5 pelajaran",
      courseTitle:"Kursusnya",
      lessons:[["Apa itu trade singkat","Entry, expiry, Naik atau Turun.","2 mnt",false],["Membaca grafik","Apa yang bergerak dalam 60 detik dan apa yang nggak.","2 mnt",false],["Jumlah, payout, dan apa yang hilang","Satu pelajaran yang nggak bisa dilewati.","3 mnt",true],["Demo: 5 trade pertamamu","Grafik dan ukuran sama dengan akun asli.","3 mnt",false],["Uang masuk dan keluar: aturannya","Setor, tarik, apa yang bisa ditolak.","2 mnt",true]],
      must:"Wajib",
      cmpTitle:"Akun demo dan akun asli",
      cmpCols:["","Demo","Asli"],
      cmp:[["Grafik dan aset","Sama","Sama"],["Ukuran trade","Sama","Sama"],["Durasi trade","60 dtk ke atas","60 dtk ke atas"],["Deposit","Nggak ada","Mulai Rp 160.000"],["Payout","Nggak ada","Sampai 80%"],["Bisa kehilangan uang","Nggak","Ya, jumlah yang kamu setor"]],
      termsTitle:"Istilah yang akan kamu temui",
      terms:[["Entry","Harga saat kamu buka trade."],["Expiry","Saat trade tutup: 60 dtk, 2 mnt, 5 mnt."],["Payout","Yang kamu dapat di atas jumlahmu kalau trade tutup searah."],["Aset","Yang kamu trade: emas, mata uang, indeks kripto."]],
      risk:"Akun asli bisa kehilangan uang yang kamu setor. Kursus ini ada supaya kamu tahu itu sebelum deposit.",
      faq:[["Perlu uang buat belajar?","Nggak. Kursus dan akun demo gratis, tanpa deposit."],["Demo sama dengan akun asli?","Grafik, ukuran trade, dan waktu sama. Bedanya, nggak ada yang disetor dan nggak ada yang dibayar."],["Kapan dapat akun asli?","Setelah pelajaran 5, kalau kamu mau. Langkah terpisah di dalam aplikasi, aturan uangnya ditampilkan lagi."],["Berapa lama kursusnya?","Total 12 menit. Pelajaran 3 dan 5 wajib."]],
      sheetTitle:"Trade demo pertamamu selesai",
      sheetCap:"Daftar biar progres kursus tersimpan.",
      sheetBtn:"Lanjutkan kursus",
      input:"Nomor HP atau email"
    }
  },
  shake:{
    en:{
      h1:"Shake the cup.\nThen make your call.",
      tap:"Tap to shake",
      shakeBtn:"Shake",
      stickLead:"Stick",
      todays:"Today's question",
      agree:"{p}% with you",
      next:"Shake again",
      points:"You play with Kavo points. Points can't be cashed out.",
      how:"How it works",
      steps:["The cup picks your topic","You answer yes or no","The event happens. You get points"],
      shakenTitle:"Shaken today",
      shakenCap:"got this stick",
      topics:["AI","Film","Phones","Timnas","EV","Data"],
      moneyLines:["The game is free.","Points can't be bought or exchanged.","A real-money account is a separate mode. We'll explain it inside."],
      faq:[["Does the cup decide the outcome?","No. The cup only picks which question you get. The outcome is decided by the real event, on its date."],["Is it free?","Yes. There's nothing to buy."],["Can I cash out points?","No. Points are score, not money."],["Can I pick the topic myself?","Not on the first three. After sign-in you choose from the feed."]],
      cta:"Save my sticks",
      sheetTitle:"Three sticks shaken",
      sheetCap:"Sign in to keep them and see how each event ends.",
      input:"Phone or email",
      share:"Share",
      shareLabel:"Share card · 9:16 story frame",
      qs:[
        {q:"GPT-6 out before the end of 2026?",y:62},
        {q:"An AI-made film gets an Oscar nomination this season?",y:41},
        {q:"Apple outsells Samsung in Indonesia this quarter?",y:33},
        {q:"Timnas Indonesia reaches the next round?",y:71},
        {q:"EVs pass 10% of new car sales in Jakarta by December?",y:48},
        {q:"A new data center is announced in Batam this month?",y:55}
      ]
    },
    id:{
      h1:"Kocok dulu.\nLalu tentukan pilihanmu.",
      tap:"Ketuk buat ngocok",
      shakeBtn:"Kocok",
      stickLead:"Batang",
      todays:"Pertanyaan hari ini",
      agree:"{p}% sama kayak kamu",
      next:"Kocok lagi",
      points:"Main pakai poin Kavo. Poin nggak bisa ditarik.",
      how:"Cara mainnya",
      steps:["Gelasnya milih temamu","Kamu jawab ya atau nggak","Kejadiannya berlangsung. Kamu dapat poin"],
      shakenTitle:"Dikocok hari ini",
      shakenCap:"dapat batang ini",
      topics:["AI","Film","HP","Timnas","EV","Data"],
      moneyLines:["Mainnya gratis.","Poin nggak bisa dibeli atau ditukar.","Akun uang asli itu mode terpisah. Kami jelaskan di dalam."],
      faq:[["Gelasnya yang nentuin hasil?","Nggak. Gelas cuma milih pertanyaan mana yang kamu dapat. Hasilnya ditentukan kejadian nyata, di tanggalnya."],["Ini gratis?","Ya. Nggak ada yang perlu dibeli."],["Poin bisa ditarik?","Nggak. Poin itu skor, bukan uang."],["Bisa pilih tema sendiri?","Nggak di tiga pertama. Setelah masuk, kamu pilih dari feed."]],
      cta:"Simpan batangku",
      sheetTitle:"Tiga batang sudah dikocok",
      sheetCap:"Masuk biar tersimpan dan kamu tahu akhir tiap kejadian.",
      input:"Nomor HP atau email",
      share:"Bagikan",
      shareLabel:"Kartu share · frame story 9:16",
      qs:[
        {q:"GPT-6 rilis sebelum akhir 2026?",y:62},
        {q:"Film buatan AI dapat nominasi Oscar musim ini?",y:41},
        {q:"Apple ngalahin Samsung di Indonesia kuartal ini?",y:33},
        {q:"Timnas Indonesia lolos ke babak berikutnya?",y:71},
        {q:"Mobil listrik tembus 10% penjualan mobil baru di Jakarta sampai Desember?",y:48},
        {q:"Ada data center baru diumumkan di Batam bulan ini?",y:55}
      ]
    }
  },
  cards:{
    en:{
      h1:"Pull a card.\nThen make your call.",
      hint:"Tap a card",
      decks:["Tarot","Wayang"],
      todays:"Today's question",
      agree:"{p}% with you",
      next:"Next card",
      points:"You play with Kavo points. Points can't be cashed out.",
      how:"How it works",
      steps:["The card gives you a theme","You answer yes or no","The event happens. You get points"],
      pulledTitle:"Pulled today",
      pulledCap:"pulled this card",
      moneyLines:["The game is free.","Points can't be bought or exchanged.","A real-money account is a separate mode. We'll explain it inside."],
      faq:[["Does the card decide the outcome?","No. The card gives you a theme and a prompt. The outcome is decided by the real event, on its date."],["Is it free?","Yes. There's nothing to buy."],["Can I cash out points?","No. Points are score, not money."],["What's the difference between the decks?","Only the cards and their prompts. The questions and the points are the same."]],
      cta:"Save my reading",
      sheetTitle:"Three cards pulled",
      sheetCap:"Sign in to keep the reading and see how each event ends.",
      input:"Phone or email",
      share:"Share",
      shareLabel:"Share card · 9:16 story frame",
      tarot:[["0","The Fool","Start before you're sure."],["I","The Magician","You already have what you need."],["II","The High Priestess","Trust what you don't say out loud."],["X","The Wheel","Things turn faster than you think."],["XVII","The Star","Hope, but check the date."],["XVI","The Tower","Something big is about to flip."]],
      wayang:[["","Semar","The wise one laughs at certainty."],["","Arjuna","Aim, then let go."],["","Bima","Go straight through."],["","Srikandi","Courage is a choice you make today."],["","Gatotkaca","Look at it from above."],["","Hanoman","Loyal to the truth, not the crowd."]],
      qs:[
        {q:"GPT-6 out before the end of 2026?",y:62},
        {q:"An AI-made film gets an Oscar nomination this season?",y:41},
        {q:"Apple outsells Samsung in Indonesia this quarter?",y:33},
        {q:"Timnas Indonesia reaches the next round?",y:71},
        {q:"EVs pass 10% of new car sales in Jakarta by December?",y:48},
        {q:"A new data center is announced in Batam this month?",y:55}
      ]
    },
    id:{
      h1:"Tarik kartu.\nLalu tentukan pilihanmu.",
      hint:"Ketuk satu kartu",
      decks:["Tarot","Wayang"],
      todays:"Pertanyaan hari ini",
      agree:"{p}% sama kayak kamu",
      next:"Kartu berikutnya",
      points:"Main pakai poin Kavo. Poin nggak bisa ditarik.",
      how:"Cara mainnya",
      steps:["Kartu kasih kamu tema","Kamu jawab ya atau nggak","Kejadiannya berlangsung. Kamu dapat poin"],
      pulledTitle:"Ditarik hari ini",
      pulledCap:"narik kartu ini",
      moneyLines:["Mainnya gratis.","Poin nggak bisa dibeli atau ditukar.","Akun uang asli itu mode terpisah. Kami jelaskan di dalam."],
      faq:[["Kartunya yang nentuin hasil?","Nggak. Kartu kasih tema dan petunjuk. Hasilnya ditentukan kejadian nyata, di tanggalnya."],["Ini gratis?","Ya. Nggak ada yang perlu dibeli."],["Poin bisa ditarik?","Nggak. Poin itu skor, bukan uang."],["Apa beda dua koleksi kartunya?","Cuma kartunya dan petunjuknya. Pertanyaan dan poinnya sama."]],
      cta:"Simpan kartuku",
      sheetTitle:"Tiga kartu sudah ditarik",
      sheetCap:"Masuk biar kartumu tersimpan dan kamu tahu akhir tiap kejadian.",
      input:"Nomor HP atau email",
      share:"Bagikan",
      shareLabel:"Kartu share · frame story 9:16",
      tarot:[["0","The Fool","Mulai sebelum kamu yakin."],["I","The Magician","Kamu sudah punya yang kamu butuhkan."],["II","The High Priestess","Percaya yang nggak kamu ucapkan."],["X","The Wheel","Semuanya berputar lebih cepat dari dugaanmu."],["XVII","The Star","Berharap boleh, tapi cek tanggalnya."],["XVI","The Tower","Sesuatu yang besar mau berbalik."]],
      wayang:[["","Semar","Yang bijak tertawa pada kepastian."],["","Arjuna","Bidik, lalu lepaskan."],["","Bima","Terjang lurus."],["","Srikandi","Berani itu pilihan hari ini."],["","Gatotkaca","Lihat dari atas."],["","Hanoman","Setia pada kebenaran, bukan pada keramaian."]],
      qs:[
        {q:"GPT-6 rilis sebelum akhir 2026?",y:62},
        {q:"Film buatan AI dapat nominasi Oscar musim ini?",y:41},
        {q:"Apple ngalahin Samsung di Indonesia kuartal ini?",y:33},
        {q:"Timnas Indonesia lolos ke babak berikutnya?",y:71},
        {q:"Mobil listrik tembus 10% penjualan mobil baru di Jakarta sampai Desember?",y:48},
        {q:"Ada data center baru diumumkan di Batam bulan ini?",y:55}
      ]
    }
  }
};

/* ============ state ============ */
const S = { track:'game', lang:'en', get vp(){ return window.innerWidth>=900?'w':'m'; },
  game:{idx:0, answered:[], sheet:false},
  intuition:{screen:'start', q:0, answers:[], sheet:false, share:false, returned:false},
  trader:{sheet:false},
  learn:{phase:'pick', dir:null, result:null, done:0, sheet:false, timer:0, left:5},
  cards:{deck:0, round:0, picked:null, answered:null, pulled:[], sheet:false, share:false},
  shake:{round:0, picked:null, answered:null, pulled:[], sheet:false, share:false, shaking:false}
};
/* original line glyphs for the card faces (not reproductions of any printed deck) */
const IMG={tarot:null,wayang:null};
function cardArt(deckKey,ci,cls){ return IMG[deckKey]?`<img class="${cls||'art'}" src="${IMG[deckKey][ci]}" alt="">`:GLYPH[deckKey][ci]; }
const GLYPH={
  tarot:[
    /* The Fool: sun, cliff edge, figure stepping off with a bundle, flower */
    '<svg viewBox="0 0 100 110"><circle cx="76" cy="22" r="10" class="f"/><g class="s"><path d="M76 4v6M76 34v6M58 22h6M88 22h6M63 9l4 4M85 31l4 4M63 35l4-4M85 13l4-4"/></g><path class="f2" d="M0 110V70l22-4 10-10 14-2 8 14 46 4v38z"/><g class="s"><path d="M40 96V62M40 66l12-8-12-4"/><circle cx="40" cy="54" r="6" class="f"/><path d="M40 70l-10 26M40 70l8 24M34 76l-14 6"/><path d="M28 60l-10-2 4-6"/></g><circle cx="18" cy="88" r="3" class="f"/><path class="s" d="M18 91v8M14 95h8"/></svg>',
    /* The Magician: lemniscate, raised wand with star, table with cup, pentacle, sword */
    '<svg viewBox="0 0 100 110"><path class="s" d="M30 20c0-8 12-8 20 0s20 8 20 0-12-8-20 0-20 8-20 0z"/><path class="s" d="M50 32v30"/><path class="f" d="M50 24l2.5 6 6.5.6-5 4.3 1.5 6.4-5.5-3.4-5.5 3.4 1.5-6.4-5-4.3 6.5-.6z"/><path class="s" d="M14 76h72M20 76v26M80 76v26"/><path class="f2" d="M22 62h14v6a7 7 0 0 1-14 0z"/><path class="s" d="M29 68v8"/><circle cx="50" cy="68" r="8" class="f2"/><path class="s" d="M50 60l2.4 7.4 7.6.2-6.2 4.4 2.4 7-6.2-4.6-6.2 4.6 2.4-7-6.2-4.4 7.6-.2z"/><path class="f2" d="M68 60h8l-4 16z"/><path class="s" d="M66 58h12"/><g class="s"><path d="M14 100q18-8 36 0t36 0"/></g></svg>',
    /* The High Priestess: two pillars, veil of pomegranates, triple crown, crescent at the feet */
    '<svg viewBox="0 0 100 110"><rect x="6" y="18" width="14" height="84" class="f2"/><rect x="80" y="18" width="14" height="84" class="f2"/><path class="s" d="M4 18h18M78 18h18M4 102h18M78 102h18"/><g class="f3"><circle cx="34" cy="30" r="3"/><circle cx="50" cy="26" r="3"/><circle cx="66" cy="30" r="3"/><circle cx="42" cy="42" r="3"/><circle cx="58" cy="42" r="3"/><circle cx="34" cy="54" r="3"/><circle cx="66" cy="54" r="3"/></g><circle cx="50" cy="60" r="9" class="f"/><path class="s" d="M38 56a12 12 0 0 1 0 8M62 56a12 12 0 0 0 0 8"/><path class="f2" d="M32 100c0-14 8-26 18-26s18 12 18 26z"/><path class="s" d="M50 74v26"/><path class="f" d="M30 104a22 22 0 0 0 40 0 14 14 0 0 1-40 0z"/></svg>',
    /* The Wheel: eight-spoked wheel, inner ring, four winged corners */
    '<svg viewBox="0 0 100 110"><circle cx="50" cy="56" r="34" class="f3"/><circle cx="50" cy="56" r="34" class="s"/><circle cx="50" cy="56" r="20" class="s"/><circle cx="50" cy="56" r="7" class="f"/><g class="s"><path d="M50 22v68M16 56h68M26 32l48 48M74 32L26 80"/></g><g class="f2"><path d="M8 12q10 8 20 0-10 10-20 0zM72 12q10 8 20 0-10 10-20 0zM8 100q10-8 20 0-10-10-20 0zM72 100q10-8 20 0-10-10-20 0z"/></g><path class="f" d="M50 10l6 10H44z"/></svg>',
    /* The Star: one great eight-point star, seven small, water poured from two vessels */
    '<svg viewBox="0 0 100 110"><path class="f" d="M50 6l4 16 12-8-8 12 16 4-16 4 8 12-12-8-4 16-4-16-12 8 8-12-16-4 16-4-8-12 12 8z"/><g class="f3"><path d="M14 20l2 6 6 1-5 3 1 6-4-4-5 4 1-6-5-3 6-1zM86 20l2 6 6 1-5 3 1 6-4-4-5 4 1-6-5-3 6-1zM12 56l1.5 4 4 .5-3 2.5 1 4-3.5-2.5-3.5 2.5 1-4-3-2.5 4-.5zM88 56l1.5 4 4 .5-3 2.5 1 4-3.5-2.5-3.5 2.5 1-4-3-2.5 4-.5zM26 44l1.5 4 4 .5-3 2.5 1 4-3.5-2.5-3.5 2.5 1-4-3-2.5 4-.5zM74 44l1.5 4 4 .5-3 2.5 1 4-3.5-2.5-3.5 2.5 1-4-3-2.5 4-.5zM50 60l1.5 4 4 .5-3 2.5 1 4-3.5-2.5-3.5 2.5 1-4-3-2.5 4-.5z"/></g><path class="f2" d="M0 110V92q14-6 28 0t22 0 22 0 28 0v18z"/><g class="s"><path d="M30 76c-6 2-8 8-4 18M70 76c6 2 8 8 4 18"/><path d="M8 96q10-5 20 0M72 96q10-5 20 0"/></g><path class="f2" d="M26 72l10-2v6l-10 2zM64 70l10 2v6l-10-2z"/></svg>',
    /* The Tower: crowned tower struck by lightning, flames, falling crown */
    '<svg viewBox="0 0 100 110"><path class="f2" d="M34 108V40h32v68z"/><path class="s" d="M34 40h32M30 40l4-6h32l4 6"/><path class="f" d="M34 34h6v-6h6v6h8v-6h6v6h6v6H34z"/><path class="f" d="M92 2L68 34l10-2-18 30 24-26-10 2z"/><g class="f"><path d="M22 54l6 12-10-4 2 12-8-8zM78 70l6 12-10-4 2 12-8-8zM50 60l5 10-8-3 1 9-6-6z"/></g><path class="f3" d="M12 30l4-8 4 8-4 2z"/><path class="s" d="M14 22h4"/><g class="s"><path d="M42 72h6v8h-6zM52 56h6v8h-6zM42 90h6v8h-6z"/></g><circle cx="20" cy="96" r="2.5" class="f3"/><circle cx="84" cy="98" r="2.5" class="f3"/><circle cx="10" cy="70" r="2" class="f3"/></svg>'
  ],
  wayang:[
    /* Semar: round body, kuncung tuft, raised index finger */
    '<svg viewBox="0 0 100 110"><path class="f" d="M40 20c0-10 8-16 16-14 3-8 10-6 12 0 6 1 8 8 6 14 4 6 2 14-6 16l-26 0c-8-4-8-12-2-16z"/><path class="s" d="M62 4q4-4 8 0"/><path class="f2" d="M30 52c-10 8-18 24-14 44 2 10 14 12 32 12s30-2 32-12c4-20-4-36-14-44z"/><path class="s" d="M22 92q28 10 56 0"/><path class="f3" d="M34 52h32l4 8H30z"/><g class="s"><path d="M70 60l12-10 4-12M86 38l2-10"/><circle cx="48" cy="26" r="2"/><circle cx="60" cy="26" r="2"/><path d="M46 34q8 6 16 0"/></g><circle cx="88" cy="26" r="2.5" class="f"/></svg>',
    /* Arjuna: drawn bow, arrow, gelung headdress crescent */
    '<svg viewBox="0 0 100 110"><path class="f" d="M50 6c-10 0-18 6-20 14 4-4 10-6 20-6s16 2 20 6c-2-8-10-14-20-14z"/><path class="s" d="M44 20h12M50 20v6"/><path class="s" d="M22 34q28-16 56 0"/><path class="s" d="M14 44c-6 24 0 48 20 60M86 44c6 24 0 48-20 60"/><path class="s" d="M14 44L86 44"/><path class="s" d="M16 104L84 104"/><path class="s" d="M50 44v60"/><path class="f" d="M50 38l-5 10h10z"/><path class="f2" d="M44 96l6-8 6 8-6 10z"/><path class="s" d="M30 74l40 0"/><path class="f" d="M70 74l10-4v8z"/><path class="f3" d="M30 74l-8-4v8z"/></svg>',
    /* Bima: broad shoulders, poleng checkered cloth, long thumbnail hand */
    '<svg viewBox="0 0 100 110"><path class="f" d="M40 10h20l4 12H36z"/><path class="s" d="M36 6l8-4M64 6l-8-4M44 14h12"/><path class="f2" d="M18 32c10-10 54-10 64 0l-6 22H24z"/><path class="s" d="M24 54l-8 50M76 54l8 50"/><g class="f3"><path d="M30 56h40v44H30z"/></g><g class="f"><path d="M30 56h8v8h-8zM46 56h8v8h-8zM62 56h8v8h-8zM38 64h8v8h-8zM54 64h8v8h-8zM30 72h8v8h-8zM46 72h8v8h-8zM62 72h8v8h-8zM38 80h8v8h-8zM54 80h8v8h-8zM30 88h8v8h-8zM46 88h8v8h-8zM62 88h8v8h-8z"/></g><path class="f2" d="M84 62c6 0 10 4 10 10l-4 8c-2-2-4-2-6-2z"/><g class="s"><path d="M92 68l6-14M94 74l8-10M90 80l8-6"/></g></svg>',
    /* Srikandi: crossed bow and arrow, sanggul bun, lotus */
    '<svg viewBox="0 0 100 110"><circle cx="50" cy="18" r="9" class="f"/><circle cx="60" cy="12" r="5" class="f2"/><path class="s" d="M40 24q10 8 20 0"/><path class="s" d="M18 36c-10 28-2 56 22 70"/><path class="s" d="M18 36L40 106"/><path class="s" d="M84 32L20 96"/><path class="f" d="M84 32l-12 2 6-8z"/><path class="f3" d="M20 96l4-10 6 6z"/><path class="f2" d="M62 70c0-8 6-12 12-12 0 8-6 12-12 12zM62 70c-8 0-12-6-12-12 8 0 12 6 12 12zM62 70c0 8-6 12-12 12 0-8 6-12 12-12zM62 70c8 0 12 6 12 12-8 0-12-6-12-12z"/><circle cx="62" cy="70" r="3" class="f"/><path class="s" d="M62 82v22"/></svg>',
    /* Gatotkaca: spread wings, star crown, clouds */
    '<svg viewBox="0 0 100 110"><path class="f2" d="M50 44C36 20 14 18 4 32c10 2 16 10 16 20-8-2-14 2-16 10 10-2 18 2 22 10 0-10 10-20 24-28z"/><path class="f2" d="M50 44c14-24 36-26 46-12-10 2-16 10-16 20 8-2 14 2 16 10-10-2-18 2-22 10 0-10-10-20-24-28z"/><path class="f" d="M50 44c-8 0-12 6-12 14s4 20 12 28c8-8 12-20 12-28s-4-14-12-14z"/><path class="f" d="M50 8l3 8 8 1-6 5 2 8-7-4-7 4 2-8-6-5 8-1z"/><path class="s" d="M38 32q12-8 24 0"/><path class="f3" d="M6 96q8-8 16 0 6-6 14 0 8-8 16 0 6-6 14 0 8-8 16 0 4-4 12 0v14H6z"/></svg>',
    /* Hanoman: crowned white monkey face, curling tail */
    '<svg viewBox="0 0 100 110"><path class="f" d="M30 14h40l-6 10H36z"/><path class="s" d="M34 14l4-8 6 4 6-6 6 6 6-4 4 8"/><circle cx="50" cy="44" r="20" class="f3"/><circle cx="50" cy="44" r="20" class="s"/><circle cx="26" cy="40" r="7" class="f3"/><circle cx="74" cy="40" r="7" class="f3"/><circle cx="26" cy="40" r="7" class="s"/><circle cx="74" cy="40" r="7" class="s"/><circle cx="42" cy="40" r="3" class="f"/><circle cx="58" cy="40" r="3" class="f"/><path class="s" d="M44 52q6 4 12 0M50 44v4"/><path class="s" d="M50 64v20"/><path class="s" d="M50 84c0 14 20 16 26 6s-6-18-14-10 2 12 8 8"/><path class="s" d="M22 100q28 8 56 0"/></svg>'
  ]
};
const events = [];
const $ = (sel,root=document)=>root.querySelector(sel);
const esc = s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function ev(name, props){ const p=Object.assign({},props||{}); window.dataLayer=window.dataLayer||[]; window.dataLayer.push(Object.assign({event:name},p)); if(window.posthog&&posthog.capture) try{posthog.capture(name,p);}catch(e){} if(location.hostname==='localhost'||/[?&]debug=1/.test(location.search)) console.log('[event]',name,p); }
function utm(){ try{ const u=new URLSearchParams(location.search); const o={}; for(const [k,v] of u) if(/^utm_/.test(k)) o[k]=v; return o; }catch(e){ return {}; } }
function signupUrl(){ const u=new URL(cfgFor('signup')||'https://example.invalid/signup'); u.searchParams.set('track',S.track); u.searchParams.set('lang',S.lang); for(const [k,v] of Object.entries(utm())) u.searchParams.set(k,v); return u.toString(); }
function helpUrl(){ const u=new URL(cfgFor('help')||'https://example.invalid/help'); u.searchParams.set('track',S.track); return u.toString(); }
function fmt(s,o){ return s.replace(/\{(\w+)\}/g,(_,k)=>o[k]); }
const icons = {
  pick:'<svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',
  event:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  board:'<svg viewBox="0 0 24 24"><path d="M4 20h16M7 20V9M12 20V4M17 20v-7"/></svg>',
  flame:'<svg viewBox="0 0 24 24"><path d="M12 2c1 4 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 1-3s0 2 2 2c0-3-1-5 2-9z"/></svg>',
  spark:'<svg viewBox="0 0 24 24"><path d="M12 1l2.6 7.4L22 11l-7.4 2.6L12 21l-2.6-7.4L2 11l7.4-2.6z"/></svg>'
};
/* starfield for the Intuition track */
let starsRAF=0;
function initStars(){
  cancelAnimationFrame(starsRAF);
  const cv=$('[data-stars]',frame); if(!cv) return;
  const land=cv.parentElement, dpr=Math.min(2,window.devicePixelRatio||1);
  const w=land.clientWidth, h=Math.max(land.scrollHeight,window.innerHeight);
  cv.width=w*dpr; cv.height=h*dpr; cv.style.height=h+'px';
  const ctx=cv.getContext('2d'); ctx.scale(dpr,dpr);
  const rnd=mulberry(7);
  const stars=Array.from({length:Math.round(w*h/9000)},()=>({x:rnd()*w,y:rnd()*h,r:rnd()*1.3+.3,p:rnd()*Math.PI*2,s:rnd()*.8+.3}));
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const draw=t=>{
    ctx.clearRect(0,0,w,h);
    for(const s of stars){
      const a=reduce?.7:.35+.65*(.5+.5*Math.sin(t/1000*s.s+s.p));
      ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(226,210,255,${a.toFixed(2)})`; ctx.fill();
      if(s.r>1.2){ ctx.beginPath(); ctx.arc(s.x,s.y,s.r*3,0,Math.PI*2); ctx.fillStyle=`rgba(138,5,255,${(a*.18).toFixed(2)})`; ctx.fill(); }
    }
    if(!reduce) starsRAF=requestAnimationFrame(draw);
  };
  draw(0);
}
function mulberry(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}

/* ============ shared blocks ============ */
function header(track){
  const c=C.common[S.lang];
  const b=brandOf(track);
  return `<div class="hdr wrap">
    <div class="logo">${b?esc(b):'<span class="nologo" aria-hidden="true"></span>'}</div>
    <div class="r">
      <button class="pill lang" data-lang-toggle>${S.lang==='en'?'EN · ID':'ID · EN'}</button>
      <button class="pill" data-help data-ev="landing_help_clicked {track:${track}}">${c.help}</button>
    </div></div>`;
}
function footer(track){
  const c=C.common[S.lang];
  const b=brandOf(track), legal=b?c.legal:UNBRANDED[S.lang].legal;
  return `<div class="ftr wrap" data-footer>
    <div class="row">${b?`<span class="logo" style="font-size:12px">${esc(b)}</span>`:''}<span class="age">${c.age}</span><span>${c.langLabel}</span></div>
    <div>${esc(legal)}</div>
    <div class="row"><button class="pill" data-help data-ev="landing_help_clicked {track:${track}}">${c.help}</button></div>
    <div class="ph">${c.footerNote}</div>
    ${track==='cards'&&IMG.tarot?`<div class="credit">Tarot: Pamela Colman Smith, Rider &amp; Co., 1909 · public domain · scans steve-p.org</div>`:''}
  </div>`;
}
function moneyBlock(title, lines, track, extra=''){
  return `<section class="sec wrap"><div class="money" data-money data-ev="landing_money_block_viewed {track:${track}}">
    <h2>${esc(title)}</h2>${extra}<ul>${lines.map(l=>`<li>${esc(l)}</li>`).join('')}</ul></div></section>`;
}
function faq(items){
  return `<section class="sec wrap"><h2>FAQ</h2>${items.map(([q,a])=>`<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}</section>`;
}
function sheet(track, title, cap, placeholder, btn, pos, top=''){
  return `<div class="overlay" data-overlay><div class="sheet"><div class="grab"></div><button class="x" data-close aria-label="Close">×</button>
    ${top}<h3>${esc(title)}</h3><p class="cap">${esc(cap)}</p>
    <input class="input" id="reg-${track}" placeholder="${esc(placeholder)}" inputmode="email" autocomplete="off">
    <button class="btn brand" data-reg data-ev="landing_cta_clicked {track:${track}, position:${pos}} → signup?track=${track}&utm_*">${esc(btn)}</button>
</div></div>`;
}

/* ============ GAME ============ */
function renderGame(){
  const t=C.game[S.lang], g=S.game, wide=S.vp==='w';
  const card=t.cards[g.idx], ans=g.answered[g.idx];
  const yesShare=card.y, noShare=100-card.y;
  const heroCard = `<div class="cardstack"><div class="card" data-hero-card>
    <div class="meta"><span class="ava">${card.cat.slice(0,2).toUpperCase()}</span><span class="badge live">Live</span><span class="cap">${esc(card.cat)}</span></div>
    <div class="q">${esc(card.q)}</div>
    <div class="yn">
      <button class="btn yes ${ans==='yes'?'picked':ans?'dim':''}" data-ans="yes" ${ans?'disabled':''} data-ev="landing_cta_clicked {track:game, position:hero} · answer=yes"><span>${S.lang==='en'?'Yes':'Ya'}</span><span class="share num">${yesShare}%</span></button>
      <button class="btn no ${ans==='no'?'picked':ans?'dim':''}" data-ans="no" ${ans?'disabled':''} data-ev="landing_cta_clicked {track:game, position:hero} · answer=no"><span>${S.lang==='en'?'No':'Nggak'}</span><span class="share num">${noShare}%</span></button>
    </div>
    <div class="after ${ans?'show':''}">${ans?fmt(t.agree,{p:ans==='yes'?yesShare:noShare}):''}</div>
  </div>
  <div class="dots">${[0,1,2].map(i=>`<i class="${g.answered[i]?'done':''}"></i>`).join('')}</div></div>
  <p class="cap" style="margin-top:12px">${esc(t.points)}</p>`;

  const hero = `<section class="sec wrap"><div class="${wide?'hero2':''}">
    <div><h1>${esc(t.h1).replace('\n','<br>')}</h1>${wide?`<p class="muted" style="margin-top:14px;font-size:18px">${esc(t.points)}</p>`:''}</div>
    <div>${heroCard}</div></div></section>`;

  const steps = `<section class="sec wrap"><h2>${esc(t.how)}</h2><div class="steps">${[icons.pick,icons.event,icons.board].map((ic,i)=>`<div class="step"><div class="ic">${ic}</div><div><h3>${esc(t.steps[i])}</h3></div></div>`).join('')}</div></section>`;

  const tab=g.tab||t.tabs[0];
  const feedCards=t.cards.filter(c=>tab===t.tabs[0]?true:c.cat===tab).slice(0,6);
  const feed = `<section class="sec wrap"><h2>${esc(t.hot)}</h2>
    <div class="tabs">${t.tabs.map(x=>`<button class="pill ${x===tab?'on':''}" data-tab="${esc(x)}">${esc(x)}</button>`).join('')}</div>
    <div class="feed">${(feedCards.length?feedCards:t.cards.slice(0,4)).map(c=>`<div class="fc"><div class="meta" style="display:flex;gap:8px;align-items:center"><span class="badge live">Live</span><span class="cap">${esc(c.cat)}</span></div><div class="t">${esc(c.q)}</div>
      <div class="bar"><i style="width:${c.y}%"></i><b></b></div><div><span>${S.lang==='en'?'Yes':'Ya'} <span class="num">${c.y}%</span></span><span>${S.lang==='en'?'No':'Nggak'} <span class="num">${100-c.y}%</span></span></div></div>`).join('')}</div></section>`;

  const lb=[["rizky_jkt",1240,7],["ayu.p",1180,5],["bagas99",1105,9],["dimas_tech",990,3],["nadia_sby",940,4]];
  const board = `<section class="sec wrap"><h2>${esc(t.board)}</h2><table class="lb"><thead><tr><th>#</th><th>${t.cols[0]}</th><th class="r">${t.cols[1]}</th><th class="r">${t.cols[2]}</th></tr></thead><tbody>
    ${lb.map((r,i)=>`<tr><td class="num">${i+1}</td><td>${r[0]}</td><td class="r num">${r[1].toLocaleString(S.lang==='en'?'en-US':'id-ID')}</td><td class="r"><span class="flame">${icons.flame}<span class="num">${r[2]}</span></span></td></tr>`).join('')}
    <tr class="me" data-empty-row><td class="num">6</td><td>${esc(t.mySpot)}</td><td class="r">—</td><td class="r">—</td></tr></tbody></table></section>`;

  const bottom = `<section class="sec wrap"><button class="btn brand" data-open-sheet data-ev="landing_cta_clicked {track:game, position:bottom}">${esc(t.cta)}</button></section>`;

  return `<div class="land ${wide?'wide':''}" data-track="game" data-ev-root="landing_viewed {track:game, lang:${S.lang}}">
    ${header('game')}${hero}${steps}${feed}${board}${moneyBlock(C.common[S.lang].moneyTitle,t.moneyLines,'game')}${faq(t.faq)}${bottom}${footer('game')}
    ${g.sheet?sheet('game',t.sheetTitle,t.sheetCap,t.input,t.cta,'hero'):''}
  </div>`;
}

/* ============ INTUITION ============ */
function gutType(answers,qs){
  const m=answers.filter((a,i)=>(a==='yes')===(qs[i].y>=50)).length;
  return m<=1?'contrarian':m===2?'early':m===3?'mixed':'crowd';
}
function renderIntuition(){
  const t=C.intuition[S.lang], q=S.intuition, wide=S.vp==='w';
  let body='';
  if(q.screen==='start'){
    body=`<section class="sec wrap start"><div class="eyebrow">${icons.spark}${S.lang==='en'?'Gut check':'Tes insting'}</div><h1>${esc(t.h1).replace('\n','<br>')}</h1>
      <div class="orb" aria-hidden="true"><div class="big num">${(2814).toLocaleString(S.lang==='en'?'en-US':'id-ID')}</div><p class="cap">${esc(t.today)}</p></div>
      ${q.returned?`<div class="returned">${esc(t.returned)}</div>`:''}
      <div class="actions"><button class="btn brand" data-start data-ev="landing_cta_clicked {track:intuition, position:hero} · quiz_start">${q.returned?esc(t.seeResult):esc(t.start)}</button></div>
      <p class="cap" style="margin-top:12px">${esc(t.startCap)}</p></section>`;
  } else if(q.screen==='quiz'){
    const i=q.q, qq=t.qs[i], ans=q.answers[i];
    body=`<div class="quiz wrap"><div class="prog" aria-label="${i+1}/5">${t.qs.map((_,k)=>`<i class="${k<=i?'on':''}"></i>`).join('')}</div>
      <p class="cap num">${i+1}/5 · ${fmt(t.closes,{d:qq.d})}</p>
      <div class="qbody"><span class="ava">${esc(qq.t.slice(0,2).toUpperCase())}</span><div class="qt">${esc(qq.q)}</div>
        <div class="after ${ans?'show':''}" style="margin:0 0 6px">${ans?fmt(t.with,{p:ans==='yes'?qq.y:100-qq.y}):'&nbsp;'}</div></div>
      <div class="yn">
        <button class="btn yes ${ans==='yes'?'picked':ans?'dim':''}" data-qans="yes" ${ans?'disabled':''} data-ev="quiz_answered {q:${i+1}, answer:yes}"><span>${S.lang==='en'?'Yes':'Ya'}</span><span class="share num">${qq.y}%</span></button>
        <button class="btn no ${ans==='no'?'picked':ans?'dim':''}" data-qans="no" ${ans?'disabled':''} data-ev="quiz_answered {q:${i+1}, answer:no}"><span>${S.lang==='en'?'No':'Nggak'}</span><span class="share num">${100-qq.y}%</span></button>
      </div></div>`;
  } else {
    const type=q.forceType||gutType(q.answers,t.qs), [name,desc]=t.types[type];
    const rows=t.qs.map((qq,i)=>{const a=q.answers[i]||(qq.y>=50?'yes':'no');return `<div class="row"><span>${esc(qq.q)}</span><span style="display:flex;gap:8px;align-items:center;flex:0 0 auto"><span class="cap">${t.crowd} <span class="num">${a==='yes'?qq.y:100-qq.y}%</span></span><span class="ans ${a==='yes'?'y':'n'}">${a==='yes'?(S.lang==='en'?'YES':'YA'):(S.lang==='en'?'NO':'NGGAK')}</span></span></div>`;}).join('');
    body=`<section class="sec wrap result" style="position:relative"><div class="sparkles" aria-hidden="true">${[[8,6],[88,12],[20,40],[70,30],[92,55],[40,18]].map(([x,y],i)=>`<i style="left:${x}%;top:${y}%;animation-delay:${i*.4}s"></i>`).join('')}</div><p class="cap">${esc(t.resultLead)}</p><div class="resulttype">${esc(name)}</div><p>${esc(desc)}</p>
      <div class="reslist">${rows}</div>
      <div class="actions"><button class="btn brand" data-open-sheet data-ev="landing_cta_clicked {track:intuition, position:middle} · quiz_completed {score:${type}}">${esc(t.save)}</button><button class="btn secondary" data-share data-ev="quiz_share_clicked {score:${type}}">${esc(t.share)}</button></div>
      <p class="cap" style="margin-top:12px">${esc(t.points)}</p></section>
      <section class="sec wrap"><h2>${esc(t.next)}</h2><div class="steps">${[icons.event,icons.board,icons.pick].map((ic,i)=>`<div class="step"><div class="ic">${ic}</div><h3>${esc(t.nextSteps[i])}</h3></div>`).join('')}</div></section>
      ${moneyBlock(C.common[S.lang].moneyTitle,t.moneyLines,'intuition')}${faq(t.faq)}${footer('intuition')}`;
  }
  let overlay='';
  if(q.sheet){
    const type=q.forceType||gutType(q.answers,t.qs);
    overlay=sheet('intuition',t.sheetTitle,t.sheetCap,t.input,t.save,'middle',`<div class="restop"><span class="ava">★</span><div><span class="cap">${esc(t.resultLead)}</span><b>${esc(t.types[type][0])}</b></div></div>`);
  }
  if(q.share){
    const type=q.forceType||gutType(q.answers,t.qs);
    overlay+=`<div class="sharebox" data-overlay><button class="x" data-close>×</button><div class="share916"><div><div class="k">${brandOf(S.track)?esc(brandOf(S.track)).toUpperCase():""}</div><p class="cap" style="color:#fff;opacity:.8;margin-top:14px">${esc(t.resultLead)}</p><div class="ty">${esc(t.types[type][0])}</div></div>
      <div class="grid5">${t.qs.map((qq,i)=>{const a=q.answers[i]||(qq.y>=50?'yes':'no');return `<div><span>${esc(qq.t)}</span><span class="num">${a==='yes'?(S.lang==='en'?'YES':'YA'):(S.lang==='en'?'NO':'NGGAK')} · ${a==='yes'?qq.y:100-qq.y}%</span></div>`;}).join('')}</div>
      <div class="cta">${esc(t.h1.split('\n')[0])}</div></div><div class="lbl">${esc(t.shareLabel)}</div></div>`;
  }
  return `<div class="land ${wide?'wide':''}" data-track="intuition" data-ev-root="landing_viewed {track:intuition, lang:${S.lang}}"><canvas class="stars" data-stars aria-hidden="true"></canvas>${header('intuition')}${body}${overlay}</div>`;
}

/* ============ TRADER ============ */
function renderTrader(){
  const t=C.trader[S.lang], tr=S.trader, wide=S.vp==='w';
  const spark='<svg class="spark" viewBox="0 0 300 56" preserveAspectRatio="none" aria-hidden="true"><polyline points="0,40 20,36 40,38 60,28 80,30 100,22 120,26 140,18 160,24 180,14 200,20 220,12 240,16 260,10 280,14 300,8" fill="none" stroke="#8A05FF" stroke-width="2"/></svg>';
  const binary=`<div class="binary" data-binary>
    <div class="top"><div><b>${esc(t.asset)}</b> <span class="cap">${t.pair}</span></div><span class="badge live">Live</span></div>
    <div class="price num">2 648.30</div>${spark}
    <div class="tf">${t.tfs.map((x,i)=>`<span class="${i===0?'on':''}">${x}</span>`).join('')}</div>
    <div class="updown"><button class="btn up" disabled>▲ ${t.up}</button><button class="btn down" disabled>▼ ${t.down}</button></div>
    <div class="quote"><span>${t.quoteAmt} <b>$10</b></span><span>${t.quotePay}</span><span>${t.quoteRet} <b>$18.00</b></span></div>
    <p class="cap" style="margin-top:8px">${esc(t.lockNote)}</p></div>`;
  const hero=`<section class="sec wrap"><div class="${wide?'hero2':''}"><div><h1>${esc(t.h1)}</h1>
    <div style="margin-top:18px"><button class="btn brand" data-open-sheet data-ev="landing_cta_clicked {track:trader, position:hero}">${esc(t.cta)}</button></div></div>
    <div style="margin-top:${wide?0:18}px">${binary}</div></div></section>`;
  const nums=`<section class="sec wrap"><div class="nums">${t.nums.map(([v,l])=>`<div><div class="v">${esc(v)}</div><div class="l">${esc(l)}</div></div>`).join('')}</div></section>`;
  const money=`<section class="sec wrap"><div class="money" data-money data-ev="landing_money_block_viewed {track:trader}"><h2>${esc(t.moneyTitle)}</h2><p class="cap">${esc(t.moneySub)}</p>
    <div class="methods">${t.methods.map(m=>`<span>${m}</span>`).join('')}<span class="open-q">ID: QRIS DANA OVO · MY: Touch 'n Go · логотипы из библиотеки</span></div>
    <table class="tt">${t.rows.map(([k,v],i)=>`<tr><td>${esc(k)}${i===4?'<span class="open-q">если действует — уточнить у кассы</span>':i===1||i===2||i===3?'<span class="open-q">реальные значения — касса</span>':''}</td><td>${esc(v)}</td></tr>`).join('')}</table></div></section>`;
  const L=t.scrLabels;
  const screens=`<section class="sec wrap"><h2>${esc(t.howTitle)}</h2><div class="screens">
    <div class="scr"><div class="lab">${t.scr[0][0]}</div><div class="mini"><div class="k on">${t.asset} · ${t.pair} · 80%</div><div class="k">EUR/USD · 78%</div><div class="k">BTC · 76%</div></div></div>
    <div class="scr"><div class="lab">${t.scr[1][0]}</div><div class="mini"><div class="ln"><span>${L.amount}</span><b>$10</b></div><div class="ln"><span>60 s</span><b>${t.quotePay}</b></div><div class="updown"><span class="k">▲ ${t.up}</span><span class="k on">▼ ${t.down}</span></div></div></div>
    <div class="scr"><div class="lab">${t.scr[2][0]}</div><div class="mini"><div class="ln"><span>${L.closed}</span><b>2 649.10 ▲</b></div><div class="ln"><span>${L.result}</span><span class="loss">−$10.00</span></div><div class="cap">${esc(t.scr[2][1])}</div></div></div>
  </div></section>`;
  const assets=`<section class="sec wrap"><h2>${esc(t.assetsTitle)}</h2><div class="assets">${t.assets.map(([n,s,p])=>`<div class="a"><span class="ava">${esc(n.slice(0,2))}</span><div class="n">${esc(n)}<small>${esc(s)}</small></div><span class="badge live">Live</span><span class="p">${p}%</span></div>`).join('')}</div></section>`;
  const who=`<section class="sec wrap"><div class="${wide?'two':''}"><div><h2>${esc(t.whoTitle)}</h2><div class="who">${t.who.map(([k,v],i)=>`<div><span>${esc(k)}:</span> ${esc(v)}${i===3?'<span class="open-q">SLA — уточнить у саппорта (медиана 87 ч)</span>':''}</div>`).join('')}</div></div>
    <div style="margin-top:${wide?0:24}px"><div class="risk">${esc(t.risk)}</div></div></div></section>`;
  const bottom=`<section class="sec wrap"><button class="btn brand" data-open-sheet data-ev="landing_cta_clicked {track:trader, position:bottom}">${esc(t.cta)}</button></section>`;
  const sticky=`<div class="sticky" data-sticky hidden><button class="btn brand" data-open-sheet data-ev="landing_cta_clicked {track:trader, position:sticky}">${esc(t.cta)}</button></div>`;
  return `<div class="land ${wide?'wide':''}" data-track="trader" data-ev-root="landing_viewed {track:trader, lang:${S.lang}}">${header('trader')}${hero}${nums}${money}${screens}${assets}${who}${faq(t.faq)}${bottom}${footer('trader')}${sticky}
    ${tr.sheet?sheet('trader',t.sheetTitle,t.sheetCap,t.input,t.cta,'hero'):''}</div>`;
}

/* ============ LEARN ============ */
function demoPath(dir,seed){
  const r=mulberry(seed); let y=60; const pts=[]; const n=24;
  for(let i=0;i<=n;i++){ const drift=(dir==='up'?-1:1)*(i/n)*22; y=60+drift+(r()-.5)*14; pts.push([i/n*300, Math.max(12,Math.min(108,y))]); }
  return pts;
}
function renderLearn(){
  const t=C.learn[S.lang], L=S.learn, wide=S.vp==='w';
  const pos=L.phase==='pick'?0:L.phase==='wait'?(1-L.left/5):1;
  const chart=`<div class="chartbox"><canvas class="chart" data-democanvas data-pos="${pos}" data-dir="${L.dir||''}" data-result="${L.result||''}" data-seed="${L.seed||3}" data-phase="${L.phase}"></canvas>
    <div class="quotebox"><span class="px" data-px>2 648.30</span><span class="dl" data-dl>XAU/USD · 60 s</span></div>
    ${L.phase==='wait'?`<span class="timer ${L.left<=2?'hot':''}">${L.left} s</span>`:''}</div>`;
  let body='';
  if(L.phase==='pick') body=`<div class="status"><span>${esc(t.pick)}</span></div><div class="updown"><button class="btn up" data-demo="up" data-ev="demo_trade_placed {track:learn, direction:up}">▲ ${t.up}</button><button class="btn down" data-demo="down" data-ev="demo_trade_placed {track:learn, direction:down}">▼ ${t.down}</button></div>`;
  if(L.phase==='pick') body=body.replace('<div class="updown">','<div class="updown" data-updown>');
  else if(L.phase==='wait') body=`<div class="status"><span>${L.dir==='up'?'▲ '+t.up:'▼ '+t.down} · ${t.demoAmt} <b class="num">10</b></span><span>${t.waiting} <b class="num">${L.left} s</b></span></div><div class="updown"><button class="btn up" disabled>▲ ${t.up}</button><button class="btn down" disabled>▼ ${t.down}</button></div>`;
  else body=`<div class="status"><span>${L.dir==='up'?'▲ '+t.up:'▼ '+t.down} · ${t.demoAmt} <b class="num">10</b></span><span class="num">${L.result==='won'?'+8':'−10'}</span></div>
    <div class="explain ${L.result}"><b>${esc(t[L.result][0])}</b>${esc(t[L.result][1])}</div>
    <div style="margin-top:10px"><button class="btn secondary" data-demo-again>${esc(t.again)}</button></div>`;
  const demo=`<div class="demo" data-demo-box><div class="top"><div><b>${esc(t.demoAsset)}</b> <span class="cap">${t.demoPair}</span></div><span class="cap">${esc(t.demoLen)}</span></div>${chart}${body}</div><p class="cap" style="margin-top:10px">${esc(t.demoLine)}</p>`;
  const circ=2*Math.PI*16, prog=L.done/5;
  const ring=`<div class="ring"><svg viewBox="0 0 40 40"><circle class="bg" cx="20" cy="20" r="16"/><circle class="fg" cx="20" cy="20" r="16" stroke-dasharray="${circ}" stroke-dashoffset="${circ*(1-prog)}"/></svg><span><b class="num" style="color:var(--text-primary)">${L.done}</b> ${esc(t.progress)}</span></div>`;
  const h1=esc(t.h1).replace(/\*(.+?)\*/,'<em>$1</em>');
  const ctaLabel=L.done>0?t.cta2:t.cta;
  const hero=`<section class="sec wrap"><div class="${wide?'hero2':''}"><div><div class="eyebrow">${icons.spark}${S.lang==='en'?'Lesson 1 · free':'Pelajaran 1 · gratis'}</div><h1>${h1}</h1><p class="muted" style="margin-top:10px;font-size:15px">${esc(t.sub)}</p>
    <div style="margin-top:16px"><button class="btn brand" ${L.done>0?'data-open-sheet':'data-goto-demo'} data-ev="${L.done>0?'landing_cta_clicked {track:learn, position:hero} → signup':'lesson_started {n:1} → scroll to Up/Down'}">${esc(ctaLabel)}</button></div>${ring}</div>
    <div style="margin-top:${wide?0:20}px">${demo}</div></div></section>`;
  const course=`<section class="sec wrap"><h2>${esc(t.courseTitle)}</h2><div class="lessons">${t.lessons.map((l,i)=>`<div class="lesson"><div class="n ${i<L.done?'done':''}">${i+1}</div><div><div class="t">${esc(l[0])}${l[3]?`<span class="must">${t.must}</span>`:''}</div><div class="d">${esc(l[1])}</div></div><div class="dur">${l[2]}</div></div>`).join('')}</div></section>`;
  const cmp=`<section class="sec wrap"><div class="money" data-money data-ev="landing_money_block_viewed {track:learn}"><h2>${esc(t.cmpTitle)}</h2><table class="cmp"><thead><tr>${t.cmpCols.map(c=>`<th>${esc(c)}</th>`).join('')}</tr></thead><tbody>${t.cmp.map(r=>`<tr><td>${esc(r[0])}</td><td class="${r[1]===r[2]?'same':''}">${esc(r[1])}</td><td class="${r[1]===r[2]?'same':''}">${esc(r[2])}</td></tr>`).join('')}</tbody></table></div></section>`;
  const terms=`<section class="sec wrap"><h2>${esc(t.termsTitle)}</h2><div class="terms">${t.terms.map(([k,v])=>`<div><b>${esc(k)}</b><p>${esc(v)}</p></div>`).join('')}</div></section>`;
  const risk=`<section class="sec wrap"><div class="risk">${esc(t.risk)}</div></section>`;
  const bottom=`<section class="sec wrap"><button class="btn brand" ${L.done>0?'data-open-sheet':'data-goto-demo'} data-ev="${L.done>0?'landing_cta_clicked {track:learn, position:bottom} → signup':'lesson_started {n:1} → scroll to Up/Down'}">${esc(ctaLabel)}</button></section>`;
  return `<div class="land ${wide?'wide':''}" data-track="learn" data-ev-root="landing_viewed {track:learn, lang:${S.lang}}">${header('learn')}${hero}${course}${cmp}${terms}${risk}${faq(t.faq)}${bottom}${footer('learn')}
    ${L.sheet?sheet('learn',t.sheetTitle,t.sheetCap,t.input,t.sheetBtn,'hero'):''}</div>`;
}

/* ============ CARDS ============ */
function renderCards(){
  const t=C.cards[S.lang], K=S.cards, wide=S.vp==='w';
  const deckKey=K.deck===0?'tarot':'wayang', deck=t[deckKey];
  const order=[(K.round*2)%6,(K.round*2+3)%6,(K.round*2+5)%6]; // which 3 cards sit in the fan this round
  const fan=`<div class="fan ${K.picked!==null?'picked':''}"><div class="hint">${K.picked===null?esc(t.hint):''}</div>
    ${order.map((ci,i)=>{const c=deck[ci];return `<button class="pcard ${K.picked===i?'on':''}" data-i="${i}" data-pick="${i}" aria-label="${esc(c[1])}" data-ev="card_pulled {deck:${deckKey}, card:${esc(c[1])}}"><div class="back"></div><div class="face ${IMG[deckKey]?'photo':''}">${IMG[deckKey]?cardArt(deckKey,ci):`<span class="rn">${c[0]||'ᐧ'}</span>${GLYPH[deckKey][ci]}<span class="nm">${esc(c[1])}</span>`}</div></button>`}).join('')}</div>`;
  let after='';
  if(K.picked!==null){
    const c=deck[order[K.picked]], q=t.qs[(K.round*2+K.picked)%6], ans=K.answered;
    after=`<div class="reveal"><div class="prompt">${esc(c[2])}</div><p class="cap">${esc(c[1])}</p></div>
      <div class="card"><div class="meta"><span class="badge live">Live</span><span class="cap">${esc(t.todays)}</span></div><div class="q">${esc(q.q)}</div>
      <div class="yn"><button class="btn yes ${ans==='yes'?'picked':ans?'dim':''}" data-cans="yes" ${ans?'disabled':''} data-ev="card_answered {deck:${deckKey}, card:${esc(c[1])}, answer:yes}"><span>${S.lang==='en'?'Yes':'Ya'}</span><span class="share num">${q.y}%</span></button>
      <button class="btn no ${ans==='no'?'picked':ans?'dim':''}" data-cans="no" ${ans?'disabled':''} data-ev="card_answered {deck:${deckKey}, card:${esc(c[1])}, answer:no}"><span>${S.lang==='en'?'No':'Nggak'}</span><span class="share num">${100-q.y}%</span></button></div>
      <div class="after ${ans?'show':''}">${ans?fmt(t.agree,{p:ans==='yes'?q.y:100-q.y}):''}</div></div>
      ${ans?`<div class="yn" style="margin-top:10px"><button class="btn secondary" data-next-card>${esc(t.next)} →</button><button class="btn secondary" data-share data-ev="card_share_clicked {deck:${deckKey}, card:${esc(c[1])}}">${esc(t.share)}</button></div>`:''}`;
  }
  const hero=`<section class="sec wrap"><div class="${wide?'hero2':''}"><div><h1>${esc(t.h1).replace('\n','<br>')}</h1>
    <div class="tabs" style="margin-top:14px">${t.decks.map((d,i)=>`<button class="pill ${K.deck===i?'on':''}" data-deck="${i}">${d}</button>`).join('')}</div>
    <div class="dots" style="margin-top:4px">${[0,1,2].map(i=>`<i class="${K.pulled[i]?'done':''}"></i>`).join('')}</div></div>
    <div>${fan}${after}<p class="cap" style="margin-top:12px">${esc(t.points)}</p></div></div></section>`;
  const steps=`<section class="sec wrap"><h2>${esc(t.how)}</h2><div class="steps">${[icons.spark,icons.pick,icons.event].map((ic,i)=>`<div class="step"><div class="ic">${ic}</div><h3>${esc(t.steps[i])}</h3></div>`).join('')}</div></section>`;
  const shares=[31,24,18,12,9,6];
  const pulled=`<section class="sec wrap"><h2>${esc(t.pulledTitle)}</h2><div class="pulled">${deck.map((c,i)=>`<div class="pc"><div class="thumb">${cardArt(deckKey,i,'art')}</div><div class="nm">${esc(c[1])}</div><div class="pct">${shares[i]}%</div><p class="cap">${esc(t.pulledCap)}</p><p class="q" style="margin-top:8px">${esc(t.qs[i].q)}</p></div>`).join('')}</div></section>`;
  const bottom=`<section class="sec wrap"><button class="btn brand" data-open-sheet data-ev="landing_cta_clicked {track:cards, position:bottom}">${esc(t.cta)}</button></section>`;
  let overlay='';
  if(K.sheet){
    const minis=`<div class="minis">${K.pulled.map(p=>`<span>${esc(p)}</span>`).join('')}</div>`;
    overlay=sheet('cards',t.sheetTitle,t.sheetCap,t.input,t.cta,'hero',minis);
  }
  if(K.share && K.picked!==null){
    const ci=order[K.picked], c=deck[ci], q=t.qs[(K.round*2+K.picked)%6];
    overlay+=`<div class="sharebox" data-overlay><button class="x" data-close>×</button><div class="share916 cards"><div class="k">${brandOf(S.track)?esc(brandOf(S.track)).toUpperCase():""}</div><div class="bigcard ${IMG[deckKey]?'photo':''}">${IMG[deckKey]?cardArt(deckKey,ci):`${c[0]?`<span class="rn">${c[0]}</span>`:'<span></span>'}${GLYPH[deckKey][ci]}<span class="nm">${esc(c[1])}</span>`}</div>
      <div><div class="ty">${esc(c[2])}</div><p class="cap" style="color:#fff;opacity:.8;margin-top:8px">${esc(q.q)} — <b>${K.answered==='yes'?(S.lang==='en'?'YES':'YA'):(S.lang==='en'?'NO':'NGGAK')}</b></p></div>
      <div class="cta">${esc(t.h1.split('\n')[0])}</div></div><div class="lbl">${esc(t.shareLabel)}</div></div>`;
  }
  return `<div class="land ${wide?'wide':''}" data-track="cards" data-ev-root="landing_viewed {track:cards, lang:${S.lang}}">${header('cards')}${hero}${steps}${pulled}${moneyBlock(C.common[S.lang].moneyTitle,t.moneyLines,'cards')}${faq(t.faq)}${bottom}${footer('cards')}${overlay}</div>`;
}

/* ============ SHAKE (kocok) ============ */
function burstHTML(n=22,rx=120,ry=110){ let h='<div class="burst" aria-hidden="true">'; for(let i=0;i<n;i++){ const a=(Math.PI*2*i)/n+(Math.random()-.5)*.5, d=.6+Math.random()*.6; h+=`<i class="${i%3===0?'dot':''}" style="--dx:${(Math.cos(a)*rx*d).toFixed(0)}px;--dy:${(Math.sin(a)*ry*d-40).toFixed(0)}px;animation-delay:${(Math.random()*120).toFixed(0)}ms"></i>`; } return h+'</div>'; }

function renderShake(){
  const t=C.shake[S.lang], K=S.shake, wide=S.vp==='w';
  const xs=[26,46,66,86,106,126];
  const sticks=[0,1,2,3,4,5].map(i=>`<div class="stick ${K.picked===i?'out':''}" style="left:${xs[i]-7}px;transform:${K.picked===i?'':'rotate('+((i-2.5)*2)+'deg)'}">${i+1}</div>`).join('');
  const cup=`<div class="cupwrap"><div class="tap">${K.picked===null&&!K.shaking?esc(t.tap):''}</div>
    <button class="cup ${K.shaking?'shaking':''} ${K.picked!==null?'picked':''}" data-shake ${K.shaking||K.picked!==null?'disabled':''} aria-label="${esc(t.shakeBtn)}" data-ev="stick_shaken {track:shake}" style="border:0;background:transparent;padding:0;cursor:pointer">${sticks}<div class="body"></div></button>${K.justPopped?burstHTML():''}</div>`;
  let after='';
  if(K.picked!==null){
    const q=t.qs[K.picked], ans=K.answered;
    after=`<div class="stickcard"><div class="no">${K.picked+1}</div><div><div class="tp">${esc(t.topics[K.picked])}</div><p class="cap">${esc(t.stickLead)} ${K.picked+1} · ${esc(t.todays)}</p></div></div>
      <div class="card"><div class="meta"><span class="badge live">Live</span><span class="cap">${esc(t.todays)}</span></div><div class="q">${esc(q.q)}</div>
      <div class="yn"><button class="btn yes ${ans==='yes'?'picked':ans?'dim':''}" data-sans="yes" ${ans?'disabled':''} data-ev="stick_answered {stick:${K.picked+1}, answer:yes}"><span>${S.lang==='en'?'Yes':'Ya'}</span><span class="share num">${q.y}%</span></button>
      <button class="btn no ${ans==='no'?'picked':ans?'dim':''}" data-sans="no" ${ans?'disabled':''} data-ev="stick_answered {stick:${K.picked+1}, answer:no}"><span>${S.lang==='en'?'No':'Nggak'}</span><span class="share num">${100-q.y}%</span></button></div>
      <div class="after ${ans?'show':''}">${ans?fmt(t.agree,{p:ans==='yes'?q.y:100-q.y}):''}</div></div>
      ${ans?`<div class="yn" style="margin-top:10px"><button class="btn secondary" data-next-stick>${esc(t.next)}</button><button class="btn secondary" data-share data-ev="stick_share_clicked {stick:${K.picked+1}}">${esc(t.share)}</button></div>`:''}`;
  } else if(!K.shaking){
    after=`<button class="btn brand" data-shake data-ev="stick_shaken {track:shake}">${esc(t.shakeBtn)}</button>`;
  }
  const hero=`<section class="sec wrap"><div class="${wide?'hero2':''}"><div><h1>${esc(t.h1).replace('\n','<br>')}</h1>
    <div class="dots" style="margin-top:14px">${[0,1,2].map(i=>`<i class="${K.pulled[i]!==undefined?'done':''}"></i>`).join('')}</div></div>
    <div>${cup}${after}<p class="cap" style="margin-top:12px">${esc(t.points)}</p></div></div></section>`;
  const steps=`<section class="sec wrap"><h2>${esc(t.how)}</h2><div class="steps">${[icons.spark,icons.pick,icons.event].map((ic,i)=>`<div class="step"><div class="ic">${ic}</div><h3>${esc(t.steps[i])}</h3></div>`).join('')}</div></section>`;
  const shares=[22,19,18,16,14,11];
  const shaken=`<section class="sec wrap"><h2>${esc(t.shakenTitle)}</h2><div class="shaken">${t.qs.map((q,i)=>`<div class="row"><div class="no">${i+1}</div><div class="q"><small>${esc(t.topics[i])}</small>${esc(q.q)}</div><div class="pct">${shares[i]}%</div></div>`).join('')}<p class="cap">${esc(t.shakenCap)}</p></div></section>`;
  const bottom=`<section class="sec wrap"><button class="btn brand" data-open-sheet data-ev="landing_cta_clicked {track:shake, position:bottom}">${esc(t.cta)}</button></section>`;
  let overlay='';
  if(K.sheet){
    const minis=`<div class="minis">${K.pulled.map(p=>`<span>${p+1} · ${esc(t.topics[p])}</span>`).join('')}</div>`;
    overlay=sheet('shake',t.sheetTitle,t.sheetCap,t.input,t.cta,'hero',minis);
  }
  if(K.share && K.picked!==null){
    const q=t.qs[K.picked];
    overlay+=`<div class="sharebox" data-overlay><button class="x" data-close>×</button><div class="share916 shake"><div class="k">${brandOf(S.track)?esc(brandOf(S.track)).toUpperCase():""}</div><div class="bigstick">${K.picked+1}</div>
      <div><div class="ty">${esc(t.topics[K.picked])}</div><p class="cap" style="color:#fff;opacity:.8;margin-top:8px">${esc(q.q)} — <b>${K.answered==='yes'?(S.lang==='en'?'YES':'YA'):(S.lang==='en'?'NO':'NGGAK')}</b></p></div>
      <div class="cta">${esc(t.h1.split('\n')[0])}</div></div><div class="lbl">${esc(t.shareLabel)}</div></div>`;
  }
  return `<div class="land ${wide?'wide':''}" data-track="shake" data-ev-root="landing_viewed {track:shake, lang:${S.lang}}">${header('shake')}${hero}${steps}${shaken}${moneyBlock(C.common[S.lang].moneyTitle,t.moneyLines,'shake')}${faq(t.faq)}${bottom}${footer('shake')}${overlay}</div>`;
}


/* trade-room style chart on canvas (product palette: #070707 bg, #8A05FF brand line, #14C679 / #FF646C result) */
function drawDemoChart(){
  const cv=$('[data-democanvas]',frame); if(!cv) return;
  const dpr=Math.min(2,window.devicePixelRatio||1), W=cv.clientWidth, H=cv.clientHeight; if(!W) return;
  cv.width=W*dpr; cv.height=H*dpr; const c=cv.getContext('2d'); c.scale(dpr,dpr);
  const phase=cv.dataset.phase, pos=+cv.dataset.pos, dir=cv.dataset.dir, result=cv.dataset.result, seed=+cv.dataset.seed;
  const r=mulberry(seed), N=48, padR=62, entryX=Math.round((W-padR)*0.62), expX=W-padR;
  // history to the left of entry, then the live leg to the right
  const base=2648.30; let v=base, mom=0; const hist=[]; for(let i=0;i<N;i++){ mom=mom*.6+(r()-.5)*.9; v+=mom; hist.push(v); }
  hist[N-1]=base;
  const live=[]; if(phase!=='pick'){ const want=(result==='won'?dir:(dir==='up'?'down':'up')); let lv=base, lm=0; const M=24; for(let i=1;i<=M;i++){ const drift=(want==='up'?1:-1)*(i/M)*2.4; lm=lm*.6+(r()-.5)*.6; lv=base+drift+lm; live.push(lv); } }
  const all=hist.concat(live.slice(0,Math.max(0,Math.round(live.length*pos))));
  const lo=Math.min(...hist,...live,base)-.6, hi=Math.max(...hist,...live,base)+.6;
  const y=val=>H-14-((val-lo)/(hi-lo))*(H-44);
  const xAt=i=>i<N? (i/(N-1))*entryX : entryX+((i-N+1)/live.length)*(expX-entryX);
  c.clearRect(0,0,W,H);
  // grid
  c.strokeStyle='rgba(61,61,61,.4)'; c.lineWidth=1; for(let g=1;g<4;g++){ const gy=Math.round(14+(H-44)*g/4)+.5; c.beginPath(); c.moveTo(0,gy); c.lineTo(W,gy); c.stroke(); }
  // price labels on the right
  c.fillStyle='#6b6b6b'; c.font='600 10px "Space Grotesk", monospace'; c.textAlign='right';
  const curVal=all[all.length-1], curY=y(curVal);
  for(let g=0;g<=4;g++){ const val=hi-(hi-lo)*g/4, gy=14+(H-44)*g/4+3; if(Math.abs(gy-curY)<14) continue; c.fillText(val.toFixed(2), W-6, gy); }
  // expiry line
  c.setLineDash([3,4]); c.strokeStyle='rgba(255,255,255,.25)'; c.beginPath(); c.moveTo(expX+.5,8); c.lineTo(expX+.5,H-10); c.stroke(); c.setLineDash([]);
  c.fillStyle='#878787'; c.font='700 9px Manrope, sans-serif'; c.textAlign='center'; c.fillText('EXPIRY', expX, H-2);
  // path
  const path=new Path2D(); all.forEach((val,i)=>{ const px=xAt(i), py=y(val); if(i===0) path.moveTo(px,py); else { const pp=[xAt(i-1),y(all[i-1])]; const cx=(pp[0]+px)/2; path.bezierCurveTo(cx,pp[1],cx,py,px,py); } });
  const lastX=xAt(all.length-1), lastY=y(all[all.length-1]);
  // area fill
  const area=new Path2D(path); area.lineTo(lastX,H); area.lineTo(0,H); area.closePath();
  const g=c.createLinearGradient(0,0,0,H); g.addColorStop(0,'rgba(138,5,255,.38)'); g.addColorStop(1,'rgba(138,5,255,0)'); c.fillStyle=g; c.fill(area);
  // line
  c.lineWidth=2; c.lineJoin='round'; c.lineCap='round'; c.strokeStyle='#CB3BFF'; c.shadowColor='rgba(138,5,255,.8)'; c.shadowBlur=10; c.stroke(path); c.shadowBlur=0;
  // entry line + marker
  if(phase!=='pick'){
    c.setLineDash([4,4]); c.strokeStyle='rgba(255,255,255,.45)'; c.beginPath(); c.moveTo(0,y(base)+.5); c.lineTo(W,y(base)+.5); c.stroke(); c.setLineDash([]);
    c.fillStyle='rgba(255,255,255,.85)'; c.font='700 9px Manrope, sans-serif'; c.textAlign='left'; c.fillText((dir==='up'?'▲ UP':'▼ DOWN')+' · ENTRY '+base.toFixed(2), 8, y(base)-5);
    c.fillStyle=dir==='up'?'#14C679':'#FF646C'; c.beginPath(); c.arc(entryX,y(base),4,0,Math.PI*2); c.fill();
    // zone shading between entry and current price
    if(all.length>N){ c.fillStyle=(result==='won'&&pos>=1)?'rgba(20,198,121,.14)':(pos>=1?'rgba(255,100,108,.14)':'rgba(255,255,255,.04)'); c.fillRect(entryX,Math.min(y(base),lastY),expX-entryX,Math.abs(y(base)-lastY)); }
  }
  // head
  c.fillStyle='#fff'; c.beginPath(); c.arc(lastX,lastY,3.5,0,Math.PI*2); c.fill();
  c.fillStyle='rgba(203,59,255,.35)'; c.beginPath(); c.arc(lastX,lastY,9,0,Math.PI*2); c.fill();
  // live price tag
  const cur=all[all.length-1]; c.fillStyle='#8A05FF'; const tagW=58; c.fillRect(W-tagW-2,lastY-9,tagW,18); c.fillStyle='#fff'; c.font='700 10px "Space Grotesk", monospace'; c.textAlign='center'; c.fillText(cur.toFixed(2), W-tagW/2-2, lastY+3.5);
  // quote overlay
  const px=$('[data-px]',frame), dl=$('[data-dl]',frame);
  if(px){ px.textContent=cur.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,' '); }
  if(dl){ const d=cur-base; dl.textContent=(phase==='pick'?'XAU/USD · 60 s':(d>=0?'+':'')+d.toFixed(2)+' since entry'); dl.className='dl '+(phase==='pick'?'':d>=0?'up':'down'); }
}

/* ============ render + wiring ============ */
const frame=$('#frame');
let moneySeen=false;
function render(keepScroll){
  const st=keepScroll?window.scrollY:0;
  frame.innerHTML = {game:renderGame,intuition:renderIntuition,trader:renderTrader,learn:renderLearn,cards:renderCards,shake:renderShake}[S.track]();
  if(keepScroll) window.scrollTo(0,st); else window.scrollTo(0,0);
  initStars();
  drawDemoChart();
  watchMoney();
  updateSticky();
}
function watchMoney(){
  const m=$('[data-money]',frame); if(!m) return;
  const io=new IntersectionObserver(es=>{ if(es[0].isIntersecting && !moneySeen){ moneySeen=true; ev('landing_money_block_viewed',{track:S.track}); io.disconnect(); } },{threshold:.5});
  io.observe(m);
}
function updateSticky(){
  const s=$('[data-sticky]',frame), m=$('[data-money]',frame);
  if(!s||!m) return;
  s.hidden = S.vp==='w' || !(window.scrollY + window.innerHeight > m.offsetTop + m.offsetHeight + 40);
}
window.addEventListener('scroll',updateSticky,{passive:true});
window.addEventListener('resize',()=>drawDemoChart());

frame.addEventListener('click',e=>{
  const b=e.target.closest('button'); if(!b) return;
  if(b.hasAttribute('data-lang-toggle')){ S.lang=S.lang==='en'?'id':'en'; try{ const u=new URL(location.href); u.searchParams.set('lang',S.lang); history.replaceState(null,'',u); document.documentElement.lang=S.lang; }catch(e){} render(true); return; }
  if(b.hasAttribute('data-help')){ ev('landing_help_clicked',{track:S.track}); window.open(helpUrl(),'_blank','noopener'); return; }
  if(b.hasAttribute('data-close')){ S[S.track].sheet=false; S[S.track].share=false; render(true); return; }
  if(b.hasAttribute('data-open-sheet')){ ev('landing_cta_clicked',{track:S.track,position:(b.dataset.ev.match(/position:(\w+)/)||[])[1]}); S[S.track].sheet=true; render(true); return; }
  if(b.hasAttribute('data-reg')){ const inp=$('input',b.parentElement); const u=new URL(signupUrl()); if(inp&&inp.value.trim()) u.searchParams.set('contact',inp.value.trim()); b.disabled=true; location.href=u.toString(); return; }
  if(b.dataset.tab){ S.game.tab=b.dataset.tab; render(true); return; }
  if(b.dataset.ans){ // game hero
    const g=S.game; g.answered[g.idx]=b.dataset.ans; ev('landing_cta_clicked',{track:'game',position:'hero',answer:b.dataset.ans}); render(true);
    setTimeout(()=>{ if(g.answered.length>=3 && g.answered.filter(Boolean).length>=3){ g.sheet=true; } else { g.idx=Math.min(g.idx+1,C.game.en.cards.length-1); } render(true); },900);
    return;
  }
  if(b.dataset.qans){ const q=S.intuition; q.answers[q.q]=b.dataset.qans; ev('quiz_answered',{q:q.q+1,answer:b.dataset.qans}); render(true);
    setTimeout(()=>{ if(q.q>=4){ q.screen='result'; ev('quiz_completed',{score:gutType(q.answers,C.intuition.en.qs)}); } else q.q++; render(false); },800); return; }
  if(b.hasAttribute('data-start')){ const q=S.intuition; if(q.returned){ q.answers=['yes','no','no','yes','yes']; q.screen='result'; } else { q.screen='quiz'; q.q=0; q.answers=[]; q.forceType=null; } render(false); return; }
  if(b.hasAttribute('data-share')){ S[S.track].share=true; render(true); return; }
  if(b.hasAttribute('data-goto-demo')){ ev('lesson_started',{n:1}); const box=$('[data-demo-box]',frame); if(box){ box.scrollIntoView({behavior:'smooth',block:'center'}); } const ud=$('[data-updown]',frame); if(ud){ ud.classList.remove('pulse'); void ud.offsetWidth; ud.classList.add('pulse'); const first=$('button',ud); if(first) setTimeout(()=>first.focus({preventScroll:true}),500); } return; }
  /* learn: demo trade */
  if(b.dataset.demo){ const L=S.learn; L.dir=b.dataset.demo; L.phase='wait'; L.left=5; L.seed=Math.floor(Math.random()*1000)+1; L.result='won'; ev('demo_trade_placed',{track:'learn',direction:L.dir}); render(true);
    clearInterval(L.timer); L.timer=setInterval(()=>{ L.left--; if(L.left<=0){ clearInterval(L.timer); L.phase='result'; L.left=0; ev('demo_trade_closed',{track:'learn',result:L.result}); render(true); if(L.done===0){ L.done=1; setTimeout(()=>{ L.sheet=true; render(true); },1400); } } else render(true); },1000); return; }
  if(b.hasAttribute('data-demo-again')){ const L=S.learn; L.phase='pick'; L.dir=null; L.result=null; L.left=5; render(true); return; }
  /* cards */
  if(b.dataset.deck!==undefined){ const K=S.cards; K.deck=+b.dataset.deck; K.picked=null; K.answered=null; render(true); return; }
  if(b.dataset.pick!==undefined){ const K=S.cards; if(K.picked!==null) return; K.picked=+b.dataset.pick; ev('card_pulled',{deck:K.deck?'wayang':'tarot',card:b.getAttribute('aria-label')}); render(true); return; }
  if(b.dataset.cans){ const K=S.cards; K.answered=b.dataset.cans; const nm=C.cards[S.lang][K.deck?'wayang':'tarot'][[(K.round*2)%6,(K.round*2+3)%6,(K.round*2+5)%6][K.picked]][1]; K.pulled.push(nm); ev('card_answered',{deck:K.deck?'wayang':'tarot',card:nm,answer:K.answered}); render(true);
    if(K.pulled.length>=3){ setTimeout(()=>{ K.sheet=true; render(true); },1100); } return; }
  /* shake */
  if(b.hasAttribute('data-shake')){ const K=S.shake; if(K.shaking||K.picked!==null) return; K.shaking=true; ev('stick_shaken',{track:'shake'}); render(true);
    setTimeout(()=>{ const used=K.pulled; let pool=[0,1,2,3,4,5].filter(i=>!used.includes(i)); if(!pool.length) pool=[0,1,2,3,4,5]; K.picked=pool[Math.floor(Math.random()*pool.length)]; K.shaking=false; K.justPopped=true; ev('stick_picked',{stick:K.picked+1}); render(true); setTimeout(()=>{K.justPopped=false;},1000); },800); return; }
  if(b.dataset.sans){ const K=S.shake; K.answered=b.dataset.sans; K.pulled.push(K.picked); ev('stick_answered',{stick:K.picked+1,answer:K.answered}); render(true);
    if(K.pulled.length>=3){ setTimeout(()=>{ K.sheet=true; render(true); },1100); } return; }
  if(b.hasAttribute('data-next-stick')){ const K=S.shake; K.round++; K.picked=null; K.answered=null; render(true); return; }
  if(b.hasAttribute('data-next-card')){ const K=S.cards; K.round++; K.picked=null; K.answered=null; render(true); return; }
});


/* ============ boot ============ */
const CFG=window.KAVEOS_CONFIG||{};
function cfgFor(key){ const t=S.track; const per=(CFG.tracks&&CFG.tracks[t])||{}; return per[key]||CFG[key]||''; }
let SIGNUP_URL='', HELP_URL='';
function boot(track){
  S.track=track;
  try{ const l=new URLSearchParams(location.search).get('lang'); if(l==='id'||l==='en') S.lang=l; else if(/^id\b/i.test(navigator.language||'')) S.lang='id'; }catch(e){}
  document.documentElement.lang=S.lang;
  render(false);
  ev('landing_viewed',{track:S.track,lang:S.lang});
  let rw; window.addEventListener('resize',()=>{ clearTimeout(rw); rw=setTimeout(()=>render(true),150); });
}
window.KaveosLanding={boot,S,C,BRAND};
