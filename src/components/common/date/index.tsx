import React from 'react';
import { parseISO, format } from 'date-fns';

interface DatePropsType {
  dateString: string;
}

function Date({ dateString }: DatePropsType) {
  const date = parseISO(dateString);

  return <time dateTime={dateString}>{format(date, 'yyyy-MM-dd')}</time>;
}

export default Date;
