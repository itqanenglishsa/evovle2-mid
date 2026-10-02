import React from 'react';
import { X, BarChart3, TrendingUp, Award, CheckCircle2, RotateCcw } from 'lucide-react';
import { PerformanceDashboard } from './PerformanceDashboard';
import { ExamAttemptRecord, ExamModel } from '../types';
import { ItqanLogo } from './ItqanLogo';

interface PerformanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  attempts: ExamAttemptRecord[];
  allModels: ExamModel[];
  currentModelId: string;
  onClearHistory?: () => void;
}

export const PerformanceModal: React.FC<PerformanceModalProps> = ({
  isOpen,
  onClose,
  attempts,
  allModels,
  currentModelId,
  onClearHistory
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-fadeIn">
      <div className="bg-[#0f172a] rounded-3xl max-w-3xl w-full p-5 sm:p-7 shadow-2xl border border-slate-800 overflow-y-auto max-h-[92vh]">
        {/* Top Header with Itqan Branding */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
          <div className="flex items-center gap-3.5">
            <ItqanLogo size="sm" variant="white" />
            <div className="h-6 w-px bg-slate-700 hidden sm:block"></div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                لوحة تتبع الأداء والتقدم التراكمي
                <span className="text-[11px] px-2 py-0.5 rounded-md bg-[#214ecf]/25 text-[#84a5f2] border border-[#214ecf]/40 font-normal">
                  Itqan Progress
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                متابعة دقيقة لمستواك ودرجاتك عبر جميع نماذج الاختبارات النصفي
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="إغلاق النافذة"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dashboard Component */}
        <div className="mb-6">
          <PerformanceDashboard
            attempts={attempts}
            allModels={allModels}
            currentModelId={currentModelId}
          />
        </div>

        {/* Bottom Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800/80">
          <div>
            {attempts.length > 0 && onClearHistory && (
              <button
                onClick={() => {
                  if (window.confirm('هل تريد مسح سجل درجاتك ومحاولاتك السابقة بالكامل؟')) {
                    onClearHistory();
                  }
                }}
                className="text-xs text-[#e06045] hover:text-[#e06045]/80 hover:underline cursor-pointer flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>إعادة تعيين ومسح سجل المحاولات</span>
              </button>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            إغلاق النافذة
          </button>
        </div>
      </div>
    </div>
  );
};
