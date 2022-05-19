import * as React from 'react';
import { RouterProtectionWrapper } from '../../../src/core/components/routerProtection';
import { UserRole } from '../../../src/core/models/role';
import { Slider } from '../../../src/packages/dashboard';
import DashBoardLayout from '../../../src/packages/dashboard/components/dashboardLayout';

interface SliderPageProps {}

const SliderPage: React.FunctionComponent<SliderPageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.MARKETING]}>
            <DashBoardLayout>
                <Slider />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

export default SliderPage;
