import { useState } from "react";

// createQuestion and listQuestions are autogenerated query and mutations functions accessible in the client
import {
  createQuestion,
  listQuestions,
  useAction, // Hook Using ReactQuery in background to send data, and invalidate cache
  useQuery, // Hook Using ReactQuery in background to fetch data
} from "wasp/client/operations";

import { Link } from "wasp/client/router";

export const QuestionForm = () => {
  // The createQuestionFn will be used in our component to send request
  const createQuestionFn = useAction(createQuestion);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // The types are automatically infered, empowering safety
      await createQuestionFn({ title, text: content });
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error creating question:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-lg font-bold">Ask your Question</h3>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Title</span>
        </label>
        <input
          type="text"
          placeholder="Enter the title"
          className="input input-bordered"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Content</span>
        </label>
        <textarea
          placeholder="Enter the content"
          className="textarea textarea-bordered"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className="form-control mt-4">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

const ArrowRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    className="size-6"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
    />
  </svg>
);

const NotFoundQuestions = () => (
  <div className="card bordered min-h-24">
    <div className="card-body text-center">No questions yet.</div>
  </div>
);

export const QuestionsList = () => {
  // Data is fetched from the backend
  const { data: questions, isLoading } = useQuery(listQuestions);

  if (isLoading)
    return <div className="loading loading-spinner loading-lg"></div>;
  if (!questions) return <NotFoundQuestions />;

  return (
    <div className="flex flex-col space-y-4">
      <h3 className="text-lg font-bold">Submitted Questions</h3>
      <div className="flex flex-col space-y-4">
        {questions?.length ? (
          questions.map((question) => (
            <div key={question.id} className="card">
              <div className="card-body">
                <div className="flex justify-between items-center">
                  <h2 className="card-title">{question.title}</h2>
                  <span className="badge badge-primary">
                    {question.answers.length} answers
                  </span>
                </div>
                <p>{question.text}</p>
                <div className="card-actions  justify-between items-center">
                  <span className="text-gray-500">
                    Asked on {question.createdAt.toDateString()}
                  </span>
                  <Link
                    to="/question/:id"
                    params={{ id: question.id }}
                    className="btn  btn-ghost "
                  >
                    View Answers <ArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <NotFoundQuestions />
        )}
      </div>
    </div>
  );
};
