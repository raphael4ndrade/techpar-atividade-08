<template>
    <fieldset>
      <legend>ADICIONAR PESSOA</legend>
      <!-- https://vuejs.org/v2/guide/events.html#Event-Modifiers -->
      <form v-on:submit.prevent="save">
        <!-- Aqui precisamos que o form case com as colunas lá no banco -->
        <input type="text" v-model="pessoa.nome_pessoa" placeholder="Nome" required>
        <input type="text" v-model="pessoa.telefone_pessoa" placeholder="Telefone" required>
        <input type="submit" value="Adicionar">
      </form>
    </fieldset>
</template>
<script>
const api = require('../components/restapi');
module.exports = {
  name : 'salvar',
  data() {
    return {
      pessoa: {}
    }
  },
  methods: {
    save() {
      api.save(this.pessoa).then((ret) => {
        // o ret do knex é uma lista, já o ret do $http e do axios tem um data.
        alert('Adicionado ao banco de dados com id ' + ret.data.id_pessoa);
        this.pessoa = {};
      });
    }
  }
}
</script>