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
    role:{ id:""} ,
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
        
    );
};
