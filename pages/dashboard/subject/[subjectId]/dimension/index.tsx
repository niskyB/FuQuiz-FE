import { NextPage, NextPageContext } from 'next';
import React from 'react';
import { RouterProtectionWrapper } from '../../../../../src/core/components/routerProtection';
import { UserRole } from '../../../../../src/core/models/role';
import { DashBoardLayout } from '../../../../../src/packages/dashboard';
import DimensionList from '../../../../../src/packages/dimension/containers/dimensionList';

interface DimensionPageProps {
    subjectId: string;
    currentPage: number;
    pageSize: number;
}

const DimensionPage: NextPage<DimensionPageProps> = ({ subjectId, currentPage, pageSize }) => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.EXPERT]}>
            <DashBoardLayout>
                <DimensionList subjectId={subjectId} currentPage={currentPage} pageSize={pageSize} />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

DimensionPage.getInitialProps = async (ctx: NextPageContext): Promise<DimensionPageProps> => {
    let props = {
        subjectId: ctx.query?.subjectId || '',
        currentPage: ctx.query?.currentPage || 1,
        pageSize: ctx.query?.pageSize || 10,
    } as DimensionPageProps;

    return props;
};

export default DimensionPage;
