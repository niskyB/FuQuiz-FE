import * as React from 'react';
import { RouterProtectionWrapper } from '../../../src/core/components/routerProtection';
import { UserRole } from '../../../src/core/models/role';
import DashBoardLayout from '../../../src/packages/dashboard/components/dashboardLayout';
import AddSubject from '../../../src/packages/subject/container/addSubject';

interface AddSubjectPageProps {}

const AddSubjectPage: React.FunctionComponent<AddSubjectPageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.EXPERT]}>
            <DashBoardLayout>
                <AddSubject />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

export default AddSubjectPage;
