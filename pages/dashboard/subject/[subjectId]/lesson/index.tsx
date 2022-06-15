import { NextPage, NextPageContext } from 'next';
import * as React from 'react';
import { RouterProtectionWrapper } from '../../../../../src/core/components/routerProtection';
import { UserRole } from '../../../../../src/core/models/role';
import { DashBoardLayout } from '../../../../../src/packages/dashboard';
import { LessonList } from '../../../../../src/packages/lesson';

interface LessonPageProps {
    subjectId: string;
}

const LessonPage: NextPage<LessonPageProps> = ({ subjectId }) => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.EXPERT]}>
            <DashBoardLayout>
                <LessonList subjectId={subjectId} />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};
LessonPage.getInitialProps = async (ctx: NextPageContext): Promise<LessonPageProps> => {
    let props = { subjectId: ctx.query?.subjectId || '' };

    return props as LessonPageProps;
};
export default LessonPage;
