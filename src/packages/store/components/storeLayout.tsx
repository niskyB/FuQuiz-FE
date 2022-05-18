import * as React from 'react';
import { GlobalLoading } from '../../../core/components/loading/globalLoading';
import { Navigation } from '../container/navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface StoreLayoutProps {}

export const StoreLayout: React.FC<StoreLayoutProps> = ({ children }) => {
    return (
        <>
            <div className="flex flex-col w-full h-full min-h-screen bg-gray-200">
                <Navigation />
                <div className="flex-1 p-5 ">
                    <div className="w-full mx-auto max-w-7xl">{children}</div>
                </div>
                <GlobalLoading />
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
};
