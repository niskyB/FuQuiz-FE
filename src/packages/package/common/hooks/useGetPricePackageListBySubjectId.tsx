import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetDataById } from '../../../../core/common/hooks';
import { PricePackage } from '../../../../core/models/pricePackage';

export const useGetPricePackageListById = (id: string) => {
    const { data: pricePackageList } = useGetDataById<PricePackage[]>(ApiListRoutes.PRICE_PACKAGES, id);

    return { pricePackageList };
};
