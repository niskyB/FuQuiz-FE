import React from 'react';
import { RouterProtectionWrapper } from '../../../../../src/core/components/routerProtection';
import { UserRole } from '../../../../../src/core/models/role';
import { DashBoardLayout } from '../../../../../src/packages/dashboard';

interface DimensionPageProps {}

const DimensionPage: React.FunctionComponent<DimensionPageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.EXPERT]}>
            <DashBoardLayout></DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

export default DimensionPage;
