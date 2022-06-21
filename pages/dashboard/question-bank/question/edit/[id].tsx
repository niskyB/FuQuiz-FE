import { NextPage, NextPageContext } from 'next';
import * as React from 'react';
import { RouterProtectionWrapper } from '../../../../../src/core/components/routerProtection';
import { UserRole } from '../../../../../src/core/models/role';
import { DashBoardLayout } from '../../../../../src/packages/dashboard';
import { EditQuestion } from '../../../../../src/packages/question';

interface EditQuestionPageProps {
    id: string;
}

const EditQuestionPage: NextPage<EditQuestionPageProps> = ({ id }) => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.EXPERT]}>
            <DashBoardLayout>
                <EditQuestion id={id} />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

EditQuestionPage.getInitialProps = async (ctx: NextPageContext): Promise<EditQuestionPageProps> => {
    let props = { id: ctx.query?.id || '' };

    return props as EditQuestionPageProps;
};

export default EditQuestionPage;
