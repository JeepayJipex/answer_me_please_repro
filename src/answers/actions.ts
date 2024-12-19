import { Answer } from "wasp/entities"
import { CreateAnswer } from "wasp/server/operations"

export const createAnswer: CreateAnswer<Pick<Answer, 'text' | 'questionId' | 'title' >, Answer> = async ({ text, questionId, title }, context) => {
    return await context.entities.Answer.create({ data: { text, questionId,  title } })
}