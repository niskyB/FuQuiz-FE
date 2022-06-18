import Link from 'next/link';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { FormWrapper, SelectField, TextField } from '../../../../core/components/form';
import { Subject } from '../../../../core/models/subject';
import { routes } from '../../../../core/routes';

interface AddPracticeProps {}

const dimensions = [
    { label: 'Dimension 1', value: 1 },
    { label: 'Dimension 2', value: 2 },
    { label: 'Dimension 3', value: 3 },
];

const AddPractice: React.FunctionComponent<AddPracticeProps> = () => {
    const methods = useForm();
    const [subjects, setSubjects] = React.useState<Pick<Subject, 'name' | 'id'>[]>([]);

    const _handleOnSubmit = async () => {};
    return (
        <div className="flex flex-col justify-center min-h-full py-12 sm:px-6 lg:px-8 intro-y">
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
                    <FormWrapper methods={methods}>
                        <form onSubmit={methods.handleSubmit(_handleOnSubmit)} className="space-y-5">
                            <SelectField
                                name="subject"
                                label="Subject"
                                values={subjects.map((subject) => ({ label: subject.name, value: subject.id }))}
                            />
                            <TextField label="Number of practicing questions" name="numberQuestions" type="number" />
                            <SelectField name="dimension" label="Question are selected by topic(s) or a dimension?" values={dimensions} />
                            <SelectField name="dimension" label="Question group (choose one or all topic/dimension(s))" values={dimensions} />
                            <div className="flex space-x-2">
                                <button
                                    type="submit"
                                    className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Practice
                                </button>
                            </div>
                        </form>
                    </FormWrapper>
                </div>
            </div>
        </div>
    );
};

export default AddPractice;
