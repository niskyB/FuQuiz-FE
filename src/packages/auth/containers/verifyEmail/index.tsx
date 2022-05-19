import { useRouter } from 'next/router';
import * as React from 'react';
import { routes } from '../../../../core/routes';
import { authVerifyEmail } from './action';

interface VerifyEmailProps {
    token: string;
}

const VerifyEmail: React.FunctionComponent<VerifyEmailProps> = ({ token }) => {
    const router = useRouter();

    React.useEffect(() => {
        authVerifyEmail(token).then(() => router.push(routes.loginUrl));
    }, []);
    return <></>;
};

export default VerifyEmail;
