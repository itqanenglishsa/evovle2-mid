import React, { useState, useEffect } from 'react';
import { allExamModels, getExamModelById } from './data/modelsList';
import { ExamModel, Question, ExamAttemptRecord } from './types';
import { Header } from './components/Header';
import { QuestionCard } from './components/QuestionCard';
import { ReadingPassageCard } from './components/ReadingPassageCard';
import { AudioPlayer } from './components/AudioPlayer';
import { ResultsModal } from './components/ResultsModal';
import { CheatSheetModal } from './components/CheatSheetModal';
import { SavedQuestionsModal, SavedQuestionItem } from './components/SavedQuestionsModal';
import { PerformanceDashboard } from './components/PerformanceDashboard';
import { PerformanceModal } from './components/PerformanceModal';
import { ItqanLogo } from './components/ItqanLogo';
import { 
  Sparkles, 
  Award,
  BarChart2
} from 'lucide-react';

export default function App() {
  const [selectedModelId, setSelectedModelId] = useState<string>('model-a');
  const [examMode, setExamMode] = useState<'exam' | 'practice'>('exam');
  
  const currentModel: ExamModel = getExamModelById(selectedModelId);

  // Answers & flags stored per model
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [flagged, setFlagged] = useState<Record<number, boolean>>({});
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState<number>(currentModel.timeLimitMinutes * 60);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [activeFilter, setActiveFilter] = useState<'all' | 'unanswered' | 'flagged' | 'incorrect'>('all');

  // Exam performance attempts history (persisted in localStorage)
  const [attempts, setAttempts] = useState<ExamAttemptRecord[]>(() => {
    try {
      const stored = localStorage.getItem('evolve2_exam_attempts');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Saved Questions Hub state (persisted in localStorage)
  const [savedQuestions, setSavedQuestions] = useState<SavedQuestionItem[]>(() => {
    try {
      const stored = localStorage.getItem('evolve2_saved_questions');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Modals
  const [isResultsOpen, setIsResultsOpen] = useState<boolean>(false);
  const [isCheatSheetOpen, setIsCheatSheetOpen] = useState<boolean>(false);
  const [isSavedQuestionsOpen, setIsSavedQuestionsOpen] = useState<boolean>(false);
  const [isPerformanceOpen, setIsPerformanceOpen] = useState<boolean>(false);

  // Sync attempts history to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('evolve2_exam_attempts', JSON.stringify(attempts));
    } catch {
      // Ignore storage errors
    }
  }, [attempts]);

  // Sync saved questions to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('evolve2_saved_questions', JSON.stringify(savedQuestions));
    } catch {
      // Ignore storage errors
    }
  }, [savedQuestions]);

  // Timer countdown
  useEffect(() => {
    if (examMode !== 'exam' || isSubmitted) return;

    const interval = setInterval(() => {
      setTimeRemainingSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [examMode, isSubmitted]);

  // Model change handler
  const handleSelectModel = (modelId: string) => {
    setSelectedModelId(modelId);
    const newModel = getExamModelById(modelId);
    setAnswers({});
    setFlagged({});
    setIsSubmitted(false);
    setTimeRemainingSeconds(newModel.timeLimitMinutes * 60);
    setActiveFilter('all');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectAnswer = (questionId: number, optionId: string) => {
    if (isSubmitted && examMode === 'exam') return;
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionId
    }));
  };

  const handleToggleFlag = (questionId: number) => {
    setFlagged((prev) => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const handleResetExam = () => {
    if (window.confirm('هل تريد بالتأكيد إعادة بدء الاختبار ومسح كافة الإجابات؟')) {
      setAnswers({});
      setFlagged({});
      setIsSubmitted(false);
      setTimeRemainingSeconds(currentModel.timeLimitMinutes * 60);
      setActiveFilter('all');
    }
  };

  const handleSubmitExam = () => {
    // Calculate final score
    const total = currentModel.questions.length;
    let score = 0;
    currentModel.questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        score += 1;
      }
    });
    const percentage = Math.round((score / total) * 100);

    const newRecord: ExamAttemptRecord = {
      modelId: currentModel.id,
      modelTitle: currentModel.title,
      score,
      total,
      percentage,
      completedAt: new Date().toISOString()
    };

    setAttempts((prev) => [...prev, newRecord]);
    setIsSubmitted(true);
    setIsResultsOpen(true);
  };

  const scrollToQuestion = (questionId: number) => {
    const el = document.getElementById(`question-${questionId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleToggleSaveQuestion = (question: Question) => {
    setSavedQuestions((prev) => {
      const exists = prev.some(
        (item) => item.modelId === selectedModelId && item.question.id === question.id
      );
      if (exists) {
        return prev.filter(
          (item) => !(item.modelId === selectedModelId && item.question.id === question.id)
        );
      } else {
        return [
          {
            modelId: selectedModelId,
            question,
            savedAt: new Date().toISOString()
          },
          ...prev
        ];
      }
    });
  };

  const handleRemoveSavedQuestion = (modelId: string, questionId: number) => {
    setSavedQuestions((prev) =>
      prev.filter((item) => !(item.modelId === modelId && item.question.id === questionId))
    );
  };

  const handleClearAllSaved = () => {
    setSavedQuestions([]);
  };

  const handleGoToQuestion = (modelId: string, questionId: number) => {
    if (modelId !== selectedModelId) {
      setSelectedModelId(modelId);
      setAnswers({});
      setFlagged({});
      setIsSubmitted(false);
      const newModel = getExamModelById(modelId);
      setTimeRemainingSeconds(newModel.timeLimitMinutes * 60);
    }
    setTimeout(() => {
      scrollToQuestion(questionId);
    }, 200);
  };

  const answeredCount = Object.keys(answers).length;
  const showFeedback = examMode === 'practice' || isSubmitted;

  // Group questions by section
  const listeningQuestions = currentModel.questions.filter(q => q.section === 'listening');
  const vocabQuestions = currentModel.questions.filter(q => q.section === 'vocabulary');
  const grammarQuestions = currentModel.questions.filter(q => q.section === 'grammar');
  const readingQuestions = currentModel.questions.filter(q => q.section === 'reading');

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Top Application Header */}
      <Header
        currentModel={currentModel}
        onSelectModel={handleSelectModel}
        examMode={examMode}
        onToggleExamMode={(mode) => setExamMode(mode)}
        timeRemainingSeconds={timeRemainingSeconds}
        totalTimeMinutes={currentModel.timeLimitMinutes}
        isSubmitted={isSubmitted}
        onResetExam={handleResetExam}
        onOpenCheatSheet={() => setIsCheatSheetOpen(true)}
        onOpenSavedQuestions={() => setIsSavedQuestionsOpen(true)}
        savedCount={savedQuestions.length}
        onFinishExam={handleSubmitExam}
        answeredCount={answeredCount}
        totalQuestions={currentModel.questions.length}
        onOpenStats={() => setIsPerformanceOpen(true)}
        attemptsCount={attempts.length}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Exam Title & Intro Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-xs mb-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={() => setIsPerformanceOpen(true)}
              className="px-4 py-2.5 rounded-2xl bg-[#214ecf]/10 hover:bg-[#214ecf]/20 border border-[#214ecf]/30 text-[#214ecf] text-xs font-bold flex items-center gap-2 transition-all shadow-2xs cursor-pointer"
              title="عرض مخطط تتبع الأداء والدرجات عبر النماذج"
            >
              <BarChart2 className="w-4 h-4 text-[#214ecf]" />
              <span>لوحة تتبع الأداء ومخطط الدرجات التراكمي</span>
              {attempts.length > 0 && (
                <span className="px-2.5 py-0.5 rounded-full bg-[#214ecf] text-white text-[11px] font-mono font-bold">
                  {attempts.length} {attempts.length === 1 ? 'اختبار' : 'اختبارات'}
                </span>
              )}
            </button>

            <div className="flex flex-wrap items-center gap-3">
              <div className="px-4 py-2 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <div className="text-[11px] font-bold text-slate-500 uppercase">Questions</div>
                <div className="text-lg font-bold text-slate-900 font-mono">{currentModel.totalQuestions} MCQs</div>
              </div>
              <div className="px-4 py-2 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <div className="text-[11px] font-bold text-slate-500 uppercase">Time Allowed</div>
                <div className="text-lg font-bold text-slate-900 font-mono">{currentModel.timeLimitMinutes} Mins</div>
              </div>
            </div>
          </div>

          {/* Practice Mode Notice */}
          {examMode === 'practice' && (
            <div className="mt-4 p-4 rounded-2xl bg-[#fcded6]/40 border border-[#ea9835]/40 text-slate-900 text-xs sm:text-sm flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-[#ea9835] shrink-0" />
                <span>
                  <strong className="text-[#e06045]">وضع المذاكرة والشرح الفوري:</strong> يتم إظهار الإجابة الصحيحة وشرح القاعدة بالعربية والإنجليزية فور اختيارك للحل.
                </span>
              </div>
              <button
                onClick={() => setExamMode('exam')}
                className="font-bold underline text-[#214ecf] hover:text-[#1a3fa8] shrink-0 cursor-pointer text-xs"
              >
                التحويل للاختبار المؤقت
              </button>
            </div>
          )}

          {/* Post-submission banner & Performance Dashboard */}
          {isSubmitted && (
            <div className="mt-4 space-y-4">
              <div className="p-4 rounded-2xl bg-[#214ecf]/10 border border-[#214ecf]/30 text-slate-900 text-sm flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <Award className="w-5 h-5 text-[#214ecf] shrink-0" />
                  <div>
                    <span className="font-bold text-[#214ecf]">تم تسليم الاختبار وتقييمه بنجاح!</span> يمكنك مراجعة كافة إجاباتك وشروحات الأسئلة أدناه أو الاطلاع على مؤشرات الأداء ومخطط الأعمدة.
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsResultsOpen(true)}
                    className="px-4 py-2 rounded-xl bg-[#214ecf] hover:bg-[#1a3fa8] text-white font-bold text-xs shadow-xs transition-colors shrink-0 cursor-pointer flex items-center gap-1.5"
                  >
                    <Award className="w-4 h-4" />
                    <span>عرض تقرير النتيجة الكامل</span>
                  </button>
                </div>
              </div>

              {/* User Statistics Dashboard component in results section */}
              <PerformanceDashboard
                attempts={attempts}
                allModels={allExamModels}
                currentModelId={currentModel.id}
              />
            </div>
          )}
        </div>

        {/* Content Layout */}
        <div className="max-w-4xl mx-auto">
          {/* Main Questions Column */}
          <div className="space-y-8">
            
            {/* 1. LISTENING SECTION (If available in current model) */}
            {listeningQuestions.length > 0 && currentModel.listeningTracks && (
              <section className="space-y-4">
                <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200">
                  <span className="px-2.5 py-1 rounded-xl bg-[#214ecf] text-white text-xs font-bold uppercase">
                    Part A
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">
                    Listening Comprehension (الاستماع والفهم)
                  </h3>
                </div>

                {/* Audio Player for Listening Track */}
                {Object.values(currentModel.listeningTracks).map((track) => (
                  <AudioPlayer key={track.id} track={track} />
                ))}

                <div className="space-y-4">
                  {listeningQuestions.map((q) => (
                    <QuestionCard
                      key={q.id}
                      question={q}
                      selectedAnswer={answers[q.id]}
                      onSelectAnswer={handleSelectAnswer}
                      isFlagged={!!flagged[q.id]}
                      onToggleFlag={handleToggleFlag}
                      isSaved={savedQuestions.some(item => item.modelId === selectedModelId && item.question.id === q.id)}
                      onToggleSave={handleToggleSaveQuestion}
                      showFeedback={showFeedback}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* 2. VOCABULARY SECTION */}
            {vocabQuestions.length > 0 && (
              <section className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <div className="flex items-center gap-2.5">
                    <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-white text-xs font-bold uppercase">
                      Section 1
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">
                      Vocabulary (المفردات والكلمات)
                    </h3>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">
                    {vocabQuestions.length} Questions (Read and choose the best option A, B, C or D)
                  </span>
                </div>

                <div className="space-y-4">
                  {vocabQuestions.map((q) => (
                    <QuestionCard
                      key={q.id}
                      question={q}
                      selectedAnswer={answers[q.id]}
                      onSelectAnswer={handleSelectAnswer}
                      isFlagged={!!flagged[q.id]}
                      onToggleFlag={handleToggleFlag}
                      isSaved={savedQuestions.some(item => item.modelId === selectedModelId && item.question.id === q.id)}
                      onToggleSave={handleToggleSaveQuestion}
                      showFeedback={showFeedback}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* 3. GRAMMAR SECTION */}
            {grammarQuestions.length > 0 && (
              <section className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <div className="flex items-center gap-2.5">
                    <span className="px-2.5 py-1 rounded-xl bg-[#214ecf] text-white text-xs font-bold uppercase">
                      Section 2
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">
                      Grammar (القواعد والتراكيب النحوية)
                    </h3>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">
                    {grammarQuestions.length} Questions (Read and choose the best option A, B, C or D)
                  </span>
                </div>

                <div className="space-y-4">
                  {grammarQuestions.map((q) => (
                    <QuestionCard
                      key={q.id}
                      question={q}
                      selectedAnswer={answers[q.id]}
                      onSelectAnswer={handleSelectAnswer}
                      isFlagged={!!flagged[q.id]}
                      onToggleFlag={handleToggleFlag}
                      isSaved={savedQuestions.some(item => item.modelId === selectedModelId && item.question.id === q.id)}
                      onToggleSave={handleToggleSaveQuestion}
                      showFeedback={showFeedback}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* 4. READING COMPREHENSION SECTION */}
            {readingQuestions.length > 0 && (
              <section className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <div className="flex items-center gap-2.5">
                    <span className="px-2.5 py-1 rounded-xl bg-[#214ecf] text-white text-xs font-bold uppercase">
                      Section 3
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">
                      Reading Comprehension (استيعاب المقروء)
                    </h3>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">
                    Read the passage below and answer the questions
                  </span>
                </div>

                {/* Render Passage Card */}
                {currentModel.passages &&
                  Object.values(currentModel.passages).map((passage) => (
                    <ReadingPassageCard key={passage.id} passage={passage} />
                  ))}

                <div className="space-y-4">
                  {readingQuestions.map((q) => (
                    <QuestionCard
                      key={q.id}
                      question={q}
                      selectedAnswer={answers[q.id]}
                      onSelectAnswer={handleSelectAnswer}
                      isFlagged={!!flagged[q.id]}
                      onToggleFlag={handleToggleFlag}
                      isSaved={savedQuestions.some(item => item.modelId === selectedModelId && item.question.id === q.id)}
                      onToggleSave={handleToggleSaveQuestion}
                      showFeedback={showFeedback}
                      passageTitle={
                        q.passageId && currentModel.passages
                          ? currentModel.passages[q.passageId]?.title
                          : undefined
                      }
                    />
                  ))}
                </div>
              </section>
            )}

              {/* Bottom Submit Call to Action */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 flex flex-wrap items-center justify-between gap-4 shadow-xs">
              <div>
                <div className="font-bold text-slate-900 text-base">
                  {isSubmitted ? 'تم إنهاء وتسليم الاختبار' : 'جاهز لتسليم إجاباتك؟'}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  أجبت عن <span className="font-bold font-mono text-[#214ecf]">{answeredCount}</span> من أصل <span className="font-bold font-mono">{currentModel.questions.length}</span> سؤال.
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="px-4 py-2.5 text-xs font-semibold rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                >
                  العودة لأعلى الصفحة ↑
                </button>

                {!isSubmitted ? (
                  <button
                    onClick={handleSubmitExam}
                    className="px-6 py-2.5 text-xs font-bold rounded-xl bg-[#214ecf] hover:bg-[#1a3fa8] text-white shadow-sm transition-all cursor-pointer"
                  >
                    تسليم الاختبار الآن
                  </button>
                ) : (
                  <button
                    onClick={() => setIsResultsOpen(true)}
                    className="px-6 py-2.5 text-xs font-bold rounded-xl bg-[#214ecf] hover:bg-[#1a3fa8] text-white shadow-sm transition-all cursor-pointer"
                  >
                    عرض تقرير النتيجة
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer with Itqan Branding */}
      <footer className="mt-16 bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <ItqanLogo size="sm" />
            <span className="text-slate-500">
              • منصة تدريب واختبارات منهج Cambridge Evolve 2 لطلاب الجامعات السعودية
            </span>
          </div>
          <button
            onClick={() => setIsCheatSheetOpen(true)}
            className="text-[#214ecf] hover:text-[#1a3fa8] hover:underline font-bold cursor-pointer"
          >
            استعراض ملخص القواعد والمفردات
          </button>
        </div>
      </footer>

      {/* Results Modal */}
      {isResultsOpen && (
        <ResultsModal
          isOpen={isResultsOpen}
          onClose={() => setIsResultsOpen(false)}
          currentModel={currentModel}
          answers={answers}
          onResetExam={handleResetExam}
          attempts={attempts}
          allModels={allExamModels}
          onReviewMistakes={() => {
            setActiveFilter('incorrect');
            const firstWrong = currentModel.questions.find(
              (q) => answers[q.id] && answers[q.id] !== q.correctAnswer
            );
            if (firstWrong) {
              scrollToQuestion(firstWrong.id);
            }
          }}
        />
      )}

      {/* Cheat Sheet Modal */}
      {isCheatSheetOpen && (
        <CheatSheetModal
          isOpen={isCheatSheetOpen}
          onClose={() => setIsCheatSheetOpen(false)}
        />
      )}

      {/* Saved Questions Hub Modal */}
      {isSavedQuestionsOpen && (
        <SavedQuestionsModal
          isOpen={isSavedQuestionsOpen}
          onClose={() => setIsSavedQuestionsOpen(false)}
          savedQuestions={savedQuestions}
          onRemoveQuestion={handleRemoveSavedQuestion}
          onClearAll={handleClearAllSaved}
          onGoToQuestion={handleGoToQuestion}
        />
      )}

      {/* Standalone Performance Tracker Modal */}
      {isPerformanceOpen && (
        <PerformanceModal
          isOpen={isPerformanceOpen}
          onClose={() => setIsPerformanceOpen(false)}
          attempts={attempts}
          allModels={allExamModels}
          currentModelId={currentModel.id}
          onClearHistory={() => setAttempts([])}
        />
      )}
    </div>
  );
}
