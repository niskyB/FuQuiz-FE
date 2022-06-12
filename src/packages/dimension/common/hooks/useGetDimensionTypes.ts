import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetList } from '../../../../core/common/hooks';
import { DimensionType } from '../../../../core/models/dimension';

export const useGetDimensionType = () => {
    const { list: dimensionTypes } = useGetList<DimensionType, null>(ApiListRoutes.DIMENSION_TYPES);
    return { dimensionTypes };
};
