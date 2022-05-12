import * as React from 'react';

interface UserLayoutProps {}

export const UserLayout: React.FC<UserLayoutProps> = ({ children }) => {
    return <div>{children}</div>;
};
