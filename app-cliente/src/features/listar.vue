<template>
  <fieldset>
      <legend>PESSOAS CADASTRADAS</legend>
        <li v-for="pessoa in pessoas"> Nome: {{pessoa.nome_pessoa}} Telefone: {{pessoa.telefone_pessoa}}</li>
  </fieldset>
</template>
<script>
  const api = require('../components/restapi');
  module.exports = {
    name: 'listar',
    created() {
      this.list();
    },
    data() {
      return {
        pessoas: []
      }
    },
    methods: {
      list() {
        api.list().then((ret) => {
          this.pessoas = ret.data;
        });
      }
    }
  }
</script>