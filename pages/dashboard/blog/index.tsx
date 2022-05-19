import * as React from 'react';
import { RouterProtectionWrapper } from '../../../src/core/components/routerProtection';
import { UserRole } from '../../../src/core/models/role';
import DashBoardLayout from '../../../src/packages/dashboard/components/dashboardLayout';

interface BlogPageProps {}

const BlogPage: React.FunctionComponent<BlogPageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.MARKETING]}>
            <DashBoardLayout></DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

export default BlogPage;
