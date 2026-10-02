import React from 'react';
import { Question } from '../types';
import { Flag, CheckCircle2, AlertCircle, HelpCircle } from 'lucide-react';

interface QuestionNavigatorProps {
  questions: Question[];
  answers: Record<number, string>;
  flagged: Record<number, boolean>;
  isSubmitted: boolean;
  activeFilter: 'all' | 'unanswered' | 'flagged' | 'incorrect';
  onChangeFilter: (filter: 'all' | 'unanswered' | 'flagged' | 'incorrect') => void;
  onSelectQuestion: (questionId: number) => void;
}

export const QuestionNavigator: React.FC<QuestionNavigatorProps> = ({
  questions,
  answers,
  flagged,
  isSubmitted,
  activeFilter,
  onChangeFilter,
  onSelectQuestion
}) => {
  const total = questions.length;
  const answeredCount = Object.keys(answers).length;
  const flaggedCount = Object.values(flagged).filter(Boolean).length;

  const incorrectQuestions = questions.filter(
    (q) => answers[q.id] && answers[q.id] !== q.correctAnswer
  );

  const filteredQuestions = questions.filter((q) => {
    if (activeFilter === 'unanswered') return !answers[q.id];
    if (activeFilter === 'flagged') return flagged[q.id];
    if (activeFilter === 'incorrect') return answers[q.id] && answers[q.id] !== q.correctAnswer;
    return true;
  });

  const percentage = Math.round((answeredCount / total) * 100);

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-xs sticky top-24">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-[#214ecf]" />
          <span>خريطة الأسئلة (Navigator)</span>
        </h3>
        <span className="text-xs font-semibold text-slate-500 font-mono">
          {answeredCount} / {total}
        </span>
      </div>

      {/* Progress Bar with Itqan Royal Blue */}
      <div className="w-full bg-slate-100 rounded-full h-2.5 mb-4 overflow-hidden">
        <div
          className="bg-[#214ecf] h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Filter Chips */}
      <div className="flex flex-wrap gap-1.5 mb-4 text-xs">
        <button
          onClick={() => onChangeFilter('all')}
          className={`px-2.5 py-1 rounded-xl font-bold transition-colors cursor-pointer ${
            activeFilter === 'all'
              ? 'bg-[#214ecf] text-white shadow-2xs'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          الكل ({total})
        </button>
        <button
          onClick={() => onChangeFilter('unanswered')}
          className={`px-2.5 py-1 rounded-xl font-bold transition-colors cursor-pointer ${
            activeFilter === 'unanswered'
              ? 'bg-[#214ecf] text-white shadow-2xs'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          المتبقي ({total - answeredCount})
        </button>
        <button
          onClick={() => onChangeFilter('flagged')}
          className={`px-2.5 py-1 rounded-xl font-bold transition-colors cursor-pointer ${
            activeFilter === 'flagged'
              ? 'bg-[#ea9835] text-slate-950 shadow-2xs'
              : 'bg-amber-50 text-amber-800 hover:bg-amber-100'
          }`}
        >
          معلّم ({flaggedCount})
        </button>
        {isSubmitted && (
          <button
            onClick={() => onChangeFilter('incorrect')}
            className={`px-2.5 py-1 rounded-xl font-bold transition-colors cursor-pointer ${
              activeFilter === 'incorrect'
                ? 'bg-[#e06045] text-white shadow-2xs'
                : 'bg-rose-50 text-[#e06045] hover:bg-rose-100'
            }`}
          >
            الأخطاء ({incorrectQuestions.length})
          </button>
        )}
      </div>

      {/* Questions Grid */}
      <div className="grid grid-cols-6 gap-2 max-h-60 overflow-y-auto pr-1 pb-1">
        {filteredQuestions.map((q) => {
          const isAnswered = !!answers[q.id];
          const isFlaggedItem = !!flagged[q.id];
          const isCorrect = answers[q.id] === q.correctAnswer;

          let btnClass = 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200';

          if (isSubmitted) {
            if (isAnswered) {
              btnClass = isCorrect
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-2xs font-bold'
                : 'bg-[#e06045] text-white border-[#e06045] shadow-2xs font-bold';
            } else {
              btnClass = 'bg-slate-200 text-slate-400 border-dashed border-slate-300';
            }
          } else if (isAnswered) {
            btnClass = 'bg-[#214ecf] text-white border-[#214ecf] shadow-2xs font-bold';
          }

          return (
            <button
              key={q.id}
              onClick={() => onSelectQuestion(q.id)}
              className={`relative h-9 rounded-xl text-xs font-semibold flex items-center justify-center border transition-all cursor-pointer font-mono ${btnClass}`}
              title={`Question ${q.questionNumber} (${q.section})`}
            >
              {q.questionNumber}
              {isFlaggedItem && (
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#ea9835] rounded-full border border-white" />
              )}
            </button>
          );
        })}
      </div>

      {/* Section Quick Jump */}
      <div className="mt-4 pt-4 border-t border-slate-100 text-xs">
        <div className="font-bold text-slate-700 mb-2">أقسام الاختبار:</div>
        <div className="flex flex-col gap-1.5 text-slate-600">
          <div className="flex items-center justify-between py-1.5 px-2.5 rounded-xl hover:bg-[#84a5f2]/10 hover:text-[#214ecf] cursor-pointer transition-colors" onClick={() => onSelectQuestion(questions[0]?.id)}>
            <span className="font-semibold">• Vocabulary (1-16)</span>
            <span className="text-[11px] text-slate-400">16 Questions</span>
          </div>
          <div className="flex items-center justify-between py-1.5 px-2.5 rounded-xl hover:bg-[#84a5f2]/10 hover:text-[#214ecf] cursor-pointer transition-colors" onClick={() => onSelectQuestion(questions[16]?.id || 17)}>
            <span className="font-semibold">• Grammar (17-26)</span>
            <span className="text-[11px] text-slate-400">10 Questions</span>
          </div>
          <div className="flex items-center justify-between py-1.5 px-2.5 rounded-xl hover:bg-[#84a5f2]/10 hover:text-[#214ecf] cursor-pointer transition-colors" onClick={() => onSelectQuestion(questions[26]?.id || 27)}>
            <span className="font-semibold">• Reading (27-30)</span>
            <span className="text-[11px] text-slate-400">4 Questions</span>
          </div>
        </div>
      </div>
    </div>
  );
};
