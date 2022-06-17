import { stringify } from 'query-string';

export const urlQueryParser = (data: { [key: string]: any }) => {
    if (data) {
        Object.keys(data).map((item) => {
            if (item === 'currentPage') {
                data['currentPage'] = data['currentPage'] - 1;
            }
        });

        // const result = Object.keys(data)
        //     .map((item) => {
        //         if (item === 'currentPage') return `${item}=${data[item] - 1}`;
        //         else return `${item}=${data[item]}`;
        //     })
        //     .join('&');
        return `?${stringify(data)}`;
    }
    return '';
};
