import * as moment from 'moment';


export const convertToMoment = (date: string) => moment(date).startOf('day').fromNow();
