import * as React from 'react';
import { RouterProtectionWrapper } from '../../../../src/core/components/routerProtection';
import { UserRole } from '../../../../src/core/models/role';
import { DashBoardLayout } from '../../../../src/packages/dashboard';
import { SubjectCategoryList } from '../../../../src/packages/subjectCategory/containers/subjectCategoryList';

interface SubjectCategoryListPageProps {}

const SubjectCategoryListPage: React.FunctionComponent<SubjectCategoryListPageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN]}>
            <DashBoardLayout>
                <SubjectCategoryList />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

export default SubjectCategoryListPage;
