import { NextPage, NextPageContext } from 'next';
import { Order } from '../../src/core/common/dataField';
import { StoreLayout } from '../../src/packages/store';
import { BlogListFilterDTO } from '../../src/packages/subject/container/subjects/interface';
import { Subjects } from '../../src/packages/subject';

interface CourseListPageProps extends BlogListFilterDTO {}

const CourseListPage: NextPage<CourseListPageProps> = ({ category, currentPage, isFeature, name, pageSize, order }) => {
    return (
        <StoreLayout>
            <Subjects category={category} currentPage={currentPage} isFeature={isFeature} name={name} pageSize={pageSize} order={order} />
        </StoreLayout>
    );
};
CourseListPage.getInitialProps = async (ctx: NextPageContext): Promise<CourseListPageProps> => {
    let props = {
        currentPage: ctx.query?.currentPage || 1,
        pageSize: ctx.query?.pageSize || 12,
        name: ctx.query?.name || '',
        category: ctx.query?.category || '',
        isFeature: ctx.query?.isFeature || '',
        order: ctx.query?.order || Order.DESC,
    } as CourseListPageProps;
    return props;
};
export default CourseListPage;
