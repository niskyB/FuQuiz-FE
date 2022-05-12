import { useRouter } from 'next/router';
import * as React from 'react';
import { routes } from '../../routes';
import { useStoreUser } from '../../store';

interface RouterUnAuthProtectionWrapperProps {}

export const RouterUnAuthProtectionWrapper: React.FC<RouterUnAuthProtectionWrapperProps> = ({ children }) => {
    const user = useStoreUser();
    const router = useRouter();

    React.useEffect(() => {
        if (user.isLogin && user.id) {
            router.push(routes.homeUrl);
        }
    }, [user, router]);

    return <>{children}</>;
};
