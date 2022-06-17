import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetList } from '../../../../core/common/hooks';
import { Subject } from '../../../../core/models/subject';

export const useGetSubjectListByRole = () => {
    const { list: subjects } = useGetList<Subject, null>(ApiListRoutes.SUBJECTS_ROLE, null);
    return { subjects };
};
