export const urlQueryParser = (data?: { [key: string]: any }) => {
    if (data) {
        const result = Object.keys(data)
            .map((item) => {
                if (item === 'currentPage') return `${item}=${data[item] - 1}`;
                else return `${item}=${data[item]}`;
            })
            .join('&');
        return `?${result}`;
    }
    return '';
};
