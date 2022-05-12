import { joiResolver } from '@hookform/resolvers/joi';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { FormErrorMessage, FormWrapper, TextField } from '../../../../core/components/form';
import { ChangePasswordDto, changePasswordSchema, userChangePassword } from './action';

interface PasswordProps {}

const defaultValues: ChangePasswordDto = {
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
};

export const ChangePassword: React.FunctionComponent<PasswordProps> = () => {
    const methods = useForm<ChangePasswordDto>({ defaultValues, resolver: joiResolver(changePasswordSchema) });

    const _handleOnSubmit = async (data: ChangePasswordDto) => {
        const res = await userChangePassword(data);
        console.log(res);
    };

    return (
        <FormWrapper methods={methods}>
            <h1>Auth change password</h1>
            <FormErrorMessage />
            <form onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                <TextField label="Password" name="currentPassword" type="password" />
                <TextField label="New Password" name="newPassword" type="password" />
                <TextField label="New Password Confirm" name="confirmNewPassword" type="password" />
                <button>Submit</button>
            </form>
        </FormWrapper>
    );
};
