import React from 'react';
import { RouterProtectionWrapper } from '../../../../src/core/components/routerProtection';
import { UserRole } from '../../../../src/core/models/role';
import { DashBoardLayout } from '../../../../src/packages/dashboard';
import { QuizList } from '../../../../src/packages/quiz/containers/quizList';

interface QuizListPageProps {}

const QuizListPage: React.FunctionComponent<QuizListPageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.EXPERT]}>
            <DashBoardLayout>
                <QuizList />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

export default QuizListPage;
