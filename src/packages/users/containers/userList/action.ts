import { http } from '../../../../core/api';
import { GetListWithCount } from '../../../../core/common/interface';
import { User } from '../../../../core/models/user';
import { urlQueryParser } from '../../../../core/util';
import { FilterUserDTO } from './interface';

export const adminGetUserList = async (data: FilterUserDTO) => {
    const res = await http.get<GetListWithCount<User>>(`/admin/users?${urlQueryParser(data)}`);
    return res.data;
};
