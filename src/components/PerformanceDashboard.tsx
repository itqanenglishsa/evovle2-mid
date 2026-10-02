import React, { useState } from 'react';
import { BarChart3, TrendingUp, Award, Clock, ArrowUpRight, CheckCircle2, Flame, Target } from 'lucide-react';
import { ExamAttemptRecord, ExamModel } from '../types';
import { ITQAN_BRAND } from '../theme/itqanBrand';

interface PerformanceDashboardProps {
  attempts: ExamAttemptRecord[];
  allModels: ExamModel[];
  currentModelId: string;
}

export const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({
  attempts,
  allModels,
  currentModelId
}) => {
  const totalAttempts = attempts.length;
  const hasAnyAttempts = totalAttempts > 0;

  // Calculate statistics
  const averagePercentage = hasAnyAttempts
    ? Math.round(attempts.reduce((sum, a) => sum + a.percentage, 0) / totalAttempts)
    : 0;
  const bestAttempt = hasAnyAttempts
    ? [...attempts].sort((a, b) => b.percentage - a.percentage)[0]
    : null;
  const latestAttempt = hasAnyAttempts ? attempts[attempts.length - 1] : null;

  // Map each exam model to its best or latest attempt for the comparative bar chart
  const modelStats = allModels.map((model, idx) => {
    const modelAttempts = attempts.filter((a) => a.modelId === model.id);
    const hasAttempted = modelAttempts.length > 0;
    const latestScore = hasAttempted ? modelAttempts[modelAttempts.length - 1].percentage : 0;
    const bestScore = hasAttempted
      ? Math.max(...modelAttempts.map((a) => a.percentage))
      : 0;

    return {
      index: idx + 1,
      modelId: model.id,
      title: `نموذج ${idx + 1}`,
      fullTitle: model.title,
      attemptsCount: modelAttempts.length,
      latestPercentage: latestScore,
      bestPercentage: bestScore,
      hasAttempted,
      isCurrent: model.id === currentModelId
    };
  });

  // Determine trend direction
  let trendText = 'في انتظار أول اختبار';
  let isImproving = true;
  if (attempts.length >= 2 && latestAttempt) {
    const prev = attempts[attempts.length - 2].percentage;
    const curr = latestAttempt.percentage;
    if (curr > prev) {
      trendText = `تحسن بمقدار +${curr - prev}% عن المحاولة السابقة`;
      isImproving = true;
    } else if (curr < prev) {
      trendText = `انخفاض بمقدار ${curr - prev}% عن المحاولة السابقة`;
      isImproving = false;
    } else {
      trendText = `نفس المستوى السابق (${curr}%)`;
    }
  } else if (attempts.length === 1 && latestAttempt) {
    trendText = `تم تسجيل أول نتيجة (${latestAttempt.percentage}%)`;
  }

  return (
    <div className="bg-[#0f172a] text-white rounded-3xl p-5 sm:p-7 shadow-xl border border-slate-800 space-y-6">
      {/* Dashboard Top Header - Itqan Branded */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-[#214ecf]/25 text-[#84a5f2] border border-[#214ecf]/40 flex items-center justify-center shadow-inner">
            <BarChart3 className="w-5 h-5 text-[#84a5f2]" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              لوحة تحليلات الأداء التراكمي
              <span className="text-[11px] font-normal px-2.5 py-0.5 rounded-full bg-[#214ecf]/20 text-[#84a5f2] border border-[#214ecf]/30">
                {totalAttempts} {totalAttempts === 1 ? 'اختبار منجز' : 'اختبارات منجزة'}
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              متابعة دقيقة لدرجاتك عبر نماذج إتقان المعتمدة لمقرر Evolve 2
            </p>
          </div>
        </div>

        {/* Coverage Pill */}
        <div className="flex items-center gap-2 bg-slate-800/80 px-3.5 py-1.5 rounded-xl border border-slate-700 text-xs">
          <span className="text-slate-400">تغطية النماذج:</span>
          <span className="font-bold font-mono text-[#ea9835]">
            {modelStats.filter((m) => m.hasAttempted).length} / {allModels.length}
          </span>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {/* Average Score */}
        <div className="bg-slate-800/60 rounded-2xl p-4 border border-slate-800 flex items-center justify-between">
          <div>
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              متوسط الدرجات
            </div>
            <div className="text-2xl sm:text-3xl font-black font-mono text-[#84a5f2]">
              {averagePercentage}%
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              {averagePercentage >= 60 ? 'مستوى اجتياز آمن' : 'يحتاج لمزيد من التدريب'}
            </div>
          </div>
          <div className="w-10 h-10 rounded-xl bg-[#214ecf]/20 text-[#84a5f2] flex items-center justify-center border border-[#214ecf]/30">
            <Target className="w-5 h-5" />
          </div>
        </div>

        {/* Best Score */}
        <div className="bg-slate-800/60 rounded-2xl p-4 border border-slate-800 flex items-center justify-between">
          <div>
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              أعلى نتيجة
            </div>
            <div className="text-2xl sm:text-3xl font-black font-mono text-[#ea9835]">
              {bestAttempt ? `${bestAttempt.percentage}%` : '—'}
            </div>
            <div className="text-[11px] text-slate-400 truncate max-w-[140px] mt-1">
              {bestAttempt ? bestAttempt.modelTitle : 'لم يُسجل بعد'}
            </div>
          </div>
          <div className="w-10 h-10 rounded-xl bg-[#ea9835]/20 text-[#ea9835] flex items-center justify-center border border-[#ea9835]/30">
            <Award className="w-5 h-5" />
          </div>
        </div>

        {/* Latest Attempt */}
        <div className="bg-slate-800/60 rounded-2xl p-4 border border-slate-800 flex items-center justify-between">
          <div>
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              آخر محاولة
            </div>
            <div className="text-2xl sm:text-3xl font-black font-mono text-white">
              {latestAttempt ? `${latestAttempt.percentage}%` : '—'}
            </div>
            <div className="text-[11px] text-slate-400 truncate max-w-[140px] mt-1">
              {latestAttempt ? latestAttempt.modelTitle : 'في انتظار البدء'}
            </div>
          </div>
          <div className="w-10 h-10 rounded-xl bg-slate-700/50 text-slate-300 flex items-center justify-center border border-slate-600/50">
            <Clock className="w-5 h-5" />
          </div>
        </div>

        {/* Trend Indicator */}
        <div className="bg-slate-800/60 rounded-2xl p-4 border border-slate-800 flex items-center justify-between">
          <div>
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              منحنى التقدم
            </div>
            <div className="text-sm sm:text-base font-bold text-white mt-1">
              {isImproving ? (
                <span className="text-[#84a5f2] flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" /> تطور مستمر
                </span>
              ) : (
                <span className="text-[#e06045] flex items-center gap-1">
                  <Flame className="w-4 h-4" /> مراجعة مطلوبة
                </span>
              )}
            </div>
            <div className="text-[10.5px] text-slate-400 mt-1 leading-tight">
              {trendText}
            </div>
          </div>
          <div className="w-10 h-10 rounded-xl bg-slate-700/50 text-[#84a5f2] flex items-center justify-center border border-slate-600/50">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Performance Bar Chart Across Exam Models */}
      <div className="bg-slate-800/40 rounded-2xl p-4 sm:p-5 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-slate-300 flex items-center gap-2">
            مخطط مقارنة درجات النماذج (Exam Models Bar Chart)
          </span>
          <div className="flex items-center gap-3 text-[11px] text-slate-400">
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-xs bg-[#214ecf]" />
              النموذج الحالي
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-xs bg-[#84a5f2]" />
              نماذج منجزة
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-xs bg-slate-700" />
              لم يُختبر
            </span>
          </div>
        </div>

        {/* SVG / CSS Bar Chart */}
        <div className="h-48 w-full flex items-end gap-1.5 sm:gap-2.5 pt-4 pb-2 px-1 border-b border-slate-700/60 relative">
          {/* Target 60% Passing Line */}
          <div
            className="absolute left-0 right-0 border-b border-dashed border-[#ea9835]/60 flex items-center justify-end pr-2 pointer-events-none z-10"
            style={{ bottom: '60%' }}
          >
            <span className="text-[10px] font-bold text-[#ea9835] bg-slate-900/95 px-2 py-0.5 rounded-md border border-[#ea9835]/40">
              حد الاجتياز 60%
            </span>
          </div>

          {/* 80% Excellence Line */}
          <div
            className="absolute left-0 right-0 border-b border-dashed border-[#84a5f2]/40 flex items-center justify-end pr-2 pointer-events-none z-10"
            style={{ bottom: '80%' }}
          >
            <span className="text-[9.5px] font-bold text-[#84a5f2] bg-slate-900/95 px-1.5 py-0.5 rounded-sm">
              مستوى التميز 80%
            </span>
          </div>

          {modelStats.map((item) => {
            const pct = item.hasAttempted ? item.latestPercentage : 0;
            const barHeight = item.hasAttempted ? Math.max(pct, 6) : 4;

            let barColor = 'bg-slate-700/40';
            if (item.hasAttempted) {
              if (item.isCurrent) {
                barColor =
                  pct >= 80
                    ? 'bg-gradient-to-t from-[#214ecf] to-[#84a5f2] ring-2 ring-[#84a5f2]'
                    : pct >= 60
                    ? 'bg-gradient-to-t from-[#ea9835] to-[#fcded6] ring-2 ring-[#ea9835]'
                    : 'bg-gradient-to-t from-[#e06045] to-[#ea9835] ring-2 ring-[#e06045]';
              } else {
                barColor =
                  pct >= 80
                    ? 'bg-gradient-to-t from-[#214ecf] to-[#84a5f2]'
                    : pct >= 60
                    ? 'bg-gradient-to-t from-[#214ecf]/80 to-[#84a5f2]/80'
                    : 'bg-gradient-to-t from-slate-600 to-slate-500';
              }
            }

            return (
              <div
                key={item.modelId}
                className="flex-1 flex flex-col items-center h-full justify-end group relative cursor-pointer"
                title={`${item.fullTitle}: ${item.hasAttempted ? `${pct}%` : 'لم يتم تقديمه بعد'}`}
              >
                {/* Floating Tooltip on Hover */}
                <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-slate-950 text-white text-[11px] font-bold py-1 px-2.5 rounded-xl border border-slate-700 shadow-xl whitespace-nowrap z-20">
                  {item.title}: {item.hasAttempted ? `${pct}%` : 'غير مكتمل'}
                </div>

                {/* Percentage above bar */}
                {item.hasAttempted && (
                  <span className="text-[10px] font-bold font-mono text-slate-300 mb-1 group-hover:text-white">
                    {pct}%
                  </span>
                )}

                {/* The Bar */}
                <div
                  className={`w-full max-w-[28px] rounded-t-lg transition-all duration-500 group-hover:brightness-125 ${barColor}`}
                  style={{ height: `${barHeight}%` }}
                />
              </div>
            );
          })}
        </div>

        {/* X-axis Labels */}
        <div className="flex gap-1.5 sm:gap-2.5 px-1">
          {modelStats.map((item) => (
            <div
              key={item.modelId}
              className={`flex-1 text-center text-[10px] sm:text-[11px] font-medium transition-colors ${
                item.isCurrent
                  ? 'text-[#84a5f2] font-black underline decoration-2'
                  : item.hasAttempted
                  ? 'text-slate-200'
                  : 'text-slate-500'
              }`}
            >
              ن{item.index}
            </div>
          ))}
        </div>
      </div>

      {/* Recent Attempts History Timeline */}
      {attempts.length > 0 && (
        <div className="pt-2 border-t border-slate-800">
          <div className="text-xs font-bold text-slate-400 mb-2.5">
            سجل آخر المحاولات التدريبية المكتملة:
          </div>
          <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-thin">
            {[...attempts].reverse().slice(0, 5).map((att, i) => (
              <div
                key={i}
                className="shrink-0 bg-slate-800/80 rounded-xl px-3 py-2 border border-slate-700 text-xs flex items-center gap-2.5"
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    att.percentage >= 80
                      ? 'bg-[#84a5f2]'
                      : att.percentage >= 60
                      ? 'bg-[#ea9835]'
                      : 'bg-[#e06045]'
                  }`}
                />
                <span className="font-bold text-slate-200">{att.modelTitle}</span>
                <span className="font-mono font-bold text-white bg-slate-900 px-1.5 py-0.5 rounded-md text-[11px]">
                  {att.percentage}%
                </span>
                <span className="text-[10px] text-slate-400">
                  {new Date(att.completedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
