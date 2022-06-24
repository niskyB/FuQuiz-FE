import moment from 'moment';

export const dateParser = (date: string) => {
    return moment(date).format('YYYY-MM-DDTHH:mm');
};

export const calculateValidTo = (validFrom: string, duration: number) => {
    return moment(validFrom).month(duration).toDate().toISOString();
};

export const getDateValueString = (date: string) => {
    if (date !== 'Invalid date') {
        return new Date(date).toISOString();
    }
    return ' ';
};
