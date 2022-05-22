import { NextPage, NextPageContext } from 'next';
import * as React from 'react';
import { RouterProtectionWrapper } from '../../../../src/core/components/routerProtection';
import { UserRole } from '../../../../src/core/models/role';
import EditBlog from '../../../../src/packages/blog/container/editBlog';
import DashBoardLayout from '../../../../src/packages/dashboard/components/dashboardLayout';

interface EditBlogPageProps {
    id: string;
}

const EditBlogPage: NextPage<EditBlogPageProps> = ({ id }) => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.MARKETING]}>
            <DashBoardLayout>
                <EditBlog />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

EditBlogPage.getInitialProps = async (ctx: NextPageContext): Promise<EditBlogPageProps> => {
    let props = { id: ctx.query?.id || '' };

    return props as EditBlogPageProps;
};

export default EditBlogPage;
