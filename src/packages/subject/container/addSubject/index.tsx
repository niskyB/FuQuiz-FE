import Link from 'next/link';
import * as React from 'react';
import { Component } from 'react';
import { useForm } from 'react-hook-form';
import { FormWrapper, SelectField, TextField } from '../../../../core/components/form';
import { SubjectCategory } from '../../../../core/models/subject';
import { routes } from '../../../../core/routes';

interface AddSubjectProps {}

const mapFields = [
    { label: 'Title', name: 'title' },
    { label: 'Expert', name: 'assignTo' },
];

const AddSubject: React.FunctionComponent<AddSubjectProps> = () => {
    const [categories, setCategories] = React.useState<SubjectCategory[]>([
        { id: '1', name: 'Javascript' },
        { id: '2', name: 'React' },
        { id: '3', name: 'C#' },
        { id: '4', name: 'Dotnet' },
    ]);

    const methods = useForm();

    const _handleOnSubmit = async () => {};

    return (
        <FormWrapper methods={methods}>
            <form className="space-y-8 divide-y divide-gray-200" onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                    <div>
                        <div>
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Adding Subject</h3>
                            <p className="max-w-2xl mt-1 text-sm text-gray-500">This page will be add new subject</p>
                        </div>

                        <div className="w-full mt-6 space-y-6 sm:max-w-3xl sm:mt-5 sm:space-y-5">
                            {mapFields.map((item) => (
                                <div
                                    key={item.name}
                                    className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                                >
                                    <label htmlFor="about" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        {item.label}
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <TextField label="" name={item.name} type="text" />
                                    </div>
                                </div>
                            ))}
                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="about" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Category
                                </label>
                                <SelectField
                                    label=""
                                    values={categories.map((category) => ({ label: category.name, value: category.name }))}
                                    name="isShow"
                                />
                            </div>
                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="briefInfo" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Brief Info
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <textarea
                                        {...methods.register('briefInfo')}
                                        rows={7}
                                        name="briefInfo"
                                        id="briefInfo"
                                        autoComplete="given-name"
                                        className="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="briefInfo" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Description
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <textarea
                                        {...methods.register('Description')}
                                        rows={7}
                                        name="briefInfo"
                                        id="briefInfo"
                                        autoComplete="given-name"
                                        className="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-5">
                    <div className="flex justify-end">
                        <Link href={routes.subjectListUrl} passHref>
                            <p className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Cancel
                            </p>
                        </Link>
                        <button
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

export default AddSubject;
