import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Volume2, Eye, EyeOff, Gauge } from 'lucide-react';
import { ListeningTrack } from '../types';

interface AudioPlayerProps {
  track: ListeningTrack;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ track }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackRate, setPlaybackRate] = useState<number>(1.0);
  const [showScript, setShowScript] = useState(false);
  const [progress, setProgress] = useState(0);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;
    }
    return () => {
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    };
  }, []);

  const handlePlayPause = () => {
    if (!synthRef.current) return;

    if (isPlaying) {
      synthRef.current.pause();
      setIsPlaying(false);
    } else {
      if (synthRef.current.paused) {
        synthRef.current.resume();
        setIsPlaying(true);
      } else {
        synthRef.current.cancel();
        const scriptText = track.script || track.transcript || '';
        const utterance = new SpeechSynthesisUtterance(scriptText);
        utterance.rate = playbackRate;
        utterance.lang = 'en-US';

        utterance.onstart = () => setIsPlaying(true);
        utterance.onend = () => {
          setIsPlaying(false);
          setProgress(100);
        };
        utterance.onerror = () => setIsPlaying(false);

        utteranceRef.current = utterance;
        synthRef.current.speak(utterance);
      }
    }
  };

  const handleRestart = () => {
    if (!synthRef.current) return;
    synthRef.current.cancel();
    setIsPlaying(false);
    setProgress(0);
    setTimeout(() => {
      handlePlayPause();
    }, 100);
  };

  const cycleRate = () => {
    const rates = [0.85, 1.0, 1.2];
    const nextRate = rates[(rates.indexOf(playbackRate) + 1) % rates.length];
    setPlaybackRate(nextRate);
    if (isPlaying && synthRef.current) {
      synthRef.current.cancel();
      const scriptText = track.script || track.transcript || '';
      const utterance = new SpeechSynthesisUtterance(scriptText);
      utterance.rate = nextRate;
      utterance.lang = 'en-US';
      utterance.onend = () => setIsPlaying(false);
      synthRef.current.speak(utterance);
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white rounded-3xl p-5 sm:p-6 shadow-xl border border-[#214ecf]/30 mb-6">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-[#214ecf]/25 border border-[#214ecf]/40 flex items-center justify-center text-[#84a5f2] shadow-inner">
            <Volume2 className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-[#84a5f2] font-bold">
              Listening Comprehension Track • المقطع الصوتي
            </div>
            <h3 className="text-base font-bold text-white mt-0.5">{track.title}</h3>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={cycleRate}
            className="px-2.5 py-1 text-xs font-semibold rounded-xl bg-slate-800 hover:bg-slate-700 text-[#84a5f2] border border-slate-700 flex items-center gap-1 transition-colors cursor-pointer"
            title="Change audio playback speed"
          >
            <Gauge className="w-3.5 h-3.5" />
            {playbackRate}x Speed
          </button>
          <button
            onClick={() => setShowScript(!showScript)}
            className="px-3 py-1 text-xs font-semibold rounded-xl bg-[#214ecf]/20 hover:bg-[#214ecf]/30 text-[#84a5f2] border border-[#214ecf]/40 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            {showScript ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            {showScript ? 'إخفاء النص' : 'عرض نص الاستماع'}
          </button>
        </div>
      </div>

      <p className="text-xs text-slate-300 mb-4 leading-relaxed">{track.description}</p>

      {/* Audio Wave & Controls */}
      <div className="bg-slate-950/70 rounded-2xl p-3.5 border border-slate-800 flex flex-col sm:flex-row items-center gap-4">
        <div className="flex items-center gap-2">
          <button
            onClick={handlePlayPause}
            className="w-11 h-11 rounded-full bg-[#214ecf] hover:bg-[#1a3fa8] text-white font-bold flex items-center justify-center shadow-md transition-transform active:scale-95 cursor-pointer"
            aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
          >
            {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
          </button>
          <button
            onClick={handleRestart}
            className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
            title="Restart from beginning"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* Animated Sound Wave Indicator */}
        <div className="flex-1 w-full flex items-center gap-1.5 h-8 px-2 overflow-hidden">
          {[40, 65, 85, 30, 95, 70, 50, 80, 45, 90, 60, 35, 75, 100, 55, 30, 85, 60, 40, 95, 50, 70].map((height, i) => (
            <span
              key={i}
              className={`flex-1 rounded-full transition-all duration-300 ${
                isPlaying
                  ? 'bg-[#84a5f2] animate-pulse'
                  : 'bg-slate-700'
              }`}
              style={{
                height: isPlaying ? `${Math.max(20, (height * (1 + (i % 3) * 0.2)) % 100)}%` : '20%',
                animationDelay: `${i * 70}ms`
              }}
            />
          ))}
        </div>

        <div className="text-xs font-mono text-slate-400 shrink-0">
          {isPlaying ? 'Playing Audio Track...' : 'Paused'}
        </div>
      </div>

      {/* Optional Transcript */}
      {showScript && (
        <div className="mt-4 pt-4 border-t border-slate-800/80">
          <div className="text-xs font-bold text-[#84a5f2] uppercase tracking-wider mb-2 flex items-center justify-between">
            <span>Audio Transcript (نص المحادثة بالإنجليزية):</span>
            <span className="text-[11px] font-normal text-slate-400">Listen carefully and identify keywords</span>
          </div>
          <div className="text-xs leading-relaxed text-slate-200 bg-slate-900/90 rounded-xl p-4 border border-slate-800 whitespace-pre-line font-mono max-h-48 overflow-y-auto">
            {track.script || track.transcript}
          </div>
        </div>
      )}
    </div>
  );
};
