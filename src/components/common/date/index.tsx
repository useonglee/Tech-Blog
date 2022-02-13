import React from 'react';
import { parseISO, format } from 'date-fns';

interface DatePropsType {
  dateString: string;
}

function Date({ dateString }: DatePropsType) {
  const date = parseISO(dateString);

  return <time dateTime={dateString}>{format(date, 'yyyy년 MM월 dd일')}</time>;
}

export default Date;
