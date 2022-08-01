import { useRouter } from 'next/router';
import * as React from 'react';
import { authVerifyEmail } from './action';
import { routes } from '../../../../core/routes';

interface VerifyEmailProps {
    token: string;
}

export const VerifyEmail: React.FunctionComponent<VerifyEmailProps> = ({ token }) => {
    const router = useRouter();

    React.useEffect(() => {
        authVerifyEmail(token).finally(() => router.push(routes.loginUrl));
    }, []);
    return <></>;
};
