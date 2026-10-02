import { ExamModel } from '../types';

export const modelAExam: ExamModel = {
  id: 'model-a',
  title: 'نموذج اختبار Evolve 2 - 1',
  subtitle: 'Official Saudi Universities Midterm Blueprint (ELCE 1201 / Evolve 2)',
  university: 'UMM AL QURA UNIVERSITY',
  courseCode: 'English for General Purposes - EMI Colleges ELCE 1201',
  term: 'First Semester Midterm Examination (Qunfidah & Main Campus)',
  totalQuestions: 30,
  timeLimitMinutes: 50,
  listeningTracks: {
    'track-library': {
      id: 'track-library',
      title: 'University Learning Resource Center & Library',
      description: 'Audio recording: Student Rayan talks to the university librarian Ms. Huda about borrowing digital equipment and campus services.',
      durationSeconds: 120,
      script:
        'Librarian: Good morning! Welcome to the University Learning Center. How can I help you today?\n\nRayan: Good morning, Ms. Huda. I have a major presentation in my English class this afternoon, and my personal laptop battery died. Can students borrow laptops here?\n\nLibrarian: Yes, of course! You can borrow a laptop for up to four hours with your active student ID card. Just make sure to return it to the front desk before 5:00 PM.\n\nRayan: That is wonderful! Does the laptop have Microsoft PowerPoint and access to the university Wi-Fi network?\n\nLibrarian: Yes, all software is pre-installed. The campus Wi-Fi network is "Student_Connect", and your username is your university ID number.\n\nRayan: Perfect. Also, where can I print five copies of my research summary?\n\nLibrarian: The student printers are located on the second floor, next to Study Room 204. You can use your university smart card to pay for printing. It costs 50 halalas per page.\n\nRayan: Thank you so much for your assistance, Ms. Huda!\n\nLibrarian: You are very welcome, Rayan. Good luck with your presentation!'
    }
  },
  passages: {
    'passage-internet': {
      id: 'passage-internet',
      title: 'Is the Internet bad for us?',
      content: [
        'Abdullah: Yes, I think the internet is bad for us. We spend too much time online these days. For example, did you know that, on average, people are on their phones for 3 hours and 15 minutes everyday? That\'s 50 days a year! And young people use their phones even more. We need to stop it.',
        'Nadia: Stop it? How? Sorry, but I do not agree. You can\'t stop people from using their laptops and smartphones. And anyway, the internet isn\'t bad, it\'s a new and exciting and cheap!) way of communicating. For instance, thanks to the internet, I can talk to my sister\'s family on the phone every day. They live in Canada.',
        'Mariam: I agree with Abdullah. I believe we have a big problem. My son uses computer to do his schoolwork and then, when he has free time, he chats with friends online. He looks at a screen all day! I do not know if he has any real friends. It\'s sad.'
      ],
      speakers: [
        {
          speaker: 'Abdullah',
          text: 'Believes the internet is bad for us; notes average phone usage is 3 hours and 15 minutes daily (50 days a year).'
        },
        {
          speaker: 'Nadia',
          text: 'Disagrees; considers the internet an exciting and cheap way to communicate with her family abroad in Canada.'
        },
        {
          speaker: 'Mariam',
          text: 'Agrees with Abdullah; worried that her son spends all day staring at screens doing homework and chatting with online friends.'
        }
      ]
    }
  },
  questions: [
    // --- SECTION 1: LISTENING (Q1 - Q5) ---
    {
      id: 1,
      section: 'listening',
      questionNumber: 1,
      prompt: 'Why does Rayan need to borrow a laptop from the library?',
      options: [
        { id: 'A', text: 'His personal laptop battery died' },
        { id: 'B', text: 'He forgot his computer at home' },
        { id: 'C', text: 'He wants to play video games' },
        { id: 'D', text: 'His laptop screen is broken' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 1: Listening for Main Idea',
      ruleCategory: 'Listening for Key Details',
      explanationEn: 'Rayan explicitly tells the librarian: "my personal laptop battery died."',
      explanationAr: 'ذكر ريان بوضوح للمسؤولة أن بطارية حاسوبه الشخصي قد نفدت: "my personal laptop battery died".',
      audioTrackId: 'track-library'
    },
    {
      id: 2,
      section: 'listening',
      questionNumber: 2,
      prompt: 'How long are students allowed to borrow a laptop?',
      options: [
        { id: 'A', text: 'For up to two hours' },
        { id: 'B', text: 'For up to four hours' },
        { id: 'C', text: 'For twenty-four hours' },
        { id: 'D', text: 'For one week' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 1: Listening for Numbers & Durations',
      ruleCategory: 'Listening for Specific Information',
      explanationEn: 'The librarian confirms: "You can borrow a laptop for up to four hours with your active student ID card."',
      explanationAr: 'أكدت أمينة المكتبة أنه يمكن استعارة اللابتوب لمدة تصل إلى أربع ساعات (for up to four hours).',
      audioTrackId: 'track-library'
    },
    {
      id: 3,
      section: 'listening',
      questionNumber: 3,
      prompt: 'What time must Rayan return the laptop to the front desk?',
      options: [
        { id: 'A', text: 'Before 2:00 PM' },
        { id: 'B', text: 'Before 5:00 PM' },
        { id: 'C', text: 'Before 7:00 PM' },
        { id: 'D', text: 'At midnight' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 1: Listening for Times',
      ruleCategory: 'Listening for Time Constraints',
      explanationEn: 'The librarian says: "Just make sure to return it to the front desk before 5:00 PM."',
      explanationAr: 'طلبت منه إعادة اللابتوب لمكتب الاستقبال قبل الساعة الخامسة مساءً (before 5:00 PM).',
      audioTrackId: 'track-library'
    },
    {
      id: 4,
      section: 'listening',
      questionNumber: 4,
      prompt: 'Where are the student printers located in the building?',
      options: [
        { id: 'A', text: 'In the ground floor cafeteria' },
        { id: 'B', text: 'On the second floor, next to Study Room 204' },
        { id: 'C', text: 'Inside the dean’s office' },
        { id: 'D', text: 'Outside in the campus courtyard' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 2: Places & Directions',
      ruleCategory: 'Listening for Location & Directions',
      explanationEn: 'The librarian states: "The student printers are located on the second floor, next to Study Room 204."',
      explanationAr: 'أوضحت أن الطابعات تقع في الدور الثاني بجوار غرفة الدراسة 204 (on the second floor, next to Study Room 204).',
      audioTrackId: 'track-library'
    },
    {
      id: 5,
      section: 'listening',
      questionNumber: 5,
      prompt: 'What is the username needed to connect to the campus Wi-Fi?',
      options: [
        { id: 'A', text: 'The student’s personal email' },
        { id: 'B', text: 'The student’s mobile phone number' },
        { id: 'C', text: 'The student’s university ID number' },
        { id: 'D', text: 'The course code ELCE 1201' }
      ],
      correctAnswer: 'C',
      unitReference: 'Evolve 2 - Unit 1: Technology at School',
      ruleCategory: 'Listening for Credentials & Facts',
      explanationEn: 'The librarian explains: "your username is your university ID number."',
      explanationAr: 'قالت إن اسم المستخدم هو الرقم الجامعي للطالب (your university ID number).',
      audioTrackId: 'track-library'
    },

    // --- SECTION 2: VOCABULARY (Q6 - Q13) ---
    {
      id: 6,
      section: 'vocabulary',
      questionNumber: 6,
      prompt: 'The person who lives near my home is called __________.',
      options: [
        { id: 'A', text: 'classmate' },
        { id: 'B', text: 'roommate' },
        { id: 'C', text: 'neighbor' },
        { id: 'D', text: 'boss' }
      ],
      correctAnswer: 'C',
      unitReference: 'Evolve 2 - Unit 1: Making connections',
      ruleCategory: 'People & Relationships Vocabulary',
      explanationEn: 'A "neighbor" is someone who lives next door or near your home. A classmate studies in your class, a roommate shares your room, and a boss is your work manager.',
      explanationAr: 'الـ "neighbor" (الجار) هو الشخص الذي يسكن بالقرب من منزلك. بينما classmate زميل دراسة، roommate شريك غرفة، و boss مدير في العمل.'
    },
    {
      id: 7,
      section: 'vocabulary',
      questionNumber: 7,
      prompt: "It's raining outside. I need to take a/n __________ with me.",
      options: [
        { id: 'A', text: 'mirror' },
        { id: 'B', text: 'receipt' },
        { id: 'C', text: 'umbrella' },
        { id: 'D', text: 'lotion' }
      ],
      correctAnswer: 'C',
      unitReference: 'Evolve 2 - Unit 1: Everyday items',
      ruleCategory: 'Personal Items & Weather',
      explanationEn: 'An "umbrella" is an object used to protect oneself from rain. A mirror reflects images, a receipt shows proof of purchase, and lotion is skin cream.',
      explanationAr: 'الـ "umbrella" (المظلة) هي الأداة المستخدمة للحماية من المطر. Mirror مرآة، receipt إيصال شراء، و lotion لوشن للجلد.'
    },
    {
      id: 8,
      section: 'vocabulary',
      questionNumber: 8,
      prompt: '"Long time, no see!" is a/an __________.',
      options: [
        { id: 'A', text: 'greeting used in the morning' },
        { id: 'B', text: 'greeting for someone you know' },
        { id: 'C', text: 'greeting for first meeting' },
        { id: 'D', text: 'greeting to say goodbye' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 1: Functional Language (Greetings)',
      ruleCategory: 'Conversational English',
      explanationEn: '"Long time, no see!" is an informal greeting used when you meet someone you already know after a long period of not seeing each other.',
      explanationAr: 'عبارة "Long time, no see!" (يا هلا، من زمان عنك!) هي تحية تقال لشخص تعرفه مسبقاً ولم تره منذ فترة طويلة.'
    },
    {
      id: 9,
      section: 'vocabulary',
      questionNumber: 9,
      prompt: 'What is a polite way of asking for something in English?',
      options: [
        { id: 'A', text: 'I want...' },
        { id: 'B', text: 'I would like...' },
        { id: 'C', text: 'Give me...' },
        { id: 'D', text: 'I demand you...' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 3: Functional Language (Polite Requests)',
      ruleCategory: 'Polite Requests & Offers',
      explanationEn: '"I would like..." (or "I\'d like...") is the standard polite formulation in English when ordering food or requesting something politely.',
      explanationAr: '"I would like..." (أود أو أرغب بـ...) هي الطريقة المهذبة والرسمية للطلب باللغة الإنجليزية.'
    },
    {
      id: 10,
      section: 'vocabulary',
      questionNumber: 10,
      prompt: 'Choose the word that is different from the other three.',
      options: [
        { id: 'A', text: 'Wi-Fi' },
        { id: 'B', text: 'textbook' },
        { id: 'C', text: 'mouse' },
        { id: 'D', text: 'keyboard' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 1 & 2: Technology vs Study Items',
      ruleCategory: 'Odd Word Out / Classification',
      explanationEn: 'Wi-Fi, mouse, and keyboard are all computer and electronic technology terms. "Textbook" is a physical printed book used for studying.',
      explanationAr: 'الكلمات (Wi-Fi، mouse، keyboard) كلها مصطلحات تقنية للكمبيوتر، بينما "textbook" كتاب ورقي دراسي.'
    },
    {
      id: 11,
      section: 'vocabulary',
      questionNumber: 11,
      prompt: 'A snack is defined as a __________.',
      options: [
        { id: 'A', text: 'dinner and lunch' },
        { id: 'B', text: 'big meal at night' },
        { id: 'C', text: 'small amount of food eaten between meals' },
        { id: 'D', text: 'heavy breakfast' }
      ],
      correctAnswer: 'C',
      unitReference: "Evolve 2 - Unit 3: Let's eat!",
      ruleCategory: 'Food & Meals Definitions',
      explanationEn: 'By definition in English, a "snack" is a small portion of food eaten between regular main meals.',
      explanationAr: 'الـ "snack" (السناك / الوجبة الخفيفة) وجبة طعام صغيرة تؤكل بين الوجبات الرئيسية.'
    },
    {
      id: 12,
      section: 'vocabulary',
      questionNumber: 12,
      prompt: 'I need to buy a wireless __________ for my laptop so I can click easily.',
      options: [
        { id: 'A', text: 'mirror' },
        { id: 'B', text: 'screen' },
        { id: 'C', text: 'battery' },
        { id: 'D', text: 'mouse' }
      ],
      correctAnswer: 'D',
      unitReference: 'Evolve 2 - Unit 1: Tech accessories',
      ruleCategory: 'Computer Accessories',
      explanationEn: 'A "wireless mouse" is a common computer accessory for navigation without a cord.',
      explanationAr: 'كلمة "wireless mouse" (فأرة لاسلكية) هي الإكسسوار الشائع المخصص للاستخدام مع اللابتوب بدون أسلاك.'
    },
    {
      id: 13,
      section: 'vocabulary',
      questionNumber: 13,
      prompt: 'Your internet __________ is terrible right now. Your video is freezing.',
      options: [
        { id: 'A', text: 'screen' },
        { id: 'B', text: 'connection' },
        { id: 'C', text: 'laptop' },
        { id: 'D', text: 'volume' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 1: Internet & Calling Expressions',
      ruleCategory: 'Online Communication Vocabulary',
      explanationEn: 'In online calls and chats, if the video or audio cuts out due to weak internet, we say "Your connection is terrible".',
      explanationAr: 'في المكالمات عبر الإنترنت، عند تقطع الصوت أو ضعف شبكة الإنترنت يُقال: "Your connection is terrible" (اتصالك سيء للغاية).'
    },

    // --- SECTION 3: GRAMMAR (Q14 - Q24) ---
    {
      id: 14,
      section: 'grammar',
      questionNumber: 14,
      prompt: 'Ali __________ football with his college friends every Friday.',
      options: [
        { id: 'A', text: 'play' },
        { id: 'B', text: 'plays' },
        { id: 'C', text: 'is play' },
        { id: 'D', text: 'playing' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 1: Present Simple with He/She/It',
      ruleCategory: 'Present Simple Third-Person -s',
      explanationEn: 'Ali is a third-person singular subject (he), so the verb in the present simple takes an -s: "plays".',
      explanationAr: 'علي فاعل مفرد غائب (he)، لذا يضاف للفعل s في المضارع البسيط: Ali plays football.'
    },
    {
      id: 15,
      section: 'grammar',
      questionNumber: 15,
      prompt: 'Look! The students __________ in the laboratory right now.',
      options: [
        { id: 'A', text: 'work' },
        { id: 'B', text: 'works' },
        { id: 'C', text: 'are working' },
        { id: 'D', text: 'is working' }
      ],
      correctAnswer: 'C',
      unitReference: 'Evolve 2 - Unit 1: Present Continuous',
      ruleCategory: 'Actions Happening Now (be + V-ing)',
      explanationEn: '"Look!" and "right now" indicate an action happening at the moment of speaking. For plural "The students", we use [are + verb-ing]: "are working".',
      explanationAr: 'كلمتا "Look!" و "right now" تدلان على المضارع المستمر، ومع الفاعل الجمع (The students) نستخدم: are working.'
    },
    {
      id: 16,
      section: 'grammar',
      questionNumber: 16,
      prompt: "Excuse me, whose water bottle is this? — It isn’t __________; it belongs to Judy.",
      options: [
        { id: 'A', text: 'my' },
        { id: 'B', text: 'mine' },
        { id: 'C', text: 'me' },
        { id: 'D', text: 'myself' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 1 (Lesson 1.2): Possessive Pronouns',
      ruleCategory: 'Possessive Pronouns (mine vs. my)',
      explanationEn: 'In Unit 1.2, possessive pronouns like "mine", "yours", and "hers" stand alone without a noun following them: "It isn\'t mine."',
      explanationAr: 'في الدرس 1.2 من الكتاب، تُستخدم ضمائر الملكية (mine, yours, hers) بمفردها عندما لا يأتي بعدها اسم: It isn’t mine (ليست ملكي).'
    },
    {
      id: 17,
      section: 'grammar',
      questionNumber: 17,
      prompt: 'Do you see those chairs over there? I like the red __________ in the corner.',
      options: [
        { id: 'A', text: 'one' },
        { id: 'B', text: 'ones' },
        { id: 'C', text: 'that' },
        { id: 'D', text: 'these' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 2 (Lesson 2.2): This/That one; These/Those ones',
      ruleCategory: 'Demonstratives with one/ones',
      explanationEn: 'In Unit 2.2, "one" replaces a singular noun (the red chair -> the red one).',
      explanationAr: 'في الدرس 2.2 من الكتاب، تحل كلمة "one" محل الاسم المفرد المذكور سابقاً: the red one (الكرسي الأحمر الفردي في الزاوية).'
    },
    {
      id: 18,
      section: 'grammar',
      questionNumber: 18,
      prompt: 'Where __________ you yesterday afternoon when the teacher called your name?',
      options: [
        { id: 'A', text: 'was' },
        { id: 'B', text: 'were' },
        { id: 'C', text: 'did' },
        { id: 'D', text: 'are' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 5 (Lesson 5.1): Past Simple of Be',
      ruleCategory: 'Subject-Verb Agreement with Be in Past',
      explanationEn: 'In Unit 5.1, the past simple of "be" with subject "you" is "were": "Where were you?".',
      explanationAr: 'في الدرس 5.1، ماضي فعل Be مع الضمير you هو were: Where were you yesterday?'
    },
    {
      id: 19,
      section: 'grammar',
      questionNumber: 19,
      prompt: 'Sami was sick yesterday, so he __________ to his English lecture.',
      options: [
        { id: 'A', text: 'not go' },
        { id: 'B', text: "didn't went" },
        { id: 'C', text: "didn't go" },
        { id: 'D', text: "wasn't go" }
      ],
      correctAnswer: 'C',
      unitReference: 'Evolve 2 - Unit 5 (Lesson 5.2): Simple Past Negatives',
      ruleCategory: 'Simple Past Negative Form (didn’t + base verb)',
      explanationEn: 'In Unit 5.2 Accuracy Check: do not use the past form after didn’t. Use didn’t + base verb: "didn\'t go".',
      explanationAr: 'في الدرس 5.2 من الكتاب (Accuracy Check): لا تستخدم التصريف الماضي بعد didn\'t بل المصدر المجرد: didn’t go.'
    },
    {
      id: 20,
      section: 'grammar',
      questionNumber: 20,
      prompt: 'Dr. Mariam Hassan was born in Egypt __________ 1989.',
      options: [
        { id: 'A', text: 'at' },
        { id: 'B', text: 'in' },
        { id: 'C', text: 'on' },
        { id: 'D', text: 'between' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 5 (Lesson 5.5): Past Time Expressions',
      ruleCategory: 'Time Expressions with Years (in + year)',
      explanationEn: 'In Unit 5.5, we use "in" with a single calendar year (in 1989), and "between" with two dates (between 1850 and 1930).',
      explanationAr: 'في الدرس 5.5 من الكتاب، يُستخدم حرف الجر "in" مع السنة الواحدة: in 1989، بينما between تأتي بين تاريخين.'
    },
    {
      id: 21,
      section: 'grammar',
      questionNumber: 21,
      prompt: 'What are you doing on Friday afternoon? — We __________ to the video games festival.',
      options: [
        { id: 'A', text: 'go' },
        { id: 'B', text: 'are going' },
        { id: 'C', text: 'went' },
        { id: 'D', text: 'goes' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 4 (Lesson 4.1): Present Continuous for Future Plans',
      ruleCategory: 'Future Arrangements & Plans',
      explanationEn: 'In Unit 4.1, we use the present continuous (am/is/are + verb-ing) for fixed future arrangements: "We are going to the festival on Friday."',
      explanationAr: 'في الدرس 4.1 من الكتاب، يُستخدم المضارع المستمر للتعبير عن الخطط والترتيبات المستقبلية المحددة: We are going on Friday.'
    },
    {
      id: 22,
      section: 'grammar',
      questionNumber: 22,
      prompt: 'My sister bought a bouquet of flowers for Mom, and Mom really loved __________.',
      options: [
        { id: 'A', text: 'it' },
        { id: 'B', text: 'them' },
        { id: 'C', text: 'her' },
        { id: 'D', text: 'its' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 4 (Lesson 4.2): Object Pronouns',
      ruleCategory: 'Object Pronoun Agreement (it vs them)',
      explanationEn: 'In Unit 4.2, "a bouquet of flowers" is a singular collective gift item, replaced by object pronoun "it". Also note the Accuracy Check: always use it/them after like/love.',
      explanationAr: 'في الدرس 4.2 من الكتاب، "a bouquet of flowers" باقة مفردة تعوض بضمير المفعول it، وقاعدة Accuracy Check تنص على وجوب وضع it بعد أفعال like/love.'
    },
    {
      id: 23,
      section: 'grammar',
      questionNumber: 23,
      prompt: 'When __________ your grandfather retire from his job as an engineer?',
      options: [
        { id: 'A', text: 'does' },
        { id: 'B', text: 'did' },
        { id: 'C', text: 'is' },
        { id: 'D', text: 'was' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 5 (Lesson 5.2): Simple Past Questions',
      ruleCategory: 'Information Questions in Simple Past (did + subject + base)',
      explanationEn: 'In Unit 5.2, past questions with regular action verbs like "retire" use the auxiliary "did": "When did he retire?".',
      explanationAr: 'في الدرس 5.2 من الكتاب، تُصاغ أسئلة الماضي مع الأفعال باستخدام did متبوعة بالفاعل ثم المصدر المجرد: When did he retire?'
    },
    {
      id: 24,
      section: 'grammar',
      questionNumber: 24,
      prompt: 'How often does Julia __________ housework during the week?',
      options: [
        { id: 'A', text: 'do' },
        { id: 'B', text: 'make' },
        { id: 'C', text: 'have' },
        { id: 'D', text: 'take' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 2 (Lesson 2.1): Expressions with do, have, and make',
      ruleCategory: 'Collocations (do housework / do laundry)',
      explanationEn: 'In Unit 2.1, the textbook teaches fixed collocations: we say "do housework", "do the laundry", and "do the dishes" (not make or have).',
      explanationAr: 'في الدرس 2.1 من الكتاب، متلازمات الأفعال: نستخدم دائماً فعل do مع الأعمال المنزلية: do housework, do laundry, do dishes.'
    },

    // --- SECTION 4: READING COMPREHENSION (Q25 - Q30) ---
    {
      id: 25,
      section: 'reading',
      questionNumber: 25,
      prompt: 'Mariam is __________ about her son’s screen time habits.',
      options: [
        { id: 'A', text: 'happy' },
        { id: 'B', text: 'worried' },
        { id: 'C', text: 'excited' },
        { id: 'D', text: 'bored' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 1: Reading comprehension (Character Attitudes)',
      ruleCategory: 'Inferring Emotion & Attitude',
      explanationEn: 'Mariam says: "I believe we have a big problem... He looks at a screen all day! It\'s sad." This clearly indicates she is worried.',
      explanationAr: 'في النص، تقول مريم: "لدينا مشكلة كبيرة... ينظر إلى الشاشة طوال اليوم... هذا محزن." هذا يدل مباشرة على أنها قلقة "worried".',
      passageId: 'passage-internet'
    },
    {
      id: 26,
      section: 'reading',
      questionNumber: 26,
      prompt: 'What is TRUE about Nadia according to the text?',
      options: [
        { id: 'A', text: 'She likes using the internet for communication' },
        { id: 'B', text: 'She completely agrees with Abdullah\'s opinion' },
        { id: 'C', text: 'She wants everyone to stop using laptops' },
        { id: 'D', text: 'She has never contacted her sister in Canada' }
      ],
      correctAnswer: 'A',
      unitReference: 'Evolve 2 - Unit 1: Reading comprehension (Evaluating True Statements)',
      ruleCategory: 'Reading for Detail',
      explanationEn: 'Nadia defends the internet saying it\'s an "exciting and cheap way of communicating" and uses it to talk to her sister\'s family every day.',
      explanationAr: 'نادية تدافع عن الإنترنت وتصفه بأنه وسيلة جديدة ورخيصة للتواصل وتتحدث مع عائلة أختها يومياً عبره (She likes using the internet).',
      passageId: 'passage-internet'
    },
    {
      id: 27,
      section: 'reading',
      questionNumber: 27,
      prompt: 'Choose the sentence that is factually CORRECT according to the text.',
      options: [
        { id: 'A', text: 'People spend only five minutes daily on their phones.' },
        { id: 'B', text: 'Abdullah believes the internet is not good for us.' },
        { id: 'C', text: 'Mariam says her son has too many real friends.' },
        { id: 'D', text: 'Nadia pays a lot of money to call Canada.' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 1: Reading comprehension',
      ruleCategory: 'Identifying Main Ideas in Texts',
      explanationEn: 'Abdullah explicitly states: "Yes, I think the internet is bad for us." Hence, option B is correct.',
      explanationAr: 'يبدأ النص بقول عبد الله: "I think the internet is bad for us"، وبذلك تكون الجملة B هي الجملة الصحيحة والمطابقة للنص.',
      passageId: 'passage-internet'
    },
    {
      id: 28,
      section: 'reading',
      questionNumber: 28,
      prompt: 'According to Abdullah, the average daily phone usage is __________.',
      options: [
        { id: 'A', text: 'less than one hour' },
        { id: 'B', text: 'more than three hours' },
        { id: 'C', text: 'exactly ten minutes' },
        { id: 'D', text: 'twenty-four hours' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 1: Reading comprehension (Numeric Information)',
      ruleCategory: 'Reading Numbers & Statistics',
      explanationEn: 'The passage explicitly states that people are on their phones for "3 hours and 15 minutes everyday", which is more than three hours.',
      explanationAr: 'يذكر النص أن الناس يقضون "3 hours and 15 minutes" يومياً، وهي أكثر من 3 ساعات (more than three hours).',
      passageId: 'passage-internet'
    },
    {
      id: 29,
      section: 'reading',
      questionNumber: 29,
      prompt: 'Where does Nadia’s sister’s family live?',
      options: [
        { id: 'A', text: 'In Saudi Arabia' },
        { id: 'B', text: 'In the UK' },
        { id: 'C', text: 'In Canada' },
        { id: 'D', text: 'In Australia' }
      ],
      correctAnswer: 'C',
      unitReference: 'Evolve 2 - Unit 1: Reading for Specific Detail',
      ruleCategory: 'Scanning for Proper Nouns',
      explanationEn: 'Nadia states: "I can talk to my sister\'s family on the phone every day. They live in Canada."',
      explanationAr: 'تذكر نادية بوضوح: "They live in Canada" (يعيشون في كندا).',
      passageId: 'passage-internet'
    },
    {
      id: 30,
      section: 'reading',
      questionNumber: 30,
      prompt: 'What is the main topic of the debate between Abdullah, Nadia, and Mariam?',
      options: [
        { id: 'A', text: 'The price of new smartphones in Canada' },
        { id: 'B', text: 'Whether the internet has a positive or negative impact on our lives' },
        { id: 'C', text: 'How to learn programming at university' },
        { id: 'D', text: 'The best online video games for children' }
      ],
      correctAnswer: 'B',
      unitReference: 'Evolve 2 - Unit 1: Reading for Overall Theme',
      ruleCategory: 'Gist & Main Idea Identification',
      explanationEn: 'The entire discussion revolves around the question "Is the Internet bad for us?", weighing positive communication against screen addiction.',
      explanationAr: 'يدور النقاش بالكامل حول أثر الإنترنت على حياتنا بين مؤيد لفوائده التواصلية ومحذر من إدمان الشاشات.',
      passageId: 'passage-internet'
    }
  ],
  writingTask: {
    id: 'writing-fayez',
    title: 'Academic Writing Task: Biography of Fayez Almalki',
    prompt: 'Following the process that you studied in this semester, organize the ideas below, then write a short main paragraph (60-80 words) about Fayez Almalki. Include ALL the following information below:',
    instructions: '1. Step 1: Arrange the 9 biographical facts in the correct chronological and logical sequence.\n2. Step 2: Write a cohesive paragraph combining these ideas using past tense, relative pronouns (who, which), and linking connectors.\n3. Keep your word count strictly between 60 and 80 words.',
    targetWordCount: { min: 60, max: 80 },
    bulletPoints: [
      { id: 1, text: 'Very famous comedy actor - many shows', correctOrder: 1 },
      { id: 2, text: 'Born - Taif - 1969', correctOrder: 2 },
      { id: 3, text: 'Started - acting - 1985', correctOrder: 3 },
      { id: 4, text: 'First - acting theater', correctOrder: 4 },
      { id: 5, text: 'Later - acting - TV shows', correctOrder: 5 },
      { id: 6, text: 'Menahi - about life of Saudi people', correctOrder: 6 },
      { id: 7, text: 'Acted in Tash Ma Tash', correctOrder: 7 },
      { id: 8, text: 'Made - own show', correctOrder: 8 },
      { id: 9, text: 'Stopped playing - 2016', correctOrder: 9 }
    ],
    sampleModelAnswer:
      'There are many famous actors around the world, and one of them who I like most is Fayez Almalki. He is a very famous comedy actor who made many famous shows. He was born in Taif in 1969. He started acting in 1985 in theater, but later he acted in TV shows. He acted in many famous TV shows like Menahi which was about the Saudi people\'s life. He also acted in Tash Ma Tash, and last he made his own show which stopped playing in 2016. Really, he is a great and talented man.',
    modelAnswerBreakdown: [
      {
        title: 'Topic Sentence (الجملة الافتتاحية)',
        explanation: 'Introduces the subject clearly: "There are many famous actors around the world, and one of them who I like most is Fayez Almalki."'
      },
      {
        title: 'Chronological Development (التسلسل الزمني)',
        explanation: 'Birth in Taif (1969) -> began acting in theater (1985) -> moved to TV shows.'
      },
      {
        title: 'Key Works & Relative Clauses (الأعمال الرئيسية وجمل الوصل)',
        explanation: 'Mentioned "Menahi" with relative clause "which was about the Saudi people\'s life", then "Tash Ma Tash", then his own show.'
      },
      {
        title: 'Concluding Sentence (الجملة الختامية)',
        explanation: 'Summarizes opinion: "Really, he is a great and talented man."'
      }
    ],
    scoringRubric: [
      { criterion: 'Task Achievement & Facts Inclusion', points: 3, description: 'All 9 facts about Fayez Almalki are included accurately.' },
      { criterion: 'Organization & Cohesion', points: 2, description: 'Clear chronological flow with connectors (later, also, which, and).' },
      { criterion: 'Grammar & Accuracy', points: 2, description: 'Accurate past simple tense (was born, started, acted) and relative clauses.' },
      { criterion: 'Word Count & Mechanics', points: 1, description: 'Length within 60-80 words, correct capitalization and punctuation.' }
    ]
  }
};
