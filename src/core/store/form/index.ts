import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PricePackage } from '../../models/pricePackage';

export interface RegistrationForm {
    subjectName: string;
    subjectId: string;
    pricePackage: PricePackage[];
    defaultPackage: string;
}

export interface FormState {
    isOpening: boolean;
    registrationForm: RegistrationForm;
}

const initialState: FormState = {
    isOpening: false,
    registrationForm: {
        subjectId: '',
        subjectName: '',
        pricePackage: [],
        defaultPackage: '',
    },
};

const reducer = createSlice({
    name: 'form',
    initialState,
    reducers: {
        resetState: () => ({ ...initialState }),
        setRegistrationForm: (state: FormState, { payload }: PayloadAction<RegistrationForm>) => {
            const newRegistration = { ...state.registrationForm, ...payload };
            return {
                ...state,
                isOpening: true,
                registrationForm: newRegistration,
            };
        },
    },
    extraReducers: (builder) => {},
});
export const formActions = {
    ...reducer.actions,
};
export const formReducer = reducer.reducer;
