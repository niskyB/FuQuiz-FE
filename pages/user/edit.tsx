import * as React from 'react';
import { UserLayout } from '../../src/packages/user/components';
import { RouterProtectionWrapper } from '../../src/core/components/routerProtection';
import { UpdateUser } from '../../src/packages/user';
import { UserRole } from '../../src/core/models/user';

interface EditPageProps {}

const EditPage: React.FC<EditPageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.USER]}>
            <UserLayout>
                <UpdateUser />
            </UserLayout>
        </RouterProtectionWrapper>
    );
};

export default EditPage;
