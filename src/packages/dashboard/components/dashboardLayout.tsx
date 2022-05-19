import * as React from 'react';
import { GlobalLoading } from '../../../core/components/loading';
import SideBar from './sidebar';

interface DashBoardLayoutProps {}

const DashBoardLayout: React.FunctionComponent<DashBoardLayoutProps> = ({ children }) => {
    return (
        <>
            <div className="flex h-full min-h-screen bg-gray-200">
                <SideBar />
                <div className="flex-1 max-h-screen overflow-y-auto">
                    <div className="w-full py-10 mx-auto max-w-7xl ">{children}</div>
                </div>
                <GlobalLoading />
            </div>
        </>
    );
};
export default DashBoardLayout;
