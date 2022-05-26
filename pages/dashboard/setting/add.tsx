import * as React from 'react';
import { RouterProtectionWrapper } from '../../../src/core/components/routerProtection';
import { UserRole } from '../../../src/core/models/role';
import { DashBoardLayout } from '../../../src/packages/dashboard';
import AddSetting from '../../../src/packages/setting/containers/addSetting';

interface AddSettingPageProps {}

const AddSettingPage: React.FunctionComponent<AddSettingPageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN]}>
            <DashBoardLayout>
                <AddSetting />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

export default AddSettingPage;
