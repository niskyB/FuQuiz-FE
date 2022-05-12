import * as React from 'react';
import { User, UserRole, UserStatus } from '../../../../core/models/user';
import { getMe } from './action';

const defaultCurrentUser: User = {
    createDate: '',
    email: '',
    googleId: '',
    id: '',
    name: '',
    password: '',
    role: UserRole.ADMIN,
    status: UserStatus.ACTIVE,
    updateDate: '',
    username: '',
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
            <div>{currentUser.name}</div>
            <div>{currentUser.username}</div>
        </div>
    );
};
