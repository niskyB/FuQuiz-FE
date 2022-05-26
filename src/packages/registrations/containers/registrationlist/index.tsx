import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { FormWrapper, SelectField, TextField } from '../../../../core/components/form';

import { Registration } from '../../../../core/models/registration';
import { UserRole } from '../../../../core/models/role';
import { Gender } from '../../../../core/models/user';
import { routes } from '../../../../core/routes';
import { PaginationBar } from '../../../dashboard';

interface RegistrationListProps {
    currentPage?: number;
    pageSize?: number;
}

const RegistrationsList: React.FunctionComponent<RegistrationListProps> = ({ currentPage, pageSize }) => {
    const methods = useForm();

    const router = useRouter();

    const [registrations, setRegistrations] = React.useState<Registration[]>([
        {
            id: '1asdasd-asdzv-azsde4',
            email: 'hoanglocst900@gmail.com',
            registrationTime: '23/5/2022',
            subject: {
                id: 'asdasd-123as-123aasd',
                title: 'Subject 1',
                tagLine: 'Tag Line',
                description: 'Description 1',
                subjectCategory: {
                    id: 'asdasd-asda1-123',
                    name: 'Category 1',
                },
                thumbnailUrl: '',
                createAt: '14/5/2022',
                updateAt: '14/5/2022',
                assignTo: {
                    id: 'asdasd-aczxzx-zcbv',
                    typeId: '123',
                    fullName: 'Nguyen Hoang Loc',
                    password: '',
                    email: 'locnhse1500572fpt.edu.vn',
                    gender: Gender.MALE,
                    mobile: '08312311223',
                    token: '',
                    isActive: true,
                    createAt: '11/5/2022',
                    updateAt: '11/5/2022',
                    role: { id: 'asa-123a-asd', name: UserRole.ADMIN },
                    imageUrl: '',
                },
            },
            package: {
                id: '123-123-123',
                originalPrice: 600000,
                lesson: {
                    id: '123-432-323',
                    name: 'Lesson 1',
                    createAt: '13/5/2022',
                    lessonType: { id: 'mznz-mvakf', name: 'Type 1' },
                    updateAt: '13/5/2022',
                    isActive: true,
                },
                name: 'Package 1',
                duration: 3,
                isActive: true,
                updateAt: '13/5/2022',
                createAt: '13/5/2022',
                salePrice: 500000,
            },
            totalCost: 500000,
            status: true,
            validForm: '23/5/2022',
            validTo: '23/8/2022',
        },
        {
            id: '1asdasd-asdzv-azsde4',
            email: 'hoanglocst900@gmail.com',
            registrationTime: '23/5/2022',
            subject: {
                id: 'asdasd-123as-123aasd',
                title: 'Subject 1',
                tagLine: 'Tag Line',
                description: 'Description 1',
                subjectCategory: {
                    id: 'asdasd-asda1-123',
                    name: 'Category 1',
                },
                thumbnailUrl: '',
                createAt: '14/5/2022',
                updateAt: '14/5/2022',
                assignTo: {
                    id: 'asdasd-aczxzx-zcbv',
                    typeId: '123',
                    fullName: 'Nguyen Hoang Loc',
                    password: '',
                    email: 'locnhse1500572fpt.edu.vn',
                    gender: Gender.MALE,
                    mobile: '08312311223',
                    token: '',
                    isActive: true,
                    createAt: '11/5/2022',
                    updateAt: '11/5/2022',
                    role: { id: 'asa-123a-asd', name: UserRole.ADMIN },
                    imageUrl: '',
                },
            },
            package: {
                id: '123-123-123',
                originalPrice: 600000,
                lesson: {
                    id: '123-432-323',
                    name: 'Lesson 1',
                    createAt: '13/5/2022',
                    lessonType: { id: 'mznz-mvakf', name: 'Type 1' },
                    updateAt: '13/5/2022',
                    isActive: true,
                },
                name: 'Package 1',
                duration: 3,
                isActive: true,
                updateAt: '13/5/2022',
                createAt: '13/5/2022',
                salePrice: 500000,
            },
            totalCost: 500000,
            status: true,
            validForm: '23/5/2022',
            validTo: '23/8/2022',
        },
        {
            id: '1asdasd-asdzv-azsde4',
            email: 'hoanglocst900@gmail.com',
            registrationTime: '23/5/2022',
            subject: {
                id: 'asdasd-123as-123aasd',
                title: 'Subject 1',
                tagLine: 'Tag Line',
                description: 'Description 1',
                subjectCategory: {
                    id: 'asdasd-asda1-123',
                    name: 'Category 1',
                },
                thumbnailUrl: '',
                createAt: '14/5/2022',
                updateAt: '14/5/2022',
                assignTo: {
                    id: 'asdasd-aczxzx-zcbv',
                    typeId: '123',
                    fullName: 'Nguyen Hoang Loc',
                    password: '',
                    email: 'locnhse1500572fpt.edu.vn',
                    gender: Gender.MALE,
                    mobile: '08312311223',
                    token: '',
                    isActive: true,
                    createAt: '11/5/2022',
                    updateAt: '11/5/2022',
                    role: { id: 'asa-123a-asd', name: UserRole.ADMIN },
                    imageUrl: '',
                },
            },
            package: {
                id: '123-123-123',
                originalPrice: 600000,
                lesson: {
                    id: '123-432-323',
                    name: 'Lesson 1',
                    createAt: '13/5/2022',
                    lessonType: { id: 'mznz-mvakf', name: 'Type 1' },
                    updateAt: '13/5/2022',
                    isActive: true,
                },
                name: 'Package 1',
                duration: 3,
                isActive: true,
                updateAt: '13/5/2022',
                createAt: '13/5/2022',
                salePrice: 500000,
            },
            totalCost: 500000,
            status: true,
            validForm: '23/5/2022',
            validTo: '23/8/2022',
        },
        {
            id: '1asdasd-asdzv-azsde4',
            email: 'hoanglocst900@gmail.com',
            registrationTime: '23/5/2022',
            subject: {
                id: 'asdasd-123as-123aasd',
                title: 'Subject 1',
                tagLine: 'Tag Line',
                description: 'Description 1',
                subjectCategory: {
                    id: 'asdasd-asda1-123',
                    name: 'Category 1',
                },
                thumbnailUrl: '',
                createAt: '14/5/2022',
                updateAt: '14/5/2022',
                assignTo: {
                    id: 'asdasd-aczxzx-zcbv',
                    typeId: '123',
                    fullName: 'Nguyen Hoang Loc',
                    password: '',
                    email: 'locnhse1500572fpt.edu.vn',
                    gender: Gender.MALE,
                    mobile: '08312311223',
                    token: '',
                    isActive: true,
                    createAt: '11/5/2022',
                    updateAt: '11/5/2022',
                    role: { id: 'asa-123a-asd', name: UserRole.ADMIN },
                    imageUrl: '',
                },
            },
            package: {
                id: '123-123-123',
                originalPrice: 600000,
                lesson: {
                    id: '123-432-323',
                    name: 'Lesson 1',
                    createAt: '13/5/2022',
                    lessonType: { id: 'mznz-mvakf', name: 'Type 1' },
                    updateAt: '13/5/2022',
                    isActive: true,
                },
                name: 'Package 1',
                duration: 3,
                isActive: true,
                updateAt: '13/5/2022',
                createAt: '13/5/2022',
                salePrice: 500000,
            },
            totalCost: 500000,
            status: true,
            validForm: '23/5/2022',
            validTo: '23/8/2022',
        },
        {
            id: '1asdasd-asdzv-azsde4',
            email: 'hoanglocst900@gmail.com',
            registrationTime: '23/5/2022',
            subject: {
                id: 'asdasd-123as-123aasd',
                title: 'Subject 1',
                tagLine: 'Tag Line',
                description: 'Description 1',
                subjectCategory: {
                    id: 'asdasd-asda1-123',
                    name: 'Category 1',
                },
                thumbnailUrl: '',
                createAt: '14/5/2022',
                updateAt: '14/5/2022',
                assignTo: {
                    id: 'asdasd-aczxzx-zcbv',
                    typeId: '123',
                    fullName: 'Nguyen Hoang Loc',
                    password: '',
                    email: 'locnhse1500572fpt.edu.vn',
                    gender: Gender.MALE,
                    mobile: '08312311223',
                    token: '',
                    isActive: true,
                    createAt: '11/5/2022',
                    updateAt: '11/5/2022',
                    role: { id: 'asa-123a-asd', name: UserRole.ADMIN },
                    imageUrl: '',
                },
            },
            package: {
                id: '123-123-123',
                originalPrice: 600000,
                lesson: {
                    id: '123-432-323',
                    name: 'Lesson 1',
                    createAt: '13/5/2022',
                    lessonType: { id: 'mznz-mvakf', name: 'Type 1' },
                    updateAt: '13/5/2022',
                    isActive: true,
                },
                name: 'Package 1',
                duration: 3,
                isActive: true,
                updateAt: '13/5/2022',
                createAt: '13/5/2022',
                salePrice: 500000,
            },
            totalCost: 500000,
            status: true,
            validForm: '23/5/2022',
            validTo: '23/8/2022',
        },
        {
            id: '1asdasd-asdzv-azsde4',
            email: 'hoanglocst900@gmail.com',
            registrationTime: '23/5/2022',
            subject: {
                id: 'asdasd-123as-123aasd',
                title: 'Subject 1',
                tagLine: 'Tag Line',
                description: 'Description 1',
                subjectCategory: {
                    id: 'asdasd-asda1-123',
                    name: 'Category 1',
                },
                thumbnailUrl: '',
                createAt: '14/5/2022',
                updateAt: '14/5/2022',
                assignTo: {
                    id: 'asdasd-aczxzx-zcbv',
                    typeId: '123',
                    fullName: 'Nguyen Hoang Loc',
                    password: '',
                    email: 'locnhse1500572fpt.edu.vn',
                    gender: Gender.MALE,
                    mobile: '08312311223',
                    token: '',
                    isActive: true,
                    createAt: '11/5/2022',
                    updateAt: '11/5/2022',
                    role: { id: 'asa-123a-asd', name: UserRole.ADMIN },
                    imageUrl: '',
                },
            },
            package: {
                id: '123-123-123',
                originalPrice: 600000,
                lesson: {
                    id: '123-432-323',
                    name: 'Lesson 1',
                    createAt: '13/5/2022',
                    lessonType: { id: 'mznz-mvakf', name: 'Type 1' },
                    updateAt: '13/5/2022',
                    isActive: true,
                },
                name: 'Package 1',
                duration: 3,
                isActive: true,
                updateAt: '13/5/2022',
                createAt: '13/5/2022',
                salePrice: 500000,
            },
            totalCost: 500000,
            status: true,
            validForm: '23/5/2022',
            validTo: '23/8/2022',
        },
        {
            id: '1asdasd-asdzv-azsde4',
            email: 'hoanglocst900@gmail.com',
            registrationTime: '23/5/2022',
            subject: {
                id: 'asdasd-123as-123aasd',
                title: 'Subject 1',
                tagLine: 'Tag Line',
                description: 'Description 1',
                subjectCategory: {
                    id: 'asdasd-asda1-123',
                    name: 'Category 1',
                },
                thumbnailUrl: '',
                createAt: '14/5/2022',
                updateAt: '14/5/2022',
                assignTo: {
                    id: 'asdasd-aczxzx-zcbv',
                    typeId: '123',
                    fullName: 'Nguyen Hoang Loc',
                    password: '',
                    email: 'locnhse1500572fpt.edu.vn',
                    gender: Gender.MALE,
                    mobile: '08312311223',
                    token: '',
                    isActive: true,
                    createAt: '11/5/2022',
                    updateAt: '11/5/2022',
                    role: { id: 'asa-123a-asd', name: UserRole.ADMIN },
                    imageUrl: '',
                },
            },
            package: {
                id: '123-123-123',
                originalPrice: 600000,
                lesson: {
                    id: '123-432-323',
                    name: 'Lesson 1',
                    createAt: '13/5/2022',
                    lessonType: { id: 'mznz-mvakf', name: 'Type 1' },
                    updateAt: '13/5/2022',
                    isActive: true,
                },
                name: 'Package 1',
                duration: 3,
                isActive: true,
                updateAt: '13/5/2022',
                createAt: '13/5/2022',
                salePrice: 500000,
            },
            totalCost: 500000,
            status: true,
            validForm: '23/5/2022',
            validTo: '23/8/2022',
        },
    ]);

    const [count, setCount] = React.useState(4);

    const _handleOnSubmit = async () => {};

    return (
        <div className="px-4 space-y-4 sm:px-6 lg:px-4">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Registrations</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all registrations in database including their id, email, registration time, subject, package, total cost, status,
                        valid from, valid to.
                    </p>
                </div>
                <div className="mt-4 space-x-2 sm:mt-0 sm:ml-16 sm:flex-none">
                    <Link href={routes.addRegistrationUrl} passHref>
                        <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                            Add Registration
                        </p>
                    </Link>
                </div>
            </div>
            <div>
                <FormWrapper methods={methods}>
                    <form className="space-y-4" onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                        <div className="flex space-x-4">
                            <TextField name="subject" label="subject" />
                            <TextField name="email" label="email" />
                            <TextField name="createdAt" label="Registration From" type={'date'} />
                            <TextField name="createdAt" label="Registration To" type={'date'} />
                            <SelectField
                                label="Status"
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
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Id
                                        </th>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                            Email
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Registration Time
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Subject
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Package
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Total Cost
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Status
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Valid From
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Valid To
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Last Updated By
                                        </th>
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {Boolean(count && registrations) &&
                                        registrations.map((registration) => (
                                            <tr key={registration.id}>
                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                    <div className="text-gray-900">{registration.id}</div>
                                                </td>
                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                    <div className="text-gray-900">{registration.email}</div>
                                                </td>
                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                    <div className="text-gray-900">{registration.registrationTime}</div>
                                                </td>
                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                    <div className="text-gray-900">{registration.subject.title}</div>
                                                </td>
                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                    <div className="text-gray-900">{registration.package.name}</div>
                                                </td>
                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                    <div className="text-gray-900">{registration.totalCost}</div>
                                                </td>
                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                    {registration.status ? (
                                                        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                                                            Active
                                                        </span>
                                                    ) : (
                                                        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-red-800 bg-red-100 rounded-full">
                                                            Inactive
                                                        </span>
                                                    )}
                                                </td>
                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                    <div className="text-gray-900">{registration.validForm}</div>
                                                </td>
                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                    <div className="text-gray-900">{registration.validTo}</div>
                                                </td>
                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                    <div className="text-gray-900">Hoang Loc</div>
                                                </td>
                                                <td className="relative py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-6">
                                                    <Link href={`${routes.editRegistrationUrl}/${registration.id}`} passHref>
                                                        <p className="text-indigo-600 cursor-pointer hover:text-indigo-900">Edit</p>
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

export default RegistrationsList;
