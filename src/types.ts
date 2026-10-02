export type SectionType = 'listening' | 'vocabulary' | 'grammar' | 'reading';

export interface QuestionOption {
  id: string; // 'A' | 'B' | 'C' | 'D'
  text: string;
}

export interface Question {
  id: number;
  section: SectionType;
  questionNumber: number;
  prompt?: string;
  text?: string;
  options: QuestionOption[];
  correctAnswer: string; // 'A' | 'B' | 'C' | 'D'
  unitReference?: string; // e.g. "Unit 1: Making connections"
  unit?: string;
  ruleCategory?: string; // e.g. "Present Simple Negatives", "Food Adjectives"
  ruleOrTopic?: string;
  explanationEn: string;
  explanationAr: string;
  passageId?: string;
  audioTrackId?: string;
}

export interface ReadingPassage {
  id: string;
  title: string;
  content: string[];
  speakers?: { speaker: string; text: string }[];
}

export interface ListeningTrack {
  id: string;
  title: string;
  description?: string;
  durationSeconds?: number;
  script?: string;
  transcript?: string;
  audioUrl?: string;
}

export interface WritingTask {
  id: string;
  title: string;
  prompt: string;
  instructions: string;
  targetWordCount: { min: number; max: number };
  bulletPoints: { id: number; text: string; correctOrder: number }[];
  sampleModelAnswer: string;
  modelAnswerBreakdown: { title: string; explanation: string }[];
  scoringRubric: { criterion: string; points: number; description: string }[];
}

export interface ExamModel {
  id: string;
  title: string;
  subtitle: string;
  university: string;
  courseCode: string; // e.g. "ELCE 1201 / Evolve 2"
  term: string; // "First Semester Midterm Exam"
  totalQuestions: number;
  timeLimitMinutes: number;
  passages?: Record<string, ReadingPassage>;
  listeningTracks?: Record<string, ListeningTrack>;
  questions: Question[];
  writingTask?: WritingTask;
}

export interface ExamState {
  answers: Record<number, string>; // questionId -> optionId
  flagged: Record<number, boolean>;
  timeRemainingSeconds: number;
  isSubmitted: boolean;
  startedAt: number;
  submittedAt?: number;
}

export interface ExamAttemptRecord {
  modelId: string;
  modelTitle: string;
  score: number;
  total: number;
  percentage: number;
  completedAt: string;
}

