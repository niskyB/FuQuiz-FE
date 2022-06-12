import * as React from 'react';
import { RouterProtectionWrapper } from '../../../../src/core/components/routerProtection';
import { UserRole } from '../../../../src/core/models/role';
import { DashBoardLayout } from '../../../../src/packages/dashboard';
import { OverviewSubject } from '../../../../src/packages/subject/container/overviewSubject';

interface SubjectDetailPageProps {}

const SubjectDetailPage: React.FunctionComponent<SubjectDetailPageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.EXPERT]}>
            <DashBoardLayout>
                <OverviewSubject id={'1'} />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

export default SubjectDetailPage;
