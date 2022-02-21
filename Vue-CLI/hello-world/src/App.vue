<template>
  <div>Hola</div>
</template>

<script>


export default {
  name: 'App',
  mounted(){
    this.axios.get('https://prueba.com')
    .then(() => {

    });
  }
  
}
</script>


