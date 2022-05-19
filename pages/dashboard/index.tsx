import * as React from 'react';
import { RouterProtectionWrapper } from '../../src/core/components/routerProtection';
import { UserRole } from '../../src/core/models/role';
import DashBoardLayout from '../../src/packages/dashboard/components/dashboardLayout';

interface DashboardPageProps {}

const DashboardPage: React.FunctionComponent<DashboardPageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.MARKETING]}>
            <DashBoardLayout>
                <div>Dashboard</div>
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

export default DashboardPage;
