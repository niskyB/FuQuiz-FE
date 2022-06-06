import { SelectionFieldValues } from '../interface';
import { useGetListWithCount } from '../hooks';
import { ApiListRoutes } from '../enum';
import { User } from '../../models/user';
import { UserRole } from '../../models/role';

interface FilterExpertSelectDTO {
    role: UserRole.EXPERT;
}

export const useGetExpertFieldData = () => {
    const { list } = useGetListWithCount<User, FilterExpertSelectDTO>(ApiListRoutes.USERS, { role: UserRole.EXPERT });

    const expertsFieldData: SelectionFieldValues<string>[] = list.map((user) => ({ label: user.fullName, value: user.id }));
    return { expertsFieldData };
};
