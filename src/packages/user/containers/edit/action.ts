import { User } from '../../../../core/models/user';
import { http } from '../../../../core/api';

export interface UpdateUserDto extends Pick<User, 'fullName' | 'gender' | 'mobile' | 'email'> {
    image: FileList;
}

export const updateUser = async (data: UpdateUserDto) => {
    let { email, ...other } = data;
    let form = new FormData();
    for (const key in other) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            const element = (data as any)[key];
            form.append(key, element);
        }

        if (key === 'image') {
            let element = (data as any)[key];
            if (element.length <= 0) {
                form.append(key, new File([], 'image', { type: 'image/png' }));
                console.log(new File([], '', { type: 'image/png' }));
            } else {
                form.append(key, element[0]);
                console.log(element[0]);
            }
        }
    }
    const image = form.getAll('image');
    // console.log(image);

    const res = await http.put('/user', form, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });

    return res.data;
};
