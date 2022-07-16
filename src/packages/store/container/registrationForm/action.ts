import { http } from '../../../../core/api';
import { EditRegistrationFormDTO } from './interface';

export const editRegistration = async (registrationId: string, data: EditRegistrationFormDTO) => {
    const res = await http.put<string>(`/registration/user/${registrationId}`, data);
    return res;
};
