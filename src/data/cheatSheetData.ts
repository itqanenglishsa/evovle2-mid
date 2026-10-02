export interface GrammarSummary {
  unit: string;
  titleEn: string;
  titleAr: string;
  ruleFormula: string;
  examples: string[];
  commonMistakes: string;
  examTipAr: string;
}

export interface VocabGroup {
  category: string;
  categoryAr: string;
  items: { word: string; arabic: string; example: string }[];
}

export const evolveGrammarSummaries: GrammarSummary[] = [
  {
    unit: 'Unit 1 (Lessons 1.1 & 1.2)',
    titleEn: 'Be & Possessives (Adjectives vs. Pronouns)',
    titleAr: 'فعل Be، صفات الملكية، وضمائر الملكية (Mine, Yours, His, Hers)',
    ruleFormula: 'Possessive Adjectives (+ Noun): my, your, his, her, its, our, their | Possessive Pronouns (alone): mine, yours, his, hers, ours, theirs',
    examples: [
      'Adjective + Noun: This is my umbrella. / That is his backpack.',
      'Pronoun (alone): That umbrella isn’t mine, it’s hers.',
      'Whose question: Whose bag is this? – It belongs to me. / It’s ours.',
      'Belong to: The water bottle belongs to my classmate.'
    ],
    commonMistakes: 'Don’t put a noun after "mine": "This is mine book" ❌ -> Say "This is my book" or "This book is mine" ✅. Don\'t confuse "her" (adjective) and "hers" (pronoun).',
    examTipAr: 'إذا جاء بعد الفراغ اسم مملوك (مثل bag أو phone) اختر صفة ملكية (my, his, her). أما إذا انتهت الجملة دون اسم بعدها فاختر ضمير ملكية (mine, hers, ours, theirs).'
  },
  {
    unit: 'Unit 2 (Lessons 2.1 & 2.2)',
    titleEn: 'Simple Present Habits & Demonstratives (This/That/These/Those)',
    titleAr: 'المضارع البسيط للروتين وأسماء الإشارة مع One / Ones',
    ruleFormula: 'Simple Present: He/She/It + Verb-s | Negative: doesn’t + Base Verb | Demonstratives: This/That one (Singular), These/Those ones (Plural)',
    examples: [
      'Routine: Julia sleeps six hours a night and does the laundry on Saturdays.',
      'Frequency: I usually do housework in the evening. (Frequency adverb comes before main verb).',
      'Demonstratives: This green one is my chair, and those ones are files.',
      'Collocations: do (the laundry, the dishes, housework) | have (a meeting, a snack, free time) | make (plans, the bed).'
    ],
    commonMistakes: 'Don\'t say "I do housework usually" ❌ -> Put usually before the verb: "I usually do housework" ✅. Don\'t say "make dishes" ❌ -> It\'s "do the dishes" ✅.',
    examTipAr: 'ظروف التكرار (usually, often, always, never) تأتي قبل الفعل الرئيسي. واحفظ متلازمات: do housework/dishes/laundry بينما make plans/bed.'
  },
  {
    unit: 'Unit 3 (Lessons 3.1 & 3.2)',
    titleEn: 'Present Continuous & Simple Present Contrast',
    titleAr: 'المضارع المستمر للأحداث الحالية ومقارنته بالمضارع البسيط',
    ruleFormula: 'Present Continuous: am/is/are + Verb-ing (Now / At the moment) | Simple Present: Base/Verb-s (Habit / Usually)',
    examples: [
      'Right now: Gomez is leaving the court. / The fans are making a lot of noise.',
      'Contrast: He comes from Brazil, but right now he is living in Spain.',
      'Routine vs. Now: Athletes stretch every morning, but right now Lex is jumping.',
      'Exercise verbs: climb, jump, lie down, lift, push, sit down, stand up, stretch, throw, turn.'
    ],
    commonMistakes: 'Don\'t omit "be": "I watching the game" ❌ -> Must be "I am watching the game" ✅. Don\'t say "He plays now" ❌ -> Say "He is playing now" ✅.',
    examTipAr: 'كلمات مثل right now, at the moment, look!, listen! تتطلب [am/is/are + Verb-ing]. بينما every day, usually, often تتطلب المضارع البسيط.'
  },
  {
    unit: 'Unit 4 (Lessons 4.1 & 4.2)',
    titleEn: 'Present Continuous for Future & Object Pronouns',
    titleAr: 'المضارع المستمر للمواعيد المستقبلية وضمائر المفعول به',
    ruleFormula: 'Future arrangement: am/is/are + Verb-ing + Future time (this weekend, tomorrow, on Friday) | Object pronouns: me, you, him, her, it, us, them',
    examples: [
      'Future plan: Comic Con is coming this weekend. / We are going to the festival on Friday.',
      'Future question: What are you doing tomorrow? – I am meeting my sister for dinner.',
      'Object pronoun: My mom loves cookbooks. I always buy them for her.',
      'After "like": Thank you, the bouquet of flowers is beautiful. I really like it! (Always use it/them after like).'
    ],
    commonMistakes: 'Don\'t say "I really like!" ❌ -> Always include object pronoun: "I really like it!" or "I really like them!" ✅.',
    examTipAr: 'يستخدم Present Continuous عند التخطيط لموعد محدد في المستقبل مع ذكر وقت (this weekend, on Friday). وتذكر أن ضمير المفعول يأتي بعد حروف الجر وبعد الفعل مثل (for her, see them).'
  },
  {
    unit: 'Unit 5 (Lessons 5.1 & 5.2)',
    titleEn: 'Simple Past: Regular, Irregular, Negatives & Questions',
    titleAr: 'الماضي البسيط: الأفعال المنتظمة والشاذة، والنفي والسؤال مع Did',
    ruleFormula: 'Affirmative: Verb-ed or Irregular | Negative: didn’t + Base Verb | Question: Did + Subject + Base Verb?',
    examples: [
      'Affirmative: I visited the ocean last year and ran in the marathon.',
      'Negative: He didn’t have seven children, he had six children.',
      'Question: When did he retire? – He retired in 1989.',
      'Past time expressions: between 1850 and 1930, in 2001, 130 years ago, two years later, after that.'
    ],
    commonMistakes: 'Don’t use past form after didn’t or did: "I didn’t studied" ❌ -> Say "I didn’t study" ✅. "Did you went?" ❌ -> Say "Did you go?" ✅.',
    examTipAr: 'القاعدة الجوهرية في Unit 5: بمجرد وجود Did أو Didn\'t في الجملة يعود الفعل مباشرة إلى المصدر المجرد بدون -ed أو تصريف ثانٍ!'
  }
];

