// restapi.js
const axios = require('axios');
const serviceaddr = process.env.SERVICEADDR || 'http://127.0.0.1';

let api = axios.create({
    baseURL: serviceaddr
});

const list = () => api.get(serviceaddr + "/list");
const save = (data) => api.post(serviceaddr + "/save", data);

exports.serviceaddr = serviceaddr;
exports.list = list;
exports.save = save;