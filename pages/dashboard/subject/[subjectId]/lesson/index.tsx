import { NextPage, NextPageContext } from 'next';
import * as React from 'react';
import { RouterProtectionWrapper } from '../../../../../src/core/components/routerProtection';
import { UserRole } from '../../../../../src/core/models/role';
import { DashBoardLayout } from '../../../../../src/packages/dashboard';
import { LessonList } from '../../../../../src/packages/lesson';
import { FilterLessonListDTO } from '../../../../../src/packages/lesson/containers/lessonList/interface';

interface LessonPageProps extends FilterLessonListDTO {}

const LessonPage: NextPage<LessonPageProps> = ({ id, createdAt, isActive, title, type, updatedAt }) => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.EXPERT]}>
            <DashBoardLayout>
                <LessonList id={id} createdAt={createdAt} isActive={isActive} title={title} type={type} updatedAt={updatedAt} />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};
LessonPage.getInitialProps = async (ctx: NextPageContext): Promise<LessonPageProps> => {
    let props = {
        id: ctx.query?.subjectId || '',
        title: ctx.query?.title || '',
        type: ctx.query?.type || '',
        createdAt: ctx.query?.createdAt || '',
        updatedAt: ctx.query?.updatedAt || '',
        isActive: ctx.query?.isActive || '',
    } as LessonPageProps;

    return props;
};
export default LessonPage;
