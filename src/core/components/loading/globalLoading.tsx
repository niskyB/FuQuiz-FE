import * as React from 'react';
import { useStoreApi } from '../../store';

interface GlobalLoadingProps {}

export const GlobalLoading: React.FC<GlobalLoadingProps> = () => {
    const apiState = useStoreApi();
    if (apiState.isGlobalLoading)
        return (
            <div className="fixed inset-0 z-20 flex flex-col items-center justify-center w-screen h-screen bg-black/80">
                <img src="/asset/icons/loading.gif" className="w-64 md:w-80" />
            </div>
        );
    return <></>;
};
