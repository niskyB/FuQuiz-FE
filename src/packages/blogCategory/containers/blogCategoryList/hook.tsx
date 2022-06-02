import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetList } from '../../../../core/common/hooks';
import { BlogCategory } from '../../../../core/models/blog';

export const useGetBlogCategoriesList = () => {
    const { count, list: categories } = useGetList<BlogCategory, null>(ApiListRoutes.BLOGS_CATEGORIES);
    console.log(categories);
    return { categories, count };
};
