import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetListWithCount } from '../../../../core/common/hooks';
import { BlogCategory } from '../../../../core/models/blog';

export const useGetBlogCategoriesList = () => {
    const { count, list: categories } = useGetListWithCount<BlogCategory, null>(ApiListRoutes.BLOGS_CATEGORIES);
    console.log(categories);
    return { categories, count };
};
