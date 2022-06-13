import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { FormWrapper, SelectField, TextField } from '../../../../core/components/form';
import { Table, TableDescription, TableHead, TableRow } from '../../../../core/components/table';
import { TableBody } from '../../../../core/components/table/tableBody';
import { Answer, Question } from '../../../../core/models/question';
import { routes } from '../../../../core/routes';
import { checkFileType } from '../../../../core/util/file';
import { RedStar } from '../../../store';

interface AddQuizProps {}

const mapFields = [{ label: 'Name', name: 'name' }];

export const AddQuiz: React.FunctionComponent<AddQuizProps> = () => {
    const [imageUrl, setImageUrl] = React.useState<string>('');
    const cloneAnswers: Answer[] = [{ id: '1', answerContent: 'Answer 1' }];
    const [questions, setQuestions] = React.useState<Question[]>([
        {
            id: 'q1',
            answers: cloneAnswers,
            content: 'Question 1',
            isActive: true,
            // lessonAttribute: { id: 'l1', name: 'Quiz' },
            dimension: { id: '', description: '', name: 'Domain 1', type: { id: '1', name: '' } },
        },
        {
            id: 'q2',
            answers: cloneAnswers,
            content:
                ' keyboard drive trace initiative pakistan neural-net avon sdd face calculate throughput grey vortals officer generating bedfordshire firewall heights efficient synthesizing liberia green customer-focused metrics programming account card action-items soft accounts integration central loan garden buckinghamshire investment personal fish parkway copying encoding rustic the analyst disintermediate integrated rue xss technician alarm crossing purple planner mindshare synthesize copying solution data well-modulated orchid account optical capacitor neural research online unleash bluetooth way purple transition ai jordan divide reciprocal full-range international schemas homogeneous initiative circuit avon salad leading-edge pink up algorithm synthesizing avon deposit copying tennessee action-items copy frictionless deposit global bypass bypassing health sas hard auto mouse bedfordshire portals maximized withdrawal assurance portal optical money deposit pizza account adp cuban yemen nevada franc unleash profound online montana auxiliary sharable oregon multi-state xml sql birr personal belize optimization product sausages borders sausages belize gb franc haptic experiences loan chips zloty demand-driven rubber payment multi-layered intuitive pennsylvania rubber somoni china buckinghamshire architect self-enabling web-enabled soft compelling wireless shoes slovakia administrator back-end json square contextually-based magenta unit chips euro soft dinar 24/365 quantifying parsing vermont island array adapter cross-platform green australian azure impactful ghana generating neural tan silver sdd olive ergonomic tasty assurance synthesize synergize invoice',
            isActive: true,
            // lessonAttribute: { id: 'l2', name: 'Quiz' },
            dimension: { id: '', description: '', name: 'Domain 2', type: { id: '1', name: '' } },
        },
        {
            id: 'q3',
            answers: cloneAnswers,
            content: 'Question 3',
            isActive: true,
            // lessonAttribute: { type: { id: 'l3', name: 'Quiz' } },
            dimension: { id: '', description: '', name: 'Domain 3', type: { id: '1', name: '' } },
        },
        {
            id: 'q4',
            answers: cloneAnswers,
            content: 'Question 4',
            isActive: true,
            // lessonAttribute: { id: 'l4', name: 'Quiz' },
            dimension: { id: '', description: '', name: 'Domain 4', type: { id: '1', name: '' } },
        },
    ]);

    const methods = useForm();
    const router = useRouter();

    const _handleOnSubmit = async () => {};

    return (
        <FormWrapper methods={methods}>
            <form className="space-y-8 divide-y divide-gray-200 " onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-2xl font-medium leading-6 text-gray-900">Adding Quiz</h1>
                            <p className="max-w-2xl mt-1 text-xl text-gray-500">This page will be add new quiz</p>
                        </div>
                        <div className="w-full mt-6 space-y-6 sm:max-w-3xl sm:mt-5 sm:space-y-5">
                            <div>
                                <h2 className="text-lg font-medium leading-6 text-gray-900">Overview</h2>
                                <p className="max-w-2xl mt-1 text-sm text-gray-500">General quiz setting</p>
                            </div>
                            {mapFields.map((item) => (
                                <div
                                    key={item.name}
                                    className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                                >
                                    <div className="flex justify-start space-x-2">
                                        <label htmlFor="about" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                            {item.label}
                                        </label>
                                        <RedStar />
                                    </div>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <TextField label="" name={item.name} type="text" />
                                    </div>
                                </div>
                            ))}
                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="content" className="flex space-x-2 text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    <p>Subject</p>
                                    <RedStar />
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <SelectField
                                        label=""
                                        name="dimension"
                                        values={[
                                            { label: 'Subject 1', value: '1' },
                                            { label: 'Subject 2', value: '2' },
                                        ]}
                                    />
                                </div>
                            </div>
                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="content" className="flex space-x-2 text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    <p>Exam level</p>
                                    <RedStar />
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <SelectField
                                        label=""
                                        name="dimension"
                                        values={[
                                            { label: 'Easy', value: '1' },
                                            { label: 'Medium', value: '2' },
                                        ]}
                                    />
                                </div>
                            </div>
                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <div className="flex justify-start space-x-2">
                                    <label htmlFor="about" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Duration (minutes)
                                    </label>
                                    <RedStar />
                                </div>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <TextField label="" name={'Duration'} type="number" min={0} />
                                </div>
                            </div>
                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <div className="flex justify-start space-x-2">
                                    <label htmlFor="about" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Pass rate
                                    </label>
                                    <RedStar />
                                </div>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <TextField label="" name={'passRate'} type="number" min={0} max={100} />
                                </div>
                            </div>
                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="content" className="flex space-x-2 text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    <p>Quiz Type</p>
                                    <RedStar />
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <SelectField
                                        label=""
                                        name="dimension"
                                        values={[
                                            { label: 'Simulation', value: '1' },
                                            { label: 'Practice', value: '2' },
                                        ]}
                                    />
                                </div>
                            </div>
                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <div className="flex justify-start space-x-2">
                                    <label htmlFor="about" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Number of questions
                                    </label>
                                    <RedStar />
                                </div>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <TextField label="" name={'numberOfQuestion'} type="number" min={1} />
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-6 space-y-6 sm:mt-5 sm:space-y-5">
                            <div className="space-y-4 ">
                                <div>
                                    <h2 className="text-lg font-medium leading-6 text-gray-900">Setting</h2>
                                    <p className="flex max-w-2xl mt-1 text-sm text-gray-500">
                                        Choose question for quiz <p className="ml-1 font-semibold text-red-600">(will reset if change subject)</p>
                                    </p>
                                </div>

                                <div>
                                    <FormWrapper methods={methods}>
                                        <form className="space-y-4" onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                                            <div className="flex flex-col space-y-2">
                                                <div className="flex space-x-4">
                                                    <SelectField
                                                        require={false}
                                                        label="Lesson"
                                                        values={[
                                                            { label: 'Lesson 1', value: '1' },
                                                            { label: 'Lesson 2', value: '2' },
                                                            { label: 'Lesson 3', value: '3' },
                                                            { label: 'Lesson 4', value: '4' },
                                                        ]}
                                                        name="lesson"
                                                    />
                                                    <SelectField
                                                        require={false}
                                                        label="Dimension"
                                                        values={[
                                                            { label: 'Dimension 1', value: '1' },
                                                            { label: 'Dimension 2', value: '2' },
                                                            { label: 'Dimension 3', value: '3' },
                                                            { label: 'Dimension 4', value: '4' },
                                                        ]}
                                                        name="dimension"
                                                    />
                                                    <SelectField
                                                        require={false}
                                                        label="Level"
                                                        values={[
                                                            { label: 'Easy', value: '1' },
                                                            { label: 'Dimension 2', value: '2' },
                                                            { label: 'Dimension 3', value: '3' },
                                                        ]}
                                                        name="Level"
                                                    />
                                                    <TextField name="content" label="Content" require={false} />
                                                </div>
                                            </div>
                                            <div className="flex justify-end space-x-2">
                                                <button
                                                    type="submit"
                                                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                                >
                                                    Reset
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                >
                                                    Search
                                                </button>
                                            </div>
                                        </form>
                                    </FormWrapper>
                                </div>
                                <div className="flex flex-col mt-8">
                                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                                <Table>
                                                    <TableHead fields={['Lesson', 'Dimension', 'Content', 'Level', 'Choose question']} />

                                                    <TableBody>
                                                        {Boolean(questions) &&
                                                            questions.map((question, index) => (
                                                                <TableRow key={question.id}>
                                                                    <TableDescription>
                                                                        <div className="text-gray-900">Lesson 1</div>
                                                                    </TableDescription>
                                                                    <TableDescription>
                                                                        <div className="text-gray-900">{question.dimension.name}</div>
                                                                    </TableDescription>
                                                                    <TableDescription>
                                                                        <p className="w-full text-gray-900 break-normal line-clamp-4">
                                                                            {question.content}
                                                                        </p>
                                                                    </TableDescription>
                                                                    <TableDescription>Easy</TableDescription>

                                                                    <TableDescription>
                                                                        <input name="questions" type={`checkbox`} />
                                                                    </TableDescription>
                                                                </TableRow>
                                                            ))}
                                                    </TableBody>
                                                </Table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between pt-5">
                    <p className="mt-2 font-semibold text-red-500 text">Choose Questions: 2/60</p>
                    <div className="flex">
                        <Link href={routes.adminSliderListUrl} passHref>
                            <p className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Cancel
                            </p>
                        </Link>
                        <button
                            disabled={true}
                            type="submit"
                            className="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Add
                        </button>
                    </div>
                </div>
            </form>
        </FormWrapper>
    );
};
