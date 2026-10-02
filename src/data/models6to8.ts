import { ExamModel } from '../types';

// =========================================================================
// MODEL 6 (Model F): King Abdulaziz University English Language Institute (ELI)
// =========================================================================
export const modelFExam: ExamModel = {
  id: 'model-f',
  title: 'نموذج اختبار Evolve 2 - 6',
  subtitle: 'KAU Foundation Year • Evolve 2 Standard Midterm Test (Units 1 - 6)',
  university: 'جامعة الملك عبدالعزيز (KAU) / معهد اللغة الإنجليزية',
  term: 'First Semester Midterm Exam',
  courseCode: 'ELCE 1201 / Evolve 2',
  timeLimitMinutes: 50,
  totalQuestions: 30,
  listeningTracks: {
    t6: {
      id: 't6',
      title: 'University Campus Book Fair & Author Talk',
      description: 'Audio dialogue: Student Layla interviews organizer Tariq about the annual university book fair and author workshops.',
      durationSeconds: 130,
      script:
        'Layla: Good morning, Tariq! Congratulations on launching the annual KAU Campus Book Fair. How many publishers are participating this year?\n\nTariq: Good morning, Layla! We have over forty international and regional publishing houses displaying books across engineering, medicine, and English literature.\n\nLayla: That is fantastic! Where is the main exhibition hall located on campus?\n\nTariq: It is in Building 29, right opposite the central university cafeteria. Doors open daily from 8:30 AM until 7:00 PM.\n\nLayla: Are there any special events planned for tomorrow afternoon?\n\nTariq: Yes! At 4:00 PM, renowned author Dr. Sarah Al-Omari is going to host a workshop on writing scientific research articles. Attendance is free for all university students.\n\nLayla: Wonderful! And is there a student discount on academic dictionaries and textbooks?\n\nTariq: Absolutely. Students receive a 25% discount upon presenting their valid KAU digital university ID.\n\nLayla: Thank you, Tariq! I will definitely invite my classmates to visit.'
    }
  },
  passages: {
    p6: {
      id: 'p6',
      title: 'Volunteering in the Historic Al-Balad District of Jeddah',
      content: [
        'Al-Balad is the historic center of Jeddah, famous for its ancient coral-stone houses, intricate wooden lattice windows called Roshan, and bustling traditional souqs.',
        'Last year, a group of university students created a volunteer youth organization called "Preserve Our Heritage." They organize weekend walking tours for international visitors and explain the history of the old merchant houses.',
        'Basma, a business student at KAU, joined the group in October. She says, "I really enjoy meeting travelers from different cultures. In the past, I was very shy, but speaking with visitors helped me build my confidence."',
        'Next month, the volunteers are going to participate in the Red Sea Cultural Festival. They are going to guide more than five hundred school students through the restored alleyways.'
      ]
    }
  },
  questions: [
    // --- LISTENING (Q1 - Q5) ---
    {
      id: 601,
      section: 'listening',
      questionNumber: 1,
      prompt: 'How many publishing houses are participating in this year’s campus book fair?',
      options: [
        { id: 'A', text: 'Over forty international and regional publishers' },
        { id: 'B', text: 'Only five local bookshops' },
        { id: 'C', text: 'Over two hundred companies' },
        { id: 'D', text: 'Exactly ten publishers' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 1: Listening for Quantities & Numbers',
      ruleCategory: 'Listening for Factual Quantities',
      explanationEn: 'Tariq states: "We have over forty international and regional publishing houses displaying books."',
      explanationAr: 'أوضح طارق أن هناك أكثر من أربعين دار نشر دولية وإقليمية تشارك في المعرض.',
      audioTrackId: 't6'
    },
    {
      id: 602,
      section: 'listening',
      questionNumber: 2,
      prompt: 'Where is the main book fair exhibition hall located?',
      options: [
        { id: 'A', text: 'In Building 29, opposite the central university cafeteria' },
        { id: 'B', text: 'At the airport conference terminal' },
        { id: 'C', text: 'In the sports stadium gym' },
        { id: 'D', text: 'In the university hospital' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 1: Listening for Locations',
      ruleCategory: 'Location Identification in Dialogue',
      explanationEn: 'Tariq explicitly confirms: "It is in Building 29, right opposite the central university cafeteria."',
      explanationAr: 'أكد طارق أن المعرض في مبنى 29، مباشرة مقابل كافتيريا الجامعة المركزية.',
      audioTrackId: 't6'
    },
    {
      id: 603,
      section: 'listening',
      questionNumber: 3,
      prompt: 'What special event will take place tomorrow afternoon at 4:00 PM?',
      options: [
        { id: 'A', text: 'A football tournament match' },
        { id: 'B', text: 'A writing workshop hosted by author Dr. Sarah Al-Omari' },
        { id: 'C', text: 'A cooking competition' },
        { id: 'D', text: 'A graduation party' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 5: Listening for Scheduled Events',
      ruleCategory: 'Event Comprehension in Listening',
      explanationEn: 'Tariq announces: "renowned author Dr. Sarah Al-Omari is going to host a workshop on writing scientific research articles."',
      explanationAr: 'تقام ورشة عمل حول كتابة الأوراق العلمية تقدمها الدكتورة سارة العمري في تمام الرابعة عصراً.',
      audioTrackId: 't6'
    },
    {
      id: 604,
      section: 'listening',
      questionNumber: 4,
      prompt: 'What discount do students receive on academic textbooks at the fair?',
      options: [
        { id: 'A', text: '5% discount' },
        { id: 'B', text: '25% discount' },
        { id: 'C', text: '50% discount' },
        { id: 'D', text: 'No discount is available' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 6: Listening for Discounts & Money',
      ruleCategory: 'Discounts in Dialogue',
      explanationEn: 'Tariq confirms: "Students receive a 25% discount upon presenting their valid KAU digital university ID."',
      explanationAr: 'يحصل الطلاب على خصم 25% بمجرد إبراز بطاقتهم الجامعية.',
      audioTrackId: 't6'
    },
    {
      id: 605,
      section: 'listening',
      questionNumber: 5,
      prompt: 'What document must students present to obtain the book discount?',
      options: [
        { id: 'A', text: 'A passport visa' },
        { id: 'B', text: 'Their valid KAU digital university ID' },
        { id: 'C', text: 'A driving license' },
        { id: 'D', text: 'A bank statement' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 6: Requirements & Documents',
      ruleCategory: 'Listening for Specific Conditions',
      explanationEn: 'Tariq notes students must show their "valid KAU digital university ID".',
      explanationAr: 'يجب على الطالب إبراز البطاقة الجامعية الرقمية لجامعة الملك عبدالعزيز للحصول على التخفيض.',
      audioTrackId: 't6'
    },

    // --- VOCABULARY (Q6 - Q13) ---
    {
      id: 606,
      section: 'vocabulary',
      questionNumber: 6,
      prompt: 'A person who lives next door or in the flat right beside yours is your ______.',
      options: [
        { id: 'A', text: 'boss' },
        { id: 'B', text: 'neighbor' },
        { id: 'C', text: 'stranger' },
        { id: 'D', text: 'customer' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 1: Making connections',
      ruleCategory: 'People & Community',
      explanationEn: "'Neighbor' is someone who lives nearby or next door to your house.",
      explanationAr: "كلمة neighbor تعني الجار الذي يسكن بجوارك."
    },
    {
      id: 607,
      section: 'vocabulary',
      questionNumber: 7,
      prompt: 'Before giving his slides in hall 4, Dr. Ziyad connected his laptop to the overhead ______.',
      options: [
        { id: 'A', text: 'projector' },
        { id: 'B', text: 'refrigerator' },
        { id: 'C', text: 'charger' },
        { id: 'D', text: 'wallet' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 1: Study & Technology items',
      ruleCategory: 'Classroom Tech',
      explanationEn: 'A projector displays computer visuals onto a large screen or wall.',
      explanationAr: 'جهاز العرض (projector) لعرض شاشة الحاسب على الشاشة الكبيرة في القاعة.'
    },
    {
      id: 608,
      section: 'vocabulary',
      questionNumber: 8,
      prompt: 'Sami runs three kilometers every morning to keep fit and maintain his physical ______.',
      options: [
        { id: 'A', text: 'health' },
        { id: 'B', text: 'receipt' },
        { id: 'C', text: 'debt' },
        { id: 'D', text: 'mirror' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 2: Fitness & Health',
      ruleCategory: 'Wellness Vocabulary',
      explanationEn: '"Health" refers to the state of being free from illness or injury.',
      explanationAr: 'كلمة health تعني الصحة واللياقة البدنية.'
    },
    {
      id: 609,
      section: 'vocabulary',
      questionNumber: 9,
      prompt: 'This cup of lemon tea is too ______. Please add two spoonfuls of honey.',
      options: [
        { id: 'A', text: 'sour' },
        { id: 'B', text: 'sweet' },
        { id: 'C', text: 'greasy' },
        { id: 'D', text: 'fried' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 3: Food Tastes & Flavors',
      ruleCategory: 'Taste Adjectives',
      explanationEn: '"Sour" describes the acidic taste of lemons that needs sweet honey.',
      explanationAr: 'كلمة sour تعني حامض، ولذلك يُطلب العسل لتحليته.'
    },
    {
      id: 610,
      section: 'vocabulary',
      questionNumber: 10,
      prompt: 'The supermarket ______ scanned my groceries and asked if I wanted to pay with cash or card.',
      options: [
        { id: 'A', text: 'cashier' },
        { id: 'B', text: 'mechanic' },
        { id: 'C', text: 'tourist' },
        { id: 'D', text: 'doctor' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 6: Store Personnel',
      ruleCategory: 'Retail Jobs',
      explanationEn: 'A "cashier" handles retail payments and operates the cash register.',
      explanationAr: 'الـ cashier (الكاشير / المحاسب) هو الموظف الذي يستلم الحساب عند الدفع.'
    },
    {
      id: 611,
      section: 'vocabulary',
      questionNumber: 11,
      prompt: 'It was raining heavily, so Huda opened her large ______ to stay dry while walking.',
      options: [
        { id: 'A', text: 'umbrella' },
        { id: 'B', text: 'headphone' },
        { id: 'C', text: 'wallet' },
        { id: 'D', text: 'cart' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 1: Everyday personal items',
      ruleCategory: 'Weather Accessories',
      explanationEn: 'An "umbrella" shields you from rain.',
      explanationAr: 'كلمة umbrella تعني مظلة واقية من المطر.'
    },
    {
      id: 612,
      section: 'vocabulary',
      questionNumber: 12,
      prompt: 'I put on my warm winter coat because the mountain temperature was very ______.',
      options: [
        { id: 'A', text: 'cold' },
        { id: 'B', text: 'sunny' },
        { id: 'C', text: 'spicy' },
        { id: 'D', text: 'sour' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Weather Adjectives',
      ruleCategory: 'Climate Vocabulary',
      explanationEn: '"Cold" weather requires wearing a warm winter coat.',
      explanationAr: 'الطقس البارد (cold) يتطلب ارتداء معطف شتوي دافئ.'
    },
    {
      id: 613,
      section: 'vocabulary',
      questionNumber: 13,
      prompt: 'Abdulaziz received a 10% ______ on his hotel stay because he booked three weeks early.',
      options: [
        { id: 'A', text: 'discount' },
        { id: 'B', text: 'receipt' },
        { id: 'C', text: 'shelf' },
        { id: 'D', text: 'cart' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 6: Money and Promotions',
      ruleCategory: 'Promotional Terms',
      explanationEn: 'A "discount" is a deduction from the regular price of a product or service.',
      explanationAr: 'كلمة discount تعني خصماً أو تخفيضاً في السعر.'
    },

    // --- GRAMMAR (Q14 - Q24) ---
    {
      id: 614,
      section: 'grammar',
      questionNumber: 14,
      prompt: 'Dr. Tariq ______ grammar rules in Hall B every Monday morning.',
      options: [
        { id: 'A', text: 'explains' },
        { id: 'B', text: 'explain' },
        { id: 'C', text: 'is explaining' },
        { id: 'D', text: 'explained' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 1: Present Simple Habitual',
      ruleCategory: 'Present Simple Third-Person Singular',
      explanationEn: 'With singular subject Dr. Tariq and "every Monday", the verb takes -s: "explains".',
      explanationAr: 'الفاعل مفرد مع عادة أسبوعية متكررة، لذا يأخذ الفعل s: explains.'
    },
    {
      id: 615,
      section: 'grammar',
      questionNumber: 15,
      prompt: 'Look at the sky! The dark clouds mean it ______ to rain soon.',
      options: [
        { id: 'A', text: 'is going' },
        { id: 'B', text: 'are going' },
        { id: 'C', text: 'going' },
        { id: 'D', text: 'will to' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Future with be going to based on evidence',
      ruleCategory: 'Predictions with Evidence',
      explanationEn: 'Singular "it" takes [is + going to]: "it is going to rain".',
      explanationAr: 'مع وجود دليل ملموس (السحب الداكنة) والضمير it، نستخدم: is going to rain.'
    },
    {
      id: 616,
      section: 'grammar',
      questionNumber: 16,
      prompt: 'There aren’t ______ empty chairs left in the conference hall.',
      options: [
        { id: 'A', text: 'many' },
        { id: 'B', text: 'much' },
        { id: 'C', text: 'little' },
        { id: 'D', text: 'a little' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 3: Quantifiers (much / many)',
      ruleCategory: 'Countable Plural Negatives',
      explanationEn: '"Chairs" is a countable plural noun. In negative sentences, use "many".',
      explanationAr: 'كلمة chairs جمع معدود، ونستخدم "many" مع الجمع المعدود في النفي: aren\'t many chairs.'
    },
    {
      id: 617,
      section: 'grammar',
      questionNumber: 17,
      prompt: 'How ______ water do you drink throughout a typical day?',
      options: [
        { id: 'A', text: 'much' },
        { id: 'B', text: 'many' },
        { id: 'C', text: 'few' },
        { id: 'D', text: 'several' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 3: Quantifiers in Questions',
      ruleCategory: 'How much with Uncountable Nouns',
      explanationEn: 'Water is uncountable. We ask "How much water...?".',
      explanationAr: 'الماء غير معدود، لذا نسأل بـ "How much water".'
    },
    {
      id: 618,
      section: 'grammar',
      questionNumber: 18,
      prompt: 'I decided ______ a computer programming course during the winter.',
      options: [
        { id: 'A', text: 'to take' },
        { id: 'B', text: 'taking' },
        { id: 'C', text: 'take' },
        { id: 'D', text: 'took' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 3: Verb Patterns (decide + to-infinitive)',
      ruleCategory: 'Verbs Followed by to + Base',
      explanationEn: '"Decide" is followed by a to-infinitive: "decided to take".',
      explanationAr: 'الفعل decide يتبعه المصدر مسبوقاً بـ to: decided to take.'
    },
    {
      id: 619,
      section: 'grammar',
      questionNumber: 19,
      prompt: 'They enjoy ______ to cultural lectures at the public library.',
      options: [
        { id: 'A', text: 'listening' },
        { id: 'B', text: 'to listen' },
        { id: 'C', text: 'listen' },
        { id: 'D', text: 'listened' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 3: Verb Patterns (enjoy + gerund)',
      ruleCategory: 'Verbs Followed by Gerund',
      explanationEn: '"Enjoy" requires a gerund (-ing): "enjoy listening".',
      explanationAr: 'الفعل enjoy يتبعه الفعل بصيغة ing: enjoy listening.'
    },
    {
      id: 620,
      section: 'grammar',
      questionNumber: 20,
      prompt: 'Where ______ the students travel for their geography field trip last week?',
      options: [
        { id: 'A', text: 'did' },
        { id: 'B', text: 'do' },
        { id: 'C', text: 'were' },
        { id: 'D', text: 'are' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 4: Past Simple Questions',
      ruleCategory: 'Past Simple Auxiliary (did)',
      explanationEn: 'In past questions with action verb (travel), use "did": "Where did the students travel...?".',
      explanationAr: 'في السؤال عن الماضي البسيط بوجود فعل أساسي (travel)، نستخدم did.'
    },
    {
      id: 621,
      section: 'grammar',
      questionNumber: 21,
      prompt: 'Reem ______ at the university yesterday because she was visiting the clinic.',
      options: [
        { id: 'A', text: "wasn't" },
        { id: 'B', text: "weren't" },
        { id: 'C', text: "didn't" },
        { id: 'D', text: 'not' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 4: Past Simple of Be Negatives',
      ruleCategory: 'Past of Be Singular Negative',
      explanationEn: 'Singular subject Reem takes "wasn\'t" in the past: "Reem wasn\'t at the university".',
      explanationAr: 'مع الفاعل المفرد ريم في الماضي، نستخدم wasn\'t: Reem wasn\'t at the university.'
    },
    {
      id: 622,
      section: 'grammar',
      questionNumber: 22,
      prompt: 'The high-speed electric train is ______ than the regular regional bus.',
      options: [
        { id: 'A', text: 'faster' },
        { id: 'B', text: 'more fast' },
        { id: 'C', text: 'fastest' },
        { id: 'D', text: 'as fast' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Comparative Adjectives',
      ruleCategory: 'Short Comparatives (-er than)',
      explanationEn: 'Fast is a short adjective; its comparative form is "faster than".',
      explanationAr: 'الصفة fast قصيرة، لذا عند المقارنة نضيف لها er: faster than.'
    },
    {
      id: 623,
      section: 'grammar',
      questionNumber: 23,
      prompt: 'This diamond necklace is the ______ item in the entire jewelry store.',
      options: [
        { id: 'A', text: 'most expensive' },
        { id: 'B', text: 'more expensive' },
        { id: 'C', text: 'expensivest' },
        { id: 'D', text: 'expensive' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Superlative with Long Adjectives',
      ruleCategory: 'Long Superlative Forms',
      explanationEn: 'Expensive is multi-syllable. Its superlative is "the most expensive".',
      explanationAr: 'الصفة expensive طويلة، فتكون صيغة التفضيل العليا: the most expensive.'
    },
    {
      id: 624,
      section: 'grammar',
      questionNumber: 24,
      prompt: 'We ______ to visit the National Museum in Riyadh next Thursday.',
      options: [
        { id: 'A', text: 'are going' },
        { id: 'B', text: 'is going' },
        { id: 'C', text: 'going' },
        { id: 'D', text: 'will to' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Future with be going to',
      ruleCategory: 'Plural Future Intentions',
      explanationEn: 'Plural subject "we" takes [are + going to + verb]: "We are going to visit".',
      explanationAr: 'مع الضمير we، تكون صيغة المستقبل: We are going to visit.'
    },

    // --- READING COMPREHENSION (Q25 - Q30) ---
    {
      id: 625,
      section: 'reading',
      questionNumber: 25,
      prompt: 'What architectural feature is the historic district of Al-Balad famous for?',
      options: [
        { id: 'A', text: 'Ancient coral-stone houses and wooden Roshan windows' },
        { id: 'B', text: 'Ultra-modern glass skyscrapers' },
        { id: 'C', text: 'Submarine research underwater tunnels' },
        { id: 'D', text: 'Large amusement water parks' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 1: Reading for Historical Details',
      ruleCategory: 'Architectural Details Identification',
      explanationEn: 'Paragraph 1 explains: "famous for its ancient coral-stone houses, intricate wooden lattice windows called Roshan..."',
      explanationAr: 'توضح الفقرة الأولى أن البلد مشهورة ببيوت الحجر المنقبي ورواشين الخشب التقليدية.',
      passageId: 'p6'
    },
    {
      id: 626,
      section: 'reading',
      questionNumber: 26,
      prompt: 'What is the name of the volunteer youth organization created by the university students?',
      options: [
        { id: 'A', text: 'Preserve Our Heritage' },
        { id: 'B', text: 'Future Engineers Club' },
        { id: 'C', text: 'Modern Digital Media' },
        { id: 'D', text: 'Red Sea Divers' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 4: Reading for Organization Names',
      ruleCategory: 'Specific Name Scanning',
      explanationEn: 'Paragraph 2 explicitly states: "a volunteer youth organization called \'Preserve Our Heritage.\'"',
      explanationAr: 'يذكر النص بوضوح أن اسم المبادرة الشبابية هو "Preserve Our Heritage" (احفظوا تراثنا).',
      passageId: 'p6'
    },
    {
      id: 627,
      section: 'reading',
      questionNumber: 27,
      prompt: 'What main activity do the student volunteers organize on weekends?',
      options: [
        { id: 'A', text: 'Walking tours for international visitors explaining merchant house history' },
        { id: 'B', text: 'Selling modern sports cars' },
        { id: 'C', text: 'Painting new residential buildings' },
        { id: 'D', text: 'Playing football matches' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 4: Reading for Specific Tasks',
      ruleCategory: 'Activity Identification in Text',
      explanationEn: 'The passage mentions: "They organize weekend walking tours for international visitors and explain the history of the old merchant houses."',
      explanationAr: 'ينظم المتطوعون جولات مشي إرشادية في عطلة نهاية الأسبوع للزوار لشرح تاريخ البيوت التراثية.',
      passageId: 'p6'
    },
    {
      id: 628,
      section: 'reading',
      questionNumber: 28,
      prompt: 'How did volunteering in Al-Balad benefit Basma personally?',
      options: [
        { id: 'A', text: 'It helped her overcome shyness and build her self-confidence' },
        { id: 'B', text: 'It helped her win a free car' },
        { id: 'C', text: 'It allowed her to move to Europe' },
        { id: 'D', text: 'She became a professional chef' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 4: Character Reflection in Reading',
      ruleCategory: 'Personal Impact Identification',
      explanationEn: 'Basma says: "In the past, I was very shy, but speaking with visitors helped me build my confidence."',
      explanationAr: 'أكدت بسمة أن التحدث مع الزوار ساعدها على التغلب على الخجل وبناء الثقة بالنفس.',
      passageId: 'p6'
    },
    {
      id: 629,
      section: 'reading',
      questionNumber: 29,
      prompt: 'What event are the volunteers going to participate in next month?',
      options: [
        { id: 'A', text: 'The Red Sea Cultural Festival' },
        { id: 'B', text: 'An international motor race' },
        { id: 'C', text: 'A science Olympiad in Tokyo' },
        { id: 'D', text: 'A desert bicycle marathon' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Future Events in Reading',
      ruleCategory: 'Event Identification',
      explanationEn: 'Paragraph 4 states: "Next month, the volunteers are going to participate in the Red Sea Cultural Festival."',
      explanationAr: 'سيشارك المتطوعون الشهر القادم في مهرجان البحر الأحمر الثقافي.',
      passageId: 'p6'
    },
    {
      id: 630,
      section: 'reading',
      questionNumber: 30,
      prompt: 'How many school students are the volunteers planning to guide through the restored alleyways?',
      options: [
        { id: 'A', text: 'More than five hundred school students' },
        { id: 'B', text: 'Only twenty students' },
        { id: 'C', text: 'Over ten thousand students' },
        { id: 'D', text: 'Exactly five students' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Numerical Detail Scanning',
      ruleCategory: 'Reading for Numbers',
      explanationEn: 'The final line says: "They are going to guide more than five hundred school students through the restored alleyways."',
      explanationAr: 'توضح الجملة الأخيرة أنهم سيرشدون أكثر من خمسمائة طالب مدرسة في أزقة الحي التاريخي.',
      passageId: 'p6'
    }
  ]
};

// =========================================================================
// MODEL 7 (Model G): King Saud University Preparatory Year Deanship (KSU PYD)
// =========================================================================
export const modelGExam: ExamModel = {
  id: 'model-g',
  title: 'نموذج اختبار Evolve 2 - 7',
  subtitle: 'KSU Common First Year • Midterm Examination (Units 1 - 6)',
  university: 'جامعة الملك سعود (KSU) / عمادة السنة الأولى المشتركة',
  term: 'First Semester Midterm Exam',
  courseCode: 'ENG 101 / Evolve 2',
  timeLimitMinutes: 50,
  totalQuestions: 30,
  listeningTracks: {
    t7: {
      id: 't7',
      title: 'King Saud University Health & Wellness Club',
      description: 'Audio monologue: Coach Badr introduces new university freshmen to campus gym facilities, swimming schedules, and dietary guidance.',
      durationSeconds: 135,
      script:
        'Coach Badr: Good afternoon, students, and welcome to King Saud University Sports Complex. I am Coach Badr, the director of student physical fitness.\n\nOur campus facilities include an Olympic-sized indoor swimming pool, three basketball courts, and a brand new fitness gym equipped with modern weight machines.\n\nAll registered students can access the fitness gym completely free of charge. You just need to scan your student digital barcode at the main entrance turnstile.\n\nThe gym is open Sunday through Thursday from 7:00 AM until 9:00 PM, and on Saturdays from 10:00 AM to 6:00 PM.\n\nIf you want personalized fitness guidance, our certified trainers offer free 30-minute health consultations every Monday afternoon.\n\nPlease remember two essential safety rules: you must always wear clean indoor athletic shoes, and you must bring a clean towel to wipe equipment after use.\n\nWe hope you make exercise a regular part of your university routine. Have a healthy and active semester!'
    }
  },
  passages: {
    p7: {
      id: 'p7',
      title: 'The Saudi Green Initiative and Afforestation',
      content: [
        'Under the framework of Vision 2030, Saudi Arabia launched the Saudi Green Initiative (SGI) to combat desertification, reduce carbon emissions, and enhance the quality of life across the Kingdom.',
        'A key milestone of the project involves planting ten billion trees throughout diverse ecosystems, including native acacia in valleys and mangrove forests along the Arabian Gulf and Red Sea coastlines.',
        'Environmental scientists emphasize that planting indigenous trees requires far less irrigation water because native desert species have evolved deep root systems adapted to arid soil.',
        'Universities and community volunteers participate actively in annual tree-planting campaigns every November, inspiring young citizens to preserve native flora and wildlife habitats.'
      ]
    }
  },
  questions: [
    // --- LISTENING (Q1 - Q5) ---
    {
      id: 701,
      section: 'listening',
      questionNumber: 1,
      prompt: 'What major sports facilities are mentioned by Coach Badr at the KSU Sports Complex?',
      options: [
        { id: 'A', text: 'An Olympic swimming pool, three basketball courts, and a new fitness gym' },
        { id: 'B', text: 'A golf course and horse-racing track only' },
        { id: 'C', text: 'An outdoor ice rink' },
        { id: 'D', text: 'Only a table tennis table' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 2: Sports Facilities in Listening',
      ruleCategory: 'Listening for Key Facilities',
      explanationEn: 'Coach Badr describes: "an Olympic-sized indoor swimming pool, three basketball courts, and a brand new fitness gym."',
      explanationAr: 'ذكر المدرب بدر مسبحاً أولمبياً وثلاثة ملاعب كرة سلة وصالة لياقة بدنية حديثة.',
      audioTrackId: 't7'
    },
    {
      id: 702,
      section: 'listening',
      questionNumber: 2,
      prompt: 'How much do registered university students pay to use the fitness gym?',
      options: [
        { id: 'A', text: 'It is completely free of charge' },
        { id: 'B', text: '500 Riyals per month' },
        { id: 'C', text: '100 Riyals per visit' },
        { id: 'D', text: 'Only cash payments are allowed' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 6: Listening for Costs & Fees',
      ruleCategory: 'Free vs Paid Services',
      explanationEn: 'The coach explicitly notes: "All registered students can access the fitness gym completely free of charge."',
      explanationAr: 'أكد المدرب أن الدخول مجاني تماماً لجميع الطلاب المسجلين بالجامعة.',
      audioTrackId: 't7'
    },
    {
      id: 703,
      section: 'listening',
      questionNumber: 3,
      prompt: 'What time does the gym close on weekdays (Sunday through Thursday)?',
      options: [
        { id: 'A', text: 'At 9:00 PM' },
        { id: 'B', text: 'At 4:00 PM' },
        { id: 'C', text: 'At midnight' },
        { id: 'D', text: 'At 1:00 PM' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Listening for Closing Times',
      ruleCategory: 'Schedule Details in Monologue',
      explanationEn: 'Coach Badr states: "The gym is open Sunday through Thursday from 7:00 AM until 9:00 PM."',
      explanationAr: 'أوضح المدرب أن الصالة تغلق أيام الأسبوع في تمام الساعة 9:00 مساءً.',
      audioTrackId: 't7'
    },
    {
      id: 704,
      section: 'listening',
      questionNumber: 4,
      prompt: 'When do certified trainers offer free 30-minute health consultations?',
      options: [
        { id: 'A', text: 'Every Monday afternoon' },
        { id: 'B', text: 'Every Friday morning' },
        { id: 'C', text: 'Only once a year' },
        { id: 'D', text: 'Never' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 2: Days & Schedules in Listening',
      ruleCategory: 'Time & Day Expressions',
      explanationEn: 'He announces: "our certified trainers offer free 30-minute health consultations every Monday afternoon."',
      explanationAr: 'يقدم المدربون استشارات صحية مجانية لمدة 30 دقيقة بعد ظهر كل يوم اثنين.',
      audioTrackId: 't7'
    },
    {
      id: 705,
      section: 'listening',
      questionNumber: 5,
      prompt: 'Which two safety rules must all students follow inside the gym?',
      options: [
        { id: 'A', text: 'Wear clean indoor athletic shoes and bring a clean towel' },
        { id: 'B', text: 'Wear formal suits and heavy leather boots' },
        { id: 'C', text: 'Bring their own weight machines' },
        { id: 'D', text: 'Never drink any water' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 2: Listening for Rules & Instructions',
      ruleCategory: 'Instruction Comprehension',
      explanationEn: 'Coach Badr emphasizes: "you must always wear clean indoor athletic shoes, and you must bring a clean towel to wipe equipment."',
      explanationAr: 'شدد على قاعدتين: ارتداء حذاء رياضي نظيف وإحضار منشفة خاصة لمسح الأجهزة بعد الاستخدام.',
      audioTrackId: 't7'
    },

    // --- VOCABULARY (Q6 - Q13) ---
    {
      id: 706,
      section: 'vocabulary',
      questionNumber: 6,
      prompt: 'Rayan and I work in the same hospital department. He is my ______.',
      options: [
        { id: 'A', text: 'colleague' },
        { id: 'B', text: 'landlord' },
        { id: 'C', text: 'stranger' },
        { id: 'D', text: 'tourist' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 1: Workplace Relationships',
      ruleCategory: 'People Vocabulary',
      explanationEn: 'A "colleague" is someone with whom you work in a profession or business.',
      explanationAr: 'كلمة colleague تعني زميل العمل في نفس المؤسسة أو القسم.'
    },
    {
      id: 707,
      section: 'vocabulary',
      questionNumber: 7,
      prompt: 'You should always check your reflection in the ______ before leaving the house.',
      options: [
        { id: 'A', text: 'mirror' },
        { id: 'B', text: 'cart' },
        { id: 'C', text: 'keyboard' },
        { id: 'D', text: 'charger' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 1: Everyday Items',
      ruleCategory: 'Household Objects',
      explanationEn: 'A "mirror" is a reflective glass surface that shows your image.',
      explanationAr: 'كلمة mirror تعني مرآة للتحقق من المظهر.'
    },
    {
      id: 708,
      section: 'vocabulary',
      questionNumber: 8,
      prompt: 'After lifting heavy weights, Tariq felt sore in his leg ______.',
      options: [
        { id: 'A', text: 'muscles' },
        { id: 'B', text: 'receipts' },
        { id: 'C', text: 'wallets' },
        { id: 'D', text: 'shelves' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 2: Health & Body',
      ruleCategory: 'Anatomy & Fitness',
      explanationEn: '"Muscles" are tissues in the body that produce motion and can feel sore after exercise.',
      explanationAr: 'كلمة muscles تعني عضلات الساق التي قد تشعر بالإجهاد بعد التمرين.'
    },
    {
      id: 709,
      section: 'vocabulary',
      questionNumber: 9,
      prompt: 'Grandmother baked delicious cookies using flour, butter, and brown ______.',
      options: [
        { id: 'A', text: 'sugar' },
        { id: 'B', text: 'salt' },
        { id: 'C', text: 'pepper' },
        { id: 'D', text: 'vinegar' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 3: Food Ingredients',
      ruleCategory: 'Baking Ingredients',
      explanationEn: '"Sugar" is a sweet crystalline substance used in baking sweet desserts and cookies.',
      explanationAr: 'كلمة sugar (السكر) هو المكون الأساسي لتحلية الكعك والبسكويت.'
    },
    {
      id: 710,
      section: 'vocabulary',
      questionNumber: 10,
      prompt: 'When buying groceries, remember to look at the ______ to see how much each item costs.',
      options: [
        { id: 'A', text: 'price tag' },
        { id: 'B', text: 'umbrella' },
        { id: 'C', text: 'mirror' },
        { id: 'D', text: 'headphone' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 6: Store Vocabulary',
      ruleCategory: 'Shopping Terms',
      explanationEn: 'A "price tag" displays the retail cost of a product on a store shelf.',
      explanationAr: 'الـ price tag هي بطاقة السعر المثبتة على السلعة.'
    },
    {
      id: 711,
      section: 'vocabulary',
      questionNumber: 11,
      prompt: 'Hani borrowed 200 Riyals from his brother and now he is in ______.',
      options: [
        { id: 'A', text: 'debt' },
        { id: 'B', text: 'sale' },
        { id: 'C', text: 'cart' },
        { id: 'D', text: 'discount' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 6: Money Expressions',
      ruleCategory: 'Financial Status',
      explanationEn: 'To be "in debt" means owing money that was borrowed from someone else.',
      explanationAr: 'العبارة in debt تعني مديناً بمبلغ من المال لشخص آخر.'
    },
    {
      id: 712,
      section: 'vocabulary',
      questionNumber: 12,
      prompt: 'The summer afternoon was extremely ______ with bright sunshine and clear skies.',
      options: [
        { id: 'A', text: 'sunny' },
        { id: 'B', text: 'snowy' },
        { id: 'C', text: 'raw' },
        { id: 'D', text: 'spicy' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Weather Adjectives',
      ruleCategory: 'Weather Vocabulary',
      explanationEn: '"Sunny" describes weather filled with bright sunlight.',
      explanationAr: 'كلمة sunny تعني مشمساً ومضيئاً بأشعة الشمس.'
    },
    {
      id: 713,
      section: 'vocabulary',
      questionNumber: 13,
      prompt: 'Customers can place canned goods and fresh bread neatly on their shopping ______.',
      options: [
        { id: 'A', text: 'cart' },
        { id: 'B', text: 'wallet' },
        { id: 'C', text: 'charger' },
        { id: 'D', text: 'mirror' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 6: Store Equipment',
      ruleCategory: 'Supermarket Terms',
      explanationEn: 'A "cart" holds items while walking through supermarket aisles.',
      explanationAr: 'عربة التسوق (cart) لوضع المشتريات أثناء التسوق.'
    },

    // --- GRAMMAR (Q14 - Q24) ---
    {
      id: 714,
      section: 'grammar',
      questionNumber: 14,
      prompt: 'Saleh ______ in the university robotics laboratory every afternoon.',
      options: [
        { id: 'A', text: 'works' },
        { id: 'B', text: 'work' },
        { id: 'C', text: 'is work' },
        { id: 'D', text: 'working' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 1: Present Simple Habitual',
      ruleCategory: 'Present Simple Third Person',
      explanationEn: 'Singular subject Saleh takes third-person singular -s: "works".',
      explanationAr: 'الفاعل مفرد (Saleh) مع عادة يومية، فنضيف s للفعل: works.'
    },
    {
      id: 715,
      section: 'grammar',
      questionNumber: 15,
      prompt: 'Right now, the engineering team ______ a prototype of their solar car.',
      options: [
        { id: 'A', text: 'is building' },
        { id: 'B', text: 'builds' },
        { id: 'C', text: 'built' },
        { id: 'D', text: 'build' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 1: Present Continuous',
      ruleCategory: 'Current Continuous Actions',
      explanationEn: '"Right now" calls for present continuous [is + verb-ing]: "is building".',
      explanationAr: 'عبارة "Right now" تدل على المضارع المستمر: is building.'
    },
    {
      id: 716,
      section: 'grammar',
      questionNumber: 16,
      prompt: 'There is ______ traffic on King Fahad Road during rush hour.',
      options: [
        { id: 'A', text: 'too much' },
        { id: 'B', text: 'too many' },
        { id: 'C', text: 'a few' },
        { id: 'D', text: 'many' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 3: Quantifiers with Uncountable Nouns',
      ruleCategory: 'Excessive Quantifiers (too much)',
      explanationEn: 'Traffic is an uncountable noun. We use "too much traffic".',
      explanationAr: 'حركة المرور (traffic) اسم غير معدود، لذا نستخدم معها "too much".'
    },
    {
      id: 717,
      section: 'grammar',
      questionNumber: 17,
      prompt: 'I bought ______ fresh mangoes from the fruit market.',
      options: [
        { id: 'A', text: 'a few' },
        { id: 'B', text: 'a little' },
        { id: 'C', text: 'much' },
        { id: 'D', text: 'any' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 3: Quantifiers (a few vs a little)',
      ruleCategory: 'Countable Plural Quantifiers',
      explanationEn: '"Mangoes" is a countable plural noun. We use "a few" with countable nouns.',
      explanationAr: 'المانجو (mangoes) اسم جمع معدود، فنستخدم معه "a few".'
    },
    {
      id: 718,
      section: 'grammar',
      questionNumber: 18,
      prompt: 'Nasser would like ______ medicine after completing his foundation year.',
      options: [
        { id: 'A', text: 'to study' },
        { id: 'B', text: 'studying' },
        { id: 'C', text: 'study' },
        { id: 'D', text: 'studied' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 3: Verb Patterns (would like + to-infinitive)',
      ruleCategory: 'would like + infinitive',
      explanationEn: '"Would like" is always followed by a to-infinitive: "would like to study".',
      explanationAr: 'التركيب "would like" يتبعه دائماً المصدر مسبوقاً بـ to: would like to study.'
    },
    {
      id: 719,
      section: 'grammar',
      questionNumber: 19,
      prompt: 'My brother hates ______ in the campus library when it is crowded.',
      options: [
        { id: 'A', text: 'studying' },
        { id: 'B', text: 'study' },
        { id: 'C', text: 'studied' },
        { id: 'D', text: 'studies' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 3: Verb Patterns (hate + gerund)',
      ruleCategory: 'Verbs of Preference with Gerund',
      explanationEn: 'The verb "hate" commonly takes a gerund (-ing): "hates studying".',
      explanationAr: 'الفعل hate يتبعه الفعل بصيغة ing: hates studying.'
    },
    {
      id: 720,
      section: 'grammar',
      questionNumber: 20,
      prompt: 'Where ______ they spend their vacation last summer?',
      options: [
        { id: 'A', text: 'did' },
        { id: 'B', text: 'do' },
        { id: 'C', text: 'were' },
        { id: 'D', text: 'are' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 4: Past Simple Questions',
      ruleCategory: 'did in Past Questions',
      explanationEn: 'In past simple questions with an action verb (spend), use auxiliary "did".',
      explanationAr: 'في السؤال عن الماضي البسيط بوجود فعل رئيسي، نستخدم did: Where did they spend...?'
    },
    {
      id: 721,
      section: 'grammar',
      questionNumber: 21,
      prompt: 'Fahad ______ his car to work yesterday; he took the metro instead.',
      options: [
        { id: 'A', text: "didn't drive" },
        { id: 'B', text: "didn't drove" },
        { id: 'C', text: 'not drive' },
        { id: 'D', text: "wasn't drive" }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 4: Past Simple Negatives with Irregular Verbs',
      ruleCategory: 'didn’t + base form',
      explanationEn: 'After "didn\'t", use the base form "drive" (not drove): "didn\'t drive".',
      explanationAr: 'بعد didn\'t نستخدم الفعل في المصدر المجرد: didn\'t drive.'
    },
    {
      id: 722,
      section: 'grammar',
      questionNumber: 22,
      prompt: 'Mount Everest is ______ than Mount Kilimanjaro.',
      options: [
        { id: 'A', text: 'higher' },
        { id: 'B', text: 'more high' },
        { id: 'C', text: 'highest' },
        { id: 'D', text: 'as high' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Comparative Adjectives',
      ruleCategory: 'One-Syllable Comparatives (-er)',
      explanationEn: 'High is a one-syllable adjective. Its comparative is "higher than".',
      explanationAr: 'الصفة high قصيرة، وعند المقارنة نضيف لها er: higher than.'
    },
    {
      id: 723,
      section: 'grammar',
      questionNumber: 23,
      prompt: 'This is the ______ assignment we have had all semester.',
      options: [
        { id: 'A', text: 'most difficult' },
        { id: 'B', text: 'more difficult' },
        { id: 'C', text: 'difficultest' },
        { id: 'D', text: 'difficult' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Superlative Adjectives',
      ruleCategory: 'Long Superlative Forms',
      explanationEn: 'Difficult is multi-syllable. Its superlative form is "the most difficult".',
      explanationAr: 'صيغة التفضيل العليا من difficult هي: the most difficult (الأكثر صعوبة).'
    },
    {
      id: 724,
      section: 'grammar',
      questionNumber: 24,
      prompt: 'I ______ to enroll in a public speaking workshop next semester.',
      options: [
        { id: 'A', text: 'am going' },
        { id: 'B', text: 'is going' },
        { id: 'C', text: 'going' },
        { id: 'D', text: 'will to' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Future with be going to',
      ruleCategory: 'First Person Future Intentions',
      explanationEn: 'With subject pronoun "I", we say [am + going to + verb]: "I am going to enroll".',
      explanationAr: 'مع الضمير I، نستخدم: I am going to enroll.'
    },

    // --- READING COMPREHENSION (Q25 - Q30) ---
    {
      id: 725,
      section: 'reading',
      questionNumber: 25,
      prompt: 'What are the main objectives of the Saudi Green Initiative according to the passage?',
      options: [
        { id: 'A', text: 'To combat desertification, reduce carbon emissions, and enhance quality of life' },
        { id: 'B', text: 'To build new shopping malls in the desert' },
        { id: 'C', text: 'To import foreign trees that require heavy watering' },
        { id: 'D', text: 'To close national parks during the summer' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 4: Reading for Key Objectives',
      ruleCategory: 'Comprehending Stated Goals',
      explanationEn: 'Paragraph 1 specifies: "to combat desertification, reduce carbon emissions, and enhance the quality of life across the Kingdom."',
      explanationAr: 'تحدد الفقرة الأولى أهداف المبادرة: مكافحة التصحر، خفض الانبعاثات الكربونية، وتحسين جودة الحياة.',
      passageId: 'p7'
    },
    {
      id: 726,
      section: 'reading',
      questionNumber: 26,
      prompt: 'How many trees are planned to be planted as a key milestone of the SGI project?',
      options: [
        { id: 'A', text: 'Ten billion trees' },
        { id: 'B', text: 'One hundred thousand trees' },
        { id: 'C', text: 'Fifty million trees' },
        { id: 'D', text: 'One million trees' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 4: Scanning for Numbers',
      ruleCategory: 'Locating Numerical Milestones',
      explanationEn: 'Paragraph 2 explicitly states: "planting ten billion trees throughout diverse ecosystems..."',
      explanationAr: 'يذكر النص زراعة عشرة مليارات شجرة (ten billion trees) في مختلف البيئات الطبيعية.',
      passageId: 'p7'
    },
    {
      id: 727,
      section: 'reading',
      questionNumber: 27,
      prompt: 'Which two native ecosystems and tree types are highlighted in the passage?',
      options: [
        { id: 'A', text: 'Native acacia in valleys and mangrove forests along the coastlines' },
        { id: 'B', text: 'Pine trees in snow and tropical banana trees' },
        { id: 'C', text: 'Apple orchards in city gardens only' },
        { id: 'D', text: 'Bamboo forests in office buildings' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 4: Environmental Vocabulary in Reading',
      ruleCategory: 'Species Identification in Text',
      explanationEn: 'The passage highlights: "native acacia in valleys and mangrove forests along the Arabian Gulf and Red Sea coastlines."',
      explanationAr: 'يوضح النص زراعة أشجار الأكاسيا (الطلح) المحلية في الأودية وأشجار المانجروف (القرم) على السواحل.',
      passageId: 'p7'
    },
    {
      id: 728,
      section: 'reading',
      questionNumber: 28,
      prompt: 'Why do indigenous desert trees require significantly less irrigation water?',
      options: [
        { id: 'A', text: 'Because they evolved deep root systems adapted to arid soil' },
        { id: 'B', text: 'Because it rains heavily every single day in the desert' },
        { id: 'C', text: 'Because they do not need any sunlight' },
        { id: 'D', text: 'Because they grow only inside greenhouses' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 4: Scientific Cause & Effect',
      ruleCategory: 'Cause and Effect in Reading',
      explanationEn: 'Paragraph 3 explains: "native desert species have evolved deep root systems adapted to arid soil."',
      explanationAr: 'تتميز الأشجار المحلية بجذور عميقة متكيفة مع التربة الجافة وشح المياه.',
      passageId: 'p7'
    },
    {
      id: 729,
      section: 'reading',
      questionNumber: 29,
      prompt: 'During which month do universities and community volunteers participate in tree-planting campaigns?',
      options: [
        { id: 'A', text: 'Every November' },
        { id: 'B', text: 'Every July' },
        { id: 'C', text: 'Only in August' },
        { id: 'D', text: 'In January only' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 4: Reading for Time & Months',
      ruleCategory: 'Month Identification in Text',
      explanationEn: 'Paragraph 4 states: "Universities and community volunteers participate actively in annual tree-planting campaigns every November..."',
      explanationAr: 'يشارك المتطوعون والجامعات في حملات التشجير السنوية في شهر نوفمبر من كل عام.',
      passageId: 'p7'
    },
    {
      id: 730,
      section: 'reading',
      questionNumber: 30,
      prompt: 'What positive effect do these environmental campaigns have on young citizens?',
      options: [
        { id: 'A', text: 'They inspire them to preserve native flora and wildlife habitats' },
        { id: 'B', text: 'They teach them how to cut down forests' },
        { id: 'C', text: 'They encourage them to stay indoors all year' },
        { id: 'D', text: 'They stop students from attending lectures' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 4: Reading for Values & Themes',
      ruleCategory: 'Main Message Comprehension',
      explanationEn: 'The final line states the campaigns are "inspiring young citizens to preserve native flora and wildlife habitats."',
      explanationAr: 'تلهم الحملات الشباب والطلاب الحفاظ على الغطاء النباتي والموائل الفطرية والبيئية.',
      passageId: 'p7'
    }
  ]
};

// =========================================================================
// MODEL 8 (Model H): Umm Al-Qura University English Center (UQU Midterm)
// =========================================================================
export const modelHExam: ExamModel = {
  id: 'model-h',
  title: 'نموذج اختبار Evolve 2 - 8',
  subtitle: 'UQU English Language Center • Comprehensive Midterm Exam',
  university: 'جامعة أم القرى (UQU) / مركز اللغة الإنجليزية',
  term: 'First Semester Midterm Exam',
  courseCode: 'ELC 101 / Evolve 2',
  timeLimitMinutes: 50,
  totalQuestions: 30,
  listeningTracks: {
    t8: {
      id: 't8',
      title: 'Makkah-Madinah High-Speed Haramain Train Inquiry',
      description: 'Audio dialogue: Traveler Hisham speaks with station customer agent Maryam at Makkah Station about booking high-speed train tickets.',
      durationSeconds: 125,
      script:
        'Maryam: Welcome to the Haramain High-Speed Railway Information Desk. How may I assist your travel today?\n\nHisham: Good morning! I want to take the high-speed train from Makkah to Madinah tomorrow morning. What is the earliest departure time?\n\nMaryam: The earliest morning express service departs Makkah Station at 6:45 AM and arrives in Madinah at 9:05 AM.\n\nHisham: That is only two hours and twenty minutes! How fast does the train travel?\n\nMaryam: The electric train travels smoothly at speeds up to 300 kilometers per hour across the desert.\n\nHisham: Incredible speed! How many luggage bags am I permitted to bring into the passenger coach?\n\nMaryam: Each ticket holder is allowed one large suitcase weighing up to 25 kilograms, plus one personal backpack or handbag.\n\nHisham: Perfect. Is there free Wi-Fi and a dining car on board?\n\nMaryam: Yes, high-speed Wi-Fi is complimentary, and car number 5 is our cafeteria serving hot beverages, sandwiches, and fresh dates.\n\nHisham: Wonderful! Thank you so much for the helpful information, Maryam.'
    }
  },
  passages: {
    p8: {
      id: 'p8',
      title: 'Renewable Solar Energy in Neom and Tabuk',
      content: [
        'The northwestern region of Saudi Arabia enjoys more than 300 days of intense sunlight annually, making it one of the premier locations on Earth for utility-scale photovoltaic solar energy.',
        'At the futuristic city project of Neom, engineers are constructing what will become the world’s largest green hydrogen plant, powered entirely by renewable solar and wind energy.',
        'Unlike traditional fossil-fuel energy stations, solar panels generate electricity silently without producing hazardous air pollutants or greenhouse carbon gases.',
        'Specialized cleaning drones and robotic sweepers are deployed across the massive solar arrays to clear blowing desert dust, ensuring that the solar panels maintain maximum electrical efficiency year-round.'
      ]
    }
  },
  questions: [
    // --- LISTENING (Q1 - Q5) ---
    {
      id: 801,
      section: 'listening',
      questionNumber: 1,
      prompt: 'What time does the earliest Haramain express train depart Makkah Station in the morning?',
      options: [
        { id: 'A', text: 'At 6:45 AM' },
        { id: 'B', text: 'At 11:30 AM' },
        { id: 'C', text: 'At 2:00 AM' },
        { id: 'D', text: 'At 8:00 PM' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Listening for Train Schedules',
      ruleCategory: 'Listening for Departure Times',
      explanationEn: 'Maryam specifies: "The earliest morning express service departs Makkah Station at 6:45 AM."',
      explanationAr: 'أوضحت مريم أن أول رحلة قطار سريعة تغادر محطة مكة المكرمة في تمام الساعة 6:45 صباحاً.',
      audioTrackId: 't8'
    },
    {
      id: 802,
      section: 'listening',
      questionNumber: 2,
      prompt: 'What is the top speed of the Haramain high-speed electric train across the desert?',
      options: [
        { id: 'A', text: 'Up to 300 kilometers per hour' },
        { id: 'B', text: 'Only 80 kilometers per hour' },
        { id: 'C', text: 'Over 1,000 kilometers per hour' },
        { id: 'D', text: '50 miles per hour' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Listening for Speeds & Numbers',
      ruleCategory: 'Listening for Travel Speed',
      explanationEn: 'Maryam notes: "The electric train travels smoothly at speeds up to 300 kilometers per hour."',
      explanationAr: 'ذكرت أن القطار الكهربائي يسير بسرعات تصل إلى 300 كيلومتر في الساعة.',
      audioTrackId: 't8'
    },
    {
      id: 803,
      section: 'listening',
      questionNumber: 3,
      prompt: 'What is the maximum allowed weight for a passenger’s large suitcase?',
      options: [
        { id: 'A', text: 'Up to 25 kilograms' },
        { id: 'B', text: 'Up to 100 kilograms' },
        { id: 'C', text: 'Only 5 kilograms' },
        { id: 'D', text: 'No luggage is allowed' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Luggage Regulations in Listening',
      ruleCategory: 'Weight Limits Comprehension',
      explanationEn: 'Maryam clarifies: "one large suitcase weighing up to 25 kilograms, plus one personal backpack or handbag."',
      explanationAr: 'أكدت أن الحد الأقصى المسموح به للحقيبة الكبيرة هو 25 كيلوغراماً.',
      audioTrackId: 't8'
    },
    {
      id: 804,
      section: 'listening',
      questionNumber: 4,
      prompt: 'Which train car contains the cafeteria dining area?',
      options: [
        { id: 'A', text: 'Car number 5' },
        { id: 'B', text: 'Car number 1 only' },
        { id: 'C', text: 'The luggage car' },
        { id: 'D', text: 'There is no food car' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Train Facilities in Listening',
      ruleCategory: 'Specific Car Location',
      explanationEn: 'Maryam explains: "car number 5 is our cafeteria serving hot beverages, sandwiches, and fresh dates."',
      explanationAr: 'أوضحت أن العربة رقم 5 هي المخصصة للكافتيريا وتقديم المشروبات والشطائر والتمور.',
      audioTrackId: 't8'
    },
    {
      id: 805,
      section: 'listening',
      questionNumber: 5,
      prompt: 'What amenity is provided free of charge for passengers on board the train?',
      options: [
        { id: 'A', text: 'High-speed complimentary Wi-Fi' },
        { id: 'B', text: 'Free luxury hotel rooms' },
        { id: 'C', text: 'Free smartphones for every traveler' },
        { id: 'D', text: 'Free rental cars' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Travel Amenities',
      ruleCategory: 'Identifying Free Services',
      explanationEn: 'Maryam confirms: "high-speed Wi-Fi is complimentary."',
      explanationAr: 'أكدت أن خدمة الإنترنت اللاسلكي عالية السرعة (Wi-Fi) مجانية لجميع الركاب.',
      audioTrackId: 't8'
    },

    // --- VOCABULARY (Q6 - Q13) ---
    {
      id: 806,
      section: 'vocabulary',
      questionNumber: 6,
      prompt: 'Dr. Munir is an experienced university ______. He delivers lectures in civil engineering.',
      options: [
        { id: 'A', text: 'professor' },
        { id: 'B', text: 'customer' },
        { id: 'C', text: 'tourist' },
        { id: 'D', text: 'cashier' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 1: Academic Occupations',
      ruleCategory: 'University Roles',
      explanationEn: 'A "professor" is a university academic teacher of highest rank.',
      explanationAr: 'كلمة professor تعني أستاذ جامعي يلقي المحاضرات الأكاديمية.'
    },
    {
      id: 807,
      section: 'vocabulary',
      questionNumber: 7,
      prompt: 'If you cannot find your keys, check your pocket or look inside your leather ______.',
      options: [
        { id: 'A', text: 'wallet' },
        { id: 'B', text: 'projector' },
        { id: 'C', text: 'keyboard' },
        { id: 'D', text: 'cart' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 1: Everyday Essentials',
      ruleCategory: 'Personal Accessories',
      explanationEn: 'A "wallet" is a small pocket holder for personal cards and cash.',
      explanationAr: 'كلمة wallet تعني محفظة نقود وبطاقات.'
    },
    {
      id: 808,
      section: 'vocabulary',
      questionNumber: 8,
      prompt: 'Drinking hot chamomile tea with honey can help soothe a painful sore ______.',
      options: [
        { id: 'A', text: 'throat' },
        { id: 'B', text: 'receipt' },
        { id: 'C', text: 'mirror' },
        { id: 'D', text: 'shelf' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 2: Health Symptoms',
      ruleCategory: 'Illness Vocabulary',
      explanationEn: 'A "sore throat" is pain or irritation in the throat when swallowing.',
      explanationAr: 'العبارة sore throat تعني التهاب الحلق، ويساعده شرب البابونج والعسل.'
    },
    {
      id: 809,
      section: 'vocabulary',
      questionNumber: 9,
      prompt: 'Dates from Madinah are world-famous for their naturally rich and ______ flavor.',
      options: [
        { id: 'A', text: 'sweet' },
        { id: 'B', text: 'sour' },
        { id: 'C', text: 'salty' },
        { id: 'D', text: 'bitter' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 3: Food Flavors',
      ruleCategory: 'Taste Descriptors',
      explanationEn: '"Sweet" describes sugary pleasant tastes such as honey or dates.',
      explanationAr: 'كلمة sweet تعني حلو المذاق كطعم التمور والعسل.'
    },
    {
      id: 810,
      section: 'vocabulary',
      questionNumber: 10,
      prompt: 'The electronics retailer gave me a signed ______ confirming my payment and 2-year warranty.',
      options: [
        { id: 'A', text: 'receipt' },
        { id: 'B', text: 'umbrella' },
        { id: 'C', text: 'cart' },
        { id: 'D', text: 'charger' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 6: Purchase Documents',
      ruleCategory: 'Shopping Proof',
      explanationEn: 'A "receipt" is proof of payment for goods purchased.',
      explanationAr: 'الـ receipt هو إيصال وفاتورة الشراء التي تثبت عملية الدفع.'
    },
    {
      id: 811,
      section: 'vocabulary',
      questionNumber: 11,
      prompt: 'Can you please ______ me twenty Riyals until tomorrow morning?',
      options: [
        { id: 'A', text: 'lend' },
        { id: 'B', text: 'borrow' },
        { id: 'C', text: 'waste' },
        { id: 'D', text: 'sell' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 6: Lend vs Borrow',
      ruleCategory: 'Financial Verbs',
      explanationEn: '"Lend to someone" means giving money temporarily. "Can you lend me...?"',
      explanationAr: 'الفعل lend يعني يقرض أو يعير لشخص آخر ("هل يمكنك إقراضي...؟").'
    },
    {
      id: 812,
      section: 'vocabulary',
      questionNumber: 12,
      prompt: 'The sky became dark and grey, and thick ______ rolled down from the mountains.',
      options: [
        { id: 'A', text: 'fog' },
        { id: 'B', text: 'shelf' },
        { id: 'C', text: 'cart' },
        { id: 'D', text: 'price' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Weather Phenomena',
      ruleCategory: 'Atmospheric Conditions',
      explanationEn: '"Fog" is thick cloud at ground level that reduces visibility.',
      explanationAr: 'كلمة fog تعني ضباباً كثيفاً يغطي المرتفعات والجبال.'
    },
    {
      id: 813,
      section: 'vocabulary',
      questionNumber: 13,
      prompt: 'I put on my wireless ______ so I could listen to the podcast on the train without disturbing anyone.',
      options: [
        { id: 'A', text: 'headphones' },
        { id: 'B', text: 'umbrellas' },
        { id: 'C', text: 'mirrors' },
        { id: 'D', text: 'receipts' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 1: Travel Gadgets',
      ruleCategory: 'Audio Devices',
      explanationEn: '"Headphones" allow private listening.',
      explanationAr: 'كلمة headphones تعني سماعات الرأس للاستماع الفردي الهادئ.'
    },

    // --- GRAMMAR (Q14 - Q24) ---
    {
      id: 814,
      section: 'grammar',
      questionNumber: 14,
      prompt: 'The express train ______ Makkah Station every hour on the dot.',
      options: [
        { id: 'A', text: 'leaves' },
        { id: 'B', text: 'leave' },
        { id: 'C', text: 'is leave' },
        { id: 'D', text: 'leaving' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 1: Present Simple Timetables',
      ruleCategory: 'Timetable Present Simple',
      explanationEn: 'The express train (singular subject it) takes third-person -s: "leaves".',
      explanationAr: 'الفاعل مفرد (The express train) مع مواعيد مجدولة، فيأخذ الفعل s: leaves.'
    },
    {
      id: 815,
      section: 'grammar',
      questionNumber: 15,
      prompt: 'The technicians ______ the high-speed solar batteries at this very moment.',
      options: [
        { id: 'A', text: 'are testing' },
        { id: 'B', text: 'tests' },
        { id: 'C', text: 'test' },
        { id: 'D', text: 'tested' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 1: Present Continuous',
      ruleCategory: 'Plural Subject Actions in Progress',
      explanationEn: '"At this very moment" with plural subject "the technicians" requires [are + verb-ing]: "are testing".',
      explanationAr: 'الفاعل جمع مع دلالة الوقت الحاضر "at this very moment"، لذا نستخدم: are testing.'
    },
    {
      id: 816,
      section: 'grammar',
      questionNumber: 16,
      prompt: 'We don’t have ______ time before the train departs. We must hurry!',
      options: [
        { id: 'A', text: 'much' },
        { id: 'B', text: 'many' },
        { id: 'C', text: 'few' },
        { id: 'D', text: 'several' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 3: Quantifiers (much / many)',
      ruleCategory: 'Uncountable Negatives',
      explanationEn: 'Time is uncountable. In negative sentences, we use "much": "don\'t have much time".',
      explanationAr: 'الوقت (time) غير معدود، ونستخدم "much" في النفي: don\'t have much time.'
    },
    {
      id: 817,
      section: 'grammar',
      questionNumber: 17,
      prompt: 'There are ______ passenger seats available in coach 4.',
      options: [
        { id: 'A', text: 'a few' },
        { id: 'B', text: 'a little' },
        { id: 'C', text: 'much' },
        { id: 'D', text: 'any' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 3: Quantifiers with Countable Plural Nouns',
      ruleCategory: 'a few + Plural Noun',
      explanationEn: '"Seats" is a countable plural noun. We use "a few seats".',
      explanationAr: 'كلمة seats جمع معدود، فنستخدم معها "a few" (بضعة مقاعد).'
    },
    {
      id: 818,
      section: 'grammar',
      questionNumber: 18,
      prompt: 'Hisham decided ______ his ticket using the mobile app.',
      options: [
        { id: 'A', text: 'to book' },
        { id: 'B', text: 'booking' },
        { id: 'C', text: 'book' },
        { id: 'D', text: 'booked' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 3: Verb Patterns (decide + to-infinitive)',
      ruleCategory: 'Verbs Followed by Infinitive',
      explanationEn: '"Decide" takes a to-infinitive: "decided to book".',
      explanationAr: 'الفعل decide يتبعه المصدر مع to: decided to book.'
    },
    {
      id: 819,
      section: 'grammar',
      questionNumber: 19,
      prompt: 'Many commuters prefer ______ the train rather than driving in highway traffic.',
      options: [
        { id: 'A', text: 'riding' },
        { id: 'B', text: 'rode' },
        { id: 'C', text: 'ridden' },
        { id: 'D', text: 'rides' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 3: Verb Patterns (prefer + gerund)',
      ruleCategory: 'Gerund after Prefer',
      explanationEn: '"Prefer" is followed by a gerund (-ing): "prefer riding".',
      explanationAr: 'الفعل prefer يتبعه الفعل بصيغة ing: prefer riding.'
    },
    {
      id: 820,
      section: 'grammar',
      questionNumber: 20,
      prompt: '______ you meet the station manager during your visit yesterday?',
      options: [
        { id: 'A', text: 'Did' },
        { id: 'B', text: 'Do' },
        { id: 'C', text: 'Were' },
        { id: 'D', text: 'Are' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 4: Past Simple Questions',
      ruleCategory: 'Past Auxiliary did',
      explanationEn: 'Use "Did" for past questions with action verb (meet): "Did you meet...?".',
      explanationAr: 'في السؤال عن الماضي البسيط بوجود فعل أساسي (meet)، نستخدم Did.'
    },
    {
      id: 821,
      section: 'grammar',
      questionNumber: 21,
      prompt: 'We ______ our tickets at the counter; we downloaded them to our phones instead.',
      options: [
        { id: 'A', text: "didn't print" },
        { id: 'B', text: "didn't printed" },
        { id: 'C', text: 'not printed' },
        { id: 'D', text: "weren't print" }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 4: Past Simple Negatives',
      ruleCategory: 'didn’t + base verb',
      explanationEn: 'Past negative uses "didn\'t" + base verb "print": "didn\'t print".',
      explanationAr: 'نفي الماضي البسيط: didn\'t print.'
    },
    {
      id: 822,
      section: 'grammar',
      questionNumber: 22,
      prompt: 'Traveling by high-speed rail is ______ than driving an old car.',
      options: [
        { id: 'A', text: 'safer' },
        { id: 'B', text: 'more safe' },
        { id: 'C', text: 'safest' },
        { id: 'D', text: 'as safe' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Comparative Adjectives',
      ruleCategory: 'Short Comparative Adjectives ending in -e',
      explanationEn: 'Safe ends in -e, so we add -r: "safer than".',
      explanationAr: 'الصفة safe تنتهي بـ e، فنضيف لها r عند المقارنة: safer than.'
    },
    {
      id: 823,
      section: 'grammar',
      questionNumber: 23,
      prompt: 'This is the ______ station building along the entire rail route.',
      options: [
        { id: 'A', text: 'most modern' },
        { id: 'B', text: 'more modern' },
        { id: 'C', text: 'modernest' },
        { id: 'D', text: 'modern' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Superlative Adjectives',
      ruleCategory: 'Two-syllable Superlatives',
      explanationEn: '"Modern" takes "the most modern" in the superlative.',
      explanationAr: 'صيغة التفضيل العليا من modern هي: the most modern (الأكثر حداثة وتطوراً).'
    },
    {
      id: 824,
      section: 'grammar',
      questionNumber: 24,
      prompt: 'The students ______ to visit the solar energy farm next month.',
      options: [
        { id: 'A', text: 'are going' },
        { id: 'B', text: 'is going' },
        { id: 'C', text: 'going' },
        { id: 'D', text: 'will to' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Future with be going to',
      ruleCategory: 'Plural Future Intentions',
      explanationEn: 'Plural subject "The students" takes [are + going to + verb]: "are going to visit".',
      explanationAr: 'الفاعل جمع (The students)، لذا نستخدم: are going to visit.'
    },

    // --- READING COMPREHENSION (Q25 - Q30) ---
    {
      id: 825,
      section: 'reading',
      questionNumber: 25,
      prompt: 'Why is northwestern Saudi Arabia an ideal location for utility solar power?',
      options: [
        { id: 'A', text: 'It enjoys more than 300 days of intense sunlight annually' },
        { id: 'B', text: 'It experiences heavy snowfall all year' },
        { id: 'C', text: 'It has no sunshine throughout the year' },
        { id: 'D', text: 'It has the lowest temperatures on the continent' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 4: Reading for Geographic Reasons',
      ruleCategory: 'Cause and Effect in Reading',
      explanationEn: 'Paragraph 1 notes: "enjoys more than 300 days of intense sunlight annually, making it one of the premier locations..."',
      explanationAr: 'توضح الفقرة الأولى أن المنطقة تتمتع بأكثر من 300 يوم من الإشعاع الشمسي القوي سنوياً.',
      passageId: 'p8'
    },
    {
      id: 826,
      section: 'reading',
      questionNumber: 26,
      prompt: 'What major clean facility is under construction at the Neom project?',
      options: [
        { id: 'A', text: 'The world’s largest green hydrogen plant' },
        { id: 'B', text: 'A traditional coal-fired power station' },
        { id: 'C', text: 'A nuclear waste disposal facility' },
        { id: 'D', text: 'A diesel engine factory' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 4: Reading for Industrial Facts',
      ruleCategory: 'Facility Identification',
      explanationEn: 'Paragraph 2 highlights: "engineers are constructing what will become the world’s largest green hydrogen plant..."',
      explanationAr: 'يذكر النص إنشاء أكبر محطة للهيدروجين الأخضر في العالم في نيوم، وتعتمد بالكامل على الطاقة المتجددة.',
      passageId: 'p8'
    },
    {
      id: 827,
      section: 'reading',
      questionNumber: 27,
      prompt: 'What energy sources power the green hydrogen plant in Neom?',
      options: [
        { id: 'A', text: 'Entirely renewable solar and wind energy' },
        { id: 'B', text: 'Heavy crude oil only' },
        { id: 'C', text: 'Wood-burning fireplaces' },
        { id: 'D', text: 'Diesel generators' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 4: Clean Energy Sources',
      ruleCategory: 'Energy Classification in Text',
      explanationEn: 'Paragraph 2 states: "powered entirely by renewable solar and wind energy."',
      explanationAr: 'تعتمد المحطة كلياً على طاقتي الشمس والرياح المتجددتين.',
      passageId: 'p8'
    },
    {
      id: 828,
      section: 'reading',
      questionNumber: 28,
      prompt: 'How do solar panels compare to traditional fossil-fuel energy stations?',
      options: [
        { id: 'A', text: 'They generate electricity silently without producing air pollutants or greenhouse gases' },
        { id: 'B', text: 'They produce much more black smoke and noise' },
        { id: 'C', text: 'They consume large amounts of gasoline' },
        { id: 'D', text: 'They only work during nighttime hours' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 4: Environmental Comparisons',
      ruleCategory: 'Contrast & Comparison in Text',
      explanationEn: 'Paragraph 3 highlights: "solar panels generate electricity silently without producing hazardous air pollutants or greenhouse carbon gases."',
      explanationAr: 'تولد الألواح الشمسية الكهرباء بصمت وبدون أي انبعاثات غازية ضارة أو ملوثات للهواء.',
      passageId: 'p8'
    },
    {
      id: 829,
      section: 'reading',
      questionNumber: 29,
      prompt: 'What technology is used to clean blowing desert dust off the solar arrays?',
      options: [
        { id: 'A', text: 'Specialized cleaning drones and robotic sweepers' },
        { id: 'B', text: 'Heavy water fire trucks' },
        { id: 'C', text: 'Handheld paper towels' },
        { id: 'D', text: 'Chemical acid sprays' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 4: Technology & Robotics in Reading',
      ruleCategory: 'Technological Detail Identification',
      explanationEn: 'Paragraph 4 states: "Specialized cleaning drones and robotic sweepers are deployed across the massive solar arrays..."',
      explanationAr: 'تُستخدم طائرات درون متخصصة وروبوتات تنظيف لمسح غبار الصحراء عن الألواح بدون هدر للمياه.',
      passageId: 'p8'
    },
    {
      id: 830,
      section: 'reading',
      questionNumber: 30,
      prompt: 'Why is keeping the solar panels clean essential for the project?',
      options: [
        { id: 'A', text: 'To ensure the solar panels maintain maximum electrical efficiency year-round' },
        { id: 'B', text: 'To make them look pretty for tourists only' },
        { id: 'C', text: 'Because dust makes them permanently transparent' },
        { id: 'D', text: 'To stop wild birds from nesting' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 4: Efficiency & Purpose',
      ruleCategory: 'Cause and Consequence in Reading',
      explanationEn: 'The text concludes: "ensuring that the solar panels maintain maximum electrical efficiency year-round."',
      explanationAr: 'الحفاظ على نظافة الألواح يضمن بقاء كفاءة توليد الطاقة الكهربائية عند أعلى مستوياتها طوال العام.',
      passageId: 'p8'
    }
  ]
};
