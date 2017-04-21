// restapi.js
const axios = require('axios');
const serviceaddr = process.env.SERVICOADDR || 'http://127.0.0.1:3000';

let api = axios.create({
    baseURL: serviceaddr
});

const list = () => api.get("/list");
const save = (data) => api.post("/save", data);

exports.serviceaddr = serviceaddr;
exports.list = list;
exports.save = save;