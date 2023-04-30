import moment from 'moment';

export const formatDate = (value: string | Date | null): string | null => {
  return value ? moment(value).format('DD.MM.YYYY') : '';
};

export const formatDateUnix = (value: number): string => {
  return moment.unix(value).format('HH:mm:ss');
};
