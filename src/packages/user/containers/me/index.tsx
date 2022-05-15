import * as React from 'react';
import { Gender, User } from '../../../../core/models/user';
import { getMe } from './action';

export const defaultCurrentUser: User = {
    email: '',
    fullName: '',
    id: '',
    createAt: '',
    updateAt: '',
    password: '',
    role: { id: '', name: null },
    gender: Gender.MALE,
    imageUrl: '',
    isActive: false,
    mobile: '',
    token: '',
};

interface UserMeProps {}

export const UserMe: React.FC<UserMeProps> = () => {
    const [currentUser, setCurrentUser] = React.useState<User>({ ...defaultCurrentUser });

    React.useEffect(() => {
        getMe().then((res) => {
            setCurrentUser(res);
        });
    }, []);

    return (
        <div>
            <div>{currentUser.id}</div>
            <div>{currentUser.email}</div>
            <div>{currentUser.fullName}</div>
            <div>{currentUser.gender}</div>
        </div>
    );
};
