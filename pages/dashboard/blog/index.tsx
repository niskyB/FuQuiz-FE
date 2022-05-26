import * as React from 'react';
import { RouterProtectionWrapper } from '../../../src/core/components/routerProtection';
import { UserRole } from '../../../src/core/models/role';
import { BlogList } from '../../../src/packages/blog';
import { DashBoardLayout } from '../../../src/packages/dashboard';

interface BlogPageProps {}

const BlogPage: React.FunctionComponent<BlogPageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.MARKETING]}>
            <DashBoardLayout>
                <BlogList />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

export default BlogPage;
