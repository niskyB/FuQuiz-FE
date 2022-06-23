import { NextPage, NextPageContext } from 'next';
import React from 'react';
import { RouterProtectionWrapper } from '../../../../../src/core/components/routerProtection';
import { UserRole } from '../../../../../src/core/models/role';
import { DashBoardLayout } from '../../../../../src/packages/dashboard';
import { FilterQuizListDTO } from '../../../../../src/packages/quiz/common/hooks/useGetQuizList';
import { EditQuiz } from '../../../../../src/packages/quiz/containers/editQuiz';
import { QuizList } from '../../../../../src/packages/quiz/containers/quizList';

interface EditQuizeProps {
    quizId: string;
}

const EditQuize: NextPage<EditQuizeProps> = ({ quizId }) => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.EXPERT]}>
            <DashBoardLayout>
                <EditQuiz quizId={quizId} />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};
EditQuize.getInitialProps = async (ctx: NextPageContext): Promise<EditQuizeProps> => {
    let props = {
        quizId: ctx.query?.quizId || '',
    };

    return props as EditQuizeProps;
};
export default EditQuize;
