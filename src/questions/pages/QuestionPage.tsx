import { useParams } from "react-router-dom";
import { getQuestion, useQuery } from "wasp/client/operations";
// Empower safe navigation with typescript infered routes
import { Link } from "wasp/client/router";
import { Navbar } from "../../app/components/Navbar";
import {
  QuestionAnswersList,
  SubmitAnswer,
} from "../../answers/components/AnswerComponents";

export function QuestionPage() {
  const { id } = useParams();

  // Note how the parameters are automatically infered
  const { data: question, isLoading } = useQuery(getQuestion, {
    id: id as string,
  });
  if (isLoading)
    return <div className="loading loading-spinner loading-lg"></div>;
  if (!question) return <div>Question not found</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Navbar />
      <div className="px-6 mb-10">
        <Link to="/" className="btn btn-ghost flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Go Back
        </Link>

        <div className="flex items-center space-x-4 mb-6 pt-0-10">
          <div className="h-16 w-16 aspect-square uppercase rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-xl font-bold">
            ?
          </div>
          <div>
            <h1 className="text-2xl font-bold">{question.title}</h1>
            <p className="text-gray-500">
              Asked on {new Date(question.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
        <p className="my-6">{question.text}</p>
        <div className="divider">Answers ({question.answers.length})</div>

        <div className="space-y-6">
          <QuestionAnswersList answers={question.answers} />
          <div className="mt-8">
            <SubmitAnswer questionId={question.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
