import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetListWithCount } from '../../../../core/common/hooks';
import { User } from '../../../../core/models/user';
import { FilterUserDTO } from '../../containers/userList/interface';

export const useAdminGetUserList = (options: Partial<FilterUserDTO>) => {
    const { count, list: userList } = useGetListWithCount<User, Partial<FilterUserDTO>>(ApiListRoutes.USERS, options);

    return { count, userList };
};
