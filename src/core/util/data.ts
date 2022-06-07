export const dataParser = <T>(list: T[], label: keyof T, value: keyof T) => {
    return list.map((item) => ({ label: item[label], value: item[value] }));
};
