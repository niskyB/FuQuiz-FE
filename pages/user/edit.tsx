import * as React from 'react';
import { UserLayout } from '../../src/packages/user/components';
import { RouterProtectionWrapper } from '../../src/core/components/routerProtection';
import { UpdateUser } from '../../src/packages/user';

interface EditPageProps {}

const EditPage: React.FC<EditPageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[]}>
            <UserLayout>
                <UpdateUser />
            </UserLayout>
        </RouterProtectionWrapper>
    );
};

export default EditPage;
