import type { NextPage } from 'next';

// --- components

import { StoreLayout } from '../src/packages/store/components/storeLayout';
import { Home } from '../src/packages/store/container/Home';

interface TestDto {
    username: string;
    hello: string;
    lll: string;
}

const HomePage: NextPage = () => {
    return (
        <StoreLayout>
            <Home />
        </StoreLayout>
    );
};

export default HomePage;
