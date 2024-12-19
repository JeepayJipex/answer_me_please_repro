import { GetQuestion, type ListQuestions } from "wasp/server/operations"
import { QuestionWithAnswers } from "./types";

export const listQuestions: ListQuestions<{ userId: string }, QuestionWithAnswers[]> = async ({ userId }, context) => {
    return context.entities.Question.findMany({
        include: {
            answers: true
        }
    })
}

export const getQuestion: GetQuestion<{ id: string }, QuestionWithAnswers> = async ({ id }, context) => {
    return context.entities.Question.findUniqueOrThrow({
        where: { id },
        include: {
            answers: true
        }
    });
}