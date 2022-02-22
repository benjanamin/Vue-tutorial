<template>
    <div>
        <Actividad></Actividad>
        <div class="row">
            


            
        </div>
        
    </div>
</template>

<script>

//import Albanil from './professions/Albanil.vue'
import Actividad from './Actividad.vue'

export default {
    
    name: 'Index',
    components: {
        Actividad
        //Albanil
    },
    data(){
        return {
            //<div class="col" v-for="item in pepe" v-bind:key="item">
            pepe: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
        }
    }
}
</script>