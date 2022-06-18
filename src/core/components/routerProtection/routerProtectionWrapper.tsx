import { useRouter } from 'next/router';
import * as React from 'react';
import { UserRole } from '../../models/role';
import { routes } from '../../routes';
import { useStoreUser } from '../../store';

interface RouterProtectionWrapperProps {
    acceptRoles: Array<UserRole>;
}

export const RouterProtectionWrapper: React.FC<RouterProtectionWrapperProps> = ({ children, acceptRoles }) => {
    const user = useStoreUser();
    const router = useRouter();

    React.useEffect(() => {
        if (user.isLogin && (!user.id || acceptRoles.findIndex((item) => user.role && item === user.role.description) === -1)) {
            router.push(routes.loginUrl);
        }
    }, [acceptRoles, user, router]);

    return <>{children}</>;
};
