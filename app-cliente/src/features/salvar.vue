<template>
    <fieldset>
    <legend>ADICIONAR PESSOA</legend>
    <form v-click="save">
        <input type="text" v-model="nome" placeholder="Nome" required>
        <input type="text" v-model="telefone" placeholder="Telefone" required>
        <input type="submit" value="Adicionar">
    </form>
</fieldset>
</template>
<script>
    data : return {
        pessoa : {
            nome : '',
            telefone: ''
        }
    },
    methods : {
        const api = require('../components/restapi');
        save(){
            api.save(this.pessoa)
                .then((ret) => {
                    alert('Adicionado ao banco de dados com id ' + ret[0]);
                    this.pessoa = { nome : '', telefone : ''};
                });
        };
    }

</script>