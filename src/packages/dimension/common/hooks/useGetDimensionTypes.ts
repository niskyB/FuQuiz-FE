import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetList } from '../../../../core/common/hooks';
import { DimensionType } from '../../../../core/models/dimension';
import { SubjectCategory } from '../../../../core/models/subject';

export const useGetDimensionType = () => {
    const { list: categories } = useGetList<DimensionType, null>(ApiListRoutes.SUBJECT_CATEGORIES, null);
    return { categories };
};
