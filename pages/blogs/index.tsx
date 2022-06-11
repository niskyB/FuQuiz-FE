import { NextPage, NextPageContext } from 'next';
import * as React from 'react';
import { Order } from '../../src/core/common/dataField';
import { Blogs } from '../../src/packages/blog/container/blogs';
import { FilterBlogsDTO } from '../../src/packages/blog/container/blogs/interface';
import { StoreLayout } from '../../src/packages/store';

interface BlogsPageProps extends FilterBlogsDTO {}

const BlogListPage: NextPage<BlogsPageProps> = ({ category, currentPage, pageSize, order, title }) => {
    return (
        <StoreLayout>
            <Blogs category={category} currentPage={currentPage} pageSize={pageSize} order={order} title={title} />
        </StoreLayout>
    );
};

BlogListPage.getInitialProps = async (ctx: NextPageContext): Promise<BlogsPageProps> => {
    let props = {
        currentPage: ctx.query?.currentPage || 1,
        pageSize: ctx.query?.pageSize || 12,
        title: ctx.query?.title || '',
        order: ctx.query?.order || Order.ASC,
        category: ctx.query?.category || '',
    };
    return props as BlogsPageProps;
};

export default BlogListPage;
