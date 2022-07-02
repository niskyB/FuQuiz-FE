import { http } from '../../../core/api';

export const cancelRegistration = async (id: string) => {
    const res = await http.put(`/registration/cancel/${id}`);
    return res;
};

export const payCourse = async (courseId: string) => {
    const res = await http.put(`/registration/activate/${courseId}`);
    return res;
};
