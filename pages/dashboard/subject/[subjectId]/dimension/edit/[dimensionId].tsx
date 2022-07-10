import { NextPage, NextPageContext } from 'next';
import * as React from 'react';
import { RouterProtectionWrapper } from '../../../../../../src/core/components/routerProtection';
import { UserRole } from '../../../../../../src/core/models/role';
import { DashBoardLayout } from '../../../../../../src/packages/dashboard';
import { EditDimension } from '../../../../../../src/packages/dimension/containers/editDimension';

interface BlogDetailPageProps {
    subjectId: string;
    dimensionId: string;
}

const BlogDetailPage: NextPage<BlogDetailPageProps> = ({ subjectId, dimensionId }) => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.EXPERT]}>
            <DashBoardLayout>
                <EditDimension dimensionId={dimensionId} subjectId={subjectId} />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

BlogDetailPage.getInitialProps = async (ctx: NextPageContext): Promise<BlogDetailPageProps> => {
    let props = { subjectId: ctx.query?.subjectId || '', dimensionId: ctx.query?.dimensionId || '' };

    return props as BlogDetailPageProps;
};

export default BlogDetailPage;
