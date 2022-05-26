import * as React from 'react';
import { RouterProtectionWrapper } from '../../../src/core/components/routerProtection';
import { AllRole } from '../../../src/core/models/user';
import PracticeList from '../../../src/packages/practices/containers/practiceList';
import SimulationList from '../../../src/packages/simulation/containers/simulationList';
import { StoreLayout } from '../../../src/packages/store';

interface SimulationPageProps {}

const SimulationPage: React.FunctionComponent<SimulationPageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={AllRole}>
            <StoreLayout>
                <SimulationList />
            </StoreLayout>
        </RouterProtectionWrapper>
    );
};

export default SimulationPage;
