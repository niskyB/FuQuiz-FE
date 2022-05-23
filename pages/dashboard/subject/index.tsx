import * as React from 'react';
import { Component } from 'react';
import { RouterProtectionWrapper } from '../../../src/core/components/routerProtection';
import { UserRole } from '../../../src/core/models/role';
import DashBoardLayout from '../../../src/packages/dashboard/components/dashboardLayout';
import SubjectList from '../../../src/packages/subject/container/subjectList';

interface SubjectPageProps {}

const SubjectPage: React.FunctionComponent<SubjectPageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.EXPERT]}>
            <DashBoardLayout>
                <SubjectList />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

export default SubjectPage;
