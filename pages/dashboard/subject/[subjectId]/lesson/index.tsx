import * as React from 'react';
import { Component } from 'react';
import { RouterProtectionWrapper } from '../../../../../src/core/components/routerProtection';
import { UserRole } from '../../../../../src/core/models/role';
import { DashBoardLayout } from '../../../../../src/packages/dashboard';

interface LessonPageProps {}

const LessonPage: React.FunctionComponent<LessonPageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.EXPERT]}>
            <DashBoardLayout>Subjects</DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

export default LessonPage;
