import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetDataById, useGetList } from '../../../../core/common/hooks';
import { BlogCategory } from '../../../../core/models/blog';

export const useGetBlogCategoryById = (id: string) => {
    const { data: category } = useGetDataById<BlogCategory>(ApiListRoutes.BLOG_CATEGORY, id);

    return { category };
};
