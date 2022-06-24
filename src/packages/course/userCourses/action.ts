import { http } from '../../../core/api';

export const cancelRegistration = async (id: string) => {
    const res = await http.put(`/registration/cancel/${id}`);
    return res;
};
