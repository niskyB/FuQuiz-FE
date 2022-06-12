import * as React from 'react';
import { ResetForm } from '../../../core/common/HOC/resetForm';
import { GlobalLoading } from '../../../core/components/loading/globalLoading';
import { Navigation } from '../container/navigation';

interface StoreLayoutProps {}

export const StoreLayout: React.FC<StoreLayoutProps> = ({ children }) => {
    return (
        <>
            <ResetForm>
                <div className="flex flex-col w-full h-full min-h-screen bg-gray-200">
                    <Navigation />
                    <div className="flex-1 p-5 ">
                        <div className="w-full mx-auto max-w-7xl">{children}</div>
                    </div>
                    <GlobalLoading />
                </div>
            </ResetForm>
        </>
    );
};
