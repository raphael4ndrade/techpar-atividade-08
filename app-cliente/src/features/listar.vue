<template>
  <fieldset>
    <legend>PESSOAS CADASTRADAS</legend>
    <li v-for="pessoa in pessoas"> Nome: {{pessoa.nome}} Telefone: {{pessoa.telefone}}</li>
  </fieldset>
</template>
<script>
  const api = require('../components/restapi');
  module.exports = {
    data() {
      return {
        pessoas: []
      }
    },
    create() {
      api.list().then((ret) => {
        this.pessoas = ret.data;
        console.log('base de dados:' + this.pessoas);
      });
    }
  }
</script>