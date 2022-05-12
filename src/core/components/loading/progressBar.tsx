import * as React from 'react';
import { Transition } from '@headlessui/react';
import { useStoreApi } from '../../store';

interface ProgressBarProps {}

export const ProgressBar: React.FunctionComponent<ProgressBarProps> = () => {
    const [widthContent, setWidContent] = React.useState<string>('w-0');
    const apiStore = useStoreApi();

    React.useEffect(() => {
        if (apiStore.isLoading) {
            return setWidContent('w-4/5 duration-[20000ms]');
        }

        if (!apiStore.isLoading && widthContent !== 'w-0') {
            setWidContent('w-full duration-[500ms]');
            setTimeout(() => {
                setWidContent('w-0');
            }, 1000);
        }
    }, [apiStore.isLoading]);

    return (
        <>
            <div className={`h-0.5 origin-left transform bg-red-500 fixed ${widthContent}`}></div>
        </>
    );
};
