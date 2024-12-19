import { type CreateQuestion } from "wasp/server/operations"
import { type Question } from "wasp/entities"

export const createQuestion: CreateQuestion<Pick<Question, 'text' | 'title'>, Question> = async ({ text, title }, context) => {
    return context.entities.Question.create({ data: { text, title } })
}