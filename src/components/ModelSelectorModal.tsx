import React from 'react';
import { X, CheckCircle2, BookOpen, Clock, HelpCircle, Layers, ArrowLeft } from 'lucide-react';
import { ExamModel } from '../types';
import { allExamModels } from '../data/modelsList';
import { ItqanLogo } from './ItqanLogo';

interface ModelSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentModelId: string;
  onSelectModel: (modelId: string) => void;
}

export const ModelSelectorModal: React.FC<ModelSelectorModalProps> = ({
  isOpen,
  onClose,
  currentModelId,
  onSelectModel
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header with Itqan Branding */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-[#214ecf] via-[#1a3fa8] to-[#214ecf] text-white flex items-center justify-between border-b border-blue-900">
          <div className="flex items-center gap-3.5">
            <div className="bg-white/10 p-2 rounded-2xl border border-white/20">
              <ItqanLogo size="sm" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                بنك نماذج إتقان للاختبار النصفي (10 نماذج معتمدة)
              </h2>
              <p className="text-xs text-blue-100 mt-0.5">
                اختر أي نموذج للتدريب أو خوض اختبار تجريبي شامل مع أسئلة وحلول وشروحات القواعد
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-blue-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            title="إغلاق"
            aria-label="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Models Grid */}
        <div className="p-4 sm:p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50">
          {allExamModels.map((model, idx) => {
            const isSelected = model.id === currentModelId;
            return (
              <div
                key={model.id}
                onClick={() => {
                  onSelectModel(model.id);
                  onClose();
                }}
                className={`p-5 rounded-2xl border text-right transition-all cursor-pointer relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#214ecf]/5 border-[#214ecf] shadow-md ring-2 ring-[#214ecf]/20'
                    : 'bg-white border-slate-200 hover:border-[#214ecf]/50 hover:shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-800">
                      نموذج {idx + 1}
                    </span>
                    {isSelected && (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-[#214ecf] bg-[#214ecf]/10 px-2.5 py-1 rounded-full">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        النموذج النشط حالياً
                      </span>
                    )}
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 mb-1 leading-snug">
                    {model.title}
                  </h3>
                  <p className="text-xs text-slate-500 mb-3 leading-relaxed">
                    {model.subtitle}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 font-mono">
                      <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
                      {model.totalQuestions} سؤال
                    </span>
                    <span className="flex items-center gap-1 font-mono">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {model.timeLimitMinutes} دقيقة
                    </span>
                  </div>

                  <span className={`text-xs font-bold flex items-center gap-1 ${isSelected ? 'text-[#214ecf]' : 'text-slate-600'}`}>
                    <span>{isSelected ? 'قيد الممارسة' : 'بدء النموذج'}</span>
                    <ArrowLeft className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>كل نموذج يحتوي على توزيع دقيق للمفردات والقواعد واستيعاب المقروء</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold transition-colors cursor-pointer"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
};
