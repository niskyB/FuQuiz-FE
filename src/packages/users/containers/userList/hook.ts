import * as React from 'react';
import { User } from '../../../../core/models/user';

export const useGetUserList = () => {
    const [userList, setUserList] = React.useState<User[]>([]);
    const [count, setCount] = React.useState<number>(0);
    React.useEffect(() => {}, []);

    return { count, userList };
};

export const useGetList = <T>(url: string) => {
    const [list, setList] = React.useState<T[]>([]);
};
