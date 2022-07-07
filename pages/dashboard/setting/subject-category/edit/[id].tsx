import { NextPage, NextPageContext } from 'next';
import * as React from 'react';
import { RouterProtectionWrapper } from '../../../../../src/core/components/routerProtection';
import { UserRole } from '../../../../../src/core/models/role';
import { SettingEditEnum } from '../../../../../src/core/models/setting';
import { DashBoardLayout } from '../../../../../src/packages/dashboard';
import { EditSetting } from '../../../../../src/packages/setting';

interface EditSubjectCategoryProps {
    id: string;
}

const EditSubjectCategoryPage: NextPage<EditSubjectCategoryProps> = ({ id }) => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN]}>
            <DashBoardLayout>
                <EditSetting id={id} type={SettingEditEnum.SUBJECT_CATEGORY} />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

EditSubjectCategoryPage.getInitialProps = async (ctx: NextPageContext): Promise<EditSubjectCategoryProps> => {
    let props = { id: ctx.query?.id || '' };

    return props as EditSubjectCategoryProps;
};

export default EditSubjectCategoryPage;
