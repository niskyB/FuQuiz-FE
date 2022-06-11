import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetDataById } from '../../../../core/common/hooks';
import { PricePackage } from '../../../../core/models/pricePackage';

export const useGetPricePackageById = (id: string) => {
    const { data: pricePackage } = useGetDataById<PricePackage[]>(ApiListRoutes.PRICE_PACKAGE, id);
    console.log(pricePackage);
    return { pricePackage };
};
