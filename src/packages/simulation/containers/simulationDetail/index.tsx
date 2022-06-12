import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { FormWrapper, SelectField, TextField } from '../../../../core/components/form';
import { Answer, Question } from '../../../../core/models/question';
import { routes } from '../../../../core/routes';
import { PaginationBar } from '../../../dashboard';
import ReviewQuestion from '../../components/reviewQuestion';

interface SimulationDetailProps {
    quizId: string;
}

const SimulationDetail: React.FunctionComponent<SimulationDetailProps> = ({ quizId }) => {
    const router = useRouter();

    const cloneAnswers: Answer[] = [
        { id: '1', answerContent: 'Answer 1' },
        { id: '2', answerContent: 'Answer 2' },
        { id: '3', answerContent: 'Answer 3' },
        { id: '4', answerContent: 'Answer 4' },
    ];

    const generateQuiz = async () => {
        // generate simulation quiz in backend base on quiz review Id
        const id = '123-asz-zas';
        router.push(routes.quizUrl + `/${id}`);
    };

    const [questions, setQuestions] = React.useState<Question[]>([
        {
            id: 'q1',
            answers: cloneAnswers,
            content: 'Content 1',
            isActive: true,
            dimension: { id: '', description: '', name: 'Domain 1', typeId: { id: '1', name: '' } },
        },
        {
            id: 'q2',
            answers: cloneAnswers,
            content: 'Content 2',
            isActive: true,
            dimension: { id: '', description: '', name: 'Domain 2', typeId: { id: '1', name: '' } },
        },
        {
            id: 'q3',
            answers: cloneAnswers,
            content: 'Content 3',
            isActive: true,
            dimension: { id: '', description: '', name: 'Domain 3', typeId: { id: '1', name: '' } },
        },
        {
            id: 'q4',
            answers: cloneAnswers,
            content: 'Content 4',
            isActive: true,
            dimension: { id: '', description: '', name: 'Domain 4', typeId: { id: '1', name: '' } },
        },
        {
            id: 'q5',
            answers: cloneAnswers,
            content: 'Content 5',
            isActive: true,
            dimension: { id: '', description: '', name: 'Domain 5', typeId: { id: '1', name: '' } },
        },
    ]);
    const [count, setCount] = React.useState<number>(4);

    return (
        <>
            <div className="px-4 space-y-4 sm:px-6 lg:px-4">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-xl font-semibold text-gray-900">Questions</h1>
                        <p className="mt-2 text-sm text-gray-700">
                            A list of all question in current quiz including Question and answer before attend.
                        </p>
                    </div>
                    <div className="mt-4 space-x-2 sm:mt-0 sm:ml-16 sm:flex-none">
                        <button
                            onClick={() => generateQuiz()}
                            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                        >
                            Attend now
                        </button>
                    </div>
                </div>

                <div className="flex flex-col space-y-4">
                    {questions.map((question, index) => (
                        <ReviewQuestion key={question.id} question={question} index={index} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default SimulationDetail;
