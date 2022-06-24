import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetDataById } from '../../../../core/common/hooks';
import { Registration } from '../../../../core/models/registration';

export const useGetRegistrationById = (id: string) => {
    const { data: registration } = useGetDataById<Registration>(ApiListRoutes.REGISTRATION, id);

    return { registration };
};
