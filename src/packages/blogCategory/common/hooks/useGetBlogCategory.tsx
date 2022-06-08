import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetList } from '../../../../core/common/hooks';
import { BlogCategory } from '../../../../core/models/blog';

export const useGetBlogCategoryList = () => {
    const { list: categories } = useGetList<BlogCategory, null>(ApiListRoutes.BLOGS_CATEGORIES);

    return { categories };
};
