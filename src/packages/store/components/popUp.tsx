import { XIcon } from '@heroicons/react/outline';
import { store, useStoreUI } from '../../../core/store';
import { UIActions } from '../../../core/store/ui';

function PopUp() {
    const UIState = useStoreUI();
    if (UIState.isOpening)
        return (
            <>
                <div className="fixed z-20 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <div className="w-full px-4 py-10 bg-white shadow sm:rounded-lg sm:px-10 min-w-[400px] relative">
                        <div className="z-50 space-y-5">
                            <div className="flex flex-col space-y-4">
                                <p className="text-lg font-semibold">{UIState.popUp.title}</p>
                                <div
                                    className="mt-2 space-y-4 text-base text-gray-700"
                                    dangerouslySetInnerHTML={{
                                        __html: UIState.popUp.description || '',
                                    }}
                                />
                            </div>
                        </div>
                        <div
                            onClick={() => store.dispatch(UIActions.closePopUp())}
                            className="absolute w-5 h-5 text-gray-500 cursor-pointer right-5 top-5"
                        >
                            <XIcon />
                        </div>
                    </div>
                </div>
                <div
                    onClick={() => store.dispatch(UIActions.closePopUp())}
                    className="fixed top-0 left-0 z-10 w-screen h-screen cursor-pointer bg-gray-900/50"
                ></div>
            </>
        );

    return <></>;
}

export default PopUp;
