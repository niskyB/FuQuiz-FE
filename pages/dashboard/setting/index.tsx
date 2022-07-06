import { NextPage, NextPageContext } from 'next';
import * as React from 'react';
import { Order } from '../../../src/core/common/dataField';
import { RouterProtectionWrapper } from '../../../src/core/components/routerProtection';
import { UserRole } from '../../../src/core/models/role';
import { SettingEnum } from '../../../src/core/models/setting';
import { DashBoardLayout } from '../../../src/packages/dashboard';
import { SettingList } from '../../../src/packages/setting';

export interface SystemPageProps {
    value: string;
    isActive: boolean;
    currentPage: number;
    pageSize: number;
    order: Order;
    orderBy: string;
    settingType: SettingEnum;
}

const SystemPage: NextPage<SystemPageProps> = ({ currentPage, order, orderBy, pageSize, isActive, value, settingType }) => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN]}>
            <DashBoardLayout>
                <SettingList
                    settingType={settingType}
                    currentPage={currentPage}
                    order={order}
                    orderBy={orderBy}
                    pageSize={pageSize}
                    isActive={isActive}
                    value={value}
                />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

SystemPage.getInitialProps = async (ctx: NextPageContext): Promise<SystemPageProps> => {
    let props = {
        settingType: ctx.query?.settingType || SettingEnum.ROLE,
        value: ctx.query?.value || '',
        isActive: ctx.query?.isActive || true,
        currentPage: ctx.query?.currentPage || 1,
        pageSize: ctx.query?.pageSize || 12,
        order: ctx.query?.order || Order.DESC,
        orderBy: ctx.query?.orderBy || '',
    } as SystemPageProps;
    return props;
};

export default SystemPage;
