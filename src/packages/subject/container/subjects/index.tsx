import { SubjectFilterDTO } from '../subjectList/interface';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useGetSubjectCategoryList } from '../../../subjectCategory';
import { useGetSubjectList } from '../../common/hooks/useGetSubjectList';
import { FormWrapper, SelectField, TextField } from '../../../../core/components/form';
import { dataParser } from '../../../../core/util/data';
import { BlogCategory } from '../../../../core/models/blog';
import Link from 'next/link';
import { routes } from '../../../../core/routes';
import { PaginationBar } from '../../../dashboard';
import { BlogListFilterDTO } from './interface';
import { SideBox } from '../../../store/components/sideBox';
import Contact from '../../../store/container/Contact';
import { pushWithParams } from '../../../../core/util';
import { useRouter } from 'next/router';
import { allFieldData } from '../../../../core/common/dataField';
interface SubjectsProps extends BlogListFilterDTO {}

const defaultValues: BlogListFilterDTO = {
    category: '',
    currentPage: 1,
    isFeature: '',
    name: '',
    pageSize: 12,
};
export const Subjects: React.FunctionComponent<SubjectsProps> = ({ category, currentPage, isFeature, name, pageSize }) => {
    const router = useRouter();

    const subjectOption = React.useMemo<Partial<SubjectFilterDTO>>(() => ({ isActive: true, isFeature, currentPage, pageSize, category, name }), []);
    const featureSubjectOption = React.useMemo<Partial<SubjectFilterDTO>>(
        () => ({ isActive: true, isFeature: true, currentPage: 1, pageSize: 3 }),
        []
    );

    const methods = useForm<BlogListFilterDTO>({
        defaultValues,
    });
    const { categories } = useGetSubjectCategoryList();
    const { subjects, count } = useGetSubjectList(subjectOption);
    const { subjects: featureSubjects } = useGetSubjectList(featureSubjectOption);

    const _handleOnSubmit = (data: BlogListFilterDTO) => {
        pushWithParams(router, routes.subjectListUrl, { ...subjectOption, ...data });
    };
    return (
        <>
            <h1 className="mb-5 text-4xl font-bold text-center">New Course</h1>
            <div className="flex space-x-10">
                <div className="flex flex-col w-full max-w-xs space-y-7">
                    <FormWrapper methods={methods}>
                        <form
                            onSubmit={methods.handleSubmit(_handleOnSubmit)}
                            className="flex flex-col items-end w-full p-5 space-y-5 bg-white rounded-md"
                        >
                            <TextField label="Name" name="name" />

                            <SelectField
                                label="category"
                                name="category"
                                values={[allFieldData, ...dataParser<BlogCategory>(categories, 'name', 'id')]}
                            />

                            <button
                                type="submit"
                                className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm h-fit hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Search
                            </button>
                        </form>
                    </FormWrapper>
                    <div className="space-y-3">
                        <h2 className="text-2xl font-semibold">Feature course</h2>
                        {featureSubjects.map((subject) => (
                            <SideBox
                                key={subject.id}
                                href={`${routes.subjectUrl}/${subject.id}`}
                                image={subject.thumbnailUrl}
                                title={subject.name}
                                category={subject.category.name}
                            />
                        ))}
                    </div>
                    <Contact />
                </div>

                <div className="flex flex-col space-y-5">
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                        {subjects.map((item) => (
                            <Link key={item.id} href={`${routes.subjectUrl}/${item.id}`} passHref>
                                <div className="flex flex-col w-full overflow-hidden duration-700 rounded-lg shadow-lg cursor-pointer hover:-translate-y-5">
                                    <div className="min-w-full mx-auto bg-white">
                                        <img className="object-cover h-48 py-3 mx-auto" src={item.thumbnailUrl} alt="thumbnail" />
                                    </div>

                                    <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-indigo-600">{item.category.name}</p>
                                            <a href={''} className="block mt-2">
                                                <p className="text-xl font-semibold text-gray-900">{item.name}</p>
                                                <p className="mt-3 text-base text-gray-500">{item.description.substring(0, 100) + '...'}</p>
                                            </a>
                                        </div>

                                        <div className="flex items-center mt-6">
                                            <p className="text-2xl font-medium text-gray-900">
                                                <div className="text-orange-600">20.000đ - 100.000đ</div>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <PaginationBar currentPage={1} numberOfItem={count} pageSize={10} routeUrl={''} />
                </div>
            </div>
        </>
    );
};
