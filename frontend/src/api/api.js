const axios = require('axios');

const port = 4000;

const url = 'http://localhost:' + port;

function fetchearCiudades() {
    return axios.get(url + '/api/allcities');
}

function fetchearCiudad(id) {
    return axios.get(url + '/api/allcities/' + id);
}


module.exports = { url, fetchearCiudades, fetchearCiudad };