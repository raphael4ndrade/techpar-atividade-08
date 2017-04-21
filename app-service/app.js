const express = require('express');
const knex = require('./db');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Range, Content-Range, Accept-Ranges, If-None-Match, Access-Control-Allow-Headers, Authorization, X-Requested-With, X-My-Custom-Header, X-Filename");
  res.header("Access-Control-Expose-Headers",
    "Content-Type, Content-Length, Range, Content-Range, Accept-Ranges, If-None-Match, Access-Control-Allow-Headers, Authorization, X-Requested-With, X-My-Custom-Header, X-Filename");
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, HEAD');
  next();
});

app.get('/list', (req, res) => {
  knex("pessoa").select().then((ret) => {
    res.send(ret) // o status default é o 200 e ele é lindo
    console.log("Accessing /list, retriving data ...");
  }).catch((err) => {
    console.log(err);
    res.send().status(500);
  });
});

app.post('/save', (req, res) => {
  console.log("Accessing /save, saving data ...");
  let pessoa = req.body;
  knex("pessoa").insert(pessoa, 'id_pessoa')
    .then((ret) => {
      pessoa.id_pessoa = ret[0];
      res.send(pessoa)
    }).catch((err) => {
      console.log(err);
      res.send().status(500);
    });
});

knex.migrate.latest();

module.exports = app;