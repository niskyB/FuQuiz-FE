import React from 'react';
import { RouterProtectionWrapper } from '../../../../../src/core/components/routerProtection';
import { UserRole } from '../../../../../src/core/models/role';
import { DashBoardLayout } from '../../../../../src/packages/dashboard';
import AddDimension from '../../../../../src/packages/dimension/containers/addDimension';

interface AddPackagePageProps {}

const AddPackagePage: React.FunctionComponent<AddPackagePageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.EXPERT]}>
            <DashBoardLayout>
                <AddDimension />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

export default AddPackagePage;
