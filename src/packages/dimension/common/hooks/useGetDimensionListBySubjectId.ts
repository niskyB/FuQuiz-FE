import * as React from 'react';
import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetListWithCount } from '../../../../core/common/hooks';
import { Dimension } from '../../../../core/models/dimension';
import { GetDimensionListDTO } from '../../containers/dimensionList/interface';

export const useGetDimensionListById = (id: string) => {
    const options = React.useMemo<GetDimensionListDTO>(() => ({ id, currentPage: 0, pageSize: 999 }), [id]);
    const { list: dimensionList, count } = useGetListWithCount<Dimension, GetDimensionListDTO>(ApiListRoutes.DIMENSIONS, options);

    return { dimensionList, count };
};
