import * as React from 'react';
import { UserLayout } from '../../src/packages/user/components';
import { RouterProtectionWrapper } from '../../src/core/components/routerProtection';
import { UpdateUser } from '../../src/packages/user';
import { AllRole } from '../../src/core/models/user';
import { StoreLayout } from '../../src/packages/store/components';

interface EditPageProps {}

const EditPage: React.FC<EditPageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={AllRole}>
            <UserLayout>
                <StoreLayout>
                    <UpdateUser />
                </StoreLayout>
            </UserLayout>
        </RouterProtectionWrapper>
    );
};

export default EditPage;
