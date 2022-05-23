import * as React from 'react';
import { RouterProtectionWrapper } from '../../../../../../../src/core/components/routerProtection';
import { UserRole } from '../../../../../../../src/core/models/role';
import DashBoardLayout from '../../../../../../../src/packages/dashboard/components/dashboardLayout';

interface QuestionPageProps {}

const QuestionPage: React.FunctionComponent<QuestionPageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.EXPERT]}>
            <DashBoardLayout>Question List</DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

export default QuestionPage;
