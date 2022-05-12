import * as React from 'react';

interface AuthLayoutProps {}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
    return <div>{children}</div>;
};
