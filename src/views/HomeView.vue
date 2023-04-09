<template>
  <div class="home">
    <Header/>
    <Buscador/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/layouts/Header.vue";
import Buscador from "@/components/modules/Buscador.vue";

export default {
  name: 'HomeView',
  components: {
    Header,
    Buscador
  }
}
</script>
