import { joiResolver } from '@hookform/resolvers/joi';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { FormErrorMessage, FormWrapper, TextField } from '../../../../core/components/form';
import { useStoreUser } from '../../../../core/store';
import { UpdateUserDto, updateUserSchema, updateUser } from './action';

interface UpdateUserProps {}
const defaultValues: UpdateUserDto = {
    name: '',
};

export const UpdateUser: React.FC<UpdateUserProps> = () => {
    const methods = useForm<UpdateUserDto>({
        defaultValues,
        resolver: joiResolver(updateUserSchema),
    });
    const user = useStoreUser();

    const _handleOnSubmit = async (data: UpdateUserDto) => {
        const res = await updateUser(data);
        console.log(res);
    };

    React.useEffect(() => {
        if (user.id) {
            methods.setValue('name', user.name);
        }
    }, [user, methods]);

    return (
        <FormWrapper methods={methods}>
            <h1>Update User</h1>
            <FormErrorMessage />
            <form onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                <TextField label="Name" name="name" />
                <button>Submit</button>
            </form>
        </FormWrapper>
    );
};
