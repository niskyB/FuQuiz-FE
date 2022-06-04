import * as React from 'react';
import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetList } from '../../../../core/common/hooks';
import { User } from '../../../../core/models/user';
import { adminGetUserList } from './action';
import { FilterUserDTO } from './interface';

export const useAdminGetUserList = (options: FilterUserDTO) => {
    const { count, list: userList } = useGetList<User, FilterUserDTO>(ApiListRoutes.USERS, options);

    return { count, userList };
};
