<template>
    <section>
        <div class="buscador-main">
            <div class="buscador-title">
                <h1>LOCALIZE A SUA SALA</h1>
                <p>Informe seu RA, Curso ou Disciplina</p>
            </div>
            <div class="buscador-container">
                <form action="">
                    <input type="text" v-model="input" placeholder="Ex.: Medicina Veterinária" name="buscador">
                    <button type="submit">Buscar sala</button>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
    export default{
        
    }
</script>

<style>
    .buscador-main {
        background-color: grey;
        padding: 20px;
        width: 755px;
        margin-left: auto;
        margin-right: auto;
        border-radius: 5px;
    }
    .buscador-title {
        text-align: left;
    }
    input {
        width: 87%;
        align-content: left;
    }
</style>