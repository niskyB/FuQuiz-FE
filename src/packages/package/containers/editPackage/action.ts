import { http } from '../../../../core/api';
import { EditPricePackageDTO } from './interface';

export const editBlog = async (pricePackageId: string, input: EditPricePackageDTO) => {
    const res = await http.put(`/price-package/${pricePackageId}`, input);

    return res;
};
