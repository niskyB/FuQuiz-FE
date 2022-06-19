import { routes } from '../../../../core/routes';
import { SideBox } from '../../../store';
import Contact from '../../../store/container/Contact';
import { useGetSubjectList } from '../../common/hooks/useGetSubjectList';
import { UserFilter } from '../../components/userFilter';
import React from 'react';
import { SubjectFilterDTO } from '../subjectList/interface';
import { BlogListFilterDTO } from '../subjects/interface';
interface SubjectSideProps extends BlogListFilterDTO {}

const SubjectSide: React.FunctionComponent<SubjectSideProps> = ({ category, currentPage, isFeature, name, order, pageSize }) => {
    const featureSubjectOption = React.useMemo<Partial<SubjectFilterDTO>>(
        () => ({ isActive: true, isFeature: true, currentPage: 1, pageSize: 3 }),
        []
    );
    const subjectOption = React.useMemo<Partial<SubjectFilterDTO>>(
        () => ({ isActive: true, isFeature, currentPage, pageSize, category, name, order }),
        [category, currentPage, isFeature, name, pageSize, order]
    );
    const { subjects: featureSubjects } = useGetSubjectList(featureSubjectOption);
    return (
        <>
            <UserFilter subjectOption={subjectOption} />
            <div className="space-y-3">
                <h2 className="text-2xl font-semibold">Feature course</h2>
                {featureSubjects.map((subject) => (
                    <SideBox
                        key={subject.id}
                        href={`${routes.subjectUrl}/${subject.id}`}
                        image={subject.thumbnailUrl}
                        title={subject.name}
                        category={subject.category.description}
                    />
                ))}
            </div>
            <Contact />
        </>
    );
};

export default SubjectSide;
