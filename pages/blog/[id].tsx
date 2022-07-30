import * as React from 'react';
import { NextPage, NextPageContext } from 'next';
import { BlogPost } from '../../src/packages/blog';
import { StoreLayout } from '../../src/packages/store';

interface BlogDetailPageProps {
    id: string;
}

const BlogDetailPage: NextPage<BlogDetailPageProps> = ({ id }) => {
    return (
        <StoreLayout>
            <BlogPost id={id} />
        </StoreLayout>
    );
};

BlogDetailPage.getInitialProps = async (ctx: NextPageContext): Promise<BlogDetailPageProps> => {
    let props = { id: ctx.query?.id || '' };

    return props as BlogDetailPageProps;
};

export default BlogDetailPage;
