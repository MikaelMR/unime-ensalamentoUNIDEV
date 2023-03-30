<template>
  <button @click="incrementar">
    Contar {{ contador }}
  </button>
</template>

<script>
  export default {
    name: "Botao",
    data() {
      return {
        contador: 0
      }
    },
    methods: {
      incrementar() {
        this.contador++
      }
    }
  }
</script>
