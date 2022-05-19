import { User } from '../../../../core/models/user';

export interface AuthSendResetDto extends Pick<User, 'email'> {}

export interface AuthResetPasswordDto extends Pick<User, 'password'> {
    confirmPassword: string;
}
