import * as React from 'react';
import { StoreLayout } from '../src/packages/store/components';
import { NotFound } from '../src/packages/store/components/notFound';

interface NotFoundPageProps {}

const NotFoundPage: React.FC<NotFoundPageProps> = () => {
    return (
        <StoreLayout>
            <NotFound />
        </StoreLayout>
    );
};

export default NotFoundPage;
