import * as React from 'react';
import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetList } from '../../../../core/common/hooks';
import { Blog } from '../../../../core/models/blog';
import { getFilterBlogList } from './action';
import { FilterBlogListDTO } from './interface';

export const useGetBlogList = (options: FilterBlogListDTO) => {
    // const [blogList, setBlogList] = React.useState<Blog[]>();
    // const [count, setCount] = React.useState<number>(0);
    // React.useEffect(() => {
    //     getFilterBlogList(options).then((res) => {
    //         setBlogList(res.data);
    //         setCount(res.count);
    //     });
    // }, [options]);

    const { count, list: blogList } = useGetList<Blog, FilterBlogListDTO>(options, ApiListRoutes.BLOGS);
    return { blogList, count };

    // return { count, blogList };
};
