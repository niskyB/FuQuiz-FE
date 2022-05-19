import * as React from 'react';
import { RouterProtectionWrapper } from '../../../src/core/components/routerProtection';
import { UserRole } from '../../../src/core/models/role';
import DashBoardLayout from '../../../src/packages/dashboard/components/dashboardLayout';
import AddSlider from '../../../src/packages/dashboard/containers/addSlider';

interface AddSliderPageProps {}

const AddSliderPage: React.FunctionComponent<AddSliderPageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.MARKETING]}>
            <DashBoardLayout>
                <AddSlider />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

export default AddSliderPage;
