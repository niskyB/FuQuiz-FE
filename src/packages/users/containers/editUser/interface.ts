import { UserRole } from '../../../../core/models/role';
import { User } from '../../../../core/models/user';

export interface UpdateStatusDTO {
    isActive: boolean;
}

export interface UpdateUserRoleDTO {
    role: UserRole;
}

export interface EditUserFormDTO extends Pick<User, 'email' | 'fullName' | 'gender' | 'mobile'> {
    role: UserRole;
    isActive: boolean;
}
