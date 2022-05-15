import * as React from 'react';
import { UserLayout } from '../../src/packages/user/components';
import { RouterProtectionWrapper } from '../../src/core/components/routerProtection';
import { UserMe } from '../../src/packages/user/containers/me';
import { UserRole } from '../../src/core/models/user';
import GetUser from '../../src/packages/user/containers/getUser';
import { useRouter } from 'next/router';
import { NextPage, NextPageContext } from 'next';
import { StoreLayout } from '../../src/packages/store/components';
import { UpdateUser } from '../../src/packages/user';

interface UpdateUserPageProps {
    id: string;
}

const UpdateUserPage: NextPage<UpdateUserPageProps> = ({ id }) => {
    return (
        // <RouterProtectionWrapper acceptRoles={[UserRole.USER]}>
        <UserLayout>
            <StoreLayout>
                <UpdateUser />
            </StoreLayout>
        </UserLayout>
        // </RouterProtectionWrapper>
    );
};
UpdateUserPage.getInitialProps = async (ctx: NextPageContext): Promise<UpdateUserPageProps> => {
    let props = { id: ctx.query?.id || '' };

    return props as UpdateUserPageProps;
};
export default UpdateUserPage;
