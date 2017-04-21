// restapi.js
const axios = require('axios');
const serviceaddr = 'http://127.0.0.1';

let api = axios.create({
    baseURL: serviceaddr,
    headers : {'Access-Control-Allow-Origin': '*' },
    timeout : 5000
});

// api.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const list = () => api.get(serviceaddr + "/list");
const save = (data) => api.post(serviceaddr + "/save", data);

exports.serviceaddr = serviceaddr;
exports.list = list;
exports.save = save;