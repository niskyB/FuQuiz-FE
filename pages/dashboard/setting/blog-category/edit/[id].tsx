import { NextPage, NextPageContext } from 'next';
import * as React from 'react';
import { RouterProtectionWrapper } from '../../../../../src/core/components/routerProtection';
import { UserRole } from '../../../../../src/core/models/role';
import { SettingEditEnum } from '../../../../../src/core/models/setting';
import { DashBoardLayout } from '../../../../../src/packages/dashboard';
import { EditSetting } from '../../../../../src/packages/setting';

interface EditBlogCategoryProps {
    id: string;
}

const EditBlogCategoryPage: NextPage<EditBlogCategoryProps> = ({ id }) => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN]}>
            <DashBoardLayout>
                <EditSetting id={id} type={SettingEditEnum.POST_CATEGORY} />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

EditBlogCategoryPage.getInitialProps = async (ctx: NextPageContext): Promise<EditBlogCategoryProps> => {
    let props = { id: ctx.query?.id || '' };

    return props as EditBlogCategoryProps;
};

export default EditBlogCategoryPage;
