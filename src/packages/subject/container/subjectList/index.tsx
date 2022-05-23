import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { Component } from 'react';
import { useForm } from 'react-hook-form';
import { FormWrapper, SelectField, TextField } from '../../../../core/components/form';
import { Subject, SubjectCategory } from '../../../../core/models/subject';
import { routes } from '../../../../core/routes';
import PaginationBar from '../../../dashboard/components/paginationBar';

interface SubjectListProps {
    currentPage?: number;
    pageSize?: number;
}

const SubjectList: React.FunctionComponent<SubjectListProps> = ({ currentPage, pageSize }) => {
    const [categories, setCategories] = React.useState<SubjectCategory[]>([
        { id: '1', name: 'Javascript' },
        { id: '2', name: 'React' },
        { id: '3', name: 'C#' },
        { id: '4', name: 'Dotnet' },
    ]);
    const [count, setCount] = React.useState<number>(4);
    const [subjects, setSubjects] = React.useState<Subject[]>([
        {
            title: 'Javascript basic',
            id: '1aasd-asdzxc',
            assignTo: 'Trịnh Văn Quyết',
            briefInfo: 'Learn javascript from zero to hero',
            createAt: '5/18/2022',
            description: 'Javascript for newbie',
            subjectCategory: categories[0],
            tagLine: '',
            updateAt: '5/18/2022',
        },
        {
            title: 'Javascript basic',
            id: '1aasd-asdzxc',
            assignTo: 'Trịnh Văn Quyết',
            briefInfo: 'Learn javascript from zero to hero',
            createAt: '5/18/2022',
            description: 'Javascript for newbie',
            subjectCategory: categories[0],
            tagLine: '',
            updateAt: '5/18/2022',
        },
        {
            title: 'Javascript basic',
            id: '1aasd-asdzxc',
            assignTo: 'Trịnh Văn Quyết',
            briefInfo: 'Learn javascript from zero to hero',
            createAt: '5/18/2022',
            description: 'Javascript for newbie',
            subjectCategory: categories[0],
            tagLine: '',
            updateAt: '5/18/2022',
        },
        {
            title: 'Javascript basic',
            id: '1aasd-asdzxc',
            assignTo: 'Trịnh Văn Quyết',
            briefInfo: 'Learn javascript from zero to hero',
            createAt: '5/18/2022',
            description: 'Javascript for newbie',
            subjectCategory: categories[0],
            tagLine: '',
            updateAt: '5/18/2022',
        },
    ]);
    const methods = useForm();

    const _handleOnSubmit = async () => {};

    const router = useRouter();

    return (
        <div className="px-4 space-y-4 sm:px-6 lg:px-4">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Sliders</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all the Sliders in home website including their title, backLink, image and isShow.
                    </p>
                </div>
                <div className="mt-4 space-x-2 sm:mt-0 sm:ml-16 sm:flex-none">
                    <Link href={routes.addSubjectUrl} passHref>
                        <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                            Add Subject
                        </p>
                    </Link>
                </div>
            </div>
            <div>
                <FormWrapper methods={methods}>
                    <form className="space-y-4" onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                        <div className="flex space-x-4">
                            <TextField name="title" label="Title" />
                            <TextField name="createdAt" label="Create From" type={'date'} />
                            <TextField name="Expert" label="Expert" />
                            <SelectField
                                label="Category"
                                values={categories.map((category) => ({ label: category.name, value: category.name }))}
                                name="isShow"
                            />
                            <SelectField
                                label="Active"
                                values={[
                                    { label: 'Active', value: true },
                                    { label: 'Inactive', value: false },
                                ]}
                                name="isActive"
                            />
                        </div>
                        <div className="flex justify-end">
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
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                            Title
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Category
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Info
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Expert
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Activation
                                        </th>
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {Boolean(count && subjects) &&
                                        subjects.map((subject) => (
                                            <tr key={subject.id}>
                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                    <div className="text-gray-900">{subject.title}</div>
                                                    <div className="text-gray-900">{new Date(subject.createAt).toLocaleDateString()}</div>
                                                </td>
                                                <td className="py-4 pl-4 pr-3 whitespace-nowrap sm:pl-6">
                                                    <div className="max-w-sm">
                                                        <div className="text-gray-900">{subject.subjectCategory.name}</div>
                                                    </div>
                                                </td>
                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                    <div className="text-gray-900">{subject.briefInfo}</div>
                                                    <div className="text-gray-900">{subject.description}</div>
                                                </td>
                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                    <div className="text-gray-900">{subject.assignTo}</div>
                                                </td>
                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                    {subject ? (
                                                        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                                                            Active
                                                        </span>
                                                    ) : (
                                                        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-red-800 bg-red-100 rounded-full">
                                                            Inactive
                                                        </span>
                                                    )}
                                                </td>
                                                <td className="relative py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-6">
                                                    <Link href={`${routes.editSubjectUrl}/${subject.id}`} passHref>
                                                        <p className="text-indigo-600 cursor-pointer hover:text-indigo-900">Edit</p>
                                                    </Link>
                                                    <Link href={`${routes.editSubjectUrl}/${subject.id}`} passHref>
                                                        <p className="text-indigo-600 cursor-pointer hover:text-indigo-900">Detail</p>
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <PaginationBar currentPage={Number(1)} numberOfItem={4} pageSize={Number(12)} routeUrl={router.asPath} />
        </div>
    );
};

export default SubjectList;
