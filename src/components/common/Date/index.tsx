import { parseISO, format } from 'date-fns';

interface datePropsType {
  dateString: string;
}

function Date({ dateString }: datePropsType) {
  const date = parseISO(dateString);

  return <time dateTime={dateString}>{format(date, 'yyyy-MM-dd')}</time>;
}

export default Date;
