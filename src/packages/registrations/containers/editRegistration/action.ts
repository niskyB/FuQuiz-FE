import { http } from '../../../../core/api';
import { EditGeneralRegistrationFormDTO, EditRegistrationFormDTO, EditSpecificRegistrationFormDTO } from './interface';

export const editRegistration = async (registrationId: string, data: EditRegistrationFormDTO) => {
    const res = await http.put(`/registration/${registrationId}`, data);
    return res;
};

export const editGeneralRegistration = async (registrationId: string, data: EditGeneralRegistrationFormDTO) => {
    const res = await http.put(`/registration/general/${registrationId}`, data);
    return res;
};
export const editSpecificRegistration = async (registrationId: string, data: EditSpecificRegistrationFormDTO) => {
    const res = await http.put(`/registration/specific/${registrationId}`, data);
    return res;
};
