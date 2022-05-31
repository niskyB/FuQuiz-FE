import { object } from 'joi';
import { deflateRawSync } from 'zlib';

export const urlQueryParser = (data: { [key: string]: any }) => {
    return Object.keys(data)
        .map((item, index) => {
            return `${item}=${data[item]}`;
        })
        .join('&');
};
