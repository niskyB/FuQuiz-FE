import * as React from 'react';
import { RouterProtectionWrapper } from '../../../src/core/components/routerProtection';
import { UserRole } from '../../../src/core/models/role';
import DashBoardLayout from '../../../src/packages/dashboard/components/dashboardLayout';
import AddRegistration from '../../../src/packages/registrations/containers/addRegistration';

interface AddUserPageProps {}

const AddUserPage: React.FunctionComponent<AddUserPageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.SALE]}>
            <DashBoardLayout>
                <AddRegistration />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

export default AddUserPage;
