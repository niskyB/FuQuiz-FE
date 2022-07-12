import { NextPage, NextPageContext } from 'next';
import { RouterProtectionWrapper } from '../../src/core/components/routerProtection';
import { UserRole } from '../../src/core/models/role';
import { PracticeList } from '../../src/packages/practices/containers/practiceList';
import { StoreLayout } from '../../src/packages/store';

export interface PracticeListPageProps {
    currentPage: number;
    pageSize: number;
    subject: string;
}

const PracticeListPage: NextPage<PracticeListPageProps> = ({ currentPage, pageSize, subject }) => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.CUSTOMER]}>
            <StoreLayout>
                <PracticeList currentPage={currentPage} pageSize={pageSize} subject={subject} />
            </StoreLayout>
        </RouterProtectionWrapper>
    );
};

PracticeListPage.getInitialProps = async (ctx: NextPageContext): Promise<PracticeListPageProps> => {
    let props = {
        subject: ctx.query?.subject || '',
        currentPage: ctx.query?.currentPage || 1,
        pageSize: ctx.query?.pageSize || 10,
    };

    return props as PracticeListPageProps;
};

export default PracticeListPage;
