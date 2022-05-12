import type { NextPage } from 'next';
import * as joi from 'joi';

// --- components

import { StoreLayout } from '../src/packages/store/components/storeLayout';

interface TestDto {
    username: string;
    hello: string;
    lll: string;
}

const schema = joi.object<TestDto>({});

const defaultValues: TestDto = {
    username: '',
    hello: '24',
    lll: '24',
};

const Home: NextPage = () => {
    return <StoreLayout></StoreLayout>;
};

export default Home;
