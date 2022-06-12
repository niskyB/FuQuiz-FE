import { NextPage, NextPageContext } from 'next';
import * as React from 'react';
import { Order } from '../../../src/core/common/dataField';
import { RouterProtectionWrapper } from '../../../src/core/components/routerProtection';
import { UserRole } from '../../../src/core/models/role';
import { BlogList } from '../../../src/packages/blog';
import { FilterBlogListDTO } from '../../../src/packages/blog/container/blogList/interface';
import { DashBoardLayout } from '../../../src/packages/dashboard';

interface BlogPageProps extends FilterBlogListDTO {}

const BlogPage: NextPage<BlogPageProps> = ({ category, createdAt, currentPage, isShow, pageSize, title, userId, order }) => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.MARKETING]}>
            <DashBoardLayout>
                <BlogList
                    category={category}
                    createdAt={createdAt}
                    currentPage={currentPage}
                    isShow={isShow}
                    pageSize={pageSize}
                    title={title}
                    userId={userId}
                    order={order}
                />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};
BlogPage.getInitialProps = async (ctx: NextPageContext): Promise<BlogPageProps> => {
    let props = {
        currentPage: ctx.query?.currentPage || 1,
        pageSize: ctx.query?.pageSize || 12,
        title: ctx.query?.title || '',
        userId: ctx.query?.userId || '',
        isShow: ctx.query?.isShow || true,
        createdAt: ctx.query?.createdAt || '01-01-2022',
        category: ctx.query?.category || '',
        order: ctx.query?.order || Order.DESC,
    } as BlogPageProps;
    return props;
};
export default BlogPage;
