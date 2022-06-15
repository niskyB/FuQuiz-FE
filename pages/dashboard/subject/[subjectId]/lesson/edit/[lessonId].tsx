import { NextPage, NextPageContext } from 'next';
import * as React from 'react';
import { RouterProtectionWrapper } from '../../../../../../src/core/components/routerProtection';
import { UserRole } from '../../../../../../src/core/models/role';
import { DashBoardLayout } from '../../../../../../src/packages/dashboard';
import EditLesson from '../../../../../../src/packages/lesson/containers/editLesson';

interface EditEditLessonPageProps {
    subjectId: string;
    lessonId: string;
}

const EditLessonPage: NextPage<EditEditLessonPageProps> = ({ subjectId, lessonId }) => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.EXPERT]}>
            <DashBoardLayout>
                <EditLesson lessonId={lessonId} subjectId={subjectId} />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};
EditLessonPage.getInitialProps = async (ctx: NextPageContext): Promise<EditEditLessonPageProps> => {
    let props = { subjectId: ctx.query?.subjectId || '', lessonId: ctx.query?.lessonId || '' };

    return props as EditEditLessonPageProps;
};
export default EditLessonPage;
