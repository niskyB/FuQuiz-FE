import * as React from 'react';
import { RouterProtectionWrapper } from '../../../src/core/components/routerProtection';
import { UserRole } from '../../../src/core/models/role';
import DashBoardLayout from '../../../src/packages/dashboard/components/dashboardLayout';
import AddUser from '../../../src/packages/users/containers/addUser';

interface AddUserPageProps {}

const AddUserPage: React.FunctionComponent<AddUserPageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN]}>
            <DashBoardLayout>
                <AddUser />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

export default AddUserPage;
