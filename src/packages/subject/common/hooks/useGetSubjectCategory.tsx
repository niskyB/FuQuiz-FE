import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetList } from '../../../../core/common/hooks';
import { SubjectCategory } from '../../../../core/models/subject';

export const useGetSubjectCategory = () => {
    const { list } = useGetList<SubjectCategory, null>(ApiListRoutes.SUBJECT_CATEGORIES, null);
    return { list };
};
