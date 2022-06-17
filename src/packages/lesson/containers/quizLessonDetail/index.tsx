import * as React from 'react';
import { useFormContext } from 'react-hook-form';
import { QuillInput, SelectField, TextField } from '../../../../core/components/form';
import { Answer } from '../../../../core/models/question';

interface QuizLessonDetailProps {}

const QuizLessonDetail: React.FunctionComponent<QuizLessonDetailProps> = () => {
    const [details, setDetails] = React.useState('');

    const [answers, setAnswers] = React.useState<Answer[]>([
        { id: '1', details: 'Answer 1' },
        { id: '2', details: 'Answer 2' },
        { id: '3', details: 'Answer 3' },
        { id: '4', details: 'Answer 4' },
    ]);

    const { register } = useFormContext();
    return (
        <div className="mt-6 space-y-6 sm:mt-5 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    Content
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <textarea
                        {...register('content')}
                        rows={7}
                        name="content"
                        id="content"
                        autoComplete="given-name"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    Dimension
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <SelectField
                        label=""
                        name="dimension"
                        values={[
                            { label: 'Domain 1', value: '1' },
                            { label: 'Domain 2', value: '2' },
                            { label: 'Domain 3', value: '3' },
                            { label: 'Domain 4', value: '4' },
                        ]}
                    />
                </div>
            </div>
            {answers.map((answer, index) => (
                <div key={answer.id} className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                        Answer {index + 1}
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <TextField label="" name="title" />
                    </div>
                </div>
            ))}
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    Right Answer
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <SelectField label="" name="rightAnswer" values={answers.map((answer) => ({ label: `Answer ${answer.id}`, value: answer.id }))} />
                </div>
            </div>
        </div>
    );
};

export default QuizLessonDetail;
