<template>
  <fieldset>
    <legend>PESSOAS CADASTRADAS</legend>
    <li v-for="pessoa in pessoas"> Nome: {{pessoa.nome}} Telefone: {{pessoa.telefone}}</li>
  </fieldset>


</template>
<script>
    data : return {
      pessoas : []
    }

    methods : {
      const api = require('../components/restapi');
      loadlist(){
        this.pessoas = api.get('/list');
        console.log('base de dados:' + this.pessoa);
      }
    }
</script>