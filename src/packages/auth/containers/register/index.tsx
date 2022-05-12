import { joiResolver } from '@hookform/resolvers/joi';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { FormErrorMessage, FormWrapper, TextField } from '../../../../core/components/form';
import { authRegister, AuthRegisterDto, authRegisterSchema } from './action';

const defaultValues: AuthRegisterDto = {
    password: '',
    username: '',
    confirmPassword: '',
    name: '',
};

interface RegisterProps {}

export const Register: React.FC<RegisterProps> = () => {
    const methods = useForm<AuthRegisterDto>({
        defaultValues,
        resolver: joiResolver(authRegisterSchema),
    });

    const _handleOnSubmit = async (data: AuthRegisterDto) => {
        const res = await authRegister(data);
    };

    return (
        <FormWrapper methods={methods}>
            <h1>Auth Register</h1>
            <FormErrorMessage />
            <form onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                <TextField label="Name" name="name" />
                <TextField label="Username" name="username" />
                <TextField label="Password" name="password" type="password" />
                <TextField label="Confirm Password" name="confirmPassword" type="password" />
                <button>Submit</button>
            </form>
        </FormWrapper>
    );
};
