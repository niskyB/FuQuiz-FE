import { NextPage, NextPageContext } from 'next';
import React from 'react';
import { RouterProtectionWrapper } from '../../../../../src/core/components/routerProtection';
import { UserRole } from '../../../../../src/core/models/role';
import { DashBoardLayout } from '../../../../../src/packages/dashboard';
import AddPackage from '../../../../../src/packages/package/containers/addPackage';

interface AddPackagePageProps {
    subjectId: string;
}

const AddPackagePage: NextPage<AddPackagePageProps> = ({ subjectId }) => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN]}>
            <DashBoardLayout>
                <AddPackage subjectId={subjectId} />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

AddPackagePage.getInitialProps = async (ctx: NextPageContext): Promise<AddPackagePageProps> => {
    let props = { subjectId: ctx.query?.subjectId || '' } as AddPackagePageProps;

    return props;
};

export default AddPackagePage;
