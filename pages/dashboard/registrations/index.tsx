import { NextPage } from 'next';
import * as React from 'react';
import { RouterProtectionWrapper } from '../../../src/core/components/routerProtection';
import { UserRole } from '../../../src/core/models/role';
import DashBoardLayout from '../../../src/packages/dashboard/components/dashboardLayout';
import RegistrationsList from '../../../src/packages/registrations/containers/registrationlist';

interface UsersPageProps {}

const UsersPage: NextPage<UsersPageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.SALE]}>
            <DashBoardLayout>
                <RegistrationsList />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

export default UsersPage;
