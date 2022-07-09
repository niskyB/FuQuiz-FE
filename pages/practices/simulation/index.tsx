import { NextPage, NextPageContext } from 'next';
import * as React from 'react';
import { RouterProtectionWrapper } from '../../../src/core/components/routerProtection';
import { UserRole } from '../../../src/core/models/role';
import { AllRole } from '../../../src/core/models/user';
import { SimulationList } from '../../../src/packages/simulation/containers/simulationList';
import { StoreLayout } from '../../../src/packages/store';

export interface SimulationPageProps {
    subject: string;
    name: string;
    currentPage: number;
    pageSize: number;
}

const SimulationPage: NextPage<SimulationPageProps> = ({ currentPage, name, pageSize, subject }) => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.CUSTOMER]}>
            <StoreLayout>
                <SimulationList currentPage={currentPage} name={name} pageSize={pageSize} subject={subject} />
            </StoreLayout>
        </RouterProtectionWrapper>
    );
};

SimulationPage.getInitialProps = async (ctx: NextPageContext): Promise<SimulationPageProps> => {
    let props = {
        subject: ctx.query?.subject || '',
        name: ctx.query?.name || '',
        currentPage: ctx.query?.currentPage || 0,
        pageSize: ctx.query?.pageSize || 12,
    };

    return props as SimulationPageProps;
};
export default SimulationPage;
