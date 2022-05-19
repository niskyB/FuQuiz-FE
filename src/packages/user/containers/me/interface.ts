import { User } from '../../../../core/models/user';

export interface UpdateUserDto extends Pick<User, 'fullName' | 'gender' | 'mobile' | 'email'> {
    image: File;
}
