import { ExamModel } from '../types';

// =========================================================================
// MODEL 9 (Model I): Advanced Honors Midterm (High Precision & Tricky Patterns)
// =========================================================================
export const modelIExam: ExamModel = {
  id: 'model-i',
  title: 'نموذج اختبار Evolve 2 - 9',
  subtitle: 'Advanced Evolve 2 Diagnostic • Precision Vocabulary & High-Scoring Items',
  university: 'نخبة الجامعات السعودية (Honors Foundation Track)',
  term: 'Midterm Examination - Model 9',
  courseCode: 'ELCE 1201 / Evolve 2',
  timeLimitMinutes: 50,
  totalQuestions: 30,
  listeningTracks: {
    t9: {
      id: 't9',
      title: 'Smart Agricultural Drones & Technology in Al-Qassim',
      description: 'Audio dialogue: Agricultural engineer Walid interviews tech specialist Noura about autonomous crop monitoring in Buraidah.',
      durationSeconds: 130,
      script:
        'Walid: Good morning, Noura! It is exciting to see autonomous drones operating over this date palm plantation in Buraidah. How do these drones assist farmers?\n\nNoura: Good morning, Walid! These drones are equipped with multispectral cameras. They fly automatically over five thousand date palms every single morning.\n\nWalid: What specific data do the multispectral cameras capture?\n\nNoura: They measure thermal heat and leaf color spectrums. If a palm tree lacks irrigation water or suffers from red palm weevil pests, the AI software flags it within minutes.\n\nWalid: That is remarkable. How much water does this technology save compared to traditional flood irrigation?\n\nNoura: It reduces agricultural water usage by forty percent while increasing date harvest yields by fifteen percent!\n\nWalid: How many hours can each drone patrol before requiring battery recharge?\n\nNoura: Each drone flies continuously for 90 minutes. When the battery drops to twenty percent, the drone lands autonomously on a solar charging pad.\n\nWalid: The future of sustainable farming is already here in Qassim! Thank you, Noura.'
    }
  },
  passages: {
    p9: {
      id: 'p9',
      title: 'Artificial Intelligence in Modern Agriculture in Al-Qassim',
      content: [
        'Al-Qassim region is renowned throughout the Kingdom for its vast date palm orchards, wheat fields, and fresh produce farms. In recent years, local agricultural engineers have incorporated cutting-edge artificial intelligence and drone technology.',
        'Autonomous drones fly over thousands of date palms daily, taking multispectral photographs. Sophisticated AI algorithms analyze the leaves to detect early signs of pest infestations or water deficiency before the human eye can notice them.',
        'Last year, smart drip-irrigation sensors cut total water consumption by thirty-five percent while increasing date production. Farmers no longer pour too much water on their soil; each palm receives the exact quantity it requires.',
        'Next season, agricultural cooperatives are going to introduce solar-powered automated tractors to harvest dates efficiently.'
      ]
    }
  },
  questions: [
    // --- LISTENING (Q1 - Q5) ---
    {
      id: 901,
      section: 'listening',
      questionNumber: 1,
      prompt: 'How many date palms do the autonomous drones monitor every morning in Buraidah?',
      options: [
        { id: 'A', text: 'Five thousand date palms' },
        { id: 'B', text: 'Only fifty trees' },
        { id: 'C', text: 'Ten date palms' },
        { id: 'D', text: 'Over one million trees' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 1: Listening for Quantities & Facts',
      ruleCategory: 'Listening for Specific Quantities',
      explanationEn: 'Noura explicitly states: "They fly automatically over five thousand date palms every single morning."',
      explanationAr: 'ذكرت نورة بوضوح أن الطائرات المسيّرة تفحص خمسة آلاف نخلة كل صباح.',
      audioTrackId: 't9'
    },
    {
      id: 902,
      section: 'listening',
      questionNumber: 2,
      prompt: 'What specific data do the multispectral cameras on the drones capture?',
      options: [
        { id: 'A', text: 'Thermal heat and leaf color spectrums' },
        { id: 'B', text: 'Tourist passport photographs' },
        { id: 'C', text: 'Radio music broadcasts' },
        { id: 'D', text: 'Car engine speeds' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 2: Modern Technology Details',
      ruleCategory: 'Technical Feature Identification',
      explanationEn: 'Noura explains: "They measure thermal heat and leaf color spectrums."',
      explanationAr: 'أوضحت أن الكاميرات تقيس الانبعاثات الحرارية وأطياف ألوان أوراق النخيل لتشخيص صحتها.',
      audioTrackId: 't9'
    },
    {
      id: 903,
      section: 'listening',
      questionNumber: 3,
      prompt: 'How much water does this smart AI technology save compared to traditional irrigation?',
      options: [
        { id: 'A', text: 'It reduces water usage by forty percent' },
        { id: 'B', text: 'It uses more water than before' },
        { id: 'C', text: 'It saves zero water' },
        { id: 'D', text: 'Only two percent' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 4: Listening for Percentages',
      ruleCategory: 'Numerical Data in Listening',
      explanationEn: 'Noura notes: "It reduces agricultural water usage by forty percent while increasing date harvest yields by fifteen percent!"',
      explanationAr: 'أكدت أن التقنية تخفض استهلاك مياه الري بنسبة 40% وتزيد المحصول بنسبة 15%.',
      audioTrackId: 't9'
    },
    {
      id: 904,
      section: 'listening',
      questionNumber: 4,
      prompt: 'How long can each agricultural drone fly continuously before needing recharge?',
      options: [
        { id: 'A', text: 'For 90 minutes' },
        { id: 'B', text: 'For ten hours' },
        { id: 'C', text: 'For five minutes only' },
        { id: 'D', text: 'Twenty-four hours non-stop' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Listening for Durations',
      ruleCategory: 'Listening for Flight Durations',
      explanationEn: 'Noura confirms: "Each drone flies continuously for 90 minutes."',
      explanationAr: 'تطير كل طائرة لمدة 90 دقيقة بشكل متواصل قبل إعادة الشحن.',
      audioTrackId: 't9'
    },
    {
      id: 905,
      section: 'listening',
      questionNumber: 5,
      prompt: 'Where does the drone land autonomously when its battery level drops to twenty percent?',
      options: [
        { id: 'A', text: 'On a solar charging pad' },
        { id: 'B', text: 'In a water river' },
        { id: 'C', text: 'On top of a passing tractor' },
        { id: 'D', text: 'In the city airport' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Listening for Specific Locations',
      ruleCategory: 'Facility Identification in Listening',
      explanationEn: 'Noura states: "the drone lands autonomously on a solar charging pad."',
      explanationAr: 'تهبط الطائرة تلقائياً على منصة شحن تعمل بالطاقة الشمسية.',
      audioTrackId: 't9'
    },

    // --- VOCABULARY (Q6 - Q13) ---
    {
      id: 906,
      section: 'vocabulary',
      questionNumber: 6,
      prompt: 'Dates from Al-Qassim have a rich, naturally ______ taste that pairs perfectly with Arabic coffee.',
      options: [
        { id: 'A', text: 'sour' },
        { id: 'B', text: 'sweet' },
        { id: 'C', text: 'bitter' },
        { id: 'D', text: 'spicy' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 3: Food Flavors',
      ruleCategory: 'Taste Descriptors',
      explanationEn: 'Dates have a high natural sugar content, giving them a sweet taste.',
      explanationAr: 'التمر له طعم حلو طبيعي (sweet) يتناسب تماماً مع القهوة العربية المرة.'
    },
    {
      id: 907,
      section: 'vocabulary',
      questionNumber: 7,
      prompt: 'A flying robot aircraft without an onboard pilot controlled by computer software is a ______.',
      options: [
        { id: 'A', text: 'drone' },
        { id: 'B', text: 'mouse' },
        { id: 'C', text: 'projector' },
        { id: 'D', text: 'charger' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 1: Modern Technology',
      ruleCategory: 'Tech Gadgets',
      explanationEn: 'A drone is an unmanned aerial vehicle operated autonomously or via remote control.',
      explanationAr: 'الطائرة المسيّرة بدون طيار تسمى drone.'
    },
    {
      id: 908,
      section: 'vocabulary',
      questionNumber: 8,
      prompt: 'A person who rents a flat or room to tenants is called the ______.',
      options: [
        { id: 'A', text: 'landlord' },
        { id: 'B', text: 'customer' },
        { id: 'C', text: 'classmate' },
        { id: 'D', text: 'roommate' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 1: Housing & Relationships',
      ruleCategory: 'Property Roles',
      explanationEn: 'The property owner who rents real estate to tenants is the landlord.',
      explanationAr: 'مالك العقار الذي يؤجر الشقة للمستأجرين هو الـ landlord.'
    },
    {
      id: 909,
      section: 'vocabulary',
      questionNumber: 9,
      prompt: 'Drinking fresh ginger tea with lemon and honey helps soothe a painful sore ______.',
      options: [
        { id: 'A', text: 'throat' },
        { id: 'B', text: 'knee' },
        { id: 'C', text: 'elbow' },
        { id: 'D', text: 'wrist' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 2: Health Symptoms',
      ruleCategory: 'Illness Terms',
      explanationEn: 'Pain in the pharynx when swallowing is a sore throat.',
      explanationAr: 'التهاب وألم الحلق يسمى sore throat.'
    },
    {
      id: 910,
      section: 'vocabulary',
      questionNumber: 10,
      prompt: 'Dark chocolate without added milk or sugar often tastes quite ______.',
      options: [
        { id: 'A', text: 'bitter' },
        { id: 'B', text: 'creamy' },
        { id: 'C', text: 'salty' },
        { id: 'D', text: 'sweet' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 3: Taste Adjectives',
      ruleCategory: 'Flavors',
      explanationEn: 'Unsweetened cocoa and black coffee have a sharp, bitter taste.',
      explanationAr: 'الشوكولاتة الداكنة الخام بدون سكر لها طعم مرّ (bitter).'
    },
    {
      id: 911,
      section: 'vocabulary',
      questionNumber: 11,
      prompt: 'Always ask the store cashier for your printed ______ as proof of purchase.',
      options: [
        { id: 'A', text: 'receipt' },
        { id: 'B', text: 'mirror' },
        { id: 'C', text: 'wallet' },
        { id: 'D', text: 'umbrella' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 6: Proof of Purchase',
      ruleCategory: 'Shopping Vocabulary',
      explanationEn: 'A receipt proves you purchased and paid for an item.',
      explanationAr: 'إيصال الشراء (receipt) هو الوثيقة الرسمية لإثبات الدفع والضمان.'
    },
    {
      id: 912,
      section: 'vocabulary',
      questionNumber: 12,
      prompt: 'If you do not have paper banknotes, you can pay using your debit ______ at the terminal.',
      options: [
        { id: 'A', text: 'card' },
        { id: 'B', text: 'bill' },
        { id: 'C', text: 'shelf' },
        { id: 'D', text: 'cart' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 6: Electronic Payment',
      ruleCategory: 'Payment Methods',
      explanationEn: 'A debit or credit card enables electronic contactless payment.',
      explanationAr: 'البطاقة المصرفية (debit card) تتيح الدفع الإلكتروني بنقاط البيع.'
    },
    {
      id: 913,
      section: 'vocabulary',
      questionNumber: 13,
      prompt: 'The high desert plateau experienced dense, blinding ______ early in the winter morning.',
      options: [
        { id: 'A', text: 'fog' },
        { id: 'B', text: 'receipt' },
        { id: 'C', text: 'cart' },
        { id: 'D', text: 'sale' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Weather Phenomena',
      ruleCategory: 'Atmospheric Conditions',
      explanationEn: 'Dense fog severely reduces visual distance in morning cold weather.',
      explanationAr: 'الضباب الكثيف (fog) يحجب الرؤية في الصباح الباكر.'
    },

    // --- GRAMMAR (Q14 - Q24) ---
    {
      id: 914,
      section: 'grammar',
      questionNumber: 14,
      prompt: 'Dr. Tariq ______ lectures in advanced structural mechanics every Monday morning.',
      options: [
        { id: 'A', text: 'delivers' },
        { id: 'B', text: 'deliver' },
        { id: 'C', text: 'is delivering' },
        { id: 'D', text: 'delivered' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 1: Present Simple Habitual',
      ruleCategory: 'Subject-Verb Agreement (-s)',
      explanationEn: 'Singular third-person subject Dr. Tariq with routine "every Monday" takes -s: "delivers".',
      explanationAr: 'الفاعل مفرد مع عادة أسبوعية متكررة، لذا يأخذ الفعل s في المضارع البسيط: delivers.'
    },
    {
      id: 915,
      section: 'grammar',
      questionNumber: 15,
      prompt: 'Look! The robotic drone ______ autonomously on its solar landing pad right now.',
      options: [
        { id: 'A', text: 'is landing' },
        { id: 'B', text: 'lands' },
        { id: 'C', text: 'landed' },
        { id: 'D', text: 'land' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 1: Present Continuous',
      ruleCategory: 'Actions in Progress (right now)',
      explanationEn: '"Look!" and "right now" signal present continuous: [is + verb-ing]: "is landing".',
      explanationAr: 'الحدث يقع في اللحظة الحالية (right now)، فنستخدم: is landing.'
    },
    {
      id: 916,
      section: 'grammar',
      questionNumber: 16,
      prompt: 'There is ______ salt in this broth; it is completely undrinkable.',
      options: [
        { id: 'A', text: 'too much' },
        { id: 'B', text: 'too many' },
        { id: 'C', text: 'a few' },
        { id: 'D', text: 'many' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 3: Quantifiers (too much vs too many)',
      ruleCategory: 'Excess with Uncountable Nouns',
      explanationEn: 'Salt is uncountable. We use "too much" for an excessive quantity of an uncountable noun.',
      explanationAr: 'الملح غير معدود، لذا نستخدم معه "too much" للكثرة المفرطة.'
    },
    {
      id: 917,
      section: 'grammar',
      questionNumber: 17,
      prompt: 'Can you please hand me a ______ fresh strawberries to decorate the cake?',
      options: [
        { id: 'A', text: 'few' },
        { id: 'B', text: 'little' },
        { id: 'C', text: 'much' },
        { id: 'D', text: 'any' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 3: Quantifiers (a few vs a little)',
      ruleCategory: 'Countable Plural Quantifiers',
      explanationEn: '"Strawberries" is a countable plural noun. We use "a few" with countable nouns.',
      explanationAr: 'الفراولة (strawberries) اسم جمع معدود، فنستخدم معها "a few".'
    },
    {
      id: 918,
      section: 'grammar',
      questionNumber: 18,
      prompt: 'I decided ______ computer programming to develop automated farm software.',
      options: [
        { id: 'A', text: 'to learn' },
        { id: 'B', text: 'learning' },
        { id: 'C', text: 'learn' },
        { id: 'D', text: 'learned' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 3: Verb Patterns (decide + to-infinitive)',
      ruleCategory: 'Infinitive after Decide',
      explanationEn: 'The verb "decide" is followed by a to-infinitive: "decided to learn".',
      explanationAr: 'الفعل decide يتبعه المصدر مسبوقاً بـ to: decided to learn.'
    },
    {
      id: 919,
      section: 'grammar',
      questionNumber: 19,
      prompt: 'Software engineers enjoy ______ complex algorithms to solve agricultural problems.',
      options: [
        { id: 'A', text: 'designing' },
        { id: 'B', text: 'to design' },
        { id: 'C', text: 'design' },
        { id: 'D', text: 'designed' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 3: Verb Patterns (enjoy + gerund)',
      ruleCategory: 'Gerund after Enjoy',
      explanationEn: '"Enjoy" takes a gerund (-ing form): "enjoy designing".',
      explanationAr: 'الفعل enjoy يتبعه الفعل بصيغة ing: enjoy designing.'
    },
    {
      id: 920,
      section: 'grammar',
      questionNumber: 20,
      prompt: 'Where ______ you purchase those specialized agricultural soil sensors yesterday?',
      options: [
        { id: 'A', text: 'did' },
        { id: 'B', text: 'do' },
        { id: 'C', text: 'were' },
        { id: 'D', text: 'are' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 4: Past Simple Questions',
      ruleCategory: 'Past Auxiliary did',
      explanationEn: 'In past questions with action verb (purchase), use auxiliary "did": "Where did you purchase...?".',
      explanationAr: 'في السؤال عن الماضي البسيط بوجود فعل أساسي (purchase)، نستخدم did.'
    },
    {
      id: 921,
      section: 'grammar',
      questionNumber: 21,
      prompt: 'The technician ______ any defective sensors during his inspection yesterday afternoon.',
      options: [
        { id: 'A', text: "didn't find" },
        { id: 'B', text: "didn't found" },
        { id: 'C', text: 'not found' },
        { id: 'D', text: "wasn't find" }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 4: Past Simple Negatives with Irregular Verbs',
      ruleCategory: 'didn’t + base form',
      explanationEn: 'After "didn\'t", use the base form "find" (never found): "didn\'t find".',
      explanationAr: 'بعد didn\'t يعود الفعل لشكل المصدر المجرد: didn\'t find.'
    },
    {
      id: 922,
      section: 'grammar',
      questionNumber: 22,
      prompt: 'Solar-powered sensors are ______ than traditional manual soil probes.',
      options: [
        { id: 'A', text: 'more accurate' },
        { id: 'B', text: 'accurater' },
        { id: 'C', text: 'most accurate' },
        { id: 'D', text: 'as accurate' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Comparative Adjectives',
      ruleCategory: 'Multi-Syllable Comparatives (more + adj + than)',
      explanationEn: '"Accurate" is a multi-syllable adjective. We compare it using "more accurate than".',
      explanationAr: 'الصفة accurate متعددة المقاطع، فنقارن باستخدام: more accurate than.'
    },
    {
      id: 923,
      section: 'grammar',
      questionNumber: 23,
      prompt: 'This is the ______ technological breakthrough in Saudi smart farming this decade.',
      options: [
        { id: 'A', text: 'most significant' },
        { id: 'B', text: 'more significant' },
        { id: 'C', text: 'significantest' },
        { id: 'D', text: 'significant' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Superlative Adjectives',
      ruleCategory: 'Superlative with Long Adjectives',
      explanationEn: 'Significant is multi-syllable. Its superlative is "the most significant".',
      explanationAr: 'صيغة التفضيل العليا من significant هي: the most significant (الأكثر أهمية).'
    },
    {
      id: 924,
      section: 'grammar',
      questionNumber: 24,
      prompt: 'The cooperative ______ to test five new automated harvesters next season.',
      options: [
        { id: 'A', text: 'is going' },
        { id: 'B', text: 'are going' },
        { id: 'C', text: 'going' },
        { id: 'D', text: 'will to' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Future with be going to',
      ruleCategory: 'Singular Collective Future',
      explanationEn: 'Singular collective subject "The cooperative" takes [is + going to + verb]: "is going to test".',
      explanationAr: 'الفاعل مفرد، لذا تكون صيغة المستقبل: is going to test.'
    },

    // --- READING COMPREHENSION (Q25 - Q30) ---
    {
      id: 925,
      section: 'reading',
      questionNumber: 25,
      prompt: 'What crops and produce is the Al-Qassim region famous for according to the text?',
      options: [
        { id: 'A', text: 'Vast date palm orchards, wheat fields, and fresh produce' },
        { id: 'B', text: 'Tropical pineapples and coffee beans only' },
        { id: 'C', text: 'Underwater sea kelp farms' },
        { id: 'D', text: 'Cotton plantations in snow' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 4: Reading for Agricultural Facts',
      ruleCategory: 'Crop Identification in Text',
      explanationEn: 'Paragraph 1 notes: "renowned throughout the Kingdom for its vast date palm orchards, wheat fields, and fresh produce farms."',
      explanationAr: 'تشتهر منطقة القصيم بمزارع وبساتين النخيل الشاسعة، وحقول القمح، والخضروات الطازجة.',
      passageId: 'p9'
    },
    {
      id: 926,
      section: 'reading',
      questionNumber: 26,
      prompt: 'How do autonomous drones inspect date palms across the region?',
      options: [
        { id: 'A', text: 'By flying daily and taking multispectral photographs analyzed by AI' },
        { id: 'B', text: 'By carrying human workers up into the tree branches' },
        { id: 'C', text: 'By spraying heavy black paint over all the trees' },
        { id: 'D', text: 'By cutting down older trees immediately' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 4: Reading for Technical Procedures',
      ruleCategory: 'Procedure Comprehension',
      explanationEn: 'Paragraph 2 explains: "Autonomous drones fly over thousands of date palms daily, taking multispectral photographs. Sophisticated AI algorithms analyze the leaves..."',
      explanationAr: 'تطير الطائرات المسيّرة يومياً وتلتقط صوراً بأطياف متعددة تحللها خوارزميات الذكاء الاصطناعي بدقة.',
      passageId: 'p9'
    },
    {
      id: 927,
      section: 'reading',
      questionNumber: 27,
      prompt: 'What can the AI algorithms detect before the human eye is able to notice?',
      options: [
        { id: 'A', text: 'Early signs of pest infestations or water deficiency' },
        { id: 'B', text: 'The market price of gold' },
        { id: 'C', text: 'Underground oil reservoirs' },
        { id: 'D', text: 'Airplane flight schedules' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 4: Problem Detection in Reading',
      ruleCategory: 'Detail Identification in Text',
      explanationEn: 'The passage highlights: "detect early signs of pest infestations or water deficiency before the human eye can notice them."',
      explanationAr: 'تكتشف الخوارزميات العلامات المبكرة لسوسة النخيل والآفات الحشرية أو نقص مياه الري قبل أن يلاحظها الإنسان بالعين المجردة.',
      passageId: 'p9'
    },
    {
      id: 928,
      section: 'reading',
      questionNumber: 28,
      prompt: 'By what percentage did smart drip-irrigation sensors reduce total water consumption last year?',
      options: [
        { id: 'A', text: 'By thirty-five percent' },
        { id: 'B', text: 'By one hundred percent' },
        { id: 'C', text: 'By only five percent' },
        { id: 'D', text: 'Water consumption increased' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 4: Reading for Percentages & Statistics',
      ruleCategory: 'Numerical Facts in Reading',
      explanationEn: 'Paragraph 3 states: "smart drip-irrigation sensors cut total water consumption by thirty-five percent..."',
      explanationAr: 'خفضت حساسات الري الذكي استهلاك المياه بنسبة 35% مع زيادة إنتاج التمور.',
      passageId: 'p9'
    },
    {
      id: 929,
      section: 'reading',
      questionNumber: 29,
      prompt: 'What equipment are agricultural cooperatives going to introduce next season?',
      options: [
        { id: 'A', text: 'Solar-powered automated tractors to harvest dates efficiently' },
        { id: 'B', text: 'Traditional wooden shovels only' },
        { id: 'C', text: 'Coal-burning steam locomotives' },
        { id: 'D', text: 'Helicopter passenger tours' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Future Events & Intentions in Reading',
      ruleCategory: 'Future Plans Identification',
      explanationEn: 'Paragraph 4 states: "cooperatives are going to introduce solar-powered automated tractors to harvest dates efficiently."',
      explanationAr: 'تعتزم الجمعيات الزراعية إدخال جرارات مؤتمتة تعمل بالطاقة الشمسية لجني وحصاد التمور بكفاءة.',
      passageId: 'p9'
    },
    {
      id: 930,
      section: 'reading',
      questionNumber: 30,
      prompt: 'What is the main message conveyed by the author regarding technology in agriculture?',
      options: [
        { id: 'A', text: 'Modern AI and smart technologies conserve natural resources and enhance food security' },
        { id: 'B', text: 'Traditional farming without technology is always superior' },
        { id: 'C', text: 'Drones cause massive damage to palm trees' },
        { id: 'D', text: 'Farmers should abandon agricultural cultivation' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 4: Reading for Main Message & Gist',
      ruleCategory: 'Author Purpose Comprehension',
      explanationEn: 'The text demonstrates how AI, drones, and sensors protect crops, save water, and optimize agricultural productivity.',
      explanationAr: 'الرسالة الأساسية هي أن دمج الذكاء الاصطناعي والتقنيات الحديثة في الزراعة يحافظ على الموارد المائية ويعزز الإنتاجية والأمن الغذائي.',
      passageId: 'p9'
    }
  ]
};

// =========================================================================
// MODEL 10 (Model J): Comprehensive Mock Exam (High-Density Diagnostic)
// =========================================================================
export const modelJExam: ExamModel = {
  id: 'model-j',
  title: 'نموذج اختبار Evolve 2 - 10',
  subtitle: 'All Units 1 - 6 Balanced Standard Blueprint • Cambridge Evolve 2',
  university: 'نخبة كليات السنة التحضيرية والجامعات السعودية',
  term: 'Final Midterm Comprehensive Mock 10',
  courseCode: 'ELCE 1201 / Evolve 2',
  timeLimitMinutes: 50,
  totalQuestions: 30,
  listeningTracks: {
    t10: {
      id: 't10',
      title: 'Conversation at King Khalid International Airport in Riyadh',
      description: 'Audio dialogue: Traveler checks in for a domestic flight to Abha at King Khalid International Airport.',
      durationSeconds: 120,
      script:
        'Customer: Excuse me, officer. Which check-in counter is open for the domestic flight to Abha?\n\nOfficer: Good afternoon, sir. Counters 14 and 15 are currently handling luggage check-in for flight SV 1180 to Abha. It departs at 4:15 PM from Gate 7.\n\nCustomer: Thank you very much! Is there any delay due to the weather?\n\nOfficer: No delays at all, sir. The skies are clear and sunny in Abha today. Have a pleasant journey!'
    }
  },
  passages: {
    p10: {
      id: 'p10',
      title: 'The Rise of Electric Vehicles & Clean Energy in Saudi Arabia',
      content: [
        'Saudi Arabia is investing heavily in sustainable transportation and renewable energy. The Kingdom founded Ceer, its first national electric vehicle brand, and built a massive manufacturing complex in King Abdullah Economic City near Rabigh.',
        'Electric vehicles produce zero tailpipe emissions, making city air cleaner and reducing greenhouse gases. Additionally, charging an electric car at home or at public charging stations is significantly cheaper than buying traditional fuel.',
        'Last year, the Ministry of Energy installed over five hundred rapid-charging stations across major highways connecting Riyadh, Jeddah, Makkah, and Medina. Drivers can recharge 80% of their car battery in under twenty-five minutes.',
        'Next decade, Saudi Arabia is going to produce hundreds of thousands of electric vehicles annually, exporting them across the Middle East and worldwide.'
      ]
    }
  },
  questions: [
    // --- LISTENING (Q1 - Q5) ---
    {
      id: 1001,
      section: 'listening',
      questionNumber: 1,
      prompt: 'Which destination city is the passenger flying to?',
      options: [
        { id: 'A', text: 'Jeddah' },
        { id: 'B', text: 'Abha' },
        { id: 'C', text: 'Dammam' },
        { id: 'D', text: 'Tabuk' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 5: Listening for Destinations',
      ruleCategory: 'Destination Identification',
      explanationEn: 'The officer specifies: "domestic flight to Abha" and "flight SV 1180 to Abha".',
      explanationAr: 'ذكر الحوار نصاً أن الرحلة متجهة إلى مدينة أبها.',
      audioTrackId: 't10'
    },
    {
      id: 1002,
      section: 'listening',
      questionNumber: 2,
      prompt: 'Which check-in counters are handling this flight?',
      options: [
        { id: 'A', text: 'Counters 5 and 6' },
        { id: 'B', text: 'Counters 14 and 15' },
        { id: 'C', text: 'Counter 20 only' },
        { id: 'D', text: 'Counter 1' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 5: Listening for Numbers',
      ruleCategory: 'Listening for Counter Numbers',
      explanationEn: 'The officer says: "Counters 14 and 15 are currently handling luggage check-in."',
      explanationAr: 'أوضح الموظف أن كاونتر 14 و 15 هما المخصصان لإنهاء إجراءات الأمتعة.',
      audioTrackId: 't10'
    },
    {
      id: 1003,
      section: 'listening',
      questionNumber: 3,
      prompt: 'What time does flight SV 1180 depart?',
      options: [
        { id: 'A', text: '3:00 PM' },
        { id: 'B', text: '4:15 PM' },
        { id: 'C', text: '5:30 PM' },
        { id: 'D', text: '6:45 PM' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 5: Listening for Flight Times',
      ruleCategory: 'Time Expressions in Dialogue',
      explanationEn: 'The officer states: "It departs at 4:15 PM from Gate 7."',
      explanationAr: 'تقلع الرحلة في تمام الساعة 4:15 مساءً.',
      audioTrackId: 't10'
    },
    {
      id: 1004,
      section: 'listening',
      questionNumber: 4,
      prompt: 'From which departure gate does the flight board?',
      options: [
        { id: 'A', text: 'Gate 7' },
        { id: 'B', text: 'Gate 14' },
        { id: 'C', text: 'Gate 18' },
        { id: 'D', text: 'Gate 2' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Airport Gate Numbers',
      ruleCategory: 'Gate Identification',
      explanationEn: 'The audio explicitly notes: "from Gate 7".',
      explanationAr: 'بوابة المغادرة المحددة هي البوابة رقم 7.',
      audioTrackId: 't10'
    },
    {
      id: 1005,
      section: 'listening',
      questionNumber: 5,
      prompt: 'What is the weather like in Abha today according to the officer?',
      options: [
        { id: 'A', text: 'Clear and sunny with no flight delays' },
        { id: 'B', text: 'Heavy thunderstorms and snow' },
        { id: 'C', text: 'Dense dust storm' },
        { id: 'D', text: 'Severe flood warning' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Weather Information in Listening',
      ruleCategory: 'Weather Conditions Comprehension',
      explanationEn: 'The officer confirms: "The skies are clear and sunny in Abha today. Have a pleasant journey!"',
      explanationAr: 'أكد الموظف أن الأجواء صافية ومشمسة في أبها اليوم ولا يوجد أي تأخير.',
      audioTrackId: 't10'
    },

    // --- VOCABULARY (Q6 - Q13) ---
    {
      id: 1006,
      section: 'vocabulary',
      questionNumber: 6,
      prompt: 'Someone you work with closely in an office or department is your ______.',
      options: [
        { id: 'A', text: 'colleague' },
        { id: 'B', text: 'stranger' },
        { id: 'C', text: 'landlord' },
        { id: 'D', text: 'tourist' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 1: Workplace Relationships',
      ruleCategory: 'People Vocabulary',
      explanationEn: 'A "colleague" is an associate or coworker in a profession.',
      explanationAr: 'كلمة colleague تعني زميل العمل.'
    },
    {
      id: 1007,
      section: 'vocabulary',
      questionNumber: 7,
      prompt: 'My smartphone battery is completely flat; can I borrow your ______?',
      options: [
        { id: 'A', text: 'charger' },
        { id: 'B', text: 'receipt' },
        { id: 'C', text: 'mirror' },
        { id: 'D', text: 'wallet' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 1: Electronic Accessories',
      ruleCategory: 'Everyday Technology Items',
      explanationEn: 'A charger replenishes the electrical energy in a battery.',
      explanationAr: 'شاحن الهاتف (charger) لشحن البطارية المنتهية.'
    },
    {
      id: 1008,
      section: 'vocabulary',
      questionNumber: 8,
      prompt: 'After spending an hour lifting weights at the campus gym, Tariq felt sore in his arm ______.',
      options: [
        { id: 'A', text: 'muscles' },
        { id: 'B', text: 'chargers' },
        { id: 'C', text: 'receipts' },
        { id: 'D', text: 'passports' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 2: Health and Body',
      ruleCategory: 'Fitness & Anatomy',
      explanationEn: 'Lifting weights exercises your arm muscles.',
      explanationAr: 'عضلات الذراع (muscles) تشعر بالإجهاد بعد رفع الأثقال.'
    },
    {
      id: 1009,
      section: 'vocabulary',
      questionNumber: 9,
      prompt: 'This black espresso without any milk or sugar tastes very ______.',
      options: [
        { id: 'A', text: 'bitter' },
        { id: 'B', text: 'sour' },
        { id: 'C', text: 'salty' },
        { id: 'D', text: 'spicy' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 3: Taste Descriptors',
      ruleCategory: 'Food & Drink Flavors',
      explanationEn: 'Black unsweetened coffee has a bitter taste.',
      explanationAr: 'القهوة السوداء بدون سكر طعمها مرّ (bitter).'
    },
    {
      id: 1010,
      section: 'vocabulary',
      questionNumber: 10,
      prompt: 'The restaurant server brought the table ______ so we could pay for our family dinner.',
      options: [
        { id: 'A', text: 'bill' },
        { id: 'B', text: 'menu' },
        { id: 'C', text: 'napkin' },
        { id: 'D', text: 'fork' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 3: Restaurant Words',
      ruleCategory: 'Dining Vocabulary',
      explanationEn: 'The "bill" is the statement of money owed for food served.',
      explanationAr: 'فاتورة الحساب في المطعم تسمى bill.'
    },
    {
      id: 1011,
      section: 'vocabulary',
      questionNumber: 11,
      prompt: 'We walked down the supermarket aisle and placed items directly into our shopping ______.',
      options: [
        { id: 'A', text: 'cart' },
        { id: 'B', text: 'wallet' },
        { id: 'C', text: 'receipt' },
        { id: 'D', text: 'umbrella' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 6: Store Vocabulary',
      ruleCategory: 'Retail Equipment',
      explanationEn: 'A shopping cart holds items while browsing in a store.',
      explanationAr: 'عربة التسوق في السوبرماركت تسمى shopping cart.'
    },
    {
      id: 1012,
      section: 'vocabulary',
      questionNumber: 12,
      prompt: 'I kept my digital store ______ so I can exchange the jacket if it doesn’t fit.',
      options: [
        { id: 'A', text: 'receipt' },
        { id: 'B', text: 'mirror' },
        { id: 'C', text: 'wallet' },
        { id: 'D', text: 'cart' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 6: Purchase Documents',
      ruleCategory: 'Shopping Proof',
      explanationEn: 'A receipt acts as valid proof of purchase for exchanges.',
      explanationAr: 'إيصال الشراء (receipt) ضروري لاستبدال السلعة.'
    },
    {
      id: 1013,
      section: 'vocabulary',
      questionNumber: 13,
      prompt: 'Spending all your monthly savings on unneeded designer items is a ______ of money.',
      options: [
        { id: 'A', text: 'waste' },
        { id: 'B', text: 'sale' },
        { id: 'C', text: 'deal' },
        { id: 'D', text: 'borrow' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 6: Money Expressions',
      ruleCategory: 'Financial Collocations',
      explanationEn: 'A "waste of money" means spending funds foolishly.',
      explanationAr: 'عبارة waste of money تعني تبديداً وإهداراً للمال دون داعٍ.'
    },

    // --- GRAMMAR (Q14 - Q24) ---
    {
      id: 1014,
      section: 'grammar',
      questionNumber: 14,
      prompt: 'Fahad usually ______ his emails before attending his morning lecture.',
      options: [
        { id: 'A', text: 'checks' },
        { id: 'B', text: 'check' },
        { id: 'C', text: 'is checking' },
        { id: 'D', text: 'checked' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 1: Present Simple Habitual',
      ruleCategory: 'Present Simple Third-Person Singular',
      explanationEn: 'Singular subject Fahad with adverb "usually" takes -s: "checks".',
      explanationAr: 'مع الفاعل المفرد (Fahad) وظرف التكرار usually، يأخذ الفعل s في المضارع البسيط: checks.'
    },
    {
      id: 1015,
      section: 'grammar',
      questionNumber: 15,
      prompt: 'Listen! The university president ______ a speech in the main auditorium right now.',
      options: [
        { id: 'A', text: 'is giving' },
        { id: 'B', text: 'gives' },
        { id: 'C', text: 'gave' },
        { id: 'D', text: 'give' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 1: Present Continuous',
      ruleCategory: 'Actions Happening at the Present Moment',
      explanationEn: '"Listen!" and "right now" signal present continuous: [is + verb-ing]: "is giving".',
      explanationAr: 'علامتا "Listen!" و "right now" تدلان على حدوث الفعل في هذه اللحظة: is giving.'
    },
    {
      id: 1016,
      section: 'grammar',
      questionNumber: 16,
      prompt: 'There is ______ sugar in this juice; it is far too sweet to drink.',
      options: [
        { id: 'A', text: 'too much' },
        { id: 'B', text: 'too many' },
        { id: 'C', text: 'a few' },
        { id: 'D', text: 'many' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 3: Quantifiers (too much vs too many)',
      ruleCategory: 'Uncountable Excess',
      explanationEn: 'Sugar is uncountable. We use "too much" for an excessive quantity of an uncountable noun.',
      explanationAr: 'السكر اسم غير معدود، ونستخدم معه "too much" للتعبير عن الكثرة الزائدة عن الحد.'
    },
    {
      id: 1017,
      section: 'grammar',
      questionNumber: 17,
      prompt: 'Can you please give me a ______ more ice for my water?',
      options: [
        { id: 'A', text: 'little' },
        { id: 'B', text: 'few' },
        { id: 'C', text: 'many' },
        { id: 'D', text: 'several' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 3: Quantifiers (a little vs a few)',
      ruleCategory: 'Uncountable Small Quantities',
      explanationEn: 'Ice is uncountable. We say "a little more ice".',
      explanationAr: 'الثلج (ice) غير معدود، لذا نستخدم معه "a little" (قليلاً من الثلج).'
    },
    {
      id: 1018,
      section: 'grammar',
      questionNumber: 18,
      prompt: 'I decided ______ a specialized course in automotive electrical engineering.',
      options: [
        { id: 'A', text: 'to take' },
        { id: 'B', text: 'taking' },
        { id: 'C', text: 'take' },
        { id: 'D', text: 'took' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 3: Verb Patterns (decide + to-infinitive)',
      ruleCategory: 'Verbs Followed by Infinitive with to',
      explanationEn: '"Decide" is followed by a to-infinitive: "decided to take".',
      explanationAr: 'الفعل decide يتبعه المصدر مسبوقاً بـ to: decided to take.'
    },
    {
      id: 1019,
      section: 'grammar',
      questionNumber: 19,
      prompt: 'Many commuters prefer ______ the electric train instead of driving in heavy traffic.',
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
      id: 1020,
      section: 'grammar',
      questionNumber: 20,
      prompt: 'Where ______ you go for your family holiday last summer?',
      options: [
        { id: 'A', text: 'did' },
        { id: 'B', text: 'do' },
        { id: 'C', text: 'were' },
        { id: 'D', text: 'are' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 4: Past Simple Questions',
      ruleCategory: 'Auxiliary did in Past Questions',
      explanationEn: 'In past questions with action verb (go), use "did": "Where did you go...?".',
      explanationAr: 'في السؤال عن الماضي البسيط بوجود فعل أساسي (go)، نستخدم did.'
    },
    {
      id: 1021,
      section: 'grammar',
      questionNumber: 21,
      prompt: 'We ______ our tickets at the counter; we downloaded them on our phones instead.',
      options: [
        { id: 'A', text: "didn't print" },
        { id: 'B', text: "didn't printed" },
        { id: 'C', text: 'not print' },
        { id: 'D', text: "wasn't print" }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 4: Past Simple Negatives',
      ruleCategory: 'Past Simple Negation (didn’t + base)',
      explanationEn: 'In past simple negative, use "didn\'t" + base form of the verb: "didn\'t print".',
      explanationAr: 'نفي الماضي البسيط يكون بـ didn\'t متبوعة بالمصدر المجرد: didn\'t print.'
    },
    {
      id: 1022,
      section: 'grammar',
      questionNumber: 22,
      prompt: 'Traveling by high-speed train is ______ than driving an old car.',
      options: [
        { id: 'A', text: 'safer' },
        { id: 'B', text: 'more safe' },
        { id: 'C', text: 'safest' },
        { id: 'D', text: 'as safe' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Comparative Adjectives',
      ruleCategory: 'One-Syllable Comparatives ending in -e',
      explanationEn: 'Safe is one syllable ending in -e. Its comparative is "safer than".',
      explanationAr: 'الصفة safe تنتهي بـ e، وعند المقارنة نضيف لها r: safer than.'
    },
    {
      id: 1023,
      section: 'grammar',
      questionNumber: 23,
      prompt: 'This is the ______ modern electric charging station in the whole province.',
      options: [
        { id: 'A', text: 'most' },
        { id: 'B', text: 'more' },
        { id: 'C', text: 'much' },
        { id: 'D', text: 'as' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Superlative Adjectives',
      ruleCategory: 'the most + Long Adjective',
      explanationEn: 'Modern is a two-syllable adjective requiring "the most modern" in the superlative.',
      explanationAr: 'صيغة التفضيل العليا للصفة modern هي: the most modern (الأحدث).'
    },
    {
      id: 1024,
      section: 'grammar',
      questionNumber: 24,
      prompt: 'The national car factory ______ to export electric vehicles next year.',
      options: [
        { id: 'A', text: 'is going' },
        { id: 'B', text: 'are going' },
        { id: 'C', text: 'going' },
        { id: 'D', text: 'will to' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Future with be going to',
      ruleCategory: 'Singular Subject Future Plans',
      explanationEn: 'Singular subject "The national car factory" takes [is + going to + verb]: "is going to export".',
      explanationAr: 'الفاعل مفرد، لذا تكون صيغة المستقبل: is going to export.'
    },

    // --- READING COMPREHENSION (Q25 - Q30) ---
    {
      id: 1025,
      section: 'reading',
      questionNumber: 25,
      prompt: 'Where did Saudi Arabia establish the manufacturing complex for its first electric vehicle brand, Ceer?',
      options: [
        { id: 'A', text: 'In King Abdullah Economic City near Rabigh' },
        { id: 'B', text: 'In the center of the Empty Quarter' },
        { id: 'C', text: 'In a foreign country abroad' },
        { id: 'D', text: 'On an island in the ocean' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 4: Reading for Geographic Facts',
      ruleCategory: 'Location Identification in Text',
      explanationEn: 'Paragraph 1 states: "The Kingdom founded Ceer, its first national electric vehicle brand, and built a massive manufacturing complex in King Abdullah Economic City near Rabigh."',
      explanationAr: 'أُنشئ مجمع تصنيع سيارات سير (Ceer) الكهربائية في مدينة الملك عبدالله الاقتصادية بالقرب من رابغ.',
      passageId: 'p10'
    },
    {
      id: 1026,
      section: 'reading',
      questionNumber: 26,
      prompt: 'Why are electric vehicles beneficial for city air quality?',
      options: [
        { id: 'A', text: 'They produce zero tailpipe emissions and reduce greenhouse gases' },
        { id: 'B', text: 'They burn twice as much gasoline as trucks' },
        { id: 'C', text: 'They blow smoke into the atmosphere' },
        { id: 'D', text: 'They only run on coal fuel' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 4: Environmental Benefits in Reading',
      ruleCategory: 'Scientific Cause & Effect',
      explanationEn: 'Paragraph 2 highlights: "Electric vehicles produce zero tailpipe emissions, making city air cleaner and reducing greenhouse gases."',
      explanationAr: 'تتميز السيارات الكهربائية بانعدام الانبعاثات الكربونية والعوادم الملوثة، مما يجعل هواء المدن أنقى.',
      passageId: 'p10'
    },
    {
      id: 1027,
      section: 'reading',
      questionNumber: 27,
      prompt: 'How does the financial cost of charging an electric car compare to buying traditional fuel?',
      options: [
        { id: 'A', text: 'It is significantly cheaper than buying traditional fuel' },
        { id: 'B', text: 'It is ten times more expensive' },
        { id: 'C', text: 'It costs the exact same amount to the penny' },
        { id: 'D', text: 'It is completely unaffordable' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 6: Cost Comparisons in Reading',
      ruleCategory: 'Financial Contrast in Text',
      explanationEn: 'Paragraph 2 notes: "charging an electric car at home or at public charging stations is significantly cheaper than buying traditional fuel."',
      explanationAr: 'شحن السيارة الكهربائية في المنزل أو المحطات العامة أقل تكلفة بكثير من شراء الوقود التقليدي.',
      passageId: 'p10'
    },
    {
      id: 1028,
      section: 'reading',
      questionNumber: 28,
      prompt: 'How quickly can motorists recharge 80% of their car battery using rapid-charging stations?',
      options: [
        { id: 'A', text: 'In under twenty-five minutes' },
        { id: 'B', text: 'In six hours' },
        { id: 'C', text: 'In three full days' },
        { id: 'D', text: 'In forty-eight hours' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 4: Reading for Numerical Facts',
      ruleCategory: 'Scanning for Time Durations',
      explanationEn: 'Paragraph 3 states: "Drivers can recharge 80% of their car battery in under twenty-five minutes."',
      explanationAr: 'تتيح محطات الشحن السريع شحن 80% من بطارية السيارة في أقل من خمس وعشرين دقيقة.',
      passageId: 'p10'
    },
    {
      id: 1029,
      section: 'reading',
      questionNumber: 29,
      prompt: 'What major export goal does Saudi Arabia plan to accomplish next decade?',
      options: [
        { id: 'A', text: 'Produce hundreds of thousands of EVs annually and export them worldwide' },
        { id: 'B', text: 'Stop all electric car development' },
        { id: 'C', text: 'Import only foreign gasoline cars' },
        { id: 'D', text: 'Close all public charging facilities' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Future Goals in Reading',
      ruleCategory: 'Future Milestone Comprehension',
      explanationEn: 'Paragraph 4 states: "Saudi Arabia is going to produce hundreds of thousands of electric vehicles annually, exporting them across the Middle East and worldwide."',
      explanationAr: 'تستهدف المملكة إنتاج مئات الآلاف من السيارات الكهربائية سنوياً وتصديرها للشرق الأوسط ومختلف دول العالم.',
      passageId: 'p10'
    },
    {
      id: 1030,
      section: 'reading',
      questionNumber: 30,
      prompt: 'The word "sustainable" in paragraph 1 refers to practices that ______.',
      options: [
        { id: 'A', text: 'Protect natural resources and the environment for future generations' },
        { id: 'B', text: 'Consume all resources as quickly as possible' },
        { id: 'C', text: 'Are extremely polluting and noisy' },
        { id: 'D', text: 'Cost the maximum amount of money possible' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 4: Vocabulary in Context',
      ruleCategory: 'Vocabulary Meaning in Passage',
      explanationEn: '"Sustainable" refers to conserving natural resources and preventing environmental degradation for long-term ecological balance.',
      explanationAr: 'الاستدامة (sustainable) تعني المحافظة على الموارد والبيئة دون استنزافها للأجيال القادمة.',
      passageId: 'p10'
    }
  ]
};
