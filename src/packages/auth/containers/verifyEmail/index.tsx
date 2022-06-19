import { useRouter } from 'next/router';
import * as React from 'react';
import { routes } from '../../../../core/routes';
import { authVerifyEmail } from './action';

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
