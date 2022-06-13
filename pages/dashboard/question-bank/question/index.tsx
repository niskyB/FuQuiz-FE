import React from 'react';
import { RouterProtectionWrapper } from '../../../../src/core/components/routerProtection';
import { UserRole } from '../../../../src/core/models/role';
import { DashBoardLayout } from '../../../../src/packages/dashboard';
import QuestionList from '../../../../src/packages/question/containers/questionList';

interface QuestionListPageProps {}

const QuestionListPage: React.FunctionComponent<QuestionListPageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.EXPERT]}>
            <DashBoardLayout>
                <QuestionList />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

export default QuestionListPage;
