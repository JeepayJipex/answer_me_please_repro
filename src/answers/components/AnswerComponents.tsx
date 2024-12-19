import { useState } from 'react';
import { createAnswer, useAction } from 'wasp/client/operations';
import { Answer } from 'wasp/entities';

export const SubmitAnswer = ({ questionId }: { questionId: string }) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const submitAnswer = useAction(createAnswer);
  
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

      await submitAnswer({ title, text, questionId });
    setTitle('');
    setText('');
  };
    

    const submitDisabled = !title.trim() || !text.trim();
  
  return (
    <form onSubmit={onSubmit} className="card w-full rounded-lg shadow-md p-6">
          <fieldset className="card-body">

          <div className='grid gap-2 w-full'>
        <h3 className="text-lg font-semibold text-base-content/70 mb-6">Submit Your Answer</h3>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Answer Title"
          className="input input-bordered w-full"
        />
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your answer..."
          className="textarea textarea-bordered w-full h-32 resize-none"
        />
        <div className="flex justify-end">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={submitDisabled}
          >
            Post Answer
          </button>
        </div>
      </div>
      </fieldset>
    </form>
  );
};



export const AnswerItem = ({ answer }: {answer: Answer}) => {
    return (
        <div className="card shadow-md">
            <div className="card-body">
                <div className="flex items-start gap-4">
                    <div className="h-10 w-10 aspect-square uppercase rounded-full bg-gradient-to-r from-gray-800 to-gray-500 flex items-center justify-center text-white font-bold">
                        {'✍️'}
                    </div>
                    <div className="flex-grow">
                        <h3 className="font-bold text-lg mb-2">{answer.title}</h3>
                        <p className="text-gray-600 mb-4">{answer.text}</p>
                        <div className="flex justify-between items-center text-sm text-gray-500">
                            <span>Answered on {new Date(answer.createdAt).toLocaleDateString()}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const QuestionAnswersList = ({ answers }: {answers: Answer[]}) => {
    return (
        <div className="space-y-4">
            {answers.map((answer) => (
                <AnswerItem key={answer.id} answer={answer} />
            ))}
        </div>
    );
};