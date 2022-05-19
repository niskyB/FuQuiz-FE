import * as React from 'react';
import { RouterProtectionWrapper } from '../../../src/core/components/routerProtection';
import { UserRole } from '../../../src/core/models/role';
import { SliderList } from '../../../src/packages/dashboard';
import DashBoardLayout from '../../../src/packages/dashboard/components/dashboardLayout';

interface SliderPageProps {}

const SliderPage: React.FunctionComponent<SliderPageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.MARKETING]}>
            <DashBoardLayout>
                <SliderList />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

export default SliderPage;
