import { userOrderByFieldData } from '../common/dataField';
import { SelectionFieldValues } from '../common/interface';
import { User } from '../models/user';

export const userFieldDataParser = (selectField: (keyof User)[]): SelectionFieldValues<keyof User>[] => {
    return userOrderByFieldData.filter((item) => selectField.includes(item.value));
};
