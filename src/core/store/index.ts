import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { apiReducer, ApiState } from './api';
import { userReducer, UserState } from './user';

import { useSelector } from 'react-redux';
import { formReducer, FormState } from './form';
import { uiReducer, UIState } from './ui';

export interface RootState {
    api: ApiState;
    user: UserState;
    form: FormState;
    ui: UIState;
}

const reducers = combineReducers<RootState>({
    api: apiReducer,
    user: userReducer,
    form: formReducer,
    ui: uiReducer,
});

export const store = configureStore({
    reducer: reducers,
    devTools: process.env.NODE_ENV !== 'production',
});

export const useStoreApi = () => useSelector<RootState, ApiState>((state) => state.api);
export const useStoreUser = () => useSelector<RootState, UserState>((state) => state.user);
export const useStoreForm = () => useSelector<RootState, FormState>((state) => state.form);
export const useStoreUI = () => useSelector<RootState, UIState>((state) => state.ui);
