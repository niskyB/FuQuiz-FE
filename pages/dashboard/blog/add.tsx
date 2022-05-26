import * as React from 'react';
import { RouterProtectionWrapper } from '../../../src/core/components/routerProtection';
import { UserRole } from '../../../src/core/models/role';
import { AddBlog } from '../../../src/packages/blog';
import { DashBoardLayout } from '../../../src/packages/dashboard';

interface AddBlogPageProps {}

const AddBlogPage: React.FunctionComponent<AddBlogPageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.MARKETING]}>
            <DashBoardLayout>
                <AddBlog />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

export default AddBlogPage;
