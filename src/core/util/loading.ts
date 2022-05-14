import { store } from '../store';
import { apiActions } from '../store/api';

export const openGlobalLoading = () => {
    store.dispatch(apiActions.setGlobalLoading(true));
};

export const closeGlobalLoading = () => {
    setTimeout(() => {
        store.dispatch(apiActions.setGlobalLoading(false));
    }, 500);
};
