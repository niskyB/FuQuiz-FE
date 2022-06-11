import { NextPage, NextPageContext } from 'next';
import * as React from 'react';
import { RouterProtectionWrapper } from '../../../../../../src/core/components/routerProtection';
import { UserRole } from '../../../../../../src/core/models/role';
import { DashBoardLayout } from '../../../../../../src/packages/dashboard';
import { EditPackage } from '../../../../../../src/packages/package';

interface BlogDetailPageProps {
    subjectId: string;
    pricePackageId: string;
}

const BlogDetailPage: NextPage<BlogDetailPageProps> = ({ subjectId, pricePackageId }) => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN]}>
            <DashBoardLayout>
                <EditPackage pricePackageId={pricePackageId} subjectId={subjectId} />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

BlogDetailPage.getInitialProps = async (ctx: NextPageContext): Promise<BlogDetailPageProps> => {
    let props = { subjectId: ctx.query?.subjectId || '', pricePackageId: ctx.query?.pricePackageId || '' };

    return props as BlogDetailPageProps;
};

export default BlogDetailPage;
