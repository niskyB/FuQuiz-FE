import * as React from 'react';
import { RouterProtectionWrapper } from '../../../../src/core/components/routerProtection';
import { UserRole } from '../../../../src/core/models/role';
import AddBlogCategory from '../../../../src/packages/blogCategory/containers/addCategory';
import { DashBoardLayout } from '../../../../src/packages/dashboard';
import AddSubjectCategory from '../../../../src/packages/subjectCategory/containers/addCategory';

interface AddSubjectCategoryPageProps {}

const AddSubjectCategoryPage: React.FunctionComponent<AddSubjectCategoryPageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN]}>
            <DashBoardLayout>
                <AddSubjectCategory />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

export default AddSubjectCategoryPage;
