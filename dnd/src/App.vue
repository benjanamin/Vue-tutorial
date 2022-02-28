<template>

  <div>
    <Index v-if="pagina === 'indice'"></Index>
  </div>
  
</template>

<script>
import Index from './components/Index.vue'

export default {
  name: 'App',
  components: {

    Index
  },
  data() {
    return {
      pagina: 'indice'
    }
  },
  methods: {
    cambiarPagina(cambio){
      this.pagina = cambio
    }
  }
}
</script>
<style scoped>
    li{
        display: inline;
    }
</style>


