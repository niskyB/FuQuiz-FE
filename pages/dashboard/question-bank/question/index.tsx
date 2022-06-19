import { NextPage, NextPageContext } from 'next';
import React from 'react';
import { RouterProtectionWrapper } from '../../../../src/core/components/routerProtection';
import { UserRole } from '../../../../src/core/models/role';
import { DashBoardLayout } from '../../../../src/packages/dashboard';
import QuestionList from '../../../../src/packages/question/containers/questionList';

export interface QuestionListPageProps {
    currentPage: number;
    pageSize: number;
    subject: string;
    lesson: string;
    dimension: string;
    content: string;
    level: string;
    isActive: boolean;
}

const QuestionListPage: NextPage<QuestionListPageProps> = ({ content, currentPage, dimension, isActive, lesson, level, pageSize, subject }) => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.EXPERT]}>
            <DashBoardLayout>
                <QuestionList
                    content={content}
                    currentPage={currentPage}
                    dimension={dimension}
                    isActive={isActive}
                    lesson={lesson}
                    level={level}
                    pageSize={pageSize}
                    subject={subject}
                />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

QuestionListPage.getInitialProps = async (ctx: NextPageContext): Promise<QuestionListPageProps> => {
    let props = {
        currentPage: ctx.query?.currentPage || 1,
        pageSize: ctx.query?.pageSize || 12,
        subject: ctx.query?.subject || '',
        lesson: ctx.query?.lesson || '',
        dimension: ctx.query?.dimension || '',
        content: ctx.query?.content || '',
        level: ctx.query?.level || '',
        isActive: ctx.query?.isActive || true,
    } as QuestionListPageProps;
    return props;
};

export default QuestionListPage;
