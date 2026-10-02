import React, { useState } from 'react';
import { Bookmark, Trash2, ExternalLink, X, HelpCircle, CheckCircle2, ChevronRight, BookOpen } from 'lucide-react';
import { Question } from '../types';
import { allExamModels } from '../data/modelsList';
import { ItqanLogo } from './ItqanLogo';

export interface SavedQuestionItem {
  modelId: string;
  question: Question;
  savedAt: string;
  userNote?: string;
}

interface SavedQuestionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedQuestions: SavedQuestionItem[];
  onRemoveQuestion: (modelId: string, questionId: number) => void;
  onClearAll: () => void;
  onGoToQuestion: (modelId: string, questionId: number) => void;
}

export const SavedQuestionsModal: React.FC<SavedQuestionsModalProps> = ({
  isOpen,
  onClose,
  savedQuestions,
  onRemoveQuestion,
  onClearAll,
  onGoToQuestion,
}) => {
  const [filterModel, setFilterModel] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  if (!isOpen) return null;

  const filteredItems = savedQuestions.filter((item) => {
    const matchesModel = filterModel === 'all' || item.modelId === filterModel;
    const promptText = item.question.prompt || item.question.text || '';
    const arExplanation = item.question.explanationAr || '';
    const enExplanation = item.question.explanationEn || '';

    const matchesQuery =
      searchQuery.trim() === '' ||
      promptText.toLowerCase().includes(searchQuery.toLowerCase()) ||
      arExplanation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      enExplanation.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesModel && matchesQuery;
  });

  const getModelTitle = (modelId: string) => {
    const found = allExamModels.find((m) => m.id === modelId);
    return found ? found.title : modelId;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Modal Header with Itqan Branding */}
        <div className="px-6 py-5 border-b border-slate-200 flex items-center justify-between bg-slate-50/80">
          <div className="flex items-center gap-3.5">
            <ItqanLogo size="sm" />
            <div className="h-6 w-px bg-slate-200 hidden sm:block"></div>
            <div>
              <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <span>مركز الأسئلة المحفوظة</span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#fcded6] text-[#e06045] text-xs font-bold border border-[#ea9835]/30">
                  {savedQuestions.length}
                </span>
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                بنك الأسئلة والمفردات التي حفظتها للمراجعة المركزة قبل الاختبار
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl hover:bg-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filters and Controls */}
        <div className="p-4 border-b border-slate-100 bg-white flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2 flex-1 min-w-[240px]">
            {/* Search Input */}
            <input
              type="text"
              placeholder="بحث في الأسئلة أو الشرح..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#214ecf] focus:ring-2 focus:ring-[#214ecf]/15 flex-1 min-w-[140px]"
            />

            {/* Model Filter */}
            <select
              value={filterModel}
              onChange={(e) => setFilterModel(e.target.value)}
              className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs text-slate-700 bg-white focus:outline-none focus:border-[#214ecf] cursor-pointer"
            >
              <option value="all">كافة النماذج</option>
              {allExamModels.map((m, idx) => (
                <option key={m.id} value={m.id}>
                  نموذج {idx + 1}
                </option>
              ))}
            </select>
          </div>

          {savedQuestions.length > 0 && (
            <button
              onClick={() => {
                if (window.confirm('هل تريد بالتأكيد حذف كافة الأسئلة المحفوظة؟')) {
                  onClearAll();
                }
              }}
              className="text-xs text-[#e06045] hover:text-[#e06045]/80 hover:underline flex items-center gap-1 cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>مسح الكل</span>
            </button>
          )}
        </div>

        {/* List Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3">
          {filteredItems.length === 0 ? (
            <div className="text-center py-16 px-4">
              <div className="w-12 h-12 rounded-2xl bg-[#fcded6]/60 text-[#e06045] flex items-center justify-center mx-auto mb-3">
                <Bookmark className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="text-sm font-bold text-slate-800 mb-1">
                {savedQuestions.length === 0
                  ? 'لم تقم بحفظ أي أسئلة بعد'
                  : 'لا توجد نتائج تطابق بحثك'}
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                {savedQuestions.length === 0
                  ? 'أثناء الحل، اضغط على زر "حفظ" عند أي سؤال أو قاعدة لتجميعها هنا ومراجعتها قبل الامتحان.'
                  : 'جرب البحث بكلمات أخرى أو اختر "كافة النماذج".'}
              </p>
            </div>
          ) : (
            filteredItems.map((item) => {
              const isExpanded = expandedId === item.question.id;
              const modelIdx = allExamModels.findIndex((m) => m.id === item.modelId) + 1;

              return (
                <div
                  key={`${item.modelId}-${item.question.id}`}
                  className="rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors p-4 space-y-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2 py-0.5 rounded-lg bg-[#214ecf]/10 text-[#214ecf] text-[11px] font-bold">
                        نموذج {modelIdx}
                      </span>
                      <span className="px-2 py-0.5 rounded-lg bg-slate-200 text-slate-700 text-[11px] font-semibold uppercase tracking-wider">
                        {item.question.section}
                      </span>
                      <span className="text-xs font-bold text-slate-800">
                        سؤال {item.question.questionNumber}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        onClick={() => {
                          onClose();
                          onGoToQuestion(item.modelId, item.question.id);
                        }}
                        className="px-2.5 py-1 rounded-lg bg-[#214ecf] hover:bg-[#1a3fa8] text-white text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                        title="انتقل لهذا السؤال في الاختبار"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span className="hidden sm:inline">انتقال</span>
                      </button>
                      <button
                        onClick={() => onRemoveQuestion(item.modelId, item.question.id)}
                        className="p-1 rounded-lg text-slate-400 hover:text-[#e06045] hover:bg-rose-50 transition-colors cursor-pointer"
                        title="إزالة من المحفوظات"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Question Text */}
                  <div className="text-sm font-semibold text-slate-900 leading-relaxed">
                    {item.question.prompt || item.question.text}
                  </div>

                  {/* Options Preview */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                    {item.question.options.map((opt) => {
                      const isCorrect = opt.id === item.question.correctAnswer;
                      return (
                        <div
                          key={opt.id}
                          className={`text-xs p-2 rounded-lg border flex items-center gap-2 ${
                            isCorrect
                              ? 'bg-emerald-50 border-emerald-300 text-emerald-800 font-bold'
                              : 'bg-white border-slate-200 text-slate-700'
                          }`}
                        >
                          <span
                            className={`w-5 h-5 rounded-md flex items-center justify-center font-bold text-[10px] ${
                              isCorrect
                                ? 'bg-emerald-600 text-white'
                                : 'bg-slate-100 text-slate-600'
                            }`}
                          >
                            {opt.id}
                          </span>
                          <span className="truncate">{opt.text}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation Toggle */}
                  <div className="pt-2 border-t border-slate-200/60">
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : item.question.id)}
                      className="text-xs font-bold text-[#214ecf] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>{isExpanded ? 'إخفاء الشرح' : 'عرض شرح القاعدة والحل الصحيح'}</span>
                    </button>

                    {isExpanded && (
                      <div className="mt-2.5 p-3 rounded-xl bg-white border border-slate-200 text-xs space-y-2 animate-in fade-in duration-150">
                        <div className="text-slate-800 text-right font-sans leading-relaxed" dir="rtl">
                          <span className="font-bold text-[#214ecf] ml-1">الشرح بالعربية:</span>
                          {item.question.explanationAr}
                        </div>
                        {item.question.explanationEn && (
                          <div className="text-slate-600 font-sans leading-relaxed pt-1.5 border-t border-slate-100">
                            <span className="font-bold text-slate-700 mr-1">Explanation:</span>
                            {item.question.explanationEn}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs">
          <span className="text-slate-500">
            يتم حفظ الأسئلة محلياً في جهازك للرجوع إليها في أي وقت
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold transition-colors cursor-pointer"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
};
