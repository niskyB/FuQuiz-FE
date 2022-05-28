import { User } from '../../../../core/models/user';

export interface AddUserDTO extends Pick<User, 'email' | 'password' | 'fullName' | 'gender' | 'mobile'> {
    role: string;
}
