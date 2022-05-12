import * as React from 'react';
import { Navigation } from './navigation';

interface StoreLayoutProps {}

export const StoreLayout: React.FC<StoreLayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col w-full h-full min-h-screen bg-gray-50">
            <Navigation />
            <div className="flex-1 p-5 ">{children}</div>
        </div>
    );
};
