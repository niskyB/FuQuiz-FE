import { NextPage } from 'next';
import * as React from 'react';
import { RouterProtectionWrapper } from '../../../../src/core/components/routerProtection';
import { UserRole } from '../../../../src/core/models/role';
import { DashBoardLayout } from '../../../../src/packages/dashboard';
import { EditSetting } from '../../../../src/packages/setting';

interface EditUserProps {}

const EditUserPage: NextPage<EditUserProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN]}>
            <DashBoardLayout>
                <EditSetting />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

export default EditUserPage;
