import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetList } from '../../../../core/common/hooks';
import { BlogCategory } from '../../../../core/models/blog';

export const useGetSubjectCategoryList = () => {
    const { list: categories } = useGetList<BlogCategory, null>(ApiListRoutes.SUBJECT_CATEGORIES);

    return { categories };
};
