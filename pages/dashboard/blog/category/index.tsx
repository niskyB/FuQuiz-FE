import * as React from 'react';
import { RouterProtectionWrapper } from '../../../../src/core/components/routerProtection';
import { UserRole } from '../../../../src/core/models/role';
import BlogCategoryList from '../../../../src/packages/blogCategory/containers/blogCategoryList';
import { DashBoardLayout } from '../../../../src/packages/dashboard';

interface BlogCategoryPageProps {}

const BlogCategoryPage: React.FunctionComponent<BlogCategoryPageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN]}>
            <DashBoardLayout>
                <BlogCategoryList />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

export default BlogCategoryPage;
