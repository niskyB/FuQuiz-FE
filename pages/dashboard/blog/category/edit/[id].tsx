import { NextPage, NextPageContext } from 'next';
import React from 'react';
import { RouterProtectionWrapper } from '../../../../../src/core/components/routerProtection';
import { UserRole } from '../../../../../src/core/models/role';
import EditBlogCategory from '../../../../../src/packages/blogCategory/containers/editCategory';
import { DashBoardLayout } from '../../../../../src/packages/dashboard';

interface EditBlogCategoryPageProps {
    id: string;
}

const EditBlogCategoryPage: NextPage<EditBlogCategoryPageProps> = ({ id }) => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN]}>
            <DashBoardLayout>
                <EditBlogCategory id={id} />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

EditBlogCategoryPage.getInitialProps = async (ctx: NextPageContext): Promise<EditBlogCategoryPageProps> => {
    let props = { id: ctx.query?.id || '' };

    return props as EditBlogCategoryPageProps;
};

export default EditBlogCategoryPage;
