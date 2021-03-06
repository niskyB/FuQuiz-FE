import moment from 'moment';

export const dateParser = (date: any) => {
    return moment(date).format('YYYY-MM-DD');
};

export const calculateValidTo = (validFrom: string, duration: number) => {
    return moment(validFrom).month(duration).toDate().toISOString();
};

export const getDateValueString = (date: string) => {
    if (date !== 'Invalid date') {
        return new Date(date).toISOString();
    }
    return '';
};
export const getDateStringToShow = (date: string) => {
    if (date.trim()) {
        return new Date(date).toLocaleDateString();
    }
    return '';
};
