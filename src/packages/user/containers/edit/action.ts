import { User, userSchema } from '../../../../core/models/user';
import joi from 'joi';
import { http } from '../../../../core/api';

export interface UpdateUserDto extends Pick<User, 'name'> {}
export const updateUserSchema = joi.object<UpdateUserDto>({
    name: userSchema.name,
});

export const updateUser = async (input: UpdateUserDto) => {
    const res = await http.put('/user', input);

    return res.data;
};
