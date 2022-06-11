import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetListWithCount } from '../../../../core/common/hooks';
import { Subject } from '../../../../core/models/subject';
import { SubjectFilterDTO } from '../../container/subjectList/interface';

export const useGetSubjectList = (options: Partial<SubjectFilterDTO>) => {
    const { list: subjects, count } = useGetListWithCount<Subject, Partial<SubjectFilterDTO>>(ApiListRoutes.SUBJECTS, options);
    return { subjects, count };
};
