import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetList } from '../../../../core/common/hooks';
import { Blog } from '../../../../core/models/blog';
import { FilterBlogListDTO } from './interface';

export const useGetBlogList = (options: FilterBlogListDTO) => {
    const { count, list: blogList } = useGetList<Blog, FilterBlogListDTO>(ApiListRoutes.BLOGS, options);
    return { blogList, count };
};
