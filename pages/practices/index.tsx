import { NextPage } from 'next';
import * as React from 'react';
import { Component } from 'react';
import { RouterProtectionWrapper } from '../../src/core/components/routerProtection';
import { AllRole } from '../../src/core/models/user';
import { PracticeList } from '../../src/packages/practices/containers/practiceList';
import { StoreLayout } from '../../src/packages/store';

interface PracticeListPageProps {}

const PracticeListPage: NextPage<PracticeListPageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={AllRole}>
            <StoreLayout>
                <PracticeList />
            </StoreLayout>
        </RouterProtectionWrapper>
    );
};

export default PracticeListPage;
