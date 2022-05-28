import { NextPage, NextPageContext } from 'next';
import * as React from 'react';
import { RouterProtectionWrapper } from '../../../src/core/components/routerProtection';
import { AllRole } from '../../../src/core/models/user';
import SimulationDetail from '../../../src/packages/simulation/containers/simulationDetail';
import { StoreLayout } from '../../../src/packages/store';

interface SimulationDetailPageProps {
    quizId: string;
}

const SimulationDetailPage: NextPage<SimulationDetailPageProps> = ({ quizId }) => {
    return (
        <RouterProtectionWrapper acceptRoles={AllRole}>
            <StoreLayout>
                <SimulationDetail quizId={quizId} />
            </StoreLayout>
        </RouterProtectionWrapper>
    );
};

SimulationDetailPage.getInitialProps = async (ctx: NextPageContext): Promise<SimulationDetailPageProps> => {
    let props = { quizId: ctx.query?.quizId || '' };

    return props as SimulationDetailPageProps;
};

export default SimulationDetailPage;
