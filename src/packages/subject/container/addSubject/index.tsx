import Link from 'next/link';
import * as React from 'react';
import { Component } from 'react';
import { useForm } from 'react-hook-form';
import { useGetListWithCount } from '../../../../core/common/hooks';
import { FileField, FormWrapper, SelectField, TextField } from '../../../../core/components/form';
import { TextareaField } from '../../../../core/components/form/textareaField';
import { SubjectCategory } from '../../../../core/models/subject';
import { routes } from '../../../../core/routes';
import { AddSubjectDTO } from './interface';

interface AddSubjectProps {}

const mapFields = [
    { label: 'Title', name: 'title' },
    { label: 'Expert', name: 'assignTo' },
];
const defaultValues: AddSubjectDTO = {
    assignTo: '',
    category: '',
    description: '',
    image: null,
    name: '',
    tagLine: '',
};
const AddSubject: React.FunctionComponent<AddSubjectProps> = () => {
    const [file, setFile] = React.useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = React.useState<string>('');

    const [categories, setCategories] = React.useState<SubjectCategory[]>([
        { id: '1', name: 'Javascript' },
        { id: '2', name: 'React' },
        { id: '3', name: 'C#' },
        { id: '4', name: 'Dotnet' },
    ]);

    const methods = useForm<AddSubjectDTO>({
        defaultValues,
    });

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
                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="title" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Title
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <TextField label="" name="title" type="text" />
                                </div>
                            </div>
                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="tagLine" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Tag line
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <TextField label="" name="tagLine" type="text" />
                                </div>
                            </div>
                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="category" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Category
                                </label>
                                <SelectField
                                    label=""
                                    values={categories.map((category) => ({ label: category.name, value: category.name }))}
                                    name="category"
                                />
                            </div>
                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="assignTo" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Assign to
                                </label>
                                <SelectField
                                    label=""
                                    values={categories.map((category) => ({ label: category.name, value: category.name }))}
                                    name="assignTo"
                                />
                            </div>

                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="briefInfo" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Description
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <TextareaField label="" name="description" />
                                </div>
                            </div>
                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="briefInfo" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Thumbnail
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <FileField
                                        file={file}
                                        label=""
                                        name="image"
                                        previewUrl={previewUrl}
                                        setFile={setFile}
                                        setPreviewUrl={setPreviewUrl}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-5">
                    <div className="flex justify-end">
                        <Link href={routes.adminSubjectListUrl} passHref>
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
