import * as React from 'react';
import { UserLayout } from '../../src/packages/user/components';
import { RouterProtectionWrapper } from '../../src/core/components/routerProtection';
import { UserMe } from '../../src/packages/user/containers/me';
import { UserRole } from '../../src/core/models/user';
import GetUser from '../../src/packages/user/containers/getUser';
import { useRouter } from 'next/router';
import { NextPage, NextPageContext } from 'next';

interface GetUserPageProps {
    id: string;
}

const GetUserPage: NextPage<GetUserPageProps> = ({ id }) => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.USER]}>
            <UserLayout>
                <GetUser id={id} />
            </UserLayout>
        </RouterProtectionWrapper>
    );
};
GetUserPage.getInitialProps = async (ctx: NextPageContext): Promise<GetUserPageProps> => {
    let props = { id: ctx.query?.id || '' };

    return props as GetUserPageProps;
};
export default GetUserPage;
