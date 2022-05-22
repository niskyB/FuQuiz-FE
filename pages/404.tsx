import * as React from 'react';
import { StoreLayout } from '../src/packages/store';
import { Error } from '../src/packages/store/components/errorPage';

interface NotFoundPageProps {}

const NotFoundPage: React.FC<NotFoundPageProps> = () => {
    return (
        <StoreLayout>
            <Error detail="Please check the URL in the address bar and try again. " statusCode="404" title="Page not found" />
        </StoreLayout>
    );
};

export default NotFoundPage;
