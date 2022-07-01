import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { SimulationPageProps } from '../../../../../pages/practices/simulation';
import { useUrlParams } from '../../../../core/common/hooks/useUrlParams';
import { FormWrapper, SelectField, TextField } from '../../../../core/components/form';
import { Table, TableDescription, TableHead, TableRow } from '../../../../core/components/table';
import { TableBody } from '../../../../core/components/table/tableBody';
import { RegistrationStatus } from '../../../../core/models/registration';
import { Subject } from '../../../../core/models/subject';
import { routes } from '../../../../core/routes';
import { pushWithParams } from '../../../../core/util';
import { dataParser } from '../../../../core/util/data';
import { useGetRegistrationUserList } from '../../../course/hooks/useGetRegistrationListUser';
import { PaginationBar } from '../../../dashboard';
import { useGetSimulationList } from '../common/hooks/useGetSimulationList';

export interface SimulationListProps extends SimulationPageProps {}

export const SimulationList: React.FunctionComponent<SimulationListProps> = ({ currentPage, name, pageSize, subject }) => {
    const { registrationList } = useGetRegistrationUserList({ currentPage: 1, pageSize: 999, status: RegistrationStatus.PAID });
    const router = useRouter();
    const options = React.useMemo(() => ({ currentPage, name, pageSize, subject }), [currentPage, name, pageSize, subject]);

    const subjects = React.useMemo<Subject[]>(() => {
        let subjects: Subject[] = [];
        registrationList.map((registration) => {
            registration.pricePackage.subject && subjects.push(registration.pricePackage.subject);
        });
        return subjects;
    }, [registrationList]);

    useUrlParams({
        defaultPath: routes.simulationListUrl,
        query: { ...router.query, currentPage, pageSize, name, subject },
    });

    const { quizList: simulationList, count } = useGetSimulationList(options);

    const methods = useForm<SimulationListProps>();
    const _handleOnSubmit = (data: SimulationListProps) => {
        pushWithParams(router, routes.simulationListUrl, { ...options, ...data });
    };

    return (
        <div className="px-4 space-y-4 sm:px-6 lg:px-4">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Simulation exam List</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all the quiz that you attended including their subject info, simulation level, duration and pass rate.
                    </p>
                </div>
            </div>
            <div className="space-y-2">
                <FormWrapper methods={methods}>
                    <div className="flex items-end justify-between">
                        <form className="flex items-end space-x-2" onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                            <SelectField label="Subject" values={dataParser(subjects, 'name', 'id')} name="subject" />
                            <TextField name="name" label="Exam name" />
                            <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm h-fit hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </FormWrapper>
            </div>
            <div className="flex flex-col mt-8">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <Table>
                                <TableHead fields={['Subject info', 'Simulation exam', 'Level', 'Questions', 'Duration', ' Pass rate', '']} />

                                <TableBody>
                                    {Boolean(count && simulationList) &&
                                        simulationList.map((quiz) => (
                                            <TableRow key={quiz.id}>
                                                <TableDescription>
                                                    <div className="font-semibold text-gray-900">#{quiz.id}</div>
                                                    <div className="text-gray-900">{quiz.subject.name}</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="max-w-sm">
                                                        <div className="text-gray-900">{quiz.name}</div>
                                                    </div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="max-w-sm">
                                                        <div className="text-gray-900">{quiz.level.name}</div>
                                                    </div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">{quiz.questions.length} Questions</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">{quiz.duration} mins</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">{quiz.passRate} %</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <Link href={`${routes.simulationReviewListUrl}/${quiz.id}`} passHref>
                                                        <p className="text-indigo-600 cursor-pointer hover:text-indigo-900">View Details</p>
                                                    </Link>
                                                </TableDescription>
                                            </TableRow>
                                        ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
            <PaginationBar currentPage={Number(1)} numberOfItem={4} pageSize={Number(12)} routeUrl={router.asPath} />
        </div>
    );
};
