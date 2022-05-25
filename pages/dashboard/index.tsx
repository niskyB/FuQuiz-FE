import * as React from 'react';
import { RouterProtectionWrapper } from '../../src/core/components/routerProtection';
import { UserRole } from '../../src/core/models/role';
import DashBoardLayout from '../../src/packages/dashboard/components/dashboardLayout';
import { DashboardList } from '../../src/packages/dashboard/containers/dashboardList';

interface DashboardPageProps {}

const DashboardPage: React.FunctionComponent<DashboardPageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.MARKETING]}>
            <DashBoardLayout>
                <DashboardList />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

export default DashboardPage;
