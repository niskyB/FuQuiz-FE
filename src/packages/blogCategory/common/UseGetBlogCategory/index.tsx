import * as React from 'react';
import { BlogCategory } from '../../../../core/models/blog';
import { getAllBlogCategory } from './action';

export const useGetBlogCategory = () => {
    const [blogCategoryList, setBlogCategoryList] = React.useState<BlogCategory[]>([]);
    React.useEffect(() => {
        getAllBlogCategory().then((data) => {
            setBlogCategoryList(data);
        });
    }, []);

    return { blogCategoryList };
};
