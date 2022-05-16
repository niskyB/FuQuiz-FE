import { User } from '../../../../core/models/user';
import { http } from '../../../../core/api';

export interface UpdateUserDto extends Pick<User, 'fullName' | 'gender' | 'mobile' | 'email'> {
    image: FileList[];
}

export const updateUser = async (data: UpdateUserDto) => {
    let { email, ...other } = data;
    console.log(other);
    let form = new FormData();
    for (const key in other) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            const element = (data as any)[key];
            form.append(key, element);
        }

        if (key === 'image') {
            const element = (data as any)[key];
            if (element === null) {
                form.append(key, '');
            } else {
                form.append(key, element[0]);
            }
        }
    }

    const res = await http.put('/user', form, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });

    return res.data;
};
