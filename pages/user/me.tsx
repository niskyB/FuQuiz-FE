import * as React from 'react';
import { UserLayout } from '../../src/packages/user/components';
import { RouterProtectionWrapper } from '../../src/core/components/routerProtection';
import { UserMe } from '../../src/packages/user/containers/me';
import { UserRole } from '../../src/core/models/user';
import { StoreLayout } from '../../src/packages/store/components';

interface UserMePageProps {}

const UserMePage: React.FC<UserMePageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.USER]}>
            <UserLayout>
                <StoreLayout>
                    <UserMe />
                </StoreLayout>
            </UserLayout>
        </RouterProtectionWrapper>
    );
};

export default UserMePage;