export const evolveVocabCheatsheet: VocabGroup[] = [
  {
    category: 'Unit 1: Describing People & Everyday Things',
    categoryAr: 'الوحدة 1: وصف الأشخاص والأشياء اليومية',
    items: [
      { word: 'Classmate', arabic: 'زميل في الصف / الدراسة', example: 'Nadia is my classmate; we study English together.' },
      { word: 'Roommate', arabic: 'شريك الغرفة / السكن', example: 'My roommate and I share a small kitchen.' },
      { word: 'Neighbor', arabic: 'الجار في الحي', example: 'Salem is my neighbor in Al Ahmadi.' },
      { word: 'Boss', arabic: 'مدير العمل', example: 'Mr. Patel is the boss; his office is opposite.' },
      { word: 'Keychain', arabic: 'ميدالية مفاتيح', example: 'Keep your car keys on this keychain.' },
      { word: 'Hand lotion', arabic: 'مرطب لليدين', example: 'You cannot take a large bottle of hand lotion on the plane.' },
      { word: 'Umbrella', arabic: 'مظلة المطر', example: 'Take an umbrella; it’s raining outside.' },
      { word: 'Cash', arabic: 'نقود نقدية كاش', example: 'Do you have some cash or only credit cards?' }
    ]
  },
  {
    category: 'Unit 2: Work & Study Collocations',
    categoryAr: 'الوحدة 2: متلازمات العمل ومفردات مساحة الدراسة',
    items: [
      { word: 'Do the laundry', arabic: 'غسيل الملابس', example: 'I do the laundry every weekend.' },
      { word: 'Do the dishes', arabic: 'غسيل الأطباق والصحون', example: 'Who is going to do the dishes after dinner?' },
      { word: 'Do housework', arabic: 'الأعمال والواجبات المنزلية', example: 'She usually does housework on Saturdays.' },
      { word: 'Have a meeting', arabic: 'حضور اجتماع عمل', example: 'The manager has an important meeting at 9:00 AM.' },
      { word: 'Have a snack', arabic: 'تناول وجبة خفيفة', example: 'Let’s have a healthy snack between classes.' },
      { word: 'Make plans', arabic: 'وضع خطط وترتيبات', example: 'We make plans for our upcoming vacation.' },
      { word: 'Make the bed', arabic: 'ترتيب السرير', example: 'I always make the bed after I wake up.' },
      { word: 'Electrical outlet', arabic: 'مقبس كهربائي (فيش)', example: 'There is an electrical outlet between the seats.' }
    ]
  },
  {
    category: 'Unit 3: Sports & Exercise Actions',
    categoryAr: 'الوحدة 3: الرياضة ومصطلحات التمارين البدنية',
    items: [
      { word: 'Athlete', arabic: 'رياضي محترف / بطل', example: 'Lex is a star athlete with four Paralympic medals.' },
      { word: 'Court', arabic: 'ملعب (تنس، سلة)', example: 'The tennis players are walking onto the court.' },
      { word: 'Field', arabic: 'ملعب عشبي (كرة قدم)', example: 'The soccer players ran onto the grass field.' },
      { word: 'Fans', arabic: 'المشجعون / الجماهير', example: '45,000 Emirati fans are making a lot of noise.' },
      { word: 'Stretch', arabic: 'تمارين الإطالة وتمديد العضلات', example: 'Athletes stretch before running.' },
      { word: 'Climb', arabic: 'يتسلق الدرج أو الجبل', example: 'I climb the stairs every morning.' },
      { word: 'Lift weights', arabic: 'رفع الأثقال والحديد', example: 'They go to the gym to lift weights.' }
    ]
  },
  {
    category: 'Unit 4 & 5: Pop Culture, Gifts & Life Events',
    categoryAr: 'الوحدات 4 و 5: الثقافة، الهدايا ومحطات الحياة',
    items: [
      { word: 'Director', arabic: 'مخرج العمل الفني / المسرحي', example: 'The movie director answered questions at Comic Con.' },
      { word: 'Bouquet of flowers', arabic: 'باقة ورد / زهور', example: 'I gave my mother a bouquet of flowers.' },
      { word: 'Gift card', arabic: 'بطاقة إهداء / قسيمة شراء', example: 'A gift card allows them to choose what they want.' },
      { word: 'Graduate from college', arabic: 'التخرج من الكلية / الجامعة', example: 'Hessa graduated from college with honors.' },
      { word: 'Retire', arabic: 'التقاعد عن العمل', example: 'My grandfather retired after forty years of work.' },
      { word: 'Pass a test', arabic: 'اجتياز الاختبار والنجاح', example: 'Congratulations! You passed your driving test.' }
    ]
  },
  {
    category: 'Real-World Functional Expressions',
    categoryAr: 'العبارات الوظيفية الحوارية المطابقة للكتاب',
    items: [
      { word: 'Long time, no see!', arabic: 'يا هلا من زمان عنك! (تحية لمعارف سابقين)', example: 'Greeting someone you haven’t seen for a while.' },
      { word: 'Pleased to meet you.', arabic: 'سعيد بلقائك (تحية لأول لقاء رسمي)', example: 'Greeting someone for the very first time.' },
      { word: 'You are breaking up.', arabic: 'صوتك يتقطع بسبب الاتصال', example: 'Said during online calls when connection is weak.' },
      { word: 'Could you tell me...?', arabic: 'هل يمكنك إخباري...؟', example: 'Polite way to ask for information or directions.' },
      { word: 'Would you like to come?', arabic: 'هل تود الحضور؟ (دعوة)', example: 'Inviting someone to an event.' },
      { word: 'I’d love to!', arabic: 'يسعدني جداً ذلك! (قبول الدعوة)', example: 'Accepting an invitation enthusiastically.' },
      { word: 'Congratulations! Great job!', arabic: 'مبارك! عمل رائع! (تهنئة بخبر سار)', example: 'Responding to good news.' },
      { word: 'Never mind. Don’t worry about it.', arabic: 'لا بأس، لا تقلق (مواساة بخبر غير سار)', example: 'Sympathizing with someone facing difficulty.' }
    ]
  }
];
