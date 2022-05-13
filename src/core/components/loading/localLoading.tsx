import * as React from 'react';
import { useStoreApi } from '../../store';

interface LocalLoadingProps {}

export const LocalLoading: React.FC<LocalLoadingProps> = ({}) => {
    const apiState = useStoreApi();
    if (apiState.isLocalLoading)
        return (
            <div className="flex flex-col items-center justify-center w-full h-full">
                <img src="/asset/icons/loading.gif" className="w-64 md:w-80" />
            </div>
        );
    return <></>;
};
