import React from 'react';
import { RouterProtectionWrapper } from '../../../../src/core/components/routerProtection';
import { UserRole } from '../../../../src/core/models/role';
import { DashBoardLayout } from '../../../../src/packages/dashboard';

interface QuizListPageProps {}

const QuizListPage: React.FunctionComponent<QuizListPageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.EXPERT]}>
            <DashBoardLayout>
                <div>Quiz list aye?</div>
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

export default QuizListPage;
