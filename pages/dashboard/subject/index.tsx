import { NextPage, NextPageContext } from 'next';
import * as React from 'react';
import { RouterProtectionWrapper } from '../../../src/core/components/routerProtection';
import { UserRole } from '../../../src/core/models/role';
import { DashBoardLayout } from '../../../src/packages/dashboard';
import { SubjectList } from '../../../src/packages/subject';
import { SubjectFilterDTO } from '../../../src/packages/subject/container/subjectList/interface';

const SubjectPage: NextPage<SubjectFilterDTO> = ({ category, createdAt, currentPage, isActive, name, pageSize }) => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.ADMIN, UserRole.EXPERT]}>
            <DashBoardLayout>
                <SubjectList
                    category={category}
                    createdAt={createdAt}
                    currentPage={currentPage}
                    isActive={isActive}
                    name={name}
                    pageSize={pageSize}
                />
            </DashBoardLayout>
        </RouterProtectionWrapper>
    );
};

SubjectPage.getInitialProps = async (ctx: NextPageContext): Promise<SubjectFilterDTO> => {
    let props = {
        name: ctx.query?.name || '',
        category: ctx.query?.category || '',
        createdAt: ctx.query?.createdAt || '',
        currentPage: ctx.query?.currentPage || 1,
        isActive: ctx.query?.isActive || '',
        pageSize: ctx.query?.pageSize || 12,
    };

    return props as SubjectFilterDTO;
};

export default SubjectPage;
