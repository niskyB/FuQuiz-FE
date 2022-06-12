import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetDataById } from '../../../../core/common/hooks';
import { Dimension } from '../../../../core/models/dimension';

export const useGetDimensionById = (id: string) => {
    const { data: dimension } = useGetDataById<Dimension>(ApiListRoutes.DIMENSION, id);

    return { dimension };
};
