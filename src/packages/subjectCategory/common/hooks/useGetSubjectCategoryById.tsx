import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetDataById } from '../../../../core/common/hooks';
import { BlogCategory } from '../../../../core/models/blog';

export const useGetSubjectCategoryById = (id: string) => {
    const { data: category } = useGetDataById<BlogCategory>(ApiListRoutes.SUBJECT_CATEGORY, id);

    return { category };
};
