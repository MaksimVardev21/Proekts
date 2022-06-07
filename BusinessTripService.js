import moment from 'moment';
import uuid from 'uuid';

const BASE_URL = 'https://proekts-953e.restdb.io/rest/title';
const apikey = '597d59cd454c830413d1734d7a67201452bff';
const request = require("request");

export function getEvents() {
    return fetch(BASE_URL,
    {
    method: 'GET',
    headers: {
    'content-type': 'apikey',
    'x-apikey': '597d59cd454c830413d1734d7a67201452bff'
    },
    })
    .then(response => response.json())
    .then(events => events.map(item => ({
    ...item,
    date: moment(item.date, "DD/MM/YYYY HH:mm").toDate()
    })))
   }
   export function addEvent(budget, name,lucation,startDate, description,days) {
    return fetch(BASE_URL, {
    method: 'POST',
    headers: {
    'content-type': 'application/json',
    'x-apikey': '597d59cd454c830413d1734d7a67201452bff'
    },
    body: JSON.stringify({
    budget
    name
    lucation
    startDate
    description
    days    
    id: uuid()
    })
    })
    .then(result => result.json())
    .catch(error => console.log(error))
   }

export function Delete(id) {
    const options = {
        method: "DELETE",
        url: `${BASE_URL}/${id}`,
        headers: {
            'x-apikey': apikey,
            'content-type': 'application/json'
        }
    };
    request(BASE_URL, options, function(error, response, body) {
        console.log(body);
    })
}
