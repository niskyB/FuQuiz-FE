import * as React from 'react';
import { store } from '../../store';
import { apiActions } from '../../store/api';
interface ResetFormProps {}

export const ResetForm: React.FC<ResetFormProps> = ({ children }) => {
    React.useEffect(() => {
        store.dispatch(apiActions.resetState());
    }, []);

    return <>{children}</>;
};
