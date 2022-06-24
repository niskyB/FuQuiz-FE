import moment from 'moment';

export const dateParser = (date: string) => {
    return moment(date).format('YYYY-MM-DDTHH:mm');
};
