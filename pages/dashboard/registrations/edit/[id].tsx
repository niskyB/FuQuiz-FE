import { NextPage } from 'next';
import * as React from 'react';
import { Component } from 'react';
import { RouterProtectionWrapper } from '../../../../src/core/components/routerProtection';
import { UserRole } from '../../../../src/core/models/role';
import DashBoardLayout from '../../../../src/packages/dashboard/components/dashboardLayout';
import EditRegistration from '../../../../src/packages/registrations/containers/editRegistration';
import EditUser from '../../../../src/packages/users/containers/editUser';

interface EditUserProps {}

const EditUserPage: NextPage<EditUserProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN]}>
            <DashBoardLayout>
                <EditRegistration />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

export default EditUserPage;
