import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetListWithCount } from '../../../../core/common/hooks';
import { Subject } from '../../../../core/models/subject';
import { SubjectFilterDTO } from '../../container/subjectList/interface';

export const useGetSubjectList = (options: SubjectFilterDTO) => {
    const { list: subjects, count } = useGetListWithCount<Subject, SubjectFilterDTO>(ApiListRoutes.SUBJECTS, options);
    return { subjects, count };
};
