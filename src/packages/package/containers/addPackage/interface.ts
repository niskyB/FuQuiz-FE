import { PricePackage } from '../../../../core/models/pricePackage';

export interface AddPackageFormDTO extends Pick<PricePackage, 'name' | 'originalPrice' | 'salePrice' | 'duration' | 'description'> {}

export interface AddPackageDTO extends AddPackageFormDTO {
    subjectId: string;
}
