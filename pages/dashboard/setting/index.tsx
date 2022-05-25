import { NextPage } from 'next';
import * as React from 'react';
import { RouterProtectionWrapper } from '../../../src/core/components/routerProtection';
import { UserRole } from '../../../src/core/models/role';
import DashBoardLayout from '../../../src/packages/dashboard/components/dashboardLayout';
import SettingList from '../../../src/packages/setting/containers/settingList';

interface UsersPageProps {}

const UsersPage: NextPage<UsersPageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN]}>
            <DashBoardLayout>
                <SettingList />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

export default UsersPage;
