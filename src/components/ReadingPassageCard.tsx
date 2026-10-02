import React from 'react';
import { ReadingPassage } from '../types';
import { BookOpen } from 'lucide-react';

interface ReadingPassageCardProps {
  passage: ReadingPassage;
}

export const ReadingPassageCard: React.FC<ReadingPassageCardProps> = ({ passage }) => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs mb-6">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#214ecf]/10 text-[#214ecf] border border-[#214ecf]/20 flex items-center justify-center font-bold">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#214ecf]">
              Reading Comprehension Text • القطعة القرائية
            </span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">{passage.title}</h3>
          </div>
        </div>
      </div>

      {/* Passage Body */}
      <div className="mt-4 space-y-3.5 text-sm sm:text-base leading-relaxed text-slate-700">
        {passage.content.map((paragraph, idx) => (
          <p key={idx} className="bg-slate-50/70 p-4 rounded-2xl border border-slate-100 text-justify">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};
