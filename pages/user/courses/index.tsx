import { NextPage, NextPageContext } from 'next';
import * as React from 'react';
import { Order } from '../../../src/core/common/dataField';
import { RegistrationStatus } from '../../../src/core/models/registration';
import { UserRole } from '../../../src/core/models/role';
import { UserCourses } from '../../../src/packages/course/userCourses';
import { StoreLayout } from '../../../src/packages/store';
import { RouterProtectionWrapper } from '../../../src/core/components/routerProtection';

export interface UserCoursesPageProps {
    name: string;
    currentPage: number;
    pageSize: number;
    category: string;
    isFeature: boolean | '';
    order: Order;
    status: string | RegistrationStatus;
}

const UserCoursesPage: NextPage<UserCoursesPageProps> = ({ category, currentPage, isFeature, order, pageSize, name, status }) => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.CUSTOMER]}>
            <StoreLayout>
                <UserCourses
                    name={name}
                    category={category}
                    isFeature={isFeature}
                    order={order}
                    currentPage={currentPage}
                    pageSize={pageSize}
                    status={status}
                />
            </StoreLayout>
        </RouterProtectionWrapper>
    );
};

UserCoursesPage.getInitialProps = async (ctx: NextPageContext): Promise<UserCoursesPageProps> => {
    let props = {
        currentPage: ctx.query?.currentPage || 1,
        pageSize: ctx.query?.pageSize || 12,
        isFeature: ctx.query?.isFeature || true,
        order: ctx.query?.order || Order.DESC,
        category: ctx.query?.category || '',
        name: ctx.query?.name || '',
        status: ctx.query?.status || '',
    };

    return props as UserCoursesPageProps;
};

export default UserCoursesPage;
