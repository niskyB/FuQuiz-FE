import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetListWithCount } from '../../../../core/common/hooks';
import { Blog } from '../../../../core/models/blog';
import { FilterBlogListDTO } from '../../container/blogList/interface';

export const useGetBlogList = (options: FilterBlogListDTO) => {
    const { count, list: blogList } = useGetListWithCount<Blog, FilterBlogListDTO>(ApiListRoutes.BLOGS, options);
    return { blogList, count };
};
