import { NextPage, NextPageContext } from 'next';
import * as React from 'react';
import { RouterProtectionWrapper } from '../../../src/core/components/routerProtection';
import { UserRole } from '../../../src/core/models/role';
import { SliderList } from '../../../src/packages/dashboard';
import DashBoardLayout from '../../../src/packages/dashboard/components/dashboardLayout';

interface SliderPageProps {
    currentPage?: number;
    pageSize?: number;
    title?: string;
    userId?: string;
    createAt?: Date;
}

const SliderPage: NextPage<SliderPageProps> = ({ createAt, currentPage, pageSize, title, userId }) => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.MARKETING]}>
            <DashBoardLayout>
                <SliderList createAt={createAt} currentPage={currentPage} pageSize={pageSize} title={title} userId={userId} />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

SliderPage.getInitialProps = async (ctx: NextPageContext): Promise<SliderPageProps> => {
    let props = {
        currentPage: ctx.query?.currentPage || 1,
        pageSize: ctx.query?.pageSize || 12,
        title: ctx.query?.title || '',
        userId: ctx.query?.userId || '',
        createAt: ctx.query?.createDate || new Date('01/01/2022'),
    };
    return props as SliderPageProps;
};

export default SliderPage;
