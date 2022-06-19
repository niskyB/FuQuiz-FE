import { User } from '../../../../core/models/user';

export interface AddUserDTO extends Pick<User, 'email' | 'fullName' | 'gender' | 'mobile'> {
    role: string;
}
