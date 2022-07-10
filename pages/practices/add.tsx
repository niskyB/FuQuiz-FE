import * as React from 'react';
import { RouterProtectionWrapper } from '../../src/core/components/routerProtection';
import { UserRole } from '../../src/core/models/role';
import { AddPractice } from '../../src/packages/practices/containers/addPractice';
import { StoreLayout } from '../../src/packages/store';

interface AddPracticePageProps {}

const AddPracticePage: React.FunctionComponent<AddPracticePageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.CUSTOMER]}>
            <StoreLayout>
                <AddPractice />
            </StoreLayout>
        </RouterProtectionWrapper>
    );
};

export default AddPracticePage;
