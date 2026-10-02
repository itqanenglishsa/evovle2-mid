import React, { useState, useRef, useEffect } from 'react';
import { Clock, BookOpen, RotateCcw, Award, BookMarked, ChevronDown, Bookmark, BarChart3, GraduationCap } from 'lucide-react';
import { ExamModel } from '../types';
import { allExamModels } from '../data/modelsList';
import { ItqanLogo } from './ItqanLogo';

interface HeaderProps {
  currentModel: ExamModel;
  onSelectModel: (modelId: string) => void;
  examMode: 'exam' | 'practice';
  onToggleExamMode: (mode: 'exam' | 'practice') => void;
  timeRemainingSeconds: number;
  totalTimeMinutes: number;
  isSubmitted: boolean;
  onResetExam: () => void;
  onOpenCheatSheet: () => void;
  onOpenSavedQuestions: () => void;
  savedCount: number;
  onFinishExam: () => void;
  answeredCount: number;
  totalQuestions: number;
  onOpenStats?: () => void;
  attemptsCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentModel,
  onSelectModel,
  examMode,
  onToggleExamMode,
  timeRemainingSeconds,
  isSubmitted,
  onResetExam,
  onOpenCheatSheet,
  onOpenSavedQuestions,
  savedCount,
  onFinishExam,
  answeredCount,
  totalQuestions,
  onOpenStats,
  attemptsCount = 0
}) => {
  const [isModelDropdownOpen, setIsModelDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsModelDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentModelIndex = allExamModels.findIndex(m => m.id === currentModel.id);
  const currentModelNumber = currentModelIndex !== -1 ? currentModelIndex + 1 : 1;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const isTimeLow = timeRemainingSeconds <= 300 && !isSubmitted; // 5 min warning

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Academic Banner with Itqan Royal Blue (#214ecf) */}
      <div className="bg-[#214ecf] text-white py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#ea9835]"></span>
            <span className="font-bold tracking-wide text-white uppercase">Itqan English Academy</span>
            <span className="text-[#84a5f2]">•</span>
            <span className="text-[#fcded6] font-medium hidden sm:inline">Cambridge Evolve 2 Midterm Test Bank</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white/80 text-[11px]">إتقان الإنجليزية: لغة كاملة.. في تطبيق واحد</span>
          </div>
        </div>
      </div>

      {/* Main Controls Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-4">
        {/* Itqan Brand Logo & Model Title */}
        <div className="flex items-center gap-4">
          <ItqanLogo size="sm" />
          <div className="h-7 w-px bg-slate-200 hidden sm:block"></div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-[#214ecf]/10 text-[#214ecf]">
                نموذج {currentModelNumber} من 10
              </span>
              <span className="text-[11px] text-slate-500 hidden md:inline">
                Units 1–5 Examination
              </span>
            </div>
            <h1 className="text-sm sm:text-base font-bold text-slate-900 leading-tight mt-0.5">
              {currentModel.title}
            </h1>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
          {/* 10 Models Single Icon Selector */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsModelDropdownOpen(!isModelDropdownOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 active:bg-slate-200 border border-slate-200 text-slate-800 text-xs font-bold transition-all shadow-2xs cursor-pointer"
              title="اختيار رقم النموذج"
            >
              <span className="w-5 h-5 rounded-md bg-[#214ecf] text-white text-[11px] font-black flex items-center justify-center shadow-xs">
                {currentModelNumber}
              </span>
              <span className="hidden sm:inline text-xs font-bold">النماذج</span>
              <ChevronDown className={`w-3.5 h-3.5 text-[#214ecf] transition-transform ${isModelDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Quick Numbers Popover (1 to 10 only) */}
            {isModelDropdownOpen && (
              <div className="absolute top-full mt-1.5 start-0 z-50 bg-white border border-slate-200 rounded-2xl shadow-xl p-2.5 w-52 animate-in fade-in zoom-in-95 duration-100">
                <div className="text-[11px] font-bold text-slate-500 px-1.5 pb-1.5 mb-1.5 border-b border-slate-100 flex items-center justify-between">
                  <span>نماذج إتقان المعتمدة</span>
                  <span className="text-[10px] text-[#214ecf] font-extrabold">{currentModelNumber} / 10</span>
                </div>
                <div className="grid grid-cols-5 gap-1.5">
                  {allExamModels.map((m, idx) => {
                    const isSelected = m.id === currentModel.id;
                    const num = idx + 1;
                    return (
                      <button
                        key={m.id}
                        onClick={() => {
                          onSelectModel(m.id);
                          setIsModelDropdownOpen(false);
                        }}
                        className={`h-8 rounded-lg text-xs font-bold transition-all flex items-center justify-center cursor-pointer ${
                          isSelected
                            ? 'bg-[#214ecf] text-white shadow-xs scale-105'
                            : 'bg-slate-100 hover:bg-[#84a5f2]/20 text-slate-700'
                        }`}
                        title={`نموذج ${num}`}
                      >
                        {num}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Mode Switcher */}
          <div className="inline-flex rounded-xl p-1 bg-slate-100 border border-slate-200 text-xs font-semibold">
            <button
              onClick={() => onToggleExamMode('exam')}
              className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                examMode === 'exam'
                  ? 'bg-[#214ecf] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Timed real test with final score"
            >
              <Clock className="w-3.5 h-3.5" />
              اختبار مؤقت
            </button>
            <button
              onClick={() => onToggleExamMode('practice')}
              className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                examMode === 'practice'
                  ? 'bg-[#ea9835] text-slate-950 font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Practice mode with instant explanations"
            >
              <BookOpen className="w-3.5 h-3.5" />
              مذاكرة وشرح فوري
            </button>
          </div>

          {/* Timer Display (Exam Mode) */}
          {examMode === 'exam' && !isSubmitted && (
            <div
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border font-mono font-bold text-sm shadow-2xs ${
                isTimeLow
                  ? 'bg-rose-50 text-[#e06045] border-rose-300 animate-pulse'
                  : 'bg-slate-50 text-slate-800 border-slate-200'
              }`}
            >
              <Clock className="w-4 h-4 text-slate-500" />
              <span>{formatTime(timeRemainingSeconds)}</span>
            </div>
          )}

          {/* Saved Questions Center Button */}
          <button
            onClick={onOpenSavedQuestions}
            className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-2xs cursor-pointer ${
              savedCount > 0
                ? 'bg-[#fcded6] text-[#e06045] border-[#ea9835]/40 hover:bg-[#fcded6]/80 font-bold'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
            }`}
            title="فتح مركز الأسئلة المحفوظة للمراجعة"
          >
            <Bookmark className={`w-3.5 h-3.5 ${savedCount > 0 ? 'fill-[#e06045] text-[#e06045]' : 'text-slate-500'}`} />
            <span className="hidden sm:inline">الأسئلة المحفوظة</span>
            {savedCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-[#e06045] text-white text-[10px] font-black flex items-center justify-center">
                {savedCount}
              </span>
            )}
          </button>

          {/* Performance Tracking Dashboard Button */}
          {onOpenStats && (
            <button
              onClick={onOpenStats}
              className="px-3 py-1.5 rounded-xl bg-[#214ecf]/10 hover:bg-[#214ecf]/20 text-[#214ecf] border border-[#214ecf]/30 text-xs font-bold flex items-center gap-1.5 transition-colors shadow-2xs cursor-pointer"
              title="عرض لوحة ومخطط تتبع الأداء التراكمي"
            >
              <BarChart3 className="w-3.5 h-3.5 text-[#214ecf]" />
              <span className="hidden sm:inline">تتبع الأداء</span>
              <span className="sm:hidden">الأداء</span>
              {attemptsCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-[#214ecf] text-white text-[10px] font-bold flex items-center justify-center">
                  {attemptsCount}
                </span>
              )}
            </button>
          )}

          {/* Quick Cheatsheet Button */}
          <button
            onClick={onOpenCheatSheet}
            className="px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-2xs cursor-pointer"
          >
            <BookMarked className="w-3.5 h-3.5 text-[#ea9835]" />
            <span className="hidden sm:inline">ملخص القواعد</span>
            <span className="sm:hidden">ملخص</span>
          </button>

          {/* Reset Exam Button */}
          <button
            onClick={onResetExam}
            className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
            title="إعادة تعيين الاختبار"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden md:inline">إعادة البدء</span>
          </button>

          {/* Submit / Finish Status (if submitted) */}
          {isSubmitted && (
            <div className="px-3 py-1.5 rounded-xl bg-[#214ecf]/10 border border-[#214ecf]/30 text-[#214ecf] text-xs font-bold flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#214ecf]" />
              تم التسليم
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

