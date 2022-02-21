<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container">
      <Index v-if="pagina === 'indice'"></Index>
      <Albanil v-else-if="pagina === 'albanil'"></Albanil>
      <h1>{{pagina}}</h1>
      <div></div>
      <button @click="cambiarPagina('Pepe')">Cambiar</button>
    </div>
    
  </div>
  
</template>

<script>
//import Nav from './components/Nav.vue'
import Albanil from './components/professions/Albanil.vue'
import Index from './components/Index.vue'
export default {
  name: 'App',
  components: {
    //Nav
    Albanil,
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


