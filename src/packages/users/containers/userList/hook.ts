import * as React from 'react';
import { User } from '../../../../core/models/user';
import { adminGetUserList } from './action';
import { FilterUserDTO } from './interface';

export const useAdminGetUserList = (options: FilterUserDTO) => {
    const [userList, setUserList] = React.useState<User[]>([]);
    const [count, setCount] = React.useState<number>(0);
    React.useEffect(() => {
        adminGetUserList(options).then((res) => {
            setUserList(res.data);
            setCount(res.count);
        });
    }, [options]);

    return { count, userList };
};
