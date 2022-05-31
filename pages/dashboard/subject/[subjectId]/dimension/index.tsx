import React from 'react';
import { RouterProtectionWrapper } from '../../../../../src/core/components/routerProtection';
import { UserRole } from '../../../../../src/core/models/role';
import { DashBoardLayout } from '../../../../../src/packages/dashboard';
import DimensionList from '../../../../../src/packages/dimension/containers/dimensionList';

interface DimensionPageProps {}

const DimensionPage: React.FunctionComponent<DimensionPageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.EXPERT]}>
            <DashBoardLayout>
                <DimensionList currentPage={1} orderBy="" pageSize={10} />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

export default DimensionPage;
