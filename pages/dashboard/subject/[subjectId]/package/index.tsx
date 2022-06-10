import { NextPage, NextPageContext } from 'next';
import React from 'react';
import { RouterProtectionWrapper } from '../../../../../src/core/components/routerProtection';
import { UserRole } from '../../../../../src/core/models/role';
import { DashBoardLayout } from '../../../../../src/packages/dashboard';
import PackageList from '../../../../../src/packages/package/containers/packageList';

interface PackagePageProps {
    subjectId: string;
}

const PackagePage: NextPage<PackagePageProps> = ({ subjectId }) => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.EXPERT]}>
            <DashBoardLayout>
                <PackageList subjectId={subjectId} />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

PackagePage.getInitialProps = async (ctx: NextPageContext): Promise<PackagePageProps> => {
    let props = { subjectId: ctx.query?.subjectId || '' };

    return props as PackagePageProps;
};

export default PackagePage;
