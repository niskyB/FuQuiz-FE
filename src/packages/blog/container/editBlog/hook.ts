import * as React from 'react';
import { Blog } from '../../../../core/models/blog';
import { getBlog } from './action';

export const useGetBlog = (id: string) => {
    const [blog, setBlog] = React.useState<Blog>();

    React.useEffect(() => {
        getBlog(id).then((res) => {
            setBlog(res);
        });
    }, [id]);

    return { blog };
};
