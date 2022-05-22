import { NextPage } from 'next';
import * as React from 'react';
import { RouterProtectionWrapper } from '../../../src/core/components/routerProtection';
import { UserRole } from '../../../src/core/models/role';
import { routes } from '../../../src/core/routes';
import DashBoardLayout from '../../../src/packages/dashboard/components/dashboardLayout';
import UserList from '../../../src/packages/users/containers/userList';

interface UsersPageProps {}

const UsersPage: NextPage<UsersPageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN]}>
            <DashBoardLayout>
                <UserList />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

export default UsersPage;
