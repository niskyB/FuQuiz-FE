import { joiResolver } from '@hookform/resolvers/joi';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { FormErrorMessage, FormWrapper, TextField } from '../../../../core/components/form';
import { store } from '../../../../core/store';
import { apiActions } from '../../../../core/store/api';
import { authResetPassword, AuthResetPasswordDto, authResetPasswordScheme } from './action';

interface ResetPasswordProps {}
const defaultValues: AuthResetPasswordDto = {
    email: '',
};

const ResetPassword: React.FunctionComponent<ResetPasswordProps> = () => {
    const methods = useForm<AuthResetPasswordDto>({ defaultValues, resolver: joiResolver(authResetPasswordScheme) });

    const _handleOnSubmit = async (data: AuthResetPasswordDto) => {
        store.dispatch(apiActions.setLoading({ isLoading: false }));
        const res = await authResetPassword(data);
        store.dispatch(apiActions.setLoading({ isLoading: true }));
        console.log(res);
    };
    return (
        <FormWrapper methods={methods}>
            <h1>Auth Reset password</h1>
            <FormErrorMessage />
            <form onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                <TextField label="Email" name="email" />
                <button>Submit</button>
            </form>
        </FormWrapper>
    );
};

export default ResetPassword;
