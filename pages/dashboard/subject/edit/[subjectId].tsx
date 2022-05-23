import { NextPage, NextPageContext } from 'next';
import * as React from 'react';
import { RouterProtectionWrapper } from '../../../../src/core/components/routerProtection';
import DashBoardLayout from '../../../../src/packages/dashboard/components/dashboardLayout';
import { UserRole } from '../../../../src/core/models/role';
import EditSubject from '../../../../src/packages/subject/container/editSubject';

interface EditSubjectPageProps {
    subjectId: string;
}

const EditSubjectPage: NextPage<EditSubjectPageProps> = ({ subjectId }) => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.EXPERT]}>
            <DashBoardLayout>
                <EditSubject />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

EditSubjectPage.getInitialProps = async (ctx: NextPageContext): Promise<EditSubjectPageProps> => {
    let props = { subjectId: ctx.query?.subjectId || '' };

    return props as EditSubjectPageProps;
};

export default EditSubjectPage;
