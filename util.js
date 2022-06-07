import moment from 'moment';
export function formatDate(dateString) {
 const parsed = moment(new Date(dateString));
 if(!parsed.isValid()) {
 return Date.now()
 }

 return parsed.format('DD/MM/YY HH:mm');
}