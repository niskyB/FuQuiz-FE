import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetListWithCount } from '../../../../core/common/hooks';
import { Dimension } from '../../../../core/models/dimension';
import { GetDimensionListDTO } from '../../containers/dimensionList/interface';

export const useGetDimensionListById = (options: GetDimensionListDTO) => {
    const { list: dimensionList, count } = useGetListWithCount<Dimension, GetDimensionListDTO>(ApiListRoutes.DIMENSIONS, options);

    return { dimensionList, count };
};
