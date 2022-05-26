import * as React from 'react';
import { RouterProtectionWrapper } from '../../../../../src/core/components/routerProtection';
import { UserRole } from '../../../../../src/core/models/role';
import { DashBoardLayout } from '../../../../../src/packages/dashboard';
import AddLesson from '../../../../../src/packages/lesson/containers/addLesson';

interface AddLessonPageProps {}

const AddLessonPage: React.FunctionComponent<AddLessonPageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.EXPERT]}>
            <DashBoardLayout>
                <AddLesson />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

export default AddLessonPage;
