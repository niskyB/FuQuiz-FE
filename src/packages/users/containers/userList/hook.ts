import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetListWithCount } from '../../../../core/common/hooks';
import { User } from '../../../../core/models/user';
import { FilterUserDTO } from './interface';

export const useAdminGetUserList = (options: FilterUserDTO) => {
    const { count, list: userList } = useGetListWithCount<User, FilterUserDTO>(ApiListRoutes.USERS, options);

    return { count, userList };
};
