import { NextPage, NextPageContext } from 'next';
import * as React from 'react';
import { RouterProtectionWrapper } from '../../../../src/core/components/routerProtection';
import { UserRole } from '../../../../src/core/models/role';
import { EditSlider } from '../../../../src/packages/dashboard';
import DashBoardLayout from '../../../../src/packages/dashboard/components/dashboardLayout';

interface EditSliderPageProps {
    id: string;
}

const EditSliderPage: NextPage<EditSliderPageProps> = ({ id }) => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.MARKETING]}>
            <DashBoardLayout>
                <EditSlider id={id} />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

EditSliderPage.getInitialProps = async (ctx: NextPageContext): Promise<EditSliderPageProps> => {
    let props = { id: ctx.query?.id || '' };

    return props as EditSliderPageProps;
};

export default EditSliderPage;
