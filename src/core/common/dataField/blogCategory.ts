import { SelectionFieldValues } from '../interface';
import { useGetList } from '../hooks';
import { BlogCategory } from '../../models/blog';
import { ApiListRoutes } from '../enum';

export const useBlogCategoriesFieldData = () => {
    const { list } = useGetList<BlogCategory, null>(ApiListRoutes.BLOGS_CATEGORIES);
    const blogCategoriesFieldData: SelectionFieldValues<string>[] = list.map((category) => ({ label: category.description, value: category.id }));
    return { blogCategoriesFieldData };
};
