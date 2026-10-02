import { ExamModel } from '../types';

export const modelBExam: ExamModel = {
  id: 'model-b',
  title: 'نموذج اختبار Evolve 2 - 2',
  subtitle: 'Skills & Language Midterm Assessment (Units 1 - 6)',
  university: 'Cambridge University Press / Saudi Universities Foundation Year',
  courseCode: 'Evolve 2 Special Edition (ELCE 1201)',
  term: 'Midterm Examination (Listening + Language Skills)',
  totalQuestions: 30,
  timeLimitMinutes: 50,
  listeningTracks: {
    'track-tomaso': {
      id: 'track-tomaso',
      title: "Tomaso's Desert Adventure Interview",
      description: 'Audio recording from Evolve 2: Radio host interviews Tomaso about his extraordinary desert expedition.',
      durationSeconds: 140,
      script:
        'Interviewer: Welcome to today\'s show! With me in the studio today is Tomaso, all the way from New York! Tomaso, you\'ve become quite a celebrity on social media. Why are so many people following your journey?\n\nTomaso: Well, hi! People know me because I made a very long bucket list of unusual things to accomplish next year. But the one challenge that has really caught everyone\'s attention is my desert walk.\n\nInterviewer: Tell us about that! Where are you going and what makes it so special?\n\nTomaso: I\'m planning to walk across a huge desert without shoes! Yes, completely barefoot!\n\nInterviewer: Barefoot across the hot desert sands?! That sounds extreme! What are you taking along with you?\n\nTomaso: I am taking three camels, a tent, and lots of water. And to avoid the scorching sun and burning sand, I am only going to walk at night, when the desert sand cools down completely.\n\nInterviewer: Smart strategy! And are you updating your followers as you travel?\n\nTomaso: Yes, I love using social media, but only to post about what I\'m going to do in my adventures rather than everyday personal life.\n\nInterviewer: Incredible! We wish you safe travels, Tomaso!'
    }
  },
  passages: {
    'passage-volunteering': {
      id: 'passage-volunteering',
      title: 'Volunteering! Why not? - Cristine',
      content: [
        'Why not consider doing something different this summer? You\'re not going to get rich financially doing this, but this experience will make you richer in many other ways.',
        'Volunteering in South America gives you the chance to travel around some truly amazing places or across 12 different countries without spending a fortune. I traveled through the jungle and over the mountains and only spent about $100 a month.',
        'It\'s difficult to say which place was the most interesting, but one of them that I remember very well was volunteering in Santa Cruz at a center that helps kids of all ages – from babies to young adults – to learn about Bolivian culture because the city has no cultural center. I helped the director, Gabriela, do the housework, serve lunch and give English lessons every day. We also went shopping every day to buy the cheap food on sale but there wasn\'t much. I loved it, but they need more volunteers to go and help them. Most of all, they need more dishes for the 91 kids, and more food to feed them all.',
        'I\'m going to go back in the spring. If you want an interesting vacation, and you don\'t want to spend a lot of money next summer, I really suggest volunteering! And why not go and help Gabriela? You\'ll find a welcoming place and fantastic kids!'
      ]
    }
  },
  questions: [
    // --- SECTION 1: LISTENING (Q1 - Q5) ---
    {
      id: 101,
      section: 'listening',
      questionNumber: 1,
      prompt: 'Where does Tomaso live?',
      options: [
        { id: 'A', text: 'Mexico' },
        { id: 'B', text: 'London' },
        { id: 'C', text: 'New York' },
        { id: 'D', text: 'Toronto' }
      ],
      correctAnswer: 'C',
      unitReference: 'Evolve 2 - Unit 5: Listening for Specific Details',
      ruleCategory: 'Listening for Factual Information',
      explanationEn: 'The interviewer introduces him in the audio: "With me in the studio today is Tomaso, all the way from New York!"',
      explanationAr: 'في التسجيل الصوتي، يرحب المذيع بتوماسو قائلاً: "all the way from New York"، مما يوضح أنه يعيش في نيويورك.',
      audioTrackId: 'track-tomaso'
    },
    {
      id: 102,
      section: 'listening',
      questionNumber: 2,
      prompt: 'Why is Tomaso well-known and followed on social media?',
      options: [
        { id: 'A', text: 'Because he is a famous movie actor.' },
        { id: 'B', text: 'Because he made a long bucket list of unusual things to do next year.' },
        { id: 'C', text: 'Because he sells shoes online.' },
        { id: 'D', text: 'Because he is a weather reporter.' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 5: Listening Comprehension',
      ruleCategory: 'Listening for Reasons (Why)',
      explanationEn: 'Tomaso explains: "People know me because I made a very long bucket list of unusual things to accomplish next year."',
      explanationAr: 'يوضح توماسو أن شهرته تعود لامتلاكه قائمة طويلة من الأشياء غير المعتادة التي ينوي فعلها في العام القادم.',
      audioTrackId: 'track-tomaso'
    },
    {
      id: 103,
      section: 'listening',
      questionNumber: 3,
      prompt: 'What special adventure is Tomaso going to undertake across the desert?',
      options: [
        { id: 'A', text: 'Drive a racing sports car' },
        { id: 'B', text: 'Fly an airplane alone' },
        { id: 'C', text: 'Walk across a huge desert without shoes (barefoot)' },
        { id: 'D', text: 'Build a desert highway' }
      ],
      correctAnswer: 'C',
      unitReference: 'Evolve 2 - Unit 5: Future Intentions in Listening',
      ruleCategory: 'Listening for Key Events',
      explanationEn: 'He states: "I\'m planning to walk across a huge desert without shoes! Yes, completely barefoot!"',
      explanationAr: 'ذكر توماسو أن التحدي الأبرز هو عبور الصحراء مشياً على الأقدام بدون حذاء (without shoes / barefoot).',
      audioTrackId: 'track-tomaso'
    },
    {
      id: 104,
      section: 'listening',
      questionNumber: 4,
      prompt: 'What equipment and companions is he taking with him on his walk?',
      options: [
        { id: 'A', text: 'Three horses and heavy winter boots' },
        { id: 'B', text: 'Three camels, a tent, and lots of water' },
        { id: 'C', text: 'Only a backpack and a smartphone' },
        { id: 'D', text: 'A bicycle and an umbrella' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 5: Packing & Travel Equipment',
      ruleCategory: 'Listening for Item Details',
      explanationEn: 'He explicitly notes: "I am taking three camels, a tent, and lots of water." He is not taking shoes.',
      explanationAr: 'قال بوضوح إنه يأخذ معه ثلاثة جمال وخيمة والكثير من الماء (three camels, a tent and lots of water).',
      audioTrackId: 'track-tomaso'
    },
    {
      id: 105,
      section: 'listening',
      questionNumber: 5,
      prompt: 'At what time of day does he plan to walk across the desert?',
      options: [
        { id: 'A', text: 'At midday under the hot sun' },
        { id: 'B', text: 'Only at night when the desert sand cools down' },
        { id: 'C', text: 'Early in the afternoon' },
        { id: 'D', text: 'During lunch hour' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 5: Times of Day',
      ruleCategory: 'Listening for Time Expressions',
      explanationEn: 'He explains: "to avoid the scorching sun and burning sand, I am only going to walk at night, when the desert sand cools down completely."',
      explanationAr: 'أوضح أنه سيمشي ليلاً فقط (at night) لتجنب حرارة الشمس ورمل الصحراء الحارق.',
      audioTrackId: 'track-tomaso'
    },

    // --- SECTION 2: VOCABULARY (Q6 - Q13) ---
    {
      id: 106,
      section: 'vocabulary',
      questionNumber: 6,
      prompt: 'Will __________ his old mountain bike to his best friend for $100.',
      options: [
        { id: 'A', text: 'borrowed' },
        { id: 'B', text: 'sold' },
        { id: 'C', text: 'wasted' },
        { id: 'D', text: 'lent' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 6: Buy now, pay later (Money Verbs)',
      ruleCategory: 'Verbs for Money (Sell / Buy / Borrow / Lend)',
      explanationEn: 'We say "sold something to someone for an amount of money". Will gave his bike and received $100.',
      explanationAr: 'الفعل "sold" (باع) هو الأنسب مع عبارة "for $100"، حيث باع ويل دراجته لصديقه مقابل 100 دولار.'
    },
    {
      id: 107,
      section: 'vocabulary',
      questionNumber: 7,
      prompt: "Adriana's mother gave her $10. Adriana __________ the $10 a week later.",
      options: [
        { id: 'A', text: 'paid back' },
        { id: 'B', text: 'wasted' },
        { id: 'C', text: 'borrowed' },
        { id: 'D', text: 'saved' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 6: Phrasal Verbs with Money',
      ruleCategory: 'Phrasal Verbs (Pay back)',
      explanationEn: 'To "pay back" means to return money that you borrowed from someone.',
      explanationAr: 'المصطلح "paid back" يعني أعاد المال المقترض (سدد الدين) بعد أسبوع.'
    },
    {
      id: 108,
      section: 'vocabulary',
      questionNumber: 8,
      prompt: 'I spent $300 on a single t-shirt! My brother said I __________ my money.',
      options: [
        { id: 'A', text: 'saved' },
        { id: 'B', text: 'wasted' },
        { id: 'C', text: 'lent' },
        { id: 'D', text: 'borrowed' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 6: Money & Value',
      ruleCategory: 'Money Expressions (Waste money)',
      explanationEn: 'Spending an excessive amount of money ($300) carelessly on a shirt is called "wasting money".',
      explanationAr: 'إنفاق 300 دولار على قميص واحد يُعتبر إهداراً للمال (wasted my money).'
    },
    {
      id: 109,
      section: 'vocabulary',
      questionNumber: 9,
      prompt: 'A helpful __________ answered all my questions when I visited the electronics department.',
      options: [
        { id: 'A', text: 'customer' },
        { id: 'B', text: 'salesperson' },
        { id: 'C', text: 'cashier' },
        { id: 'D', text: 'tourist' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 6: Shopping Roles',
      ruleCategory: 'Jobs in Retail',
      explanationEn: 'A "salesperson" (or sales assistant) assists customers with products and answers shopping questions.',
      explanationAr: 'الـ "salesperson" (البائع / موظف المبيعات) هو الشخص الذي يساعد الزبائن ويجيب عن استفساراتهم.'
    },
    {
      id: 110,
      section: 'vocabulary',
      questionNumber: 10,
      prompt: 'There is a very long line at the __________ today because many people are paying with cash.',
      options: [
        { id: 'A', text: 'shopping cart' },
        { id: 'B', text: 'shelf' },
        { id: 'C', text: 'checkout' },
        { id: 'D', text: 'parking lot' }
      ],
      correctAnswer: 'C',
      unitReference: 'Evolve 2 - Unit 6: Store Locations',
      ruleCategory: 'Shopping Places Vocabulary',
      explanationEn: 'The "checkout" is the counter or area in a store where you stand in line to pay for items.',
      explanationAr: 'الـ "checkout" (كاونتر الدفع) هو المكان الذي يقف فيه المتسوقون لدفع الحساب.'
    },
    {
      id: 111,
      section: 'vocabulary',
      questionNumber: 11,
      prompt: 'This dark coffee is extremely __________. Can you please pass me some sugar?',
      options: [
        { id: 'A', text: 'sour' },
        { id: 'B', text: 'spicy' },
        { id: 'C', text: 'bitter' },
        { id: 'D', text: 'raw' }
      ],
      correctAnswer: 'C',
      unitReference: "Evolve 2 - Unit 3: Let's eat! (Describing food tastes)",
      ruleCategory: 'Food Taste Adjectives',
      explanationEn: 'Black coffee without sugar has a sharp, "bitter" taste. Sugar sweetens bitter food.',
      explanationAr: 'القهوة المرة تسمى "bitter"، ولذا يُطلب السكر لتعديل طعمها.'
    },
    {
      id: 112,
      section: 'vocabulary',
      questionNumber: 12,
      prompt: 'The direct opposite of cooked vegetables is __________ vegetables.',
      options: [
        { id: 'A', text: 'fresh' },
        { id: 'B', text: 'raw' },
        { id: 'C', text: 'boiled' },
        { id: 'D', text: 'roasted' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 3: Cooking Adjectives & Opposites',
      ruleCategory: 'Cooking States (Antonyms)',
      explanationEn: '"Raw" means uncooked, the opposite of cooked.',
      explanationAr: 'عكس الطعام المطبوخ (cooked) هو الطعام النيء غير المطبوخ "raw".'
    },
    {
      id: 113,
      section: 'vocabulary',
      questionNumber: 13,
      prompt: 'Mom prepared a delicious dinner of __________ chicken with potatoes in the oven.',
      options: [
        { id: 'A', text: 'boiled' },
        { id: 'B', text: 'roasted' },
        { id: 'C', text: 'sour' },
        { id: 'D', text: 'raw' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 3: Methods of Cooking',
      ruleCategory: 'Cooking Methods in Ovens',
      explanationEn: 'Food cooked inside an oven with dry heat is "roasted".',
      explanationAr: 'الطهي في الفرن يُطلق عليه "roasted" (مشوي بالفرن).'
    },

    // --- SECTION 3: GRAMMAR (Q14 - Q24) ---
    {
      id: 114,
      section: 'grammar',
      questionNumber: 14,
      prompt: "Maria __________ her credit card to pay because she doesn't carry any cash.",
      options: [
        { id: 'A', text: 'is going to use' },
        { id: 'B', text: 'are going to use' },
        { id: 'C', text: 'going to use' },
        { id: 'D', text: 'uses to' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 5: Future with be going to',
      ruleCategory: 'Future Intentions (be going to + V)',
      explanationEn: 'For singular subject Maria, the structure is [is + going to + base verb]: "is going to use".',
      explanationAr: 'ماريا فاعل مفرد، وصيغة التعبير عن النية المستقبلية هي: is going to use.'
    },
    {
      id: 115,
      section: 'grammar',
      questionNumber: 15,
      prompt: "Our family car is very old, so we __________ a new SUV next month.",
      options: [
        { id: 'A', text: 'is going to buy' },
        { id: 'B', text: 'are going to buy' },
        { id: 'C', text: 'going to buy' },
        { id: 'D', text: 'bought' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 5: Future with be going to',
      ruleCategory: 'Future with Plural Subjects',
      explanationEn: 'The subject "we" is plural, requiring "are going to buy".',
      explanationAr: 'الفاعل "we" جمع، لذا يأخذ الفعل المساعد are فتصبح الصيغة: "are going to buy".'
    },
    {
      id: 116,
      section: 'grammar',
      questionNumber: 16,
      prompt: 'Is this blue backpack yours? — No, sorry, it isn’t mine. It belongs to __________.',
      options: [
        { id: 'A', text: 'she' },
        { id: 'B', text: 'her' },
        { id: 'C', text: 'hers' },
        { id: 'D', text: 'herself' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 1 (Lesson 1.2): Belong to + Object Pronoun',
      ruleCategory: 'Belong to + Object Pronoun (me, him, her, them)',
      explanationEn: 'In Unit 1.2: we say "It belongs to me / her / them" (preposition "to" takes an object pronoun).',
      explanationAr: 'في الدرس 1.2 من الكتاب: التعبير "belong to" يتبعه ضمير مفعول به: It belongs to me / her / them.'
    },
    {
      id: 117,
      section: 'grammar',
      questionNumber: 17,
      prompt: 'Do you see these textbooks on the desk? __________ ones are my favorite.',
      options: [
        { id: 'A', text: 'This' },
        { id: 'B', text: 'These' },
        { id: 'C', text: 'That' },
        { id: 'D', text: 'One' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 2 (Lesson 2.2): These / Those ones',
      ruleCategory: 'Demonstratives with Plural (These ones)',
      explanationEn: 'In Unit 2.2: with plural "ones" for things near to us, we use "These": "These ones are my favorite."',
      explanationAr: 'في الدرس 2.2 من الكتاب: نستخدم "These ones" للإشارة للأشياء القريبة في الجمع.'
    },
    {
      id: 118,
      section: 'grammar',
      questionNumber: 18,
      prompt: 'Look at Gomez! He __________ the tennis court because he is injured.',
      options: [
        { id: 'A', text: 'leaves' },
        { id: 'B', text: 'is leaving' },
        { id: 'C', text: 'left' },
        { id: 'D', text: 'leave' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 3 (Lesson 3.1): Present Continuous for actions right now',
      ruleCategory: 'Present Continuous for Actions Right Now',
      explanationEn: 'In Unit 3.1: we use the present continuous for actions happening at the moment of speaking: "Gomez is leaving the court."',
      explanationAr: 'في الدرس 3.1 من الكتاب: نستخدم المضارع المستمر للأحداث التي تقع في لحظة التحدث: Gomez is leaving the court.'
    },
    {
      id: 119,
      section: 'grammar',
      questionNumber: 19,
      prompt: 'Athletes usually __________ a lot in the morning before they exercise.',
      options: [
        { id: 'A', text: 'stretch' },
        { id: 'B', text: 'are stretching' },
        { id: 'C', text: 'stretches' },
        { id: 'D', text: 'stretching' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 3 (Lesson 3.2): Simple Present for Habits',
      ruleCategory: 'Simple Present vs Present Continuous (Habits with usually)',
      explanationEn: 'In Unit 3.2: actions that happen usually or all the time take the simple present with plural subject (Athletes stretch).',
      explanationAr: 'في الدرس 3.2 من الكتاب: الأفعال الروتينية مع كلمة usually تأخذ المضارع البسيط: Athletes stretch.'
    },
    {
      id: 120,
      section: 'grammar',
      questionNumber: 20,
      prompt: 'Are you doing anything tomorrow? — Yes, I __________ my brother for lunch.',
      options: [
        { id: 'A', text: 'meet' },
        { id: 'B', text: 'am meeting' },
        { id: 'C', text: 'met' },
        { id: 'D', text: 'meets' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 4 (Lesson 4.1): Present Continuous for Future Plans',
      ruleCategory: 'Present Continuous for Future Arrangements',
      explanationEn: 'In Unit 4.1: we use present continuous with a future time word for fixed arrangements: "I am meeting my brother tomorrow."',
      explanationAr: 'في الدرس 4.1 من الكتاب: نستخدم المضارع المستمر للتعبير عن موعد ولقاء مستقبلي محدد: I am meeting my brother tomorrow.'
    },
    {
      id: 121,
      section: 'grammar',
      questionNumber: 21,
      prompt: 'Which podcast __________ you listen to on your way to campus yesterday?',
      options: [
        { id: 'A', text: 'did' },
        { id: 'B', text: 'does' },
        { id: 'C', text: 'was' },
        { id: 'D', text: 'are' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 4: Past Simple Questions',
      ruleCategory: 'Auxiliary Verbs in Past Simple',
      explanationEn: 'For questions in the past simple with action verbs, we use "did" + subject + base verb: "Which podcast did you listen to...".',
      explanationAr: 'في السؤال عن الماضي بوجود فعل أساسي (listen)، نستخدم الفعل المساعد "did".'
    },
    {
      id: 122,
      section: 'grammar',
      questionNumber: 22,
      prompt: 'Silvia had a great time in Rio, but she __________ there for the entire holiday.',
      options: [
        { id: 'A', text: 'not stay' },
        { id: 'B', text: "didn't stay" },
        { id: 'C', text: "didn't stayed" },
        { id: 'D', text: "wasn't stay" }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 4: Past Simple Negatives',
      ruleCategory: 'Past Simple Negative Form (didn’t + base)',
      explanationEn: 'In past simple negative, we use "didn\'t" + base form of the verb: "didn\'t stay".',
      explanationAr: 'نفي الماضي البسيط يكون بـ "didn\'t" متبوعة بالمصدر: "didn\'t stay".'
    },
    {
      id: 123,
      section: 'grammar',
      questionNumber: 23,
      prompt: 'We visited the canyon, but we __________ any photographs because our camera battery died.',
      options: [
        { id: 'A', text: 'took' },
        { id: 'B', text: "didn't take" },
        { id: 'C', text: "didn't took" },
        { id: 'D', text: 'not take' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 4: Irregular Verbs in Past Simple',
      ruleCategory: 'Past Simple Negation with Irregular Verbs',
      explanationEn: 'After "didn\'t", the base form "take" must be used: "didn\'t take".',
      explanationAr: 'بعد أداة النفي "didn\'t" نستخدم الفعل المجرد في المصدر: "didn\'t take".'
    },
    {
      id: 124,
      section: 'grammar',
      questionNumber: 24,
      prompt: 'Where __________ your grandparents born?',
      options: [
        { id: 'A', text: 'was' },
        { id: 'B', text: 'were' },
        { id: 'C', text: 'did' },
        { id: 'D', text: 'are' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 4: Past of Be (was/were born)',
      ruleCategory: 'Plural Subject-Verb Agreement in Past',
      explanationEn: '"Grandparents" is a plural noun, so we use "were born" (Where were your grandparents born?).',
      explanationAr: 'الجدان (grandparents) جمع، لذا نستخدم "were born": Where were your grandparents born?'
    },

    // --- SECTION 4: READING COMPREHENSION (Q25 - Q30) ---
    {
      id: 125,
      section: 'reading',
      questionNumber: 25,
      prompt: 'Cristine volunteered in South America last summer.',
      options: [
        { id: 'A', text: 'True' },
        { id: 'B', text: 'False' },
        { id: 'C', text: "Doesn't Say" },
        { id: 'D', text: 'Incorrect' }
      ],
      correctAnswer: 'C',
      unitReference: 'Evolve 2 - Unit 4: Reading for Inference vs Facts',
      ruleCategory: 'True / False / Doesn’t Say Identification',
      explanationEn: 'The text suggests volunteering "this summer" and recounts her journey, but does not explicitly specify that it occurred "last summer". The key marks "Doesn\'t Say".',
      explanationAr: 'النص يروي تجربتها واقتراحها للتطوع، لكنه لم يحدد بالاسم ما إذا كان ذلك "الصيف الماضي" تحديداً (Doesn\'t Say).',
      passageId: 'passage-volunteering'
    },
    {
      id: 126,
      section: 'reading',
      questionNumber: 26,
      prompt: 'Volunteering allows people to travel across up to 12 different countries in South America.',
      options: [
        { id: 'A', text: 'True' },
        { id: 'B', text: 'False' },
        { id: 'C', text: "Doesn't Say" },
        { id: 'D', text: 'Not mentioned' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 4: Reading Comprehension',
      ruleCategory: 'Locating Explicit Details',
      explanationEn: 'The text states: "Volunteering in South America gives you the chance to travel around some truly amazing places or across 12 different countries..." Thus, True.',
      explanationAr: 'يذكر النص إمكانية وسفر المتطوعين عبر 12 دولة مختلفة في أمريكا الجنوبية، مما يجعله خياراً صحيحاً (True).',
      passageId: 'passage-volunteering'
    },
    {
      id: 127,
      section: 'reading',
      questionNumber: 27,
      prompt: 'When Cristine and Gabriela went shopping, they bought a lot of cheap food.',
      options: [
        { id: 'A', text: 'True' },
        { id: 'B', text: 'False' },
        { id: 'C', text: "Doesn't Say" },
        { id: 'D', text: 'Unknown' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 4: Reading Comprehension',
      ruleCategory: 'Evaluating Negative Detail Statements',
      explanationEn: 'Cristine writes: "We also went shopping every day to buy the cheap food on sale but there wasn\'t much... they need more food to feed them all." This statement is False.',
      explanationAr: 'كتبت كرستين: "there wasn\'t much" (لم يكن هناك الكثير من الطعام)، لذا الجملة التي تدعي شراء طعام كثير غير صحيحة (False).',
      passageId: 'passage-volunteering'
    },
    {
      id: 128,
      section: 'reading',
      questionNumber: 28,
      prompt: 'Cristine is planning to return to Santa Cruz next summer.',
      options: [
        { id: 'A', text: 'True' },
        { id: 'B', text: 'False' },
        { id: 'C', text: "Doesn't Say" },
        { id: 'D', text: 'Maybe' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 5: Future Time Expressions in Reading',
      ruleCategory: 'Distinguishing Seasons & Future Plans',
      explanationEn: 'The text says: "I\'m going to go back in the spring" (not summer). Therefore, the statement is False.',
      explanationAr: 'تقول كرستين: "I\'m going to go back in the spring" (سأعود في فصل الربيع وليس في الصيف)، لذا فالجملة خاطئة (False).',
      passageId: 'passage-volunteering'
    },
    {
      id: 129,
      section: 'reading',
      questionNumber: 29,
      prompt: 'How much money did Cristine spend per month during her travels?',
      options: [
        { id: 'A', text: 'About $1000 a month' },
        { id: 'B', text: 'About $100 a month' },
        { id: 'C', text: 'She spent no money at all' },
        { id: 'D', text: 'Over $500 a week' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 4: Reading Numbers & Money',
      ruleCategory: 'Reading Numerical Facts',
      explanationEn: 'Cristine explicitly writes: "I traveled through the jungle and over the mountains and only spent about $100 a month."',
      explanationAr: 'ذكرت صراحة أنها أنفقت حوالي 100 دولار فقط شهرياً (only spent about $100 a month).',
      passageId: 'passage-volunteering'
    },
    {
      id: 130,
      section: 'reading',
      questionNumber: 30,
      prompt: 'Why does the children’s cultural center in Santa Cruz need more volunteers and help?',
      options: [
        { id: 'A', text: 'To build a hotel in the mountains' },
        { id: 'B', text: 'Because they need more dishes for the 91 kids and more food to feed them all' },
        { id: 'C', text: 'Because Gabriela wants to travel abroad' },
        { id: 'D', text: 'Because all the children have graduated' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 4: Reading for Main Reason',
      ruleCategory: 'Comprehending Needs & Problems',
      explanationEn: 'The passage highlights: "Most of all, they need more dishes for the 91 kids, and more food to feed them all."',
      explanationAr: 'يوضح النص أن أكبر حاجة للمركز هي توفير المزيد من الأطباق للأطفال البالغ عددهم 91 طفلاً، وتوفير المزيد من الطعام.',
      passageId: 'passage-volunteering'
    }
  ],
  writingTask: {
    id: 'writing-vacation',
    title: 'Writing Task: A Memorable Vacation & Experience',
    prompt: 'Write a cohesive paragraph (60-80 words) describing an interesting vacation or volunteer trip you had. Mention where you went, what activities you did, and why it was memorable.',
    instructions: 'Use the past simple tense (went, visited, saw, helped), time sequencing connectors (first, then, after that, finally), and ensure your paragraph is between 60 and 80 words.',
    targetWordCount: { min: 60, max: 80 },
    bulletPoints: [
      { id: 1, text: 'Introduce the vacation destination and when you traveled', correctOrder: 1 },
      { id: 2, text: 'Mention who you went with and your initial feelings', correctOrder: 2 },
      { id: 3, text: 'Describe the main cultural, volunteer, or leisure activities', correctOrder: 3 },
      { id: 4, text: 'Explain the special food or people you encountered', correctOrder: 4 },
      { id: 5, text: 'Conclude with your recommendation and future plans', correctOrder: 5 }
    ],
    sampleModelAnswer:
      'Last summer, I had a memorable vacation in Abha with my family. We decided to explore the beautiful green mountains and traditional villages. First, we visited the historical Asir heritage village and tasted delicious local bread and honey. After that, we went cable car riding over the foggy valleys. The weather was cool and refreshing. It was truly an unforgettable journey, and I look forward to visiting the south again next year.',
    modelAnswerBreakdown: [
      {
        title: 'Clear Topic Sentence',
        explanation: 'Specifies the time, place, and companions: "Last summer, I had a memorable vacation in Abha with my family."'
      },
      {
        title: 'Sequencing Connectors',
        explanation: 'Employs "First", "After that", and "It was truly" to guide the narrative.'
      },
      {
        title: 'Vivid Vocabulary & Past Tense',
        explanation: 'Uses past verbs (decided, visited, tasted, went) and descriptive adjectives (memorable, beautiful, green, cool).'
      }
    ],
    scoringRubric: [
      { criterion: 'Topic Content & Relevance', points: 3, description: 'Directly addresses past travel/volunteer experience with relevant details.' },
      { criterion: 'Grammatical Accuracy', points: 2, description: 'Proper usage of past simple regular and irregular verbs.' },
      { criterion: 'Cohesion & Connectors', points: 2, description: 'Smooth flow with sequence words and clear paragraph structure.' },
      { criterion: 'Length & Punctuation', points: 1, description: 'Paragraph between 60-80 words with appropriate punctuation and capitalization.' }
    ]
  }
};
