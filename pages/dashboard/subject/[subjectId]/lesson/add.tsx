import { NextPage, NextPageContext } from 'next';
import * as React from 'react';
import { RouterProtectionWrapper } from '../../../../../src/core/components/routerProtection';
import { UserRole } from '../../../../../src/core/models/role';
import { DashBoardLayout } from '../../../../../src/packages/dashboard';
import { AddLesson } from '../../../../../src/packages/lesson/containers/addLesson';

interface AddLessonPageProps {
    subjectId: string;
}

const AddLessonPage: NextPage<AddLessonPageProps> = ({ subjectId }) => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.EXPERT]}>
            <DashBoardLayout>
                <AddLesson subjectId={subjectId} />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};
AddLessonPage.getInitialProps = async (ctx: NextPageContext): Promise<AddLessonPageProps> => {
    let props = { subjectId: ctx.query?.subjectId || '' } as AddLessonPageProps;

    return props;
};
export default AddLessonPage;
