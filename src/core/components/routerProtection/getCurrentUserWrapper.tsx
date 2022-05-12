import * as React from 'react';
import Cookies from 'universal-cookie';
import { constant } from '../../constant';
import { store } from '../../store';
import { userActions } from '../../store/user';
import { userThunk } from '../../store/user/thunks';
interface GetCurrentUserWrapperProps {}

export const GetCurrentUserWrapper: React.FC<GetCurrentUserWrapperProps> = ({ children }) => {
    React.useEffect(() => {
        const cookies = new Cookies();
        const token = cookies.get(constant.TOKEN_COOKIE_KEY);
        if (token) {
            store.dispatch(userThunk.getCurrentUser());
        } else {
            store.dispatch(userActions.updateLogin());
        }
    }, []);

    return <>{children}</>;
};
