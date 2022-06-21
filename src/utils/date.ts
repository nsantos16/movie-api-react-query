import { intervalToDuration, parse } from 'date-fns';

export const parseDateFormat = (date: string, format = 'yyyy-MM-dd') => {
  return parse(date, format, new Date());
};

export const parseDuration = (minutes: number) => {
  const duration = intervalToDuration({ start: 0, end: minutes * 60 * 1000 });

  return `${duration.hours}hr ${duration.minutes}min`;
};
