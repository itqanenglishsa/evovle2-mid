import React, { useState } from 'react';
import { BookMarked, X, Search, CheckCircle, AlertTriangle, Sparkles, BookOpen } from 'lucide-react';
import { evolveGrammarSummaries, evolveVocabCheatsheet } from '../data/cheatSheetData';
import { ItqanLogo } from './ItqanLogo';

interface CheatSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheatSheetModal: React.FC<CheatSheetModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'grammar' | 'vocabulary'>('grammar');
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const filteredGrammar = evolveGrammarSummaries.filter(
    (g) =>
      g.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.titleAr.includes(searchQuery) ||
      g.unit.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredVocab = evolveVocabCheatsheet.map((cat) => ({
    ...cat,
    items: cat.items.filter(
      (item) =>
        item.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.arabic.includes(searchQuery) ||
        item.example.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter((cat) => cat.items.length > 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-3xl w-full p-6 shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[88vh]">
        {/* Header with Itqan Branding */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <ItqanLogo size="sm" />
            <div className="h-6 w-px bg-slate-200 hidden sm:block"></div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                ملخص إتقان: قواعد ومفردات Evolve 2
              </h3>
              <p className="text-xs text-slate-500">
                مرجع مكثف وشامل لقواعد ومفردات الوحدات 1 إلى 5 لاختبار الميدتيرم
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="إغلاق"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tabs & Search */}
        <div className="flex flex-wrap items-center justify-between gap-3 my-4">
          <div className="inline-flex rounded-xl p-1 bg-slate-100 border border-slate-200 text-xs font-semibold">
            <button
              onClick={() => setActiveTab('grammar')}
              className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === 'grammar'
                  ? 'bg-[#214ecf] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              قواعد الجرامر (Grammar Rules)
            </button>
            <button
              onClick={() => setActiveTab('vocabulary')}
              className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === 'vocabulary'
                  ? 'bg-[#214ecf] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              المفردات والكلمات (Key Vocabulary)
            </button>
          </div>

          <div className="relative flex-1 max-w-xs min-w-[200px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث عن قاعدة أو كلمة..."
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#214ecf]/20 focus:border-[#214ecf]"
            />
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto pr-1 space-y-4">
          {activeTab === 'grammar' ? (
            filteredGrammar.length > 0 ? (
              filteredGrammar.map((item, index) => (
                <div key={index} className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-[#214ecf]">{item.titleEn}</span>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-[#214ecf]/10 text-[#214ecf]">
                      {item.unit}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-slate-800 mb-1">{item.titleAr}</div>
                  <div className="bg-white rounded-xl p-3 border border-slate-200/80 font-mono text-xs text-slate-800 mb-2">
                    {item.ruleFormula}
                  </div>
                  <div className="text-xs text-slate-600 leading-relaxed mb-2">
                    <strong className="text-amber-700">تنبيه الاختبار: </strong>
                    {item.examTipAr}
                  </div>
                  <div className="space-y-1 bg-[#84a5f2]/10 rounded-xl p-3 border border-[#84a5f2]/20">
                    <div className="text-[11px] font-bold text-[#214ecf] mb-1">أمثلة تطبيقية:</div>
                    {item.examples.map((ex, i) => (
                      <div key={i} className="text-xs text-slate-700">
                        • {ex}
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 text-slate-400 text-xs">
                لم يتم العثور على قواعد تطابق بحثك
              </div>
            )
          ) : filteredVocab.length > 0 ? (
            filteredVocab.map((cat, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <span className="text-xs font-bold text-[#214ecf]">{cat.category}</span>
                  <span className="text-[11px] font-semibold text-slate-500">{cat.categoryAr}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {cat.items.map((item, i) => (
                    <div key={i} className="bg-white rounded-xl p-2.5 border border-slate-200 flex flex-col justify-between">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="font-bold text-xs text-slate-900">{item.word}</span>
                        <span className="text-xs text-[#ea9835] font-semibold">{item.arabic}</span>
                      </div>
                      <span className="text-[11px] text-slate-500 mt-1 italic leading-tight">
                        "{item.example}"
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-slate-400 text-xs">
              لم يتم العثور على مفردات تطابق بحثك
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>منصة إتقان الإنجليزية • Cambridge Evolve 2 Units 1–5</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold transition-colors cursor-pointer"
          >
            إغلاق الملخص
          </button>
        </div>
      </div>
    </div>
  );
};
