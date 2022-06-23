import { NextPage, NextPageContext } from 'next';
import React from 'react';
import { RouterProtectionWrapper } from '../../../../src/core/components/routerProtection';
import { UserRole } from '../../../../src/core/models/role';
import { DashBoardLayout } from '../../../../src/packages/dashboard';
import { FilterQuizListDTO } from '../../../../src/packages/quiz/common/hooks/useGetQuizList';
import { QuizList } from '../../../../src/packages/quiz/containers/quizList';

interface QuizListPageProps extends FilterQuizListDTO {}

const QuizListPage: NextPage<QuizListPageProps> = ({ currentPage, name, pageSize, subject, type }) => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.EXPERT]}>
            <DashBoardLayout>
                <QuizList currentPage={currentPage} name={name} pageSize={pageSize} subject={subject} type={type} />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};
QuizListPage.getInitialProps = async (ctx: NextPageContext): Promise<QuizListPageProps> => {
    let props = {
        name: ctx.query?.name || '',
        currentPage: ctx.query?.currentPage || 1,
        pageSize: ctx.query?.pageSize || 10,
        subject: ctx.query?.subject || '',
        type: ctx.query?.type || '',
    };

    return props as QuizListPageProps;
};
export default QuizListPage;
