import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetList } from '../../../../core/common/hooks';
import { BlogCategory } from '../../../../core/models/blog';

export const useGetBlogCategory = () => {
    const { list: blogCategoryList } = useGetList<BlogCategory, null>(ApiListRoutes.BLOGS_CATEGORIES);

    return { blogCategoryList };
};
