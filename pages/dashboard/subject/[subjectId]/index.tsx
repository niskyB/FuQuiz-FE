import * as React from 'react';
import { Component } from 'react';
import { RouterProtectionWrapper } from '../../../../src/core/components/routerProtection';
import { UserRole } from '../../../../src/core/models/role';
import DashBoardLayout from '../../../../src/packages/dashboard/components/dashboardLayout';
import LessonList from '../../../../src/packages/lesson/containers/lessonList';

interface SubjectDetailPageProps {}

const SubjectDetailPage: React.FunctionComponent<SubjectDetailPageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.EXPERT]}>
            <DashBoardLayout>
                <LessonList />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

export default SubjectDetailPage;
