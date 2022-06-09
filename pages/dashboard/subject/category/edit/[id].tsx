import { NextPage, NextPageContext } from 'next';
import React from 'react';
import { RouterProtectionWrapper } from '../../../../../src/core/components/routerProtection';
import { UserRole } from '../../../../../src/core/models/role';
import { DashBoardLayout } from '../../../../../src/packages/dashboard';
import EditSubjectCategory from '../../../../../src/packages/subjectCategory/containers/editCategory';

interface EditSubjectCategoryPageProps {
    id: string;
}

const EditSubjectCategoryPage: NextPage<EditSubjectCategoryPageProps> = ({ id }) => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.MARKETING]}>
            <DashBoardLayout>
                <EditSubjectCategory id={id} />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

EditSubjectCategoryPage.getInitialProps = async (ctx: NextPageContext): Promise<EditSubjectCategoryPageProps> => {
    let props = { id: ctx.query?.id || '' };

    return props as EditSubjectCategoryPageProps;
};

export default EditSubjectCategoryPage;
