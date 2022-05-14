import type { NextPage } from 'next';

// --- components

import { StoreLayout } from '../src/packages/store/components/storeLayout';

interface TestDto {
    username: string;
    hello: string;
    lll: string;
}

const Home: NextPage = () => {
    return <StoreLayout></StoreLayout>;
};

export default Home;
