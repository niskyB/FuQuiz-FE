import { NextPage, NextPageContext } from 'next';
import * as React from 'react';
import { RouterProtectionWrapper } from '../../../src/core/components/routerProtection';
import { UserRole } from '../../../src/core/models/role';
import { DashBoardLayout } from '../../../src/packages/dashboard';
import { SliderList } from '../../../src/packages/slider';
import { GetSliderOptionsDTO } from '../../../src/packages/slider/containers/sliderList/interface';

interface SliderPageProps extends GetSliderOptionsDTO {}

const SliderPage: NextPage<SliderPageProps> = ({ createdAt: createdAt, orderBy, currentPage, pageSize, title, userId, isShow }) => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.MARKETING]}>
            <DashBoardLayout>
                <SliderList
                    orderBy={orderBy}
                    createdAt={createdAt}
                    currentPage={currentPage}
                    pageSize={pageSize}
                    title={title}
                    userId={userId}
                    isShow={isShow}
                />
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
        isShow: ctx.query?.isShow || true,
        createdAt: ctx.query?.createdAt || '01-01-2022',
        orderBy: ctx.query?.orderBy || '',
    };
    return props as SliderPageProps;
};

export default SliderPage;
