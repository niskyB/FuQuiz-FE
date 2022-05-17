import * as React from 'react';
import { StoreLayout } from '../src/packages/store/components';
import { Error } from '../src/packages/store/components/errorPage';

interface ErrorPageProps {}

const ErrorPage: React.FC<ErrorPageProps> = () => {
    return (
        <StoreLayout>
            <Error detail="Something went wrong, please try again later" statusCode="500" title="Internal server error" />
        </StoreLayout>
    );
};

export default ErrorPage;
