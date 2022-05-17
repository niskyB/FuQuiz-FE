import { useRouter } from 'next/router';
import * as React from 'react';
import { toast } from 'react-toastify';
import { routes } from '../../../../core/routes';
import { authVerifyEmail } from './action';

interface VerifyEmailProps {
    token: string;
}

const VerifyEmail: React.FunctionComponent<VerifyEmailProps> = ({ token }) => {
    const router = useRouter();
    const handleRequest = async () => {
        await authVerifyEmail(token);
        router.push(routes.loginUrl);
    };
    React.useEffect(() => {
        handleRequest();
    }, []);
    return <></>;
};

export default VerifyEmail;
