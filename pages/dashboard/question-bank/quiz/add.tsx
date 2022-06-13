import React from 'react';
import { RouterProtectionWrapper } from '../../../../src/core/components/routerProtection';
import { UserRole } from '../../../../src/core/models/role';
import { DashBoardLayout } from '../../../../src/packages/dashboard';
import { AddQuiz } from '../../../../src/packages/quiz/containers/addQuiz';

interface AddQuizPageProps {}

const AddQuizPage: React.FunctionComponent<AddQuizPageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.EXPERT]}>
            <DashBoardLayout>
                <AddQuiz />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

export default AddQuizPage;
