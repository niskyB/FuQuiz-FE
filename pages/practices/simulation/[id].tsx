import * as React from 'react';
import { RouterProtectionWrapper } from '../../../src/core/components/routerProtection';
import { AllRole } from '../../../src/core/models/user';
import SimulationDetail from '../../../src/packages/simulation/containers/simulationDetail';
import SimulationList from '../../../src/packages/simulation/containers/simulationList';
import { StoreLayout } from '../../../src/packages/store';

interface SimulationDetailPageProps {}

const SimulationDetailPage: React.FunctionComponent<SimulationDetailPageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={AllRole}>
            <StoreLayout>
                <SimulationDetail />
            </StoreLayout>
        </RouterProtectionWrapper>
    );
};

export default SimulationDetailPage;
