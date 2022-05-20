import * as React from 'react';
import { Component } from 'react';
import { RouterProtectionWrapper } from '../../../src/core/components/routerProtection';
import { UserRole } from '../../../src/core/models/role';
import { routes } from '../../../src/core/routes';
import DashBoardLayout from '../../../src/packages/dashboard/components/dashboardLayout';

interface AddUserPageProps {}

const AddUserPage: React.FunctionComponent<AddUserPageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN]}>
            <DashBoardLayout></DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

export default AddUserPage;
