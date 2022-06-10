import * as React from 'react';
import { ResetForm } from '../../../core/common/HOC/resetForm';
import { GlobalLoading } from '../../../core/components/loading';
import { SideBar } from './sidebar';

interface DashBoardLayoutProps {}

export const DashBoardLayout: React.FunctionComponent<DashBoardLayoutProps> = ({ children }) => {
    return (
        <>
            <ResetForm>
                <div className="flex h-full min-h-screen bg-gray-200">
                    <SideBar />
                    <div className="flex-1 max-h-screen overflow-y-auto">
                        <div className="w-full max-w-full p-10 mx-auto">{children}</div>
                    </div>
                    <GlobalLoading />
                </div>
            </ResetForm>
        </>
    );
};
