import { User } from '../../../../core/models/user';

export interface AuthRegisterDto extends Pick<User, 'email' | 'password' | 'fullName' | 'gender' | 'mobile'> {
    confirmPassword: string;
}
