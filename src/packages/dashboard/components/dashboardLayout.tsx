import * as React from 'react';
import { ToastContainer } from 'react-toastify';
import { GlobalLoading } from '../../../core/components/loading';
import SideBar from './sidebar';
import 'react-toastify/dist/ReactToastify.css';

interface DashBoardLayoutProps {}

const DashBoardLayout: React.FunctionComponent<DashBoardLayoutProps> = ({ children }) => {
    return (
        <>
            <div className="flex h-full min-h-screen bg-gray-50">
                <SideBar />
                <div className="flex-1">
                    <div
                        className="w-full py-10 mx-auto max-w-7xl "
                    >
                        {children}
                    </div>
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

export default DashBoardLayout;
