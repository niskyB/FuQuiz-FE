import { NextPage, NextPageContext } from 'next';
import * as React from 'react';
import { Order } from '../../../src/core/common/dataField';
import { StoreLayout } from '../../../src/packages/store';
import { SubjectDetail } from '../../../src/packages/subject';
import { SubjectFilterDTO } from '../../../src/packages/subject/container/subjectList/interface';

interface CourseDetailPageProps extends SubjectFilterDTO {
    id: string;
}

const CourseDetailPage: NextPage<CourseDetailPageProps> = ({ id, category, createdAt, currentPage, isActive, isFeature, name, pageSize }) => {
    return (
        <StoreLayout>
            <SubjectDetail
                category={category}
                createdAt={createdAt}
                currentPage={currentPage}
                id={id}
                isActive={isActive}
                isFeature={isFeature}
                name={name}
                pageSize={pageSize}
                order={Order.DESC}
            />
        </StoreLayout>
    );
};

CourseDetailPage.getInitialProps = async (ctx: NextPageContext): Promise<CourseDetailPageProps> => {
    let props = { id: ctx.query?.id || '' };

    return props as CourseDetailPageProps;
};

export default CourseDetailPage;
