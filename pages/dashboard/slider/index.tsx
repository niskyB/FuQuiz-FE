import * as React from 'react';
import { RouterProtectionWrapper } from '../../../src/core/components/routerProtection';
import { UserRole } from '../../../src/core/models/role';
import DashBoardLayout from '../../../src/packages/dashboard/components/dashboardLayout';
import Slider from '../../../src/packages/dashboard/containers/slider';

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
