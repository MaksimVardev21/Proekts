import moment from 'moment';
import uuid from 'uuid';

const BASE_URL = 'https://proekts-953e.restdb.io/rest/title';
const apikey = '597d59cd454c830413d1734d7a67201452bff';
const request = require("request");
export function Get() {
    var options = {
        method: 'GET',
        url: BASE_URL,
        headers:
            { 'x-apikey': apikey }
    };
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
    });
}
export function Getbyid(id) {
    var options = {
        method: 'GET',
        url: `${BASE_URL}/${id}`,
        headers:
            { 'x-apikey': apikey }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
    });
}
export function Add(budget, name, location, startDate, description, days) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'x-apikey': '597d59cd454c830413d1734d7a67201452bff'
        },
        body: JSON.stringify({
            budget,
            name,
            location,
            startDate,
            description,
            days,
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
    request(BASE_URL, options, function (error, response, body) {
        if (error) throw new Error(error);
    })
}
export function Update(id, budget, name, location, startDate, description, days) {
    const options = {
        method: "PUT",
        url: `${BASE_URL}/${id}`,
        headers: {
            'x-apikey': apikey,
            'content-type': 'application/json'
        },
        body: {
            "budget": budget, "name": name, "location": location, "startDate": startDate, "description": description, "days": days
        }
    };
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
    })
}
