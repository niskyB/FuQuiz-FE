import { PricePackage } from '../models/pricePackage';

export const getMinMaxPriceOfPricePackge = (data: PricePackage[]) => {
    const values = [];
    for (let i = 0; i < data.length; i++) {
        const price = data[i];
        values.push(price.salePrice);
    }
    return { minPrice: Math.min(...values), maxPrice: Math.max(...values) };
};

export const vietnamCurrencyConverter = (number: number) => {
    return number.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }).replace('VND', 'đ');
};
