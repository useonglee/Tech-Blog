import { parseISO, format } from 'date-fns';
import datePropsType from './dateType';

export default function Date({ dateString }: datePropsType) {
  const date = parseISO(dateString);

  return <time dateTime={format(date, 'YYYY-MM-DD')}></time>;
}
