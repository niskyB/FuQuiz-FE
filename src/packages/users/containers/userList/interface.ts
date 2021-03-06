import { Order } from '../../../../core/common/dataField';
import { UserRole } from '../../../../core/models/role';
import { Gender, User } from '../../../../core/models/user';

export interface FilterUserDTO extends Pick<User, 'fullName' | 'email' | 'mobile'> {
    isActive: boolean | '';
    gender: Gender | '';
    role: UserRole | '';
    currentPage: number;
    pageSize: number;
    orderBy: keyof User;
    order: Order;
}

export interface FilterUserFormDTO extends Omit<FilterUserDTO, 'currentPage' | 'pageSize'> {}
