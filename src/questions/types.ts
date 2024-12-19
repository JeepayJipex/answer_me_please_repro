import { Answer, Question } from "wasp/entities";

export type QuestionWithAnswers = Question & { answers: Answer[] }