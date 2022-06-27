import { stringify } from 'query-string';
import { parse } from 'query-string';
export const urlQueryParser = (data: { [key: string]: any }) => {
    if (data) {
        Object.keys(data).map((item) => {
            if (item === 'currentPage') {
                data['currentPage'] = data['currentPage'] - 1;
            }
        });
        return `?${stringify(data)}`;
    }
    return '';
};

export const clearQuery = (url: string) => {
    return url.split('?')[0];
};

export const getYoutubeCode = (url: string) => {
    try {
        return parse(new URL(url).search).v as string;
    } catch (error) {
        return '';
    }
};
