import moment from 'moment';
import uuid from 'uuid';

const BASE_URL = 'https://proekts-953e.restdb.io/rest/title';

export function getEvents() {
    return fetch(BASE_URL,
    {
    method: 'GET',
    headers: {
    'content-type': 'application/json',
    'x-apikey': '597d59cd454c830413d1734d7a67201452bff'
    },
    })
    .then(response => response.json())
    .then(events => events.map(item => ({
    ...item,
    date: moment(item.date, "DD/MM/YYYY HH:mm").toDate()
    })))
   }
export function addEvent({title, date}) {
    return fetch(BASE_URL, {
    method: 'POST',
    headers: {
    'content-type': 'application/json',
    'x-apikey': '597d59cd454c830413d1734d7a67201452bff'
    },
    body: JSON.stringify({
    title,
    date,
    id: uuid()
    })
    })
    .then(result => result.json())
    .catch(error => console.log(error))
   } 
