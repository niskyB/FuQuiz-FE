import * as React from 'react';
import { RouterProtectionWrapper } from '../../../../src/core/components/routerProtection';
import { UserRole } from '../../../../src/core/models/role';
import AddBlogCategory from '../../../../src/packages/blogCategory/containers/addCategory';
import { DashBoardLayout } from '../../../../src/packages/dashboard';

interface AddCategoryPageProps {}

const AddCategoryPage: React.FunctionComponent<AddCategoryPageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN]}>
            <DashBoardLayout>
                <AddBlogCategory />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

export default AddCategoryPage;
