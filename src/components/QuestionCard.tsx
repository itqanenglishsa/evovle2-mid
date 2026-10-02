import React, { useState } from 'react';
import { Check, X, HelpCircle, BookOpen, Bookmark } from 'lucide-react';
import { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  selectedAnswer?: string;
  onSelectAnswer: (questionId: number, optionId: string) => void;
  isFlagged?: boolean;
  onToggleFlag?: (questionId: number) => void;
  isSaved?: boolean;
  onToggleSave?: (question: Question) => void;
  showFeedback: boolean; // true in practice mode or after submission
  passageTitle?: string;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswer,
  onSelectAnswer,
  isFlagged = false,
  onToggleFlag,
  isSaved = false,
  onToggleSave,
  showFeedback,
  passageTitle
}) => {
  const [showFullExplanation, setShowFullExplanation] = useState(false);

  const isCorrect = selectedAnswer === question.correctAnswer;
  const isAnswered = !!selectedAnswer;

  return (
    <div
      id={`question-${question.id}`}
      className={`rounded-2xl border transition-all duration-200 bg-white p-5 sm:p-6 shadow-xs ${
        showFeedback && isAnswered
          ? isCorrect
            ? 'border-emerald-500/60 ring-1 ring-emerald-400/40'
            : 'border-[#e06045]/50 ring-1 ring-[#e06045]/30'
          : 'border-slate-200 hover:border-[#84a5f2]/60'
      }`}
    >
      {/* Question Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-xl bg-[#214ecf] text-white flex items-center justify-center font-bold text-sm shadow-xs font-mono">
            {question.questionNumber}
          </span>
          <div className="flex flex-col">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#214ecf]">
              {question.section.toUpperCase()}
            </span>
            {passageTitle && (
              <span className="text-xs text-[#214ecf] font-medium">
                Related to: {passageTitle}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Save/Bookmark button */}
          {onToggleSave && (
            <button
              onClick={() => onToggleSave(question)}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                isSaved
                  ? 'bg-[#fcded6] text-[#e06045] border border-[#ea9835]/40 font-bold'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
              title={isSaved ? 'تم الحفظ في بنك الأسئلة' : 'حفظ السؤال للمراجعة'}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-[#e06045] text-[#e06045]' : ''}`} />
              <span className="hidden sm:inline">{isSaved ? 'محفوظ' : 'حفظ'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Question Prompt */}
      <div className="text-base sm:text-lg font-semibold text-slate-900 mb-5 leading-relaxed">
        {question.prompt || question.text}
      </div>

      {/* Options List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
        {question.options.map((option) => {
          const isSelected = selectedAnswer === option.id;
          const isOptionCorrect = option.id === question.correctAnswer;

          let optionStyle = 'border-slate-200 hover:border-[#84a5f2]/80 hover:bg-slate-50/70 text-slate-800';

          if (showFeedback) {
            if (isOptionCorrect) {
              optionStyle = 'border-emerald-600 bg-emerald-50 text-emerald-900 font-bold ring-1 ring-emerald-500/40';
            } else if (isSelected && !isOptionCorrect) {
              optionStyle = 'border-[#e06045] bg-[#fcded6]/40 text-[#e06045] ring-1 ring-[#e06045]/40 font-semibold';
            } else {
              optionStyle = 'border-slate-200 bg-slate-50/40 text-slate-400 opacity-60';
            }
          } else if (isSelected) {
            optionStyle = 'border-[#214ecf] bg-[#214ecf]/10 text-[#214ecf] font-bold ring-2 ring-[#214ecf]/25';
          }

          return (
            <button
              key={option.id}
              onClick={() => onSelectAnswer(question.id, option.id)}
              className={`w-full p-3 rounded-xl border text-left flex items-center justify-between gap-3 transition-all cursor-pointer ${optionStyle}`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 font-mono ${
                    showFeedback
                      ? isOptionCorrect
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : isSelected
                        ? 'bg-[#e06045] text-white'
                        : 'bg-slate-200 text-slate-600'
                      : isSelected
                      ? 'bg-[#214ecf] text-white'
                      : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {option.id}
                </span>
                <span className="text-sm font-medium">{option.text}</span>
              </div>

              {/* Status Icon */}
              {showFeedback && (
                <div className="shrink-0">
                  {isOptionCorrect ? (
                    <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  ) : isSelected ? (
                    <div className="w-6 h-6 rounded-full bg-[#e06045] text-white flex items-center justify-center">
                      <X className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  ) : null}
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Educational Explanation Box (Shown in Practice Mode or after Submission) */}
      {showFeedback && (
        <div className="mt-4 pt-4 border-t border-slate-100">
          <div className="bg-[#f8fafc] rounded-2xl p-4 border border-slate-200">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-300">
                  <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[2.5]" />
                  الإجابة المعتمدة: الخيار ({question.correctAnswer})
                </span>
                <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                  • {question.unitReference || question.unit}
                </span>
              </div>
              <span className="text-[11px] font-semibold text-[#214ecf] bg-[#84a5f2]/15 px-2 py-0.5 rounded-md border border-[#84a5f2]/30">
                {question.ruleCategory || question.ruleOrTopic}
              </span>
            </div>

            {/* Arabic Explanation */}
            <div className="text-sm text-slate-800 leading-relaxed text-right font-sans mb-2" dir="rtl">
              <span className="font-bold text-[#214ecf] ml-1">الشرح والتوضيح:</span>
              {question.explanationAr}
            </div>

            {/* English Explanation */}
            <div className="text-xs text-slate-600 leading-relaxed font-sans pt-2 border-t border-slate-200/80">
              <span className="font-bold text-slate-700 mr-1">English Explanation:</span>
              {question.explanationEn}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
