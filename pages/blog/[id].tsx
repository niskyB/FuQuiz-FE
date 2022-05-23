import { NextPage, NextPageContext } from 'next';
import * as React from 'react';
import { RouterUnAuthProtectionWrapper } from '../../src/core/components/routerProtection';
import { BlogPost } from '../../src/packages/blog';
import { StoreLayout } from '../../src/packages/store';

interface BlogDetailPageProps {
    id: string;
}

const BlogDetailPage: NextPage<BlogDetailPageProps> = ({ id }) => {
    return (
        <RouterUnAuthProtectionWrapper>
            <StoreLayout>
                <BlogPost id={id} />
            </StoreLayout>
        </RouterUnAuthProtectionWrapper>
    );
};

BlogDetailPage.getInitialProps = async (ctx: NextPageContext): Promise<BlogDetailPageProps> => {
    let props = { id: ctx.query?.id || '' };

    return props as BlogDetailPageProps;
};

export default BlogDetailPage;
