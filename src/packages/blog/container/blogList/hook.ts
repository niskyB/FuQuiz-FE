import * as React from 'react';
import { Blog } from '../../../../core/models/blog';
import { getFilterSlider } from './action';
import { FilterBlogListDTO } from './interface';

export const useGetBlogList = (options: FilterBlogListDTO) => {
    const [blogList, setBlogList] = React.useState<Blog[]>();
    const [count, setCount] = React.useState<number>(0);
    React.useEffect(() => {
        getFilterSlider(options).then((res) => {
            setBlogList(res.data);
            setCount(res.count);
        });
    }, [options]);

    return { count, blogList };
};
