import { NextPage, NextPageContext } from 'next';
import * as React from 'react';
import { RouterProtectionWrapper } from '../../src/core/components/routerProtection';
import { AllRole } from '../../src/core/models/user';
import { StoreLayout } from '../../src/packages/store';
import { Subjects } from '../../src/packages/subject';

interface CourseListPageProps {
    currentPage: number;
    pageSize: number;
    category: string;
    name: string;
    isFeature: boolean | '';
}

const CourseListPage: NextPage<CourseListPageProps> = ({ category, currentPage, isFeature, name, pageSize }) => {
    return (
        <RouterProtectionWrapper acceptRoles={AllRole}>
            <StoreLayout>
                <Subjects category={category} currentPage={currentPage} isFeature={isFeature} name={name} pageSize={pageSize} />
            </StoreLayout>
        </RouterProtectionWrapper>
    );
};
CourseListPage.getInitialProps = async (ctx: NextPageContext): Promise<CourseListPageProps> => {
    let props = {
        currentPage: ctx.query?.currentPage || 1,
        pageSize: ctx.query?.pageSize || 12,
        name: ctx.query?.name || '',
        category: ctx.query?.category || '',
        isFeature: ctx.query?.isFeature || '',
    } as CourseListPageProps;
    return props;
};
export default CourseListPage;
