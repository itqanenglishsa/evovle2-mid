import { ExamModel } from '../types';

// =========================================================================
// MODEL 3 (Model C): Evolve 2 Standard Midterm - University Foundations
// =========================================================================
export const modelCExam: ExamModel = {
  id: 'model-c',
  title: 'نموذج اختبار Evolve 2 - 3',
  subtitle: 'Evolve 2 Midterm Standard Blueprint • Units 1 to 6 Comprehensive',
  university: 'جامعة الملك عبدالعزيز / معهد اللغة الإنجليزية',
  term: 'First Semester Midterm Exam',
  courseCode: 'ELI 102 / Evolve 2',
  timeLimitMinutes: 50,
  totalQuestions: 30,
  listeningTracks: {
    t3: {
      id: 't3',
      title: 'Planning a Weekend Trip to Taif',
      description: 'Audio dialogue: Travel advisor Rania helps customer Sultan plan a weekend mountain getaway to Taif.',
      durationSeconds: 125,
      script:
        'Rania: Good afternoon, Welcome to Al-Safwa Travel. How can I help you plan your weekend?\n\nSultan: Good afternoon! My family and I live in Jeddah, and we want to escape the humidity this weekend. We are thinking about driving to Taif.\n\nRania: Taif is a wonderful choice! The weather in Shafa and Hada is around 22 degrees Celsius right now, which is much cooler than the coast.\n\nSultan: That sounds ideal. How long is the drive from Jeddah to Taif using the new Al-Hada mountain highway?\n\nRania: It takes approximately two hours by car. I recommend leaving early on Friday morning around 7:00 AM to avoid mountain traffic.\n\nSultan: Great advice. Are the Teleferik cable cars open for visitors at Al-Hada resort?\n\nRania: Yes! The cable car runs daily from 1:00 PM until 10:00 PM. A return family ticket costs 120 Riyals.\n\nSultan: Excellent. We would also like to visit a traditional rose water factory on Saturday.\n\nRania: The famous Al-Kamal Rose Factory is open from 9:00 AM to 5:00 PM with free guided tours. I will print your itinerary now!\n\nSultan: Thank you so much, Rania!'
    }
  },
  passages: {
    p3: {
      id: 'p3',
      title: 'Starting University Life in Jeddah',
      content: [
        'Fahad and Tariq are first-year university roommates in Jeddah. Fahad is from Abha and loves cooler weather, while Tariq grew up in Yanbu and loves the Red Sea coast.',
        'On weekdays, Fahad usually wakes up at 6:30 AM to prepare for his mechanical engineering lectures. Tariq is studying computer science and often stays up late coding new mobile applications.',
        'At the moment, both students are preparing intensively for their English Evolve 2 midterm exam. Fahad is reviewing grammar rules in the central library, and Tariq is practicing vocabulary with a study group.',
        'They share a small kitchen where they take turns cooking healthy meals like Kabsa and vegetable soup on weekends.'
      ]
    }
  },
  questions: [
    // --- LISTENING (Q1 - Q5) ---
    {
      id: 301,
      section: 'listening',
      questionNumber: 1,
      prompt: 'Why does Sultan want to take his family to Taif for the weekend?',
      options: [
        { id: 'A', text: 'To escape the humidity of Jeddah and enjoy cooler mountain weather' },
        { id: 'B', text: 'To attend an international sports tournament' },
        { id: 'C', text: 'To purchase a new sports car' },
        { id: 'D', text: 'To enroll in a university summer camp' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Listening for Motives & Reasons',
      ruleCategory: 'Listening for Key Intentions',
      explanationEn: 'Sultan states: "we want to escape the humidity this weekend. We are thinking about driving to Taif."',
      explanationAr: 'أوضح سلطان أنه يريد الهروب من رطوبة جدة والاستمتاع بجو الطائف اللطيف والبارد.',
      audioTrackId: 't3'
    },
    {
      id: 302,
      section: 'listening',
      questionNumber: 2,
      prompt: 'Approximately how long is the drive from Jeddah to Taif via the mountain highway?',
      options: [
        { id: 'A', text: 'Thirty minutes' },
        { id: 'B', text: 'About two hours' },
        { id: 'C', text: 'Over six hours' },
        { id: 'D', text: 'A full day' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 5: Listening for Travel Times',
      ruleCategory: 'Listening for Durations',
      explanationEn: 'Rania notes: "It takes approximately two hours by car."',
      explanationAr: 'ذكرت رانية أن الرحلة تستغرق بالسيارة ساعتين تقريباً (approximately two hours).',
      audioTrackId: 't3'
    },
    {
      id: 303,
      section: 'listening',
      questionNumber: 3,
      prompt: 'What time does Rania recommend Sultan leave on Friday morning?',
      options: [
        { id: 'A', text: 'Around 7:00 AM to avoid traffic' },
        { id: 'B', text: 'At midday 12:00 PM' },
        { id: 'C', text: 'Late at night around 11:00 PM' },
        { id: 'D', text: 'After 3:00 PM' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Listening for Recommendations',
      ruleCategory: 'Time Expressions in Dialogue',
      explanationEn: 'Rania advises: "I recommend leaving early on Friday morning around 7:00 AM to avoid mountain traffic."',
      explanationAr: 'نصحته بالانطلاق مبكراً صباح الجمعة حوالي 7:00 صباحاً لتفادي الزحام في طريق الجبل.',
      audioTrackId: 't3'
    },
    {
      id: 304,
      section: 'listening',
      questionNumber: 4,
      prompt: 'How much is the return family ticket for the Al-Hada cable car?',
      options: [
        { id: 'A', text: '50 Riyals' },
        { id: 'B', text: '120 Riyals' },
        { id: 'C', text: '250 Riyals' },
        { id: 'D', text: 'It is completely free' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 6: Listening for Prices',
      ruleCategory: 'Prices and Currency in Listening',
      explanationEn: 'Rania confirms: "A return family ticket costs 120 Riyals."',
      explanationAr: 'أكدت أن تذكرة العائلة الذهاب والعودة للتلفريك تبلغ 120 ريالاً.',
      audioTrackId: 't3'
    },
    {
      id: 305,
      section: 'listening',
      questionNumber: 5,
      prompt: 'What special place do they want to visit on Saturday in Taif?',
      options: [
        { id: 'A', text: 'A deep-sea diving club' },
        { id: 'B', text: 'A traditional rose water factory' },
        { id: 'C', text: 'An airport flight school' },
        { id: 'D', text: 'A modern ice-skating stadium' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 5: Listening for Attractions',
      ruleCategory: 'Specific Activity Identification',
      explanationEn: 'Sultan says: "We would also like to visit a traditional rose water factory on Saturday."',
      explanationAr: 'قال سلطان إنهم يرغبون بزيارة مصنع مياه الورد الطائفي التقليدي يوم السبت.',
      audioTrackId: 't3'
    },

    // --- VOCABULARY (Q6 - Q13) ---
    {
      id: 306,
      section: 'vocabulary',
      questionNumber: 6,
      prompt: 'Fahad and I share the same flat near the university campus. He is my ______.',
      options: [
        { id: 'A', text: 'neighbor' },
        { id: 'B', text: 'roommate' },
        { id: 'C', text: 'boss' },
        { id: 'D', text: 'customer' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 1: Making connections',
      ruleCategory: 'People & Relationships',
      explanationEn: "'Roommate' means a person who shares an apartment or room with you.",
      explanationAr: "كلمة roommate تعني 'زميل السكن أو الشقة'، بينما neighbor تعني جار و boss تعني مدير العمل."
    },
    {
      id: 307,
      section: 'vocabulary',
      questionNumber: 7,
      prompt: 'Someone who attends the exact same lecture or seminar as you is your ______.',
      options: [
        { id: 'A', text: 'stranger' },
        { id: 'B', text: 'classmate' },
        { id: 'C', text: 'relative' },
        { id: 'D', text: 'cashier' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 1: People vocabulary',
      ruleCategory: 'Relationships Vocabulary',
      explanationEn: "'Classmate' refers to a peer who studies in the same class at school or university.",
      explanationAr: "كلمة classmate تعني 'زميل الصف أو المحاضرة في الجامعة'."
    },
    {
      id: 308,
      section: 'vocabulary',
      questionNumber: 8,
      prompt: 'My smartphone battery is completely flat. Can I borrow your ______ to plug it in?',
      options: [
        { id: 'A', text: 'charger' },
        { id: 'B', text: 'mirror' },
        { id: 'C', text: 'receipt' },
        { id: 'D', text: 'wallet' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 1: Gadgets & Accessories',
      ruleCategory: 'Electronic Items Vocabulary',
      explanationEn: 'A "charger" supplies electrical energy to replenish a depleted battery.',
      explanationAr: 'كلمة "charger" تعني شاحن، وهو الجهاز المستخدم لإعادة شحن بطارية الهاتف.'
    },
    {
      id: 309,
      section: 'vocabulary',
      questionNumber: 9,
      prompt: 'The professor asked us to turn on our laptop ______ so we can listen to the lecture recording quietly.',
      options: [
        { id: 'A', text: 'headphones' },
        { id: 'B', text: 'umbrellas' },
        { id: 'C', text: 'receipts' },
        { id: 'D', text: 'keys' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 1: Everyday Items',
      ruleCategory: 'Audio Devices',
      explanationEn: '"Headphones" allow private listening to audio without disturbing nearby people.',
      explanationAr: 'كلمة headphones تعني سماعات رأس للاستماع الفردي دون إزعاج الآخرين.'
    },
    {
      id: 310,
      section: 'vocabulary',
      questionNumber: 10,
      prompt: 'Before running in the morning race, athletes always ______ their muscles to prevent injury.',
      options: [
        { id: 'A', text: 'stretch' },
        { id: 'B', text: 'fall' },
        { id: 'C', text: 'waste' },
        { id: 'D', text: 'borrow' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 2: Physical fitness',
      ruleCategory: 'Exercise Verbs',
      explanationEn: '"Stretch" means extending limbs and warming muscles prior to athletic activity.',
      explanationAr: 'الفعل stretch يعني يمدد أو يمط العضلات قبل ممارسة الرياضة لتجنب الإصابات.'
    },
    {
      id: 311,
      section: 'vocabulary',
      questionNumber: 11,
      prompt: 'Thousands of cheering ______ filled the stadium to support Al-Hilal in the championship.',
      options: [
        { id: 'A', text: 'fans' },
        { id: 'B', text: 'bosses' },
        { id: 'C', text: 'cooks' },
        { id: 'D', text: 'cashiers' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 2: Sports events',
      ruleCategory: 'Spectators & Fans',
      explanationEn: '"Fans" are enthusiastic followers and spectators of a sports team.',
      explanationAr: 'كلمة fans تعني المشجعين والمناصرين الرياضيين الذين يملأون المدرجات.'
    },
    {
      id: 312,
      section: 'vocabulary',
      questionNumber: 12,
      prompt: 'A person who directs and supervises employees at a company is their ______.',
      options: [
        { id: 'A', text: 'boss' },
        { id: 'B', text: 'neighbor' },
        { id: 'C', text: 'tourist' },
        { id: 'D', text: 'student' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 1: Work relationships',
      ruleCategory: 'Workplace Roles',
      explanationEn: 'A "boss" is the person in charge of a worker or organization.',
      explanationAr: 'الـ "boss" هو المدير أو المسؤول في مكان العمل.'
    },
    {
      id: 313,
      section: 'vocabulary',
      questionNumber: 13,
      prompt: 'I always keep my identity card and cash securely in my leather ______.',
      options: [
        { id: 'A', text: 'wallet' },
        { id: 'B', text: 'keyboard' },
        { id: 'C', text: 'mouse' },
        { id: 'D', text: 'screen' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 1: Personal accessories',
      ruleCategory: 'Everyday Essentials',
      explanationEn: 'A "wallet" is a small, flat folding case used to hold money, cards, and documents.',
      explanationAr: 'الـ "wallet" هي محفظة الجيب المخصصة لحمل النقود والبطاقات.'
    },

    // --- GRAMMAR (Q14 - Q24) ---
    {
      id: 314,
      section: 'grammar',
      questionNumber: 14,
      prompt: 'Fahad usually ______ breakfast at 7:00 AM before walking to his lecture.',
      options: [
        { id: 'A', text: 'eats' },
        { id: 'B', text: 'eat' },
        { id: 'C', text: 'is eating' },
        { id: 'D', text: 'ate' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 1: Present Simple Routines',
      ruleCategory: 'Present Simple Third Person -s',
      explanationEn: 'With singular subject Fahad (he) and adverb "usually", the verb takes an -s: "eats".',
      explanationAr: 'مع الفاعل المفرد (Fahad) وظرف التكرار usually، يأخذ الفعل s في المضارع البسيط: eats.'
    },
    {
      id: 315,
      section: 'grammar',
      questionNumber: 15,
      prompt: 'Listen! Tariq ______ on the phone with his parents right now.',
      options: [
        { id: 'A', text: 'talks' },
        { id: 'B', text: 'is talking' },
        { id: 'C', text: 'talk' },
        { id: 'D', text: 'talked' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 1: Present Continuous',
      ruleCategory: 'Actions Happening Now',
      explanationEn: '"Listen!" and "right now" signal the present continuous: [is + verb-ing]: "is talking".',
      explanationAr: 'علامتا "Listen!" و "right now" تدلان على حدوث الفعل الآن، لذا نستخدم is talking.'
    },
    {
      id: 316,
      section: 'grammar',
      questionNumber: 16,
      prompt: 'The students ______ to school by bus every morning.',
      options: [
        { id: 'A', text: 'go' },
        { id: 'B', text: 'goes' },
        { id: 'C', text: 'is going' },
        { id: 'D', text: 'went' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 1: Present Simple with Plural Subjects',
      ruleCategory: 'Subject-Verb Agreement',
      explanationEn: '"The students" is plural (they), so the base verb "go" is used in the present simple.',
      explanationAr: 'الفاعل جمع (The students)، لذا نستخدم الفعل في المصدر المجرد بدون إضافات: go.'
    },
    {
      id: 317,
      section: 'grammar',
      questionNumber: 17,
      prompt: 'Nasser ______ coffee in the evening because it keeps him awake.',
      options: [
        { id: 'A', text: "doesn't drink" },
        { id: 'B', text: "don't drink" },
        { id: 'C', text: "isn't drink" },
        { id: 'D', text: 'not drinks' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 1: Present Simple Negatives',
      ruleCategory: 'Negative Third Person (doesn’t + base)',
      explanationEn: 'Singular subject Nasser requires "doesn\'t" + base verb "drink": "doesn\'t drink".',
      explanationAr: 'مع الفاعل المفرد ناصر، ننفي في المضارع البسيط باستخدام: doesn\'t drink.'
    },
    {
      id: 318,
      section: 'grammar',
      questionNumber: 18,
      prompt: '______ do you usually go to sleep on weekdays?',
      options: [
        { id: 'A', text: 'What time' },
        { id: 'B', text: 'Who' },
        { id: 'C', text: 'Which' },
        { id: 'D', text: 'How much' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 1: Wh- Questions in Present Simple',
      ruleCategory: 'Asking About Clock Times',
      explanationEn: '"What time" is the question word used specifically to ask about clock time hours.',
      explanationAr: 'أداة الاستفهام "What time" مخصصة للسؤال عن وقت وساعة حدوث الفعل.'
    },
    {
      id: 319,
      section: 'grammar',
      questionNumber: 19,
      prompt: 'We don’t have ______ sugar left to bake the cake.',
      options: [
        { id: 'A', text: 'many' },
        { id: 'B', text: 'much' },
        { id: 'C', text: 'a few' },
        { id: 'D', text: 'several' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 3: Quantifiers (much / many)',
      ruleCategory: 'Quantifiers with Uncountable Nouns',
      explanationEn: 'Sugar is uncountable. In negative sentences, we use "much" with uncountable nouns: "don\'t have much sugar".',
      explanationAr: 'السكر (sugar) غير معدود، ونستخدم "much" في الجمل المنفية مع غير المعدود.'
    },
    {
      id: 320,
      section: 'grammar',
      questionNumber: 20,
      prompt: 'There are only a ______ students waiting outside the hall.',
      options: [
        { id: 'A', text: 'few' },
        { id: 'B', text: 'little' },
        { id: 'C', text: 'much' },
        { id: 'D', text: 'any' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 3: Quantifiers (a few vs a little)',
      ruleCategory: 'Countable Plural Quantifiers',
      explanationEn: '"Students" is a countable plural noun. We use "a few" with countable nouns.',
      explanationAr: 'كلمة students جمع معدود، فنستخدم معها "a few" (بضعة طلاب).'
    },
    {
      id: 321,
      section: 'grammar',
      questionNumber: 21,
      prompt: 'Where ______ you travel during your last mid-semester break?',
      options: [
        { id: 'A', text: 'did' },
        { id: 'B', text: 'do' },
        { id: 'C', text: 'were' },
        { id: 'D', text: 'are' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 4: Past Simple Questions',
      ruleCategory: 'Past Simple Auxiliary (did)',
      explanationEn: 'In past simple questions with an action verb (travel), we use the auxiliary "did": "Where did you travel?".',
      explanationAr: 'في السؤال عن الماضي البسيط مع وجود فعل حركي (travel)، نستخدم "did".'
    },
    {
      id: 322,
      section: 'grammar',
      questionNumber: 22,
      prompt: 'Majed ______ his graduation project yesterday afternoon.',
      options: [
        { id: 'A', text: 'finished' },
        { id: 'B', text: 'finishes' },
        { id: 'C', text: 'finish' },
        { id: 'D', text: 'is finishing' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 4: Past Simple Regular Verbs',
      ruleCategory: 'Past Simple -ed Form',
      explanationEn: '"Yesterday afternoon" specifies a completed past time. Regular verb finish becomes "finished".',
      explanationAr: 'كلمة yesterday تدل على الماضي البسيط، والفعل المنتظم finish يضاف له ed: finished.'
    },
    {
      id: 323,
      section: 'grammar',
      questionNumber: 23,
      prompt: 'Planes are generally ______ than ships for international travel.',
      options: [
        { id: 'A', text: 'more fast' },
        { id: 'B', text: 'faster' },
        { id: 'C', text: 'fastest' },
        { id: 'D', text: 'as fast' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 5: Comparative Adjectives',
      ruleCategory: 'Short Comparative Adjectives',
      explanationEn: 'For one-syllable adjectives followed by "than", we add -er: "faster than".',
      explanationAr: 'الصفة fast قصيرة، لذا عند المقارنة نضيف لها er: faster than.'
    },
    {
      id: 324,
      section: 'grammar',
      questionNumber: 24,
      prompt: 'We ______ to launch our new robotics club next Monday.',
      options: [
        { id: 'A', text: 'are going' },
        { id: 'B', text: 'is going' },
        { id: 'C', text: 'going' },
        { id: 'D', text: 'will to' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Future with be going to',
      ruleCategory: 'Future Plans with be going to',
      explanationEn: 'Plural subject "we" takes [are + going to + verb]: "We are going to launch".',
      explanationAr: 'مع الفاعل الجمع we، تكون صيغة المستقبل: We are going to launch.'
    },

    // --- READING COMPREHENSION (Q25 - Q30) ---
    {
      id: 325,
      section: 'reading',
      questionNumber: 25,
      prompt: 'Where do Fahad and Tariq live while studying at the university?',
      options: [
        { id: 'A', text: 'In a hotel in Abha' },
        { id: 'B', text: 'In university campus dorms in Jeddah' },
        { id: 'C', text: 'With their families in Yanbu' },
        { id: 'D', text: 'In Riyadh' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 1: Reading for Specific Details',
      ruleCategory: 'Locating Factual Information',
      explanationEn: 'The passage explicitly says: "Fahad and Tariq are first-year university roommates in the university campus dorms in Jeddah."',
      explanationAr: 'يذكر النص بوضوح أن فهد وطارق زميلا سكن في السكن الجامعي بمدينة جدة.',
      passageId: 'p3'
    },
    {
      id: 326,
      section: 'reading',
      questionNumber: 26,
      prompt: 'What major is Fahad studying?',
      options: [
        { id: 'A', text: 'Mechanical engineering' },
        { id: 'B', text: 'Computer science' },
        { id: 'C', text: 'Medicine' },
        { id: 'D', text: 'Law' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 1: Reading comprehension',
      ruleCategory: 'Scanning for Academic Majors',
      explanationEn: 'Paragraph 2 mentions: "Fahad usually wakes up at 6:30 AM to prepare for his mechanical engineering lectures."',
      explanationAr: 'يذكر النص أن فهد يستيقظ مبكراً لمحاضرات الهندسة الميكانيكية (mechanical engineering).',
      passageId: 'p3'
    },
    {
      id: 327,
      section: 'reading',
      questionNumber: 27,
      prompt: 'Why does Tariq often stay up late?',
      options: [
        { id: 'A', text: 'He watches football tournaments' },
        { id: 'B', text: 'He codes new mobile applications' },
        { id: 'C', text: 'He works as a night driver' },
        { id: 'D', text: 'He cooks dinner all night' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 1: Reading for Habitual Details',
      ruleCategory: 'Detail Comprehension',
      explanationEn: 'The text states: "Tariq is studying computer science and often stays up late coding new mobile applications."',
      explanationAr: 'يوضح النص أن طارق يسهر لكتابة وبرمجة تطبيقات الهواتف المحمولة.',
      passageId: 'p3'
    },
    {
      id: 328,
      section: 'reading',
      questionNumber: 28,
      prompt: 'What are both students doing at the moment according to the text?',
      options: [
        { id: 'A', text: 'Preparing for their Evolve 2 midterm test' },
        { id: 'B', text: 'Traveling home for summer vacation' },
        { id: 'C', text: 'Shopping for new clothes' },
        { id: 'D', text: 'Playing an online video game match' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 1: Present Continuous in Reading',
      ruleCategory: 'Comprehending Present Actions',
      explanationEn: 'Paragraph 3 notes: "At the moment, both students are preparing intensively for their English Evolve 2 midterm exam."',
      explanationAr: 'في الفقرة الثالثة، يذكر النص أنهما يستعدان في الوقت الحالي لاختبار منتصف الفصل لمقرر Evolve 2.',
      passageId: 'p3'
    },
    {
      id: 329,
      section: 'reading',
      questionNumber: 29,
      prompt: 'Where is Fahad reviewing his grammar rules?',
      options: [
        { id: 'A', text: 'In the central library' },
        { id: 'B', text: 'On the beach in Yanbu' },
        { id: 'C', text: 'In the campus cafeteria' },
        { id: 'D', text: 'At a restaurant' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 1: Reading for Places',
      ruleCategory: 'Location Identification',
      explanationEn: 'The passage specifies: "Fahad is reviewing grammar rules in the central library."',
      explanationAr: 'يحدد النص أن فهد يراجع قواعده في المكتبة المركزية (in the central library).',
      passageId: 'p3'
    },
    {
      id: 330,
      section: 'reading',
      questionNumber: 30,
      prompt: 'What traditional food do they cook together on weekends?',
      options: [
        { id: 'A', text: 'Kabsa and vegetable soup' },
        { id: 'B', text: 'Pizza and French fries' },
        { id: 'C', text: 'Sandwiches only' },
        { id: 'D', text: 'Fast food hamburgers' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 3: Reading about Meals',
      ruleCategory: 'Food and Culture in Text',
      explanationEn: 'The final sentence states: "They share a small kitchen where they take turns cooking healthy meals like Kabsa and vegetable soup on weekends."',
      explanationAr: 'توضح الجملة الأخيرة أنهما يطبخان وجبات شهية مثل الكبسة وشوربة الخضار في عطلات نهاية الأسبوع.',
      passageId: 'p3'
    }
  ]
};

// =========================================================================
// MODEL 4 (Model D): Evolve 2 Standard Midterm - Health, Food & Routines
// =========================================================================
export const modelDExam: ExamModel = {
  id: 'model-d',
  title: 'نموذج اختبار Evolve 2 - 4',
  subtitle: 'Evolve 2 Midterm Standard Blueprint • Food, Nutrition & Past Simple',
  university: 'جامعة الملك سعود / عمادة السنة الأولى المشتركة',
  term: 'First Semester Midterm Exam',
  courseCode: 'ENG 101 / Evolve 2',
  timeLimitMinutes: 50,
  totalQuestions: 30,
  listeningTracks: {
    t4: {
      id: 't4',
      title: 'Sports Clinic Consultation with Dr. Khalid',
      description: 'Audio dialogue: Athlete Tariq visits Dr. Khalid at the university health clinic following an ankle injury.',
      durationSeconds: 130,
      script:
        'Dr. Khalid: Hello, Tariq. Have a seat. What seems to be the problem today?\n\nTariq: Good afternoon, Doctor. During our university football match yesterday evening, I twisted my right ankle when landing after a header.\n\nDr. Khalid: I see. Did you hear a popping sound, and are you experiencing sharp pain right now?\n\nTariq: Yes, there is swelling around the ankle joint, and it hurts when I put weight on my foot. I cannot run or walk normally.\n\nDr. Khalid: Let me examine it carefully... The good news is that the bone is not broken, but you have a moderate ligament sprain.\n\nTariq: Will I need to wear a plaster cast or undergo surgery?\n\nDr. Khalid: No surgery is needed. You must follow the RICE protocol: Rest your foot, apply an Ice pack for 20 minutes three times a day, use a Compression bandage, and Elevate your leg while sleeping.\n\nTariq: How long must I rest before returning to football training?\n\nDr. Khalid: You must rest completely for two full weeks. I will write a medical excuse for your physical education classes and prescribe pain-relief cream.\n\nTariq: Thank you very much, Dr. Khalid.'
    }
  },
  passages: {
    p4: {
      id: 'p4',
      title: 'Traditional Food & Cooking in Asir',
      content: [
        'The Asir region in southwestern Saudi Arabia is famous not only for its dramatic green peaks, but also for its rich culinary traditions.',
        'One of the most cherished heritage dishes is Aseedah, which is made by boiling whole-wheat flour with warm water until it forms a thick, smooth dough. It is traditionally served with rich honey and clarified butter.',
        'Another popular dish is Haneeth, where fresh meat is roasted slowly in underground charcoal pits lined with native juniper branches. This unique cooking method gives the roasted meat a rich, smoky flavor and tender texture.',
        'Families in Abha take pride in preparing these recipes during festive gatherings and winter evenings, preserving ancient recipes for younger generations.'
      ]
    }
  },
  questions: [
    // --- LISTENING (Q1 - Q5) ---
    {
      id: 401,
      section: 'listening',
      questionNumber: 1,
      prompt: 'What injury did Tariq experience during his football match?',
      options: [
        { id: 'A', text: 'He broke his right wrist' },
        { id: 'B', text: 'He twisted his right ankle' },
        { id: 'C', text: 'He hurt his shoulder' },
        { id: 'D', text: 'He caught a high fever' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 2: Health & Sports Injuries',
      ruleCategory: 'Listening for Medical Problems',
      explanationEn: 'Tariq explains: "I twisted my right ankle when landing after a header."',
      explanationAr: 'قال طارق بوضوح إنه لوى كاحله الأيمن أثناء الهبوط بعد ضربة رأسية في مباراة كرة القدم.',
      audioTrackId: 't4'
    },
    {
      id: 402,
      section: 'listening',
      questionNumber: 2,
      prompt: 'What is Dr. Khalid’s diagnosis after examining Tariq’s foot?',
      options: [
        { id: 'A', text: 'The bone is broken and requires surgery' },
        { id: 'B', text: 'The bone is not broken; it is a moderate ligament sprain' },
        { id: 'C', text: 'He has no injury at all' },
        { id: 'D', text: 'He has a torn knee muscle' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 2: Medical Diagnoses in Listening',
      ruleCategory: 'Listening for Doctor Diagnoses',
      explanationEn: 'Dr. Khalid states: "The good news is that the bone is not broken, but you have a moderate ligament sprain."',
      explanationAr: 'أكد الطبيب أن العظم سليم ولم يكسر، وإنما التواء متوسط في الأربطة (ligament sprain).',
      audioTrackId: 't4'
    },
    {
      id: 403,
      section: 'listening',
      questionNumber: 3,
      prompt: 'How often should Tariq apply an ice pack to his injured ankle?',
      options: [
        { id: 'A', text: 'Once a week' },
        { id: 'B', text: 'For 20 minutes, three times a day' },
        { id: 'C', text: 'Continuously all night' },
        { id: 'D', text: 'Never use ice' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 2: Medical Advice & Frequency',
      ruleCategory: 'Listening for Frequency & Duration',
      explanationEn: 'The doctor instructs: "apply an Ice pack for 20 minutes three times a day."',
      explanationAr: 'وجهه الطبيب بوضع كمادات الثلج لمدة 20 دقيقة، ثلاث مرات يومياً.',
      audioTrackId: 't4'
    },
    {
      id: 404,
      section: 'listening',
      questionNumber: 4,
      prompt: 'How long must Tariq rest before returning to football practice?',
      options: [
        { id: 'A', text: 'Two days' },
        { id: 'B', text: 'Two full weeks' },
        { id: 'C', text: 'Six months' },
        { id: 'D', text: 'He can play tomorrow' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 2: Listening for Timeframes',
      ruleCategory: 'Time Constraints in Dialogue',
      explanationEn: 'Dr. Khalid instructs: "You must rest completely for two full weeks."',
      explanationAr: 'أمره الطبيب بالراحة التامة لمدة أسبوعين كاملين (two full weeks).',
      audioTrackId: 't4'
    },
    {
      id: 405,
      section: 'listening',
      questionNumber: 5,
      prompt: 'What document will Dr. Khalid provide for Tariq?',
      options: [
        { id: 'A', text: 'A flight ticket to Europe' },
        { id: 'B', text: 'A medical excuse for his physical education classes' },
        { id: 'C', text: 'A library card' },
        { id: 'D', text: 'A new passport' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 2: Health Documents',
      ruleCategory: 'Specific Purpose Comprehension',
      explanationEn: 'The doctor says: "I will write a medical excuse for your physical education classes."',
      explanationAr: 'ذكر الطبيب أنه سيكتب له عذراً طبياً لحصص التربية البدنية والرياضية.',
      audioTrackId: 't4'
    },

    // --- VOCABULARY (Q6 - Q13) ---
    {
      id: 406,
      section: 'vocabulary',
      questionNumber: 6,
      prompt: 'Lemons and limes have a sharp, ______ taste that makes your mouth pucker.',
      options: [
        { id: 'A', text: 'sour' },
        { id: 'B', text: 'spicy' },
        { id: 'C', text: 'sweet' },
        { id: 'D', text: 'raw' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 3: Describing food tastes',
      ruleCategory: 'Taste Adjectives',
      explanationEn: '"Sour" describes the acidic taste of citrus fruits such as lemons.',
      explanationAr: 'كلمة sour تعني حامض، وهي تصف طعم الليمون والحمضيات.'
    },
    {
      id: 407,
      section: 'vocabulary',
      questionNumber: 7,
      prompt: 'Indian curries often have lots of chili peppers and are very ______.',
      options: [
        { id: 'A', text: 'spicy' },
        { id: 'B', text: 'bland' },
        { id: 'C', text: 'frozen' },
        { id: 'D', text: 'sweet' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 3: Food Flavors',
      ruleCategory: 'Taste Adjectives',
      explanationEn: '"Spicy" means flavored with hot spices or chilies.',
      explanationAr: 'كلمة spicy تعني حار أو مبهر بكثرة التوابل والشطة.'
    },
    {
      id: 408,
      section: 'vocabulary',
      questionNumber: 8,
      prompt: 'Vegetables that have not been heated or cooked on a stove are ______.',
      options: [
        { id: 'A', text: 'raw' },
        { id: 'B', text: 'roasted' },
        { id: 'C', text: 'boiled' },
        { id: 'D', text: 'fried' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 3: Cooking States',
      ruleCategory: 'Food Preparation States',
      explanationEn: '"Raw" means not cooked or raw.',
      explanationAr: 'كلمة raw تعني نيء غير مطبوخ.'
    },
    {
      id: 409,
      section: 'vocabulary',
      questionNumber: 9,
      prompt: 'To make mashed potatoes, you must first ______ the potatoes in a pot of bubbling water.',
      options: [
        { id: 'A', text: 'boil' },
        { id: 'B', text: 'freeze' },
        { id: 'C', text: 'dry' },
        { id: 'D', text: 'chop' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 3: Cooking Methods',
      ruleCategory: 'Cooking Verbs',
      explanationEn: '"Boil" means cooking in hot bubbling water.',
      explanationAr: 'الفعل boil يعني يسلق في الماء المغلي.'
    },
    {
      id: 410,
      section: 'vocabulary',
      questionNumber: 10,
      prompt: 'The restaurant server brought us the ______ after our meal so we could pay.',
      options: [
        { id: 'A', text: 'bill' },
        { id: 'B', text: 'menu' },
        { id: 'C', text: 'napkin' },
        { id: 'D', text: 'fork' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 3: Restaurant Vocabulary',
      ruleCategory: 'Dining Terms',
      explanationEn: 'The "bill" (or check) is the written statement showing money owed for a meal.',
      explanationAr: 'كلمة bill (الفاتورة) هي قائمة الحساب المطلوب دفعها في المطعم.'
    },
    {
      id: 411,
      section: 'vocabulary',
      questionNumber: 11,
      prompt: 'Dark chocolate without added milk or sugar often tastes quite ______.',
      options: [
        { id: 'A', text: 'bitter' },
        { id: 'B', text: 'salty' },
        { id: 'C', text: 'sour' },
        { id: 'D', text: 'creamy' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 3: Taste Vocabulary',
      ruleCategory: 'Flavors',
      explanationEn: '"Bitter" describes a sharp, pungent taste like dark unsweetened cacao or black coffee.',
      explanationAr: 'كلمة bitter تعني مرّ، كطعم الشوكولاتة الداكنة أو القهوة المرة.'
    },
    {
      id: 412,
      section: 'vocabulary',
      questionNumber: 12,
      prompt: 'A healthy snack between meals could be an apple, banana, or a bowl of ______.',
      options: [
        { id: 'A', text: 'yogurt' },
        { id: 'B', text: 'oil' },
        { id: 'C', text: 'salt' },
        { id: 'D', text: 'pepper' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 3: Nutrition Vocabulary',
      ruleCategory: 'Healthy Foods',
      explanationEn: '"Yogurt" is a nutritious dairy food eaten as a healthy snack.',
      explanationAr: 'الـ yogurt (الزبادي) وجبة خفيفة وصحية ومغذية.'
    },
    {
      id: 413,
      section: 'vocabulary',
      questionNumber: 13,
      prompt: 'I prefer to drink ______ water with no ice when I exercise.',
      options: [
        { id: 'A', text: 'room temperature' },
        { id: 'B', text: 'frozen' },
        { id: 'C', text: 'boiling' },
        { id: 'D', text: 'burnt' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 3: Food & Drinks Adjectives',
      ruleCategory: 'Beverages Properties',
      explanationEn: '"Room temperature" describes liquids that are neither chilled nor hot.',
      explanationAr: 'عبارة room temperature تعني بحرارة الغرفة العادية (غير مثلج وغير ساخن).'
    },

    // --- GRAMMAR (Q14 - Q24) ---
    {
      id: 414,
      section: 'grammar',
      questionNumber: 14,
      prompt: 'There is ______ salt in this broth. It is way too salty to swallow!',
      options: [
        { id: 'A', text: 'too much' },
        { id: 'B', text: 'too many' },
        { id: 'C', text: 'a few' },
        { id: 'D', text: 'not enough' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 3: Quantifiers (too much vs too many)',
      ruleCategory: 'Uncountable Quantifiers',
      explanationEn: 'Salt is uncountable. We use "too much" for an excessive quantity of uncountable nouns.',
      explanationAr: 'الملح غير معدود، لذا نستخدم معه "too much" للتعبير عن الكثرة الزائدة عن الحد.'
    },
    {
      id: 415,
      section: 'grammar',
      questionNumber: 15,
      prompt: 'You put ______ onions in the salad. I can barely taste the tomatoes.',
      options: [
        { id: 'A', text: 'too many' },
        { id: 'B', text: 'too much' },
        { id: 'C', text: 'a little' },
        { id: 'D', text: 'much' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 3: Quantifiers with Countable Plurals',
      ruleCategory: 'Countable Plural Excess',
      explanationEn: 'Onions is a countable plural noun. We use "too many" with countable plurals.',
      explanationAr: 'البصل (onions) اسم جمع معدود، فنستخدم معه "too many".'
    },
    {
      id: 416,
      section: 'grammar',
      questionNumber: 16,
      prompt: 'Can you pour me a ______ more orange juice, please?',
      options: [
        { id: 'A', text: 'little' },
        { id: 'B', text: 'few' },
        { id: 'C', text: 'many' },
        { id: 'D', text: 'several' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 3: Quantifiers (a little vs a few)',
      ruleCategory: 'Uncountable Small Quantities',
      explanationEn: '"Juice" is uncountable. We use "a little" with uncountable liquids.',
      explanationAr: 'العصير غير معدود، فنستخدم معه "a little" (قليلاً من العصير).'
    },
    {
      id: 417,
      section: 'grammar',
      questionNumber: 17,
      prompt: 'I want ______ a reservation at the seafood restaurant for 8:00 PM.',
      options: [
        { id: 'A', text: 'to make' },
        { id: 'B', text: 'making' },
        { id: 'C', text: 'make' },
        { id: 'D', text: 'made' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 3: Verb Patterns (want + infinitive)',
      ruleCategory: 'Verbs Followed by Infinitive with to',
      explanationEn: '"Want" is followed by a to-infinitive: "want to make".',
      explanationAr: 'الفعل want يتبعه دائماً المصدر مسبوقاً بـ to: want to make.'
    },
    {
      id: 418,
      section: 'grammar',
      questionNumber: 18,
      prompt: 'My parents enjoy ______ fresh vegetables in their home garden.',
      options: [
        { id: 'A', text: 'growing' },
        { id: 'B', text: 'to grow' },
        { id: 'C', text: 'grow' },
        { id: 'D', text: 'grew' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 3: Verb Patterns (enjoy + gerund)',
      ruleCategory: 'Verbs Followed by Gerund',
      explanationEn: '"Enjoy" is followed by a gerund (-ing form): "enjoy growing".',
      explanationAr: 'الفعل enjoy يتبعه دائماً اسم الفاعل gerund (ing): enjoy growing.'
    },
    {
      id: 419,
      section: 'grammar',
      questionNumber: 19,
      prompt: 'Last summer, my family ______ to Istanbul on holiday.',
      options: [
        { id: 'A', text: 'traveled' },
        { id: 'B', text: 'travels' },
        { id: 'C', text: 'is traveling' },
        { id: 'D', text: 'travel' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 4: Past Simple Regular Verbs',
      ruleCategory: 'Past Simple Affirmative',
      explanationEn: '"Last summer" marks completed past action, so we use the past tense "traveled".',
      explanationAr: 'عبارة Last summer تدل على الماضي البسيط، لذا نستخدم الفعل الماضي: traveled.'
    },
    {
      id: 420,
      section: 'grammar',
      questionNumber: 20,
      prompt: 'We ______ any wild animals when we went hiking in the valley.',
      options: [
        { id: 'A', text: "didn't see" },
        { id: 'B', text: "didn't saw" },
        { id: 'C', text: 'not saw' },
        { id: 'D', text: "weren't see" }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 4: Past Simple Negatives',
      ruleCategory: 'didn’t + base form',
      explanationEn: 'In past simple negative, use "didn\'t" + base verb "see": "didn\'t see".',
      explanationAr: 'نفي الماضي البسيط يكون بـ didn\'t متبوعة بالفعل الأساسي المجرد: didn\'t see.'
    },
    {
      id: 421,
      section: 'grammar',
      questionNumber: 21,
      prompt: '______ Khalid at home when you called him yesterday?',
      options: [
        { id: 'A', text: 'Was' },
        { id: 'B', text: 'Were' },
        { id: 'C', text: 'Did' },
        { id: 'D', text: 'Is' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 4: Past Simple of Be',
      ruleCategory: 'Past of Be Questions',
      explanationEn: 'Singular subject Khalid (he) takes "Was": "Was Khalid at home...?"',
      explanationAr: 'مع الفاعل المفرد خالد والماضي البسيط، نستخدم: Was Khalid at home...?'
    },
    {
      id: 422,
      section: 'grammar',
      questionNumber: 22,
      prompt: 'They ______ in the sea because the waves were too high and dangerous.',
      options: [
        { id: 'A', text: "didn't swim" },
        { id: 'B', text: "didn't swam" },
        { id: 'C', text: 'not swim' },
        { id: 'D', text: 'no swim' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 4: Past Simple Negatives with Irregular Verbs',
      ruleCategory: 'Past Negation',
      explanationEn: 'Use "didn\'t" + base form "swim" (never swam after didn\'t): "didn\'t swim".',
      explanationAr: 'بعد didn\'t يعود الفعل لشكل المصدر المجرد: didn\'t swim.'
    },
    {
      id: 423,
      section: 'grammar',
      questionNumber: 23,
      prompt: 'A chef’s knife is usually ______ than a regular butter knife.',
      options: [
        { id: 'A', text: 'sharper' },
        { id: 'B', text: 'more sharp' },
        { id: 'C', text: 'sharpest' },
        { id: 'D', text: 'as sharp' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Comparative Adjectives',
      ruleCategory: 'One-Syllable Comparatives (-er)',
      explanationEn: 'Sharp is one syllable. Its comparative form takes -er: "sharper than".',
      explanationAr: 'الصفة sharp ذات مقطع واحد، وعند المقارنة نضيف لها er: sharper than.'
    },
    {
      id: 424,
      section: 'grammar',
      questionNumber: 24,
      prompt: 'I ______ try making homemade sushi this coming weekend.',
      options: [
        { id: 'A', text: 'am going to' },
        { id: 'B', text: 'is going to' },
        { id: 'C', text: 'going to' },
        { id: 'D', text: 'will to' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Future with be going to',
      ruleCategory: 'First Person Future Intentions',
      explanationEn: 'With subject pronoun "I", we use [am + going to + base verb]: "I am going to try".',
      explanationAr: 'مع الضمير I، تكون صيغة المستقبل: I am going to try.'
    },

    // --- READING COMPREHENSION (Q25 - Q30) ---
    {
      id: 425,
      section: 'reading',
      questionNumber: 25,
      prompt: 'Where is the Asir region located in Saudi Arabia?',
      options: [
        { id: 'A', text: 'In the southwestern part of the kingdom' },
        { id: 'B', text: 'In the eastern province near the Gulf' },
        { id: 'C', text: 'In the central desert near Riyadh' },
        { id: 'D', text: 'In the far northern border' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 4: Reading for Geographic Facts',
      ruleCategory: 'Locating Geographic Details',
      explanationEn: 'Paragraph 1 states: "The Asir region in southwestern Saudi Arabia is famous..."',
      explanationAr: 'تذكر الفقرة الأولى أن منطقة عسير تقع في جنوب غرب المملكة العربية السعودية.',
      passageId: 'p4'
    },
    {
      id: 426,
      section: 'reading',
      questionNumber: 26,
      prompt: 'What primary ingredient is boiled to make traditional Aseedah?',
      options: [
        { id: 'A', text: 'Whole-wheat flour with warm water' },
        { id: 'B', text: 'White rice with tomatoes' },
        { id: 'C', text: 'Sweet apples with milk' },
        { id: 'D', text: 'Roasted coffee beans' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 3: Reading about Ingredients',
      ruleCategory: 'Reading for Recipe Details',
      explanationEn: 'The passage describes: "Aseedah, which is made by boiling whole-wheat flour with warm water..."',
      explanationAr: 'يوضح النص أن العصيدة تُصنع بسلق طحين القمح الكامل مع الماء الدافئ حتى يتماسك.',
      passageId: 'p4'
    },
    {
      id: 427,
      section: 'reading',
      questionNumber: 27,
      prompt: 'What is Aseedah traditionally served with?',
      options: [
        { id: 'A', text: 'Rich honey and clarified butter' },
        { id: 'B', text: 'Tomato sauce and ketchup' },
        { id: 'C', text: 'Cold soda and French fries' },
        { id: 'D', text: 'Spicy chili sauce' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 3: Cultural Foods',
      ruleCategory: 'Comprehending Cultural Dishes',
      explanationEn: 'Paragraph 2 notes: "It is traditionally served with rich honey and clarified butter."',
      explanationAr: 'تُقدم العصيدة تقليدياً مع العسل والسمن البلدي.',
      passageId: 'p4'
    },
    {
      id: 428,
      section: 'reading',
      questionNumber: 28,
      prompt: 'How is traditional Haneeth prepared according to the passage?',
      options: [
        { id: 'A', text: 'Roasted slowly in underground pits with juniper branches' },
        { id: 'B', text: 'Boiled quickly in a modern pressure cooker' },
        { id: 'C', text: 'Served raw without any fire or heat' },
        { id: 'D', text: 'Fried in deep cooking oil' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 3: Cooking Techniques in Reading',
      ruleCategory: 'Cooking Methods Identification',
      explanationEn: 'Paragraph 3 explains: "fresh meat is roasted slowly in underground charcoal pits lined with native juniper branches."',
      explanationAr: 'يُطهى الحنيث بشواء اللحم ببطء في حفر فحم أرضية مبطنة بأغصان شجر المرخ أو العرعر.',
      passageId: 'p4'
    },
    {
      id: 429,
      section: 'reading',
      questionNumber: 29,
      prompt: 'What effect do the native branches and pit cooking have on the meat in Haneeth?',
      options: [
        { id: 'A', text: 'They give it a rich smoky flavor and tender texture' },
        { id: 'B', text: 'They make the meat bitter and inedible' },
        { id: 'C', text: 'They turn the meat completely sweet like candy' },
        { id: 'D', text: 'They freeze the meat immediately' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 3: Food Descriptors',
      ruleCategory: 'Sensory Detail Comprehension',
      explanationEn: 'The passage highlights: "This unique cooking method gives the roasted meat a rich, smoky flavor and tender texture."',
      explanationAr: 'تمنح طريقة الشواء الفريدة هذه اللحم نكهة مدخنة رائعة وقواماً طرياً جداً.',
      passageId: 'p4'
    },
    {
      id: 430,
      section: 'reading',
      questionNumber: 30,
      prompt: 'Why do families in Abha take pride in preparing these traditional recipes?',
      options: [
        { id: 'A', text: 'To preserve heritage dishes for younger generations' },
        { id: 'B', text: 'To sell them to foreign tourists only' },
        { id: 'C', text: 'Because modern restaurants do not exist in Asir' },
        { id: 'D', text: 'Because they want to avoid cooking at home' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 4: Cultural Heritage Reading',
      ruleCategory: 'Author Purpose & Main Message',
      explanationEn: 'The final sentence states families take pride in preparing recipes "preserving ancient recipes for younger generations."',
      explanationAr: 'تحرص العائلات على إعداد هذه الأطباق للحفاظ على وصفات الأجداد التراثية ونقلها للأجيال القادمة.',
      passageId: 'p4'
    }
  ]
};

// =========================================================================
// MODEL 5 (Model E): Evolve 2 Standard Midterm - Shopping, Travel & Nature
// =========================================================================
export const modelEExam: ExamModel = {
  id: 'model-e',
  title: 'نموذج اختبار Evolve 2 - 5',
  subtitle: 'Evolve 2 Midterm Standard Blueprint • Retail, Prices & Future Intentions',
  university: 'جامعة الإمام عبدالرحمن بن فيصل / عمادة السنة التحضيرية',
  term: 'First Semester Midterm Exam',
  courseCode: 'ENGL 101 / Evolve 2',
  timeLimitMinutes: 50,
  totalQuestions: 30,
  listeningTracks: {
    t5: {
      id: 't5',
      title: 'Arabian Gulf Hotel Reservation Call',
      description: 'Audio dialogue: Guest Majed Al-Dosari phones the front desk at the Arabian Gulf Hotel in Dammam to confirm his suite booking.',
      durationSeconds: 135,
      script:
        'Receptionist: Good morning! Arabian Gulf Hotel Dammam, Sara speaking. How may I assist you?\n\nMajed: Hello! My name is Majed Al-Dosari. I made an online reservation for this Thursday, and I would like to confirm my check-in details.\n\nReceptionist: Certainly, Mr. Al-Dosari. Let me pull up your booking... Yes, you booked an Executive Sea-View Suite for two nights, checking in on Thursday, October 12th.\n\nMajed: That is correct. What time does standard check-in begin?\n\nReceptionist: Check-in begins at 3:00 PM, and check-out on Saturday is at 12:00 noon. If you arrive early, our bellhop can store your luggage securely.\n\nMajed: Wonderful. Does the suite reservation include the international breakfast buffet?\n\nReceptionist: Yes, complimentary breakfast is served daily in the Marina Dining Hall on the ground floor from 6:30 AM to 10:30 AM.\n\nMajed: Great! And is covered valet parking available for hotel guests?\n\nReceptionist: Yes, valet parking is completely free for all registered suite guests.\n\nMajed: Excellent. Thank you for your warm assistance, Sara!\n\nReceptionist: We look forward to welcoming you to Dammam, Mr. Al-Dosari. Have a great day!'
    }
  },
  passages: {
    p5: {
      id: 'p5',
      title: 'Shopping and Smart Consumer Habits',
      content: [
        'With the growth of electronic commerce and large retail shopping centers across Saudi Arabia, consumer spending habits have changed dramatically.',
        'Financial advisors recommend creating a weekly shopping budget before heading out to malls or opening e-commerce mobile apps. This prevents shoppers from wasting money on impulse purchases they do not truly need.',
        'Comparing prices across different stores is now easier than ever. Smart buyers often look for seasonal discounts and cashback rewards, which allows them to save substantial amounts of money.',
        'When purchasing expensive electronic devices like laptops or smart televisions, experts emphasize checking the store return policy and always keeping the printed or digital receipt for warranty protection.'
      ]
    }
  },
  questions: [
    // --- LISTENING (Q1 - Q5) ---
    {
      id: 501,
      section: 'listening',
      questionNumber: 1,
      prompt: 'What type of room did Mr. Majed book at the Arabian Gulf Hotel?',
      options: [
        { id: 'A', text: 'A single room with no windows' },
        { id: 'B', text: 'An Executive Sea-View Suite for two nights' },
        { id: 'C', text: 'A family tent on the beach' },
        { id: 'D', text: 'A basement dormitory room' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 5: Hotel & Travel Details in Listening',
      ruleCategory: 'Listening for Key Booking Details',
      explanationEn: 'The receptionist confirms: "Yes, you booked an Executive Sea-View Suite for two nights."',
      explanationAr: 'أكدت موظفة الاستقبال أنه حجز جناحاً تنفيذياً بإطلالة بحرية لمدة ليلتين (Executive Sea-View Suite).',
      audioTrackId: 't5'
    },
    {
      id: 502,
      section: 'listening',
      questionNumber: 2,
      prompt: 'What time does standard guest check-in begin on Thursday?',
      options: [
        { id: 'A', text: 'At 3:00 PM' },
        { id: 'B', text: 'At 8:00 AM' },
        { id: 'C', text: 'At 9:00 PM' },
        { id: 'D', text: 'At midnight' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Listening for Times & Schedules',
      ruleCategory: 'Time Expressions in Dialogue',
      explanationEn: 'Sara explains: "Check-in begins at 3:00 PM, and check-out on Saturday is at 12:00 noon."',
      explanationAr: 'أوضحت سارة أن موعد تسجيل الدخول يبدأ في الساعة 3:00 عصراً (at 3:00 PM).',
      audioTrackId: 't5'
    },
    {
      id: 503,
      section: 'listening',
      questionNumber: 3,
      prompt: 'Where is the complimentary breakfast buffet served each morning?',
      options: [
        { id: 'A', text: 'In the Marina Dining Hall on the ground floor' },
        { id: 'B', text: 'Delivered only by elevator to the roof' },
        { id: 'C', text: 'At a cafe outside the hotel' },
        { id: 'D', text: 'In the hotel parking lot' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Hotel Amenities in Listening',
      ruleCategory: 'Location Identification in Dialogue',
      explanationEn: 'The receptionist says: "complimentary breakfast is served daily in the Marina Dining Hall on the ground floor."',
      explanationAr: 'ذكرت أن بوفيه الإفطار المجاني يُقدم في قاعة طعام المارينا بالدور الأرضي.',
      audioTrackId: 't5'
    },
    {
      id: 504,
      section: 'listening',
      questionNumber: 4,
      prompt: 'What are the breakfast buffet hours mentioned in the call?',
      options: [
        { id: 'A', text: 'From 6:30 AM to 10:30 AM' },
        { id: 'B', text: 'From 4:00 AM to 6:00 AM' },
        { id: 'C', text: 'From 12:00 PM to 3:00 PM' },
        { id: 'D', text: 'All day long 24 hours' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Listening for Time Ranges',
      ruleCategory: 'Comprehending Schedules',
      explanationEn: 'Sara notes: "from 6:30 AM to 10:30 AM."',
      explanationAr: 'أوضحت أن ساعات الإفطار تمتد من الساعة 6:30 صباحاً حتى 10:30 صباحاً.',
      audioTrackId: 't5'
    },
    {
      id: 505,
      section: 'listening',
      questionNumber: 5,
      prompt: 'How much does valet parking cost for suite guests at the hotel?',
      options: [
        { id: 'A', text: '100 Riyals per hour' },
        { id: 'B', text: 'It is completely free' },
        { id: 'C', text: '50 Riyals per day' },
        { id: 'D', text: 'Only cash payments are accepted' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 6: Services and Cost',
      ruleCategory: 'Identifying Free vs Paid Services',
      explanationEn: 'Sara confirms: "Yes, valet parking is completely free for all registered suite guests."',
      explanationAr: 'أكدت أن خدمة صف السيارات (valet parking) مجانية تماماً لنزلاء الأجنحة.',
      audioTrackId: 't5'
    },

    // --- VOCABULARY (Q6 - Q13) ---
    {
      id: 506,
      section: 'vocabulary',
      questionNumber: 6,
      prompt: 'Can you please lend me 50 Riyals? I promise to ______ you back on Sunday.',
      options: [
        { id: 'A', text: 'pay' },
        { id: 'B', text: 'waste' },
        { id: 'C', text: 'borrow' },
        { id: 'D', text: 'cost' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 6: Phrasal Verbs with Money',
      ruleCategory: 'Financial Phrasal Verbs',
      explanationEn: 'The collocation "pay someone back" means returning borrowed money.',
      explanationAr: 'المصطلح pay someone back يعني يسدد أو يرجع المال المقترض لصاحبه.'
    },
    {
      id: 507,
      section: 'vocabulary',
      questionNumber: 7,
      prompt: 'I put all the groceries from the supermarket shelf into my rolling ______.',
      options: [
        { id: 'A', text: 'shopping cart' },
        { id: 'B', text: 'receipt' },
        { id: 'C', text: 'wallet' },
        { id: 'D', text: 'credit card' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 6: Store Vocabulary',
      ruleCategory: 'Shopping Equipment',
      explanationEn: 'A "shopping cart" (or trolley) is a wheeled vehicle used for carrying items in a store.',
      explanationAr: 'الـ shopping cart هي عربة التسوق المدولبة المستخدمة في السوبرماركت.'
    },
    {
      id: 508,
      section: 'vocabulary',
      questionNumber: 8,
      prompt: 'Always keep your store ______ in case you need to return or exchange a defective item.',
      options: [
        { id: 'A', text: 'receipt' },
        { id: 'B', text: 'mirror' },
        { id: 'C', text: 'umbrella' },
        { id: 'D', text: 'charger' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 6: Proof of Purchase',
      ruleCategory: 'Shopping Documents',
      explanationEn: 'A "receipt" is a printed or digital slip acknowledging proof of purchase.',
      explanationAr: 'الـ receipt (إيصال أو فاتورة الشراء) هو الإثبات اللازم لاسترجاع أو استبدال السلعة.'
    },
    {
      id: 509,
      section: 'vocabulary',
      questionNumber: 9,
      prompt: 'Spending all your monthly savings on unnecessary designer sunglasses is a ______ of money.',
      options: [
        { id: 'A', text: 'waste' },
        { id: 'B', text: 'deal' },
        { id: 'C', text: 'sale' },
        { id: 'D', text: 'price' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 6: Money Collocations',
      ruleCategory: 'Idioms of Money',
      explanationEn: 'A "waste of money" describes spending funds unwisely on unneeded items.',
      explanationAr: 'عبارة waste of money تعني إهداراً أو تضييعاً للمال في غير محله.'
    },
    {
      id: 510,
      section: 'vocabulary',
      questionNumber: 10,
      prompt: 'The shoe store is having an annual end-of-year ______ with up to 50% discounts.',
      options: [
        { id: 'A', text: 'sale' },
        { id: 'B', text: 'debt' },
        { id: 'C', text: 'borrow' },
        { id: 'D', text: 'lend' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 6: Retail Sales',
      ruleCategory: 'Shopping Events',
      explanationEn: 'A "sale" is an event in a store where goods are sold at reduced promotional prices.',
      explanationAr: 'كلمة sale تعني تخفيضات أو تنزيلات موسمية في الأسعار.'
    },
    {
      id: 511,
      section: 'vocabulary',
      questionNumber: 11,
      prompt: 'If you don’t have paper banknotes, you can pay using your debit ______ at the terminal.',
      options: [
        { id: 'A', text: 'card' },
        { id: 'B', text: 'bill' },
        { id: 'C', text: 'cart' },
        { id: 'D', text: 'shelf' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 6: Payment Methods',
      ruleCategory: 'Electronic Payment',
      explanationEn: 'A debit or credit "card" allows electronic payment without paper currency.',
      explanationAr: 'البطاقة المصرفية debit card أو mada تتيح الدفع الإلكتروني.'
    },
    {
      id: 512,
      section: 'vocabulary',
      questionNumber: 12,
      prompt: 'The friendly ______ helped me find the correct shirt size on the clothing rack.',
      options: [
        { id: 'A', text: 'salesperson' },
        { id: 'B', text: 'driver' },
        { id: 'C', text: 'mechanic' },
        { id: 'D', text: 'neighbor' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 6: Retail Jobs',
      ruleCategory: 'Customer Service Vocab',
      explanationEn: 'A "salesperson" assists store shoppers with sizing and merchandise questions.',
      explanationAr: 'الـ salesperson هو موظف المبيعات أو البائع الذي يساعد الزبائن في المتجر.'
    },
    {
      id: 513,
      section: 'vocabulary',
      questionNumber: 13,
      prompt: 'Before buying the laptop, I decided to ______ prices across three different online stores.',
      options: [
        { id: 'A', text: 'compare' },
        { id: 'B', text: 'waste' },
        { id: 'C', text: 'borrow' },
        { id: 'D', text: 'lose' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 6: Smart Shopping Verbs',
      ruleCategory: 'Shopping Actions',
      explanationEn: 'To "compare" means examining two or more things to identify differences or best value.',
      explanationAr: 'الفعل compare يعني يقارن الأسعار لاختيار العرض الأفضل.'
    },

    // --- GRAMMAR (Q14 - Q24) ---
    {
      id: 514,
      section: 'grammar',
      questionNumber: 14,
      prompt: 'The red leather jacket is ______ than the blue denim jacket.',
      options: [
        { id: 'A', text: 'more expensive' },
        { id: 'B', text: 'expensiver' },
        { id: 'C', text: 'most expensive' },
        { id: 'D', text: 'expensive' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Comparative with Long Adjectives',
      ruleCategory: 'Multi-Syllable Comparatives',
      explanationEn: '"Expensive" is a multi-syllable adjective. Its comparative is formed with "more": "more expensive than".',
      explanationAr: 'الصفة expensive طويلة، وعند المقارنة نستخدم more: more expensive than.'
    },
    {
      id: 515,
      section: 'grammar',
      questionNumber: 15,
      prompt: 'This is the ______ department store in our entire province.',
      options: [
        { id: 'A', text: 'biggest' },
        { id: 'B', text: 'bigger' },
        { id: 'C', text: 'most big' },
        { id: 'D', text: 'more big' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Superlative Adjectives',
      ruleCategory: 'Short Superlatives with Spelling Rule',
      explanationEn: '"Big" doubles the consonant before adding -est: "the biggest".',
      explanationAr: 'صيغة التفضيل العليا من big هي: the biggest (الأكبر).'
    },
    {
      id: 516,
      section: 'grammar',
      questionNumber: 16,
      prompt: 'Riyadh is ______ than Taif during the summer months.',
      options: [
        { id: 'A', text: 'hotter' },
        { id: 'B', text: 'more hot' },
        { id: 'C', text: 'hottest' },
        { id: 'D', text: 'hot' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Comparative Adjectives',
      ruleCategory: 'CVC Spelling in Comparatives',
      explanationEn: 'Hot doubles the final \'t\' and adds -er: "hotter than".',
      explanationAr: 'الصفة hot تنتهي بساكن قبله متحرك، فنضاعف الحرف t ونضيف er: hotter than.'
    },
    {
      id: 517,
      section: 'grammar',
      questionNumber: 17,
      prompt: 'I think that this book is ______ interesting than the movie.',
      options: [
        { id: 'A', text: 'more' },
        { id: 'B', text: 'most' },
        { id: 'C', text: 'much' },
        { id: 'D', text: 'as' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Long Adjectives Comparatives',
      ruleCategory: 'more + adjective + than',
      explanationEn: 'Interesting is a long adjective compared using "more interesting than".',
      explanationAr: 'الصفة interesting متعددة المقاطع، فنقارن باستخدام: more interesting than.'
    },
    {
      id: 518,
      section: 'grammar',
      questionNumber: 18,
      prompt: 'Nouf ______ to start her new marketing internship next Sunday.',
      options: [
        { id: 'A', text: 'is going' },
        { id: 'B', text: 'are going' },
        { id: 'C', text: 'going' },
        { id: 'D', text: 'will to' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Future with be going to',
      ruleCategory: 'Singular Future Plans',
      explanationEn: 'Singular subject Nouf takes [is + going to + verb]: "Nouf is going to start".',
      explanationAr: 'الفاعل مفرد (Nouf)، فتكون صيغة المستقبل: Nouf is going to start.'
    },
    {
      id: 519,
      section: 'grammar',
      questionNumber: 19,
      prompt: 'What ______ you going to do after passing your midterm exams?',
      options: [
        { id: 'A', text: 'are' },
        { id: 'B', text: 'is' },
        { id: 'C', text: 'did' },
        { id: 'D', text: 'do' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Questions with be going to',
      ruleCategory: 'Future Question Formulation',
      explanationEn: 'With subject pronoun "you", we use "are": "What are you going to do...?"',
      explanationAr: 'مع الضمير you في صيغة المستقبل بـ going to، نستخدم الفعل المساعد are: What are you going to do?'
    },
    {
      id: 520,
      section: 'grammar',
      questionNumber: 20,
      prompt: 'They aren’t ______ to travel abroad this winter due to their busy exam schedule.',
      options: [
        { id: 'A', text: 'going' },
        { id: 'B', text: 'go' },
        { id: 'C', text: 'went' },
        { id: 'D', text: 'gone' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Future Negatives',
      ruleCategory: 'aren’t going to + base',
      explanationEn: 'The negative future pattern is [aren\'t + going + to + base verb]: "aren\'t going to travel".',
      explanationAr: 'صيغة النفي المستقبلي: aren\'t going to travel.'
    },
    {
      id: 521,
      section: 'grammar',
      questionNumber: 21,
      prompt: 'Last night, I ______ my old smartphone and bought a new tablet.',
      options: [
        { id: 'A', text: 'sold' },
        { id: 'B', text: 'sell' },
        { id: 'C', text: 'selled' },
        { id: 'D', text: 'selling' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 4: Irregular Past Verbs',
      ruleCategory: 'Irregular Past Forms (sell -> sold)',
      explanationEn: 'The past simple form of the irregular verb "sell" is "sold".',
      explanationAr: 'الفعل sell غير منتظم، وماضيه هو "sold" (باع).'
    },
    {
      id: 522,
      section: 'grammar',
      questionNumber: 22,
      prompt: 'How much did that new coffee machine ______ you?',
      options: [
        { id: 'A', text: 'cost' },
        { id: 'B', text: 'costed' },
        { id: 'C', text: 'costing' },
        { id: 'D', text: 'costs' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 4: Past Simple Questions with Did',
      ruleCategory: 'did + base verb',
      explanationEn: 'After the auxiliary "did", the verb returns to its base form "cost".',
      explanationAr: 'بعد أداة الاستفهام والفعل المساعد did، يعود الفعل لشكله الأساسي في المصدر: cost.'
    },
    {
      id: 523,
      section: 'grammar',
      questionNumber: 23,
      prompt: 'There are ______ many cars parked in this narrow street; we cannot drive through.',
      options: [
        { id: 'A', text: 'too' },
        { id: 'B', text: 'much' },
        { id: 'C', text: 'a little' },
        { id: 'D', text: 'lot' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 3: Quantifiers (too many)',
      ruleCategory: 'Quantifiers with Countable Plural Nouns',
      explanationEn: 'We say "too many cars" to indicate an excessive, problematic number of vehicles.',
      explanationAr: 'نستخدم "too many" للتعبير عن الكثرة الزائدة عن الحد مع الأسماء الجمع المعدودة (cars).'
    },
    {
      id: 524,
      section: 'grammar',
      questionNumber: 24,
      prompt: 'My cousin was born ______ Jeddah in 2003.',
      options: [
        { id: 'A', text: 'in' },
        { id: 'B', text: 'on' },
        { id: 'C', text: 'at' },
        { id: 'D', text: 'to' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 4: Prepositions of Place & Cities',
      ruleCategory: 'Preposition "in" with Cities',
      explanationEn: 'We use the preposition "in" with cities and countries: "in Jeddah".',
      explanationAr: 'نستخدم حرف الجر "in" مع المدن والبلدان: in Jeddah.'
    },

    // --- READING COMPREHENSION (Q25 - Q30) ---
    {
      id: 525,
      section: 'reading',
      questionNumber: 25,
      prompt: 'What major change has occurred in Saudi consumer behavior according to the text?',
      options: [
        { id: 'A', text: 'People have completely stopped buying products online' },
        { id: 'B', text: 'Consumer spending habits have changed dramatically due to e-commerce and retail malls' },
        { id: 'C', text: 'No one uses debit or credit cards anymore' },
        { id: 'D', text: 'Shoppers only buy groceries once a year' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 6: Reading for Main Idea',
      ruleCategory: 'Comprehending Trends in Text',
      explanationEn: 'Paragraph 1 indicates: "With the growth of electronic commerce and large retail shopping centers across Saudi Arabia, consumer spending habits have changed dramatically."',
      explanationAr: 'يذكر النص في بدايته أن عادات الإنفاق الاستهلاكي تغيرت بشكل كبير مع نمو التجارة الإلكترونية ومراكز التسوق.',
      passageId: 'p5'
    },
    {
      id: 526,
      section: 'reading',
      questionNumber: 26,
      prompt: 'What do financial advisors recommend shoppers create before heading out to malls?',
      options: [
        { id: 'A', text: 'A weekly shopping budget' },
        { id: 'B', text: 'A map of foreign cities' },
        { id: 'C', text: 'A new company business plan' },
        { id: 'D', text: 'A sports workout schedule' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 6: Reading for Recommendations',
      ruleCategory: 'Identifying Advice in Text',
      explanationEn: 'Paragraph 2 highlights: "Financial advisors recommend creating a weekly shopping budget before heading out to malls..."',
      explanationAr: 'يوصي المستشارون الماليون بوضع ميزانية تسوق أسبوعية (weekly shopping budget) قبل التوجه للأسواق.',
      passageId: 'p5'
    },
    {
      id: 527,
      section: 'reading',
      questionNumber: 27,
      prompt: 'Why is creating a budget beneficial for consumers?',
      options: [
        { id: 'A', text: 'It prevents shoppers from wasting money on impulse purchases they do not need' },
        { id: 'B', text: 'It makes stores close early' },
        { id: 'C', text: 'It increases the price of clothing' },
        { id: 'D', text: 'It forces people to borrow money' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 6: Reading for Purpose & Reasons',
      ruleCategory: 'Cause and Effect in Reading',
      explanationEn: 'The passage explicitly says: "This prevents shoppers from wasting money on impulse purchases they do not truly need."',
      explanationAr: 'يمنع وضع الميزانية المستهلكين من إهدار أموالهم على المشتريات العشوائية غير الضرورية.',
      passageId: 'p5'
    },
    {
      id: 528,
      section: 'reading',
      questionNumber: 28,
      prompt: 'What do smart consumers look for to save substantial money when shopping?',
      options: [
        { id: 'A', text: 'The most expensive luxury brands only' },
        { id: 'B', text: 'Seasonal discounts and cashback rewards' },
        { id: 'C', text: 'Damaged merchandise' },
        { id: 'D', text: 'Expired food items' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 6: Shopping Tactics',
      ruleCategory: 'Scanning for Financial Detail',
      explanationEn: 'Paragraph 3 states: "Smart buyers often look for seasonal discounts and cashback rewards, which allows them to save substantial amounts of money."',
      explanationAr: 'يبحث المتسوقون الأذكياء عن الخصومات الموسمية ومكافآت الاسترداد النقدي (cashback) لتوفير مبالغ معتبرة.',
      passageId: 'p5'
    },
    {
      id: 529,
      section: 'reading',
      questionNumber: 29,
      prompt: 'What should buyers keep when purchasing expensive electronics for warranty protection?',
      options: [
        { id: 'A', text: 'The printed or digital store receipt' },
        { id: 'B', text: 'The supermarket plastic bag only' },
        { id: 'C', text: 'The store parking pass' },
        { id: 'D', text: 'The shopping cart' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 6: Reading for Instructions & Protections',
      ruleCategory: 'Detail Identification in Text',
      explanationEn: 'Paragraph 4 emphasizes: "always keeping the printed or digital receipt for warranty protection."',
      explanationAr: 'يؤكد الخبراء على ضرورة الاحتفاظ بإيصال الشراء الورقي أو الإلكتروني لضمان حقوق الضمان والاستبدال.',
      passageId: 'p5'
    },
    {
      id: 530,
      section: 'reading',
      questionNumber: 30,
      prompt: 'What is the main purpose of this passage?',
      options: [
        { id: 'A', text: 'To encourage people to waste money carelessly' },
        { id: 'B', text: 'To educate readers on smart financial habits and wise shopping practices' },
        { id: 'C', text: 'To advertise a specific brand of smartphone' },
        { id: 'D', text: 'To explain how to repair broken television sets' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 6: Gist and Main Purpose',
      ruleCategory: 'Author Purpose Comprehension',
      explanationEn: 'The entire text promotes smart consumer habits: budgeting, price comparison, discounts, and saving receipts.',
      explanationAr: 'الهدف الرئيسي للنص هو توعية القارئ بعادات الاستهلاك الذكية وإدارة الميزانية والتسوق الحكيم.',
      passageId: 'p5'
    }
  ]
};
