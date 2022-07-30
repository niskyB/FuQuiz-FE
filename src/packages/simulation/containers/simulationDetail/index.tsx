import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { toast } from 'react-toastify';
import { routes } from '../../../../core/routes';
import { useGetQuizById } from '../../../quiz/common/hooks/useGetQuizById';
import { ReviewQuestion } from '../../components/reviewQuestion';
import { quizGeneration } from './action';

interface SimulationDetailProps {
    quizId: string;
}

export const SimulationDetail: React.FunctionComponent<SimulationDetailProps> = ({ quizId }) => {
    const router = useRouter();

    const { quiz } = useGetQuizById(quizId);

    const handleGenerateQuiz = async () => {
        quizGeneration(quizId)
            .then((res) => {
                toast.success('Attend success');
                router.push(`${routes.quizUrl}/${res}`);
            })
            .catch(() => {
                toast.warning('Something wrong');
            });
    };

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
                    <div className="flex space-x-2">
                        <Link href={routes.simulationListUrl} passHref>
                            <div className="mt-4 space-x-2 sm:mt-0 sm:ml-16 sm:flex-none">
                                <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto">
                                    Simulation List
                                </button>
                            </div>
                        </Link>
                        <div className="mt-4 space-x-2 sm:mt-0 sm:ml-16 sm:flex-none">
                            <button
                                onClick={() => handleGenerateQuiz()}
                                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                            >
                                Attend now
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col space-y-4">
                    {quiz?.questions.map((question, index) => (
                        <ReviewQuestion key={question.id} question={question} index={index} />
                    ))}
                </div>
            </div>
        </>
    );
};
