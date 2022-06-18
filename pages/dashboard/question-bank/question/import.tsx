import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { FormWrapper } from '../../../../src/core/components/form';
import { RouterProtectionWrapper } from '../../../../src/core/components/routerProtection';
import { Table, TableDescription, TableHead, TableRow } from '../../../../src/core/components/table';
import { TableBody } from '../../../../src/core/components/table/tableBody';
import { UserRole } from '../../../../src/core/models/role';
import { DashBoardLayout } from '../../../../src/packages/dashboard';

interface AddQuestionPageProps {}

const AddQuestionPage: React.FunctionComponent<AddQuestionPageProps> = () => {
    const router = useRouter();

    const _handleOnSubmit = async () => {};

    const methods = useForm();
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.EXPERT]}>
            <DashBoardLayout>
                <FormWrapper methods={methods}>
                    <form className="space-y-8 divide-y divide-gray-200" onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                        <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                            <div className="flex flex-col space-y-10">
                                <div>
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">Import Question</h3>
                                    <p className="max-w-2xl mt-1 text-sm text-gray-500">This page will be add new question for current quiz</p>
                                </div>
                                <Table>
                                    <TableHead
                                        fields={[
                                            '',
                                            'Subject',
                                            'Dimension',
                                            'lesson',
                                            'Level',
                                            'Status',
                                            'Image Url',
                                            'Video Url',
                                            'Audio Url',
                                            'Content',
                                            'Answers',
                                            'Explanation ',
                                            '',
                                        ]}
                                    />
                                    <TableBody>
                                        <TableRow>
                                            <TableDescription>1</TableDescription>
                                            <TableDescription>Học Javascript</TableDescription>
                                            <TableDescription>Dimension 1</TableDescription>
                                            <TableDescription>Lesson 1</TableDescription>
                                            <TableDescription>Easy</TableDescription>
                                            <TableDescription>Show</TableDescription>
                                            <TableDescription></TableDescription>
                                            <TableDescription>https://www.nimo.tv/tructiepgame</TableDescription>
                                            <TableDescription></TableDescription>
                                            <TableDescription>
                                                Which possibility ensures load balancing and peak levelling of energy consumption?
                                            </TableDescription>
                                            <TableDescription>
                                                - Transportation and logistics <br /> - Energy and utilities <br /> - Automotive
                                                <br />- Connected supply chain
                                            </TableDescription>
                                            <TableDescription>Choose Abc because </TableDescription>
                                            <TableDescription>
                                                <input type={'checkbox'} />
                                            </TableDescription>
                                        </TableRow>
                                        <TableRow>
                                            <TableDescription>2</TableDescription>
                                            <TableDescription>Học Javascript</TableDescription>
                                            <TableDescription>Dimension 2</TableDescription>
                                            <TableDescription>Lesson 2</TableDescription>
                                            <TableDescription>Easy</TableDescription>
                                            <TableDescription>Show</TableDescription>
                                            <TableDescription>https://quizlet.com/615203752/se-_-ky-4-_-iot102-flash-cards/</TableDescription>
                                            <TableDescription></TableDescription>
                                            <TableDescription></TableDescription>
                                            <TableDescription>
                                                Which possibility ensures load balancing and peak levelling of energy consumption?
                                            </TableDescription>
                                            <TableDescription>
                                                - Transportation and logistics <br /> - Energy and utilities <br /> - Automotive
                                                <br />- Connected supply chain
                                            </TableDescription>
                                            <TableDescription>Choose Abc because </TableDescription>
                                            <TableDescription>
                                                <input type={'checkbox'} />
                                            </TableDescription>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>
                        </div>

                        <div className="pt-5">
                            <div className="flex justify-end">
                                <Link href={router.asPath.replace('/add', '')} passHref>
                                    <p className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Cancel
                                    </p>
                                </Link>
                                <button
                                    type="submit"
                                    className="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Override question
                                </button>
                                <button
                                    type="submit"
                                    className="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Add as new question
                                </button>
                            </div>
                        </div>
                    </form>
                </FormWrapper>
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

export default AddQuestionPage;
