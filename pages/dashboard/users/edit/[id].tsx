import { NextPage, NextPageContext } from 'next';
import * as React from 'react';
import { RouterProtectionWrapper } from '../../../../src/core/components/routerProtection';
import { UserRole } from '../../../../src/core/models/role';
import { DashBoardLayout } from '../../../../src/packages/dashboard';
import EditUser from '../../../../src/packages/users/containers/editUser';
import { FilterUserDTO } from '../../../../src/packages/users/containers/userList/interface';

interface EditUserProps {
    id: string;
}

const EditUserPage: NextPage<EditUserProps> = ({ id }) => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN]}>
            <DashBoardLayout>
                <EditUser id={id} />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

EditUserPage.getInitialProps = async (ctx: NextPageContext): Promise<EditUserProps> => {
    let props = { id: ctx.query?.id || '' };

    return props as EditUserProps;
};
export default EditUserPage;
