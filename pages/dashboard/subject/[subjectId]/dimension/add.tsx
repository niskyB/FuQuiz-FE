import { NextPage, NextPageContext } from 'next';
import React from 'react';
import { RouterProtectionWrapper } from '../../../../../src/core/components/routerProtection';
import { UserRole } from '../../../../../src/core/models/role';
import { DashBoardLayout } from '../../../../../src/packages/dashboard';
import { AddDimension } from '../../../../../src/packages/dimension/containers/addDimension';

interface AddDimensionPageProps {
    subjectId: string;
}

const AddDimensionPage: NextPage<AddDimensionPageProps> = ({ subjectId }) => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.EXPERT]}>
            <DashBoardLayout>
                <AddDimension subjectId={subjectId} />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

AddDimensionPage.getInitialProps = async (ctx: NextPageContext): Promise<AddDimensionPageProps> => {
    let props = { subjectId: ctx.query?.subjectId || '', pricePackageId: ctx.query?.pricePackageId || '' } as AddDimensionPageProps;

    return props;
};

export default AddDimensionPage;
