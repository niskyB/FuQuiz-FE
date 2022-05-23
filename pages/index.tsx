import type { NextPage } from 'next';
import { StoreLayout } from '../src/packages/store';

// --- components

import { Home } from '../src/packages/store/container/Home';

const HomePage: NextPage = () => {
    return (
        <StoreLayout>
            <Home />
        </StoreLayout>
    );
};

export default HomePage;
