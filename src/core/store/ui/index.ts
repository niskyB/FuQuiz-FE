import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PopUp {
    title: string;
    description: string;
}

export interface UIState {
    isOpening: boolean;
    popUp: PopUp;
}

const initialState: UIState = {
    isOpening: false,
    popUp: {
        title: '',
        description: '',
    },
};

const reducer = createSlice({
    name: 'UI',
    initialState,
    reducers: {
        resetState: () => ({ ...initialState }),
        setPopUp: (state: UIState, { payload }: PayloadAction<PopUp>) => {
            return {
                ...state,
                isOpening: true,
                popUp: payload,
            };
        },
        closePopUp: (state: UIState) => {
            return {
                ...state,
                isOpening: false,
                popUp: initialState.popUp,
            };
        },
    },
    extraReducers: (builder) => {},
});
export const UIActions = {
    ...reducer.actions,
};
export const uiReducer = reducer.reducer;
