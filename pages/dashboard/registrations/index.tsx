import { NextPage } from 'next';
import * as React from 'react';
import { RouterProtectionWrapper } from '../../../src/core/components/routerProtection';
import { UserRole } from '../../../src/core/models/role';
import DashBoardLayout from '../../../src/packages/dashboard/components/dashboardLayout';
import RegistrationList from '../../../src/packages/registrations';

interface UsersPageProps {}

const UsersPage: NextPage<UsersPageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.SALE]}>
            <DashBoardLayout>
                <RegistrationList />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

export default UsersPage;
