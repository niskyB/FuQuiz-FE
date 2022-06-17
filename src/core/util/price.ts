import { PricePackage } from '../models/pricePackage';

export const getMinMaxPriceOfPricePackge = (data: PricePackage[]) => {
    let minPricePackage = null;
    for (let i = 0; i < data.length; i++) {
        const price = data[i];
        if (i === 0) {
            minPricePackage = price;
            continue;
        }

        if (minPricePackage && price.salePrice < minPricePackage.originalPrice) {
            minPricePackage = price;
        }
    }

    return minPricePackage;
};

export const vietnamCurrencyConverter = (number: number) => {
    return number.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }).replace('VND', 'đ');
};
