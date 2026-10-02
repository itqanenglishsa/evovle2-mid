import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Award, CheckCircle, XCircle, RotateCcw, Printer, ArrowRight, BookOpen, AlertTriangle } from 'lucide-react';
import { ExamModel, SectionType, ExamAttemptRecord } from '../types';
import { PerformanceDashboard } from './PerformanceDashboard';
import { ItqanLogo } from './ItqanLogo';

interface ResultsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentModel: ExamModel;
  answers: Record<number, string>;
  onResetExam: () => void;
  onReviewMistakes: () => void;
  attempts?: ExamAttemptRecord[];
  allModels?: ExamModel[];
}

export const ResultsModal: React.FC<ResultsModalProps> = ({
  isOpen,
  onClose,
  currentModel,
  answers,
  onResetExam,
  onReviewMistakes,
  attempts = [],
  allModels = []
}) => {
  const totalQuestions = currentModel.questions.length;
  let correctCount = 0;

  const sectionScores: Record<SectionType, { correct: number; total: number }> = {
    listening: { correct: 0, total: 0 },
    vocabulary: { correct: 0, total: 0 },
    grammar: { correct: 0, total: 0 },
    reading: { correct: 0, total: 0 }
  };

  currentModel.questions.forEach((q) => {
    sectionScores[q.section].total += 1;
    if (answers[q.id] === q.correctAnswer) {
      correctCount += 1;
      sectionScores[q.section].correct += 1;
    }
  });

  const percentage = Math.round((correctCount / totalQuestions) * 100);

  // Trigger confetti for high scores - Hook called unconditionally at top level
  useEffect(() => {
    if (isOpen && percentage >= 70) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // Fallback silently if confetti fails
      }
    }
  }, [isOpen, percentage]);

  if (!isOpen) return null;

  const getGradeInfo = (pct: number) => {
    if (pct >= 90) return { grade: 'A+', label: 'Excellent (ممتاز مرتفع)', color: 'text-[#214ecf] bg-[#214ecf]/10 border-[#214ecf]/30' };
    if (pct >= 80) return { grade: 'B', label: 'Very Good (جيد جداً)', color: 'text-[#214ecf] bg-blue-50 border-blue-200' };
    if (pct >= 70) return { grade: 'C', label: 'Good (جيد)', color: 'text-[#ea9835] bg-[#fcded6]/40 border-[#ea9835]/40' };
    if (pct >= 60) return { grade: 'D', label: 'Pass (مقبول)', color: 'text-[#ea9835] bg-amber-50 border-amber-300' };
    return { grade: 'F', label: 'Needs Revision (يحتاج مراجعة)', color: 'text-[#e06045] bg-rose-50 border-rose-300' };
  };

  const gradeInfo = getGradeInfo(percentage);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl sm:max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 overflow-y-auto max-h-[92vh]">
        {/* Modal Top Header with Itqan Branding */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-3">
            <ItqanLogo size="sm" />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900">تقرير نتيجة الاختبار النصفي</h2>
          <p className="text-xs text-slate-500 mt-1">
            {currentModel.university} • {currentModel.courseCode} • {currentModel.title}
          </p>
        </div>

        {/* Big Score Card */}
        <div className={`rounded-2xl p-6 border text-center mb-6 ${gradeInfo.color}`}>
          <div className="text-4xl sm:text-5xl font-extrabold font-mono tracking-tight mb-1">
            {correctCount} <span className="text-2xl font-normal text-slate-500">/ {totalQuestions}</span>
          </div>
          <div className="text-base font-bold mb-1">
            {percentage}% — التقدير: {gradeInfo.grade} ({gradeInfo.label})
          </div>
          <p className="text-xs opacity-85">
            {percentage >= 60
              ? 'تهانينا! لقد اجتزت الاختبار بنجاح وفق معايير الجامعات السعودية.'
              : 'يمكنك مراجعة الأخطاء أدناه وملاحظة شروحات القواعد والكلمات لرفع مستواك.'}
          </p>
        </div>

        {/* Section-by-Section Breakdown */}
        <div className="space-y-3 mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            تفصيل الدرجات حسب الأقسام (Section Breakdown)
          </h4>

          {Object.entries(sectionScores).map(([section, score]) => {
            if (score.total === 0) return null;
            const secPct = Math.round((score.correct / score.total) * 100);

            return (
              <div key={section} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#214ecf]" />
                  <span className="text-xs font-bold capitalize text-slate-800">
                    {section} Section
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-slate-700">
                    {score.correct} / {score.total}
                  </span>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-600">
                    {secPct}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* User Statistics Dashboard Component with Comparative Bar Chart */}
        {attempts.length > 0 && (
          <div className="mb-6">
            <PerformanceDashboard
              attempts={attempts}
              allModels={allModels}
              currentModelId={currentModel.id}
            />
          </div>
        )}

        {/* Modal Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-4 border-t border-slate-100">
          <button
            onClick={() => {
              onClose();
              onReviewMistakes();
            }}
            className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-[#214ecf] hover:bg-[#1a3fa8] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>مراجعة الإجابات والشروحات</span>
          </button>

          <button
            onClick={onClose}
            className="w-full sm:w-auto py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            إغلاق
          </button>

          <button
            onClick={handlePrint}
            className="w-full sm:w-auto p-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center justify-center transition-colors cursor-pointer"
            title="Print Report"
          >
            <Printer className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
