import * as React from 'react';
import { Component } from 'react';
import { RouterProtectionWrapper } from '../../../../../src/core/components/routerProtection';
import { UserRole } from '../../../../../src/core/models/role';
import { DashBoardLayout } from '../../../../../src/packages/dashboard';
import { LessonList } from '../../../../../src/packages/lesson';

interface LessonPageProps {}

const LessonPage: React.FunctionComponent<LessonPageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.EXPERT]}>
            <DashBoardLayout>
                <LessonList />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

export default LessonPage;
