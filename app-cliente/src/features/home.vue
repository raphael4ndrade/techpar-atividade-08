<template>
    <div>
        <router-link to="/listar" replace>LISTAR</router-link>
        <router-link to="/salvar">SALVAR</router-link>    

        <router-view></router-view> 
    </div>
</template>
<script>
    module.exports = {
        name : "home"
    }
</script>