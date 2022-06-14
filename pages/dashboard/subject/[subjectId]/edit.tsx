import { NextPage, NextPageContext } from 'next';
import * as React from 'react';
import { RouterProtectionWrapper } from '../../../../src/core/components/routerProtection';
import { UserRole } from '../../../../src/core/models/role';
import { DashBoardLayout } from '../../../../src/packages/dashboard';
import { EditSubject } from '../../../../src/packages/subject';

interface EditSubjectPageProps {
    subjectId: string;
}

const EditSubjectPage: NextPage<EditSubjectPageProps> = ({ subjectId }) => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.EXPERT]}>
            <DashBoardLayout>
                <EditSubject id={subjectId} />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

EditSubjectPage.getInitialProps = async (ctx: NextPageContext): Promise<EditSubjectPageProps> => {
    let props = { subjectId: ctx.query?.subjectId || '' };

    return props as EditSubjectPageProps;
};

export default EditSubjectPage;
