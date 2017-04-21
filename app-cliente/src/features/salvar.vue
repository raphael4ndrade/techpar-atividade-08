<template>
    <fieldset>
      <legend>ADICIONAR PESSOA</legend>
      <form v-on:click="save">
        <input type="text" v-model="pessoa.nome" placeholder="Nome" required>
        <input type="text" v-model="pessoa.telefone" placeholder="Telefone" required>
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
        alert('Adicionado ao banco de dados com id ' + ret[0]);
        this.pessoa = {};
      });
    }
  }
}
</script>