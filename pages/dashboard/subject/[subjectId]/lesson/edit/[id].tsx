import * as React from 'react';
import { RouterProtectionWrapper } from '../../../../../../src/core/components/routerProtection';
import { UserRole } from '../../../../../../src/core/models/role';
import DashBoardLayout from '../../../../../../src/packages/dashboard/components/dashboardLayout';

interface EditLessonPageProps {}

const EditLessonPage: React.FunctionComponent<EditLessonPageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.EXPERT]}>
            <DashBoardLayout>Edit Lesson</DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

export default EditLessonPage;
