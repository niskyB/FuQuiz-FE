import * as React from 'react';
import { User } from '../../../../core/models/user';
import { getUserById } from './action';

export const useGetUserById = (id: string) => {
    const [user, setUser] = React.useState<User>();
    React.useEffect(() => {
        getUserById(id).then((res) => {
            setUser(res.data);
        });
    }, [id]);

    return { user };
};
