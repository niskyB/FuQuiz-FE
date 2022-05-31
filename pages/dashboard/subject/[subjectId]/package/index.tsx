import React from 'react';
import { RouterProtectionWrapper } from '../../../../../src/core/components/routerProtection';
import { UserRole } from '../../../../../src/core/models/role';
import { DashBoardLayout } from '../../../../../src/packages/dashboard';
import PackageList from '../../../../../src/packages/package/containers/packageList';

interface PackagePageProps {}

const PackagePage: React.FunctionComponent<PackagePageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.EXPERT]}>
            <DashBoardLayout>
                <PackageList currentPage={1} orderBy="" pageSize={10} />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

export default PackagePage;
