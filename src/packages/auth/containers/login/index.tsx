import { joiResolver } from '@hookform/resolvers/joi';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { FormErrorMessage, FormWrapper, TextField } from '../../../../core/components/form';

import { authLogin, AuthLoginDto, authLoginSchema } from './action';

const defaultValues: AuthLoginDto = {
    password: '',
    username: '',
};

interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
    const methods = useForm<AuthLoginDto>({
        defaultValues,
        resolver: joiResolver(authLoginSchema),
    });

    const _handleOnSubmit = async (data: AuthLoginDto) => {
        const res = await authLogin(data);
        console.log(res);
    };

    return (
        <FormWrapper methods={methods}>
            <h1>Auth Login</h1>
            <FormErrorMessage />
            <form onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                <TextField label="Username" name="username" />
                <TextField label="Password" name="password" type="password" />
                <button>Submit</button>
            </form>
        </FormWrapper>
    );
};
