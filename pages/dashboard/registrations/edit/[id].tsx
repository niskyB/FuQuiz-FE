import { NextPage, NextPageContext } from 'next';
import * as React from 'react';
import { RouterProtectionWrapper } from '../../../../src/core/components/routerProtection';
import { UserRole } from '../../../../src/core/models/role';
import { DashBoardLayout } from '../../../../src/packages/dashboard';
import { EditRegistration } from '../../../../src/packages/registrations';

interface EditRegistrationProps {
    id: string;
}

const EditRegistrationPage: NextPage<EditRegistrationProps> = ({ id }) => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.SALE]}>
            <DashBoardLayout>
                <EditRegistration id={id} />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};
EditRegistrationPage.getInitialProps = async (ctx: NextPageContext): Promise<EditRegistrationProps> => {
    let props = { id: ctx.query?.id || '' };

    return props as EditRegistrationProps;
};
export default EditRegistrationPage;
