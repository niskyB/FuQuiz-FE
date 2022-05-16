import * as React from 'react';
import { RouterUnAuthProtectionWrapper } from '../../../src/core/components/routerProtection';
import { StoreLayout } from '../../../src/packages/store/components';

interface SendSuccessPageProps {}

const SendSuccessPage: React.FunctionComponent<SendSuccessPageProps> = () => {
    return (
        <RouterUnAuthProtectionWrapper>
            <StoreLayout>
                <div className="flex flex-col justify-center min-h-full py-12 sm:px-6 lg:px-8 intro-y">
                    <div className="sm:mx-auto sm:w-full sm:max-w-md"></div>
                    <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">Reset password</h2>

                    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                        <div className="px-4 py-8 space-y-5 bg-white shadow sm:rounded-lg sm:px-10">
                            <p className="text-base text-center text-gray-500">The token is sending to your email, you can close this website now.</p>
                        </div>
                    </div>
                </div>
            </StoreLayout>
        </RouterUnAuthProtectionWrapper>
    );
};

export default SendSuccessPage;
