import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

interface NotificationWrapperProps {}

const NotificationWrapper: React.FunctionComponent<NotificationWrapperProps> = ({ children }) => {
    const router = useRouter();
    const { query } = router;
    useEffect(() => {
        if (query.notification) {
            toast.success(query.notification);
            router.push(router.asPath.replace('notification=' + query.notification, ''));
        }
    }, [query.notification]);
    return <>{children}</>;
};

export default NotificationWrapper;
