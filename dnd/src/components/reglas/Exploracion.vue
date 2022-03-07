<template>
    <div>
        <h2 class="clickeable" @click="cambiarVisibilidad">Exploracion</h2>
        <div v-if="visible">
            <p>Esta sección te servirá de guía para dirigir las partes de exploración de la partida, por lo que se centra sobre todo en el viaje, el rastreo y la visibilidad. </p>
            
        </div>
    </div>
</template>
<script>
export default {
    name: 'Exploracion',
    data(){
        return{
            visible: true
        }
    },
    methods: {
        cambiarVisibilidad(){
            this.visible = !this.visible
        }
    }
}
</script>