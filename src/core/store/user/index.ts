import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'universal-cookie';
import { constant } from '../../constant';
import { UserRole } from '../../models/role';

import { Gender, User } from '../../models/user';
import { userThunk } from './thunks';

export interface UserState extends User {
    isLogin: boolean;
}
export const defaultCurrentUser: User = {
    createAt: '',
    email: '',
    fullName: '',
    gender: Gender.MALE,
    id: '',
    typeId: '',
    imageUrl: '',
    isActive: false,
    mobile: '',
    password: '',
    role: { id: '', name: UserRole.CUSTOMER },
    token: '',
    updateAt: '',
};
const initialState: UserState = {
    ...defaultCurrentUser,
    isLogin: false,
};

const reducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        resetState: () => ({ ...initialState }),
        updateLogin: (state) => ({ ...state, isLogin: true }),
    },
    extraReducers: (builder) => {
        builder.addCase(userThunk.getCurrentUser.fulfilled, (state, { payload }) => {
            return { ...state, ...payload, isLogin: true };
        });
        builder.addCase(userThunk.getCurrentUser.rejected, (state) => {
            const cookies = new Cookies();
            cookies.set(constant.TOKEN_COOKIE_KEY, '', { maxAge: -999 });

            return { ...state, isLogin: true };
        });
    },
});
export const userActions = {
    ...reducer.actions,
};
export const userReducer = reducer.reducer;
