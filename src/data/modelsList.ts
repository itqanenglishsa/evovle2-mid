import { ExamModel } from '../types';
import { modelAExam } from './modelAData';
import { modelBExam } from './modelBData';
import { modelCExam, modelDExam, modelEExam } from './models3to5';
import { modelFExam, modelGExam, modelHExam } from './models6to8';
import { modelIExam, modelJExam } from './models9to10';

export const allExamModels: ExamModel[] = [
  modelAExam, // Model 1: أم القرى
  modelBExam, // Model 2: كامبريدج مع الاستماع
  modelCExam, // Model 3: الوحدات 1 و 2
  modelDExam, // Model 4: الوحدات 3 و 4
  modelEExam, // Model 5: الوحدات 5 و 6
  modelFExam, // Model 6: جامعة الملك عبدالعزيز
  modelGExam, // Model 7: جامعة الملك سعود
  modelHExam, // Model 8: جامعة الإمام عبدالرحمن بن فيصل
  modelIExam, // Model 9: نموذج التميز المتقدم
  modelJExam  // Model 10: الاختبار الشامل النهائي
];

export const getExamModelById = (id: string): ExamModel => {
  const found = allExamModels.find((m) => m.id === id);
  return found || allExamModels[0];
};
