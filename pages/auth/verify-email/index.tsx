import * as React from 'react';
import { Notification, StoreLayout } from '../../../src/packages/store';
import { RouterUnAuthProtectionWrapper } from '../../../src/core/components/routerProtection';

interface SendEmailProps {}

const SendEmailPage: React.FC<SendEmailProps> = () => {
    return (
        <RouterUnAuthProtectionWrapper>
            <StoreLayout>
                <Notification
                    title="Verify Email"
                    detail="We have sent a confirmation email to your mailbox, check it out and you can close this website now."
                />
            </StoreLayout>
        </RouterUnAuthProtectionWrapper>
    );
};
export default SendEmailPage;
