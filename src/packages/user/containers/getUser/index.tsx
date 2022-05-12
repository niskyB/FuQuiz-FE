import { useEffect, useState } from 'react';
import { User } from '../../../../core/models/user';
import { getUserById } from './action';

interface GetUserProps {
    id: string;
}

const GetUser: React.FunctionComponent<GetUserProps> = ({ id }) => {
    const [userData, setUserData] = useState<User>();
    useEffect(() => {
        if (id)
            getUserById(id).then((data) => {
                console.log(data);
                setUserData(data);
            });
        return () => {};
    }, [id]);

    return <>{JSON.stringify(userData)}</>;
};

export default GetUser;
