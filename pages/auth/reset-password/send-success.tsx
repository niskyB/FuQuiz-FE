import * as React from 'react';
import { Notification, StoreLayout } from '../../../src/packages/store';
import { RouterUnAuthProtectionWrapper } from '../../../src/core/components/routerProtection';

interface SendSuccessPageProps {}

const SendSuccessPage: React.FunctionComponent<SendSuccessPageProps> = () => {
    return (
        <RouterUnAuthProtectionWrapper>
            <StoreLayout>
                <Notification
                    title="Reset password"
                    detail="We have sent an reset password url to your email, check it out and you can close this website now."
                />
            </StoreLayout>
        </RouterUnAuthProtectionWrapper>
    );
};

export default SendSuccessPage;
