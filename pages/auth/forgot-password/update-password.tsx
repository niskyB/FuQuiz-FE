import * as React from 'react';
import { AuthLayout } from '../../../src/packages/auth/components';
import { RouterUnAuthProtectionWrapper } from '../../../src/core/components/routerProtection';
import { StoreLayout } from '../../../src/packages/store/components';
import { UpdatePassword } from '../../../src/packages/user';

interface UpdatePasswordPageProps {}

const UpdatePasswordPage: React.FC<UpdatePasswordPageProps> = () => {
    return (
        <RouterUnAuthProtectionWrapper>
            <AuthLayout>
                <StoreLayout>
                    <UpdatePassword />
                </StoreLayout>
            </AuthLayout>
        </RouterUnAuthProtectionWrapper>
    );
};
export default UpdatePasswordPage;
