import { NextPage, NextPageContext } from 'next';
import * as React from 'react';
import { RouterProtectionWrapper } from '../../../src/core/components/routerProtection';
import { UserRole } from '../../../src/core/models/role';
import { DashBoardLayout } from '../../../src/packages/dashboard';
import UserList from '../../../src/packages/users/containers/userList';
import { FilterUserDTO } from '../../../src/packages/users/containers/userList/interface';

const UsersPage: NextPage<FilterUserDTO> = ({ currentPage, email, fullName, gender, isActive, mobile, order, orderBy, pageSize, role }) => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN]}>
            <DashBoardLayout>
                <UserList
                    currentPage={currentPage}
                    email={email}
                    fullName={fullName}
                    gender={gender}
                    isActive={isActive}
                    mobile={mobile}
                    order={order}
                    orderBy={orderBy}
                    pageSize={pageSize}
                    role={role}
                />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

UsersPage.getInitialProps = async (ctx: NextPageContext): Promise<FilterUserDTO> => {
    let props = {
        currentPage: ctx.query?.currentPage || 1,
        pageSize: ctx.query?.pageSize || 12,
        orderBy: ctx.query?.orderBy || '',
        email: ctx.query?.email || '',
        fullName: ctx.query?.fullName || '',
        gender: ctx.query?.gender || '',
        isActive: ctx.query?.isActive || '',
        mobile: ctx.query?.mobile || '',
        order: ctx.query?.order || '',
        role: ctx.query?.role || '',
    } as FilterUserDTO;
    return props;
};
export default UsersPage;
