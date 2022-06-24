import { http } from '../../../../core/api';
import { EditRegistrationDTO, EditRegistrationFormDTO } from './interface';

export const editRegistration = async (registrationId: string, data: EditRegistrationFormDTO) => {
    const res = await http.put(`/registration/${registrationId}`, data);
    return res;
};
