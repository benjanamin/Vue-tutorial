<template>
    <div>
        <div style="margin-bottom: 2rem;">
            <h1> Actividades entre aventuras</h1>
            <p>La campaña en su conjunto sale ganando si los personajes disponen de tiempo para dedicarse a otras actividades entre aventura y aventura. Dejar que pasen días, semanas o incluso meses entre e llas hace que la campaña se prolongue a lo largo del tiempo y ayuda a los personajes a gestionar su progresión de niveles, evitando que acumulen demasiado poder en un periodo muy breve.</p>
            <p>Permitir a los aventureros perseguir sus propios intereses, además, anima a los jugadores a implicarse más con el mundo de la campaña. Si un personaje posee una taberna en una aldea o pasa el tiempo yéndose de juerga con los lugareños, será mucho más probable que se enfrente a las amenazas que afectan a la localidad y sus habitantes.</p>
            <p>Al ir desarrollándose la campaña, los personajes jugadores no solo ganarán en poder, sino también en capacidad para influir e implicarse con el mundo. Podrían sentirse inclinados a ejecutar proyectos que requieran de más tiempo entre aventuras, como construir y mantener una for taleza. Según el grupo vaya ganando niveles, podrás añadir más tiempo de descanso entre aventuras, para que así los personajes puedan tener tiempo para sus propios intereses. Con que pasen unos días o semanas entre aventuras de nivel bajo será suficiente, pero las de un nivel superior podrían disfrutar de periodos de descanso de meses o incluso años.</p>
       </div>
       <h4>Actividad a realizar</h4>
        <select class="form-select" v-model= "seleccion" style="width: 15rem;">
            <option v-for="actividad in actividades" :key="actividad">
                {{actividad}}
            </option>
        </select>

        
        <div v-if="seleccion === 'Actividad'">
            <p>Seleccione una actividad arriba para mostrar la informacion correspondiente. En caso de tener que tirar dados aparecera un boton.</p>
        </div>
        <ConstruirFortaleza v-if="seleccion === 'Construir una fortaleza'"></ConstruirFortaleza>
        <RegentarNegocio v-if="seleccion === 'Regentar un negocio'"></RegentarNegocio>
        <RitosSagrados v-if="seleccion  === 'Realizar ritos sagrados'"></RitosSagrados>
        <PropagarRumores v-if="seleccion  === 'Propagar rumores'"></PropagarRumores>
        <GanarPrestigio v-if="seleccion  === 'Ganar prestigio'"></GanarPrestigio>
        <ComprarObjetoMagico v-if="seleccion === 'Compra de objetos magicos'"></ComprarObjetoMagico>
    </div>
</template>

<script>
import ConstruirFortaleza from './actividades/ConstruirFortaleza.vue'
import RegentarNegocio from './actividades/RegentarNegocio.vue'
import RitosSagrados from './actividades/RitosSagrados.vue'
import PropagarRumores from './actividades/PropagarRumores.vue'
import GanarPrestigio from './actividades/GanarPrestigio.vue'
import ComprarObjetoMagico from './actividades/ComprarObjetoMagico.vue'


import actividadesJSON from '../assets/json/actividades.json'
export default {
    
    name: 'Actividad',
    components: {
        ConstruirFortaleza,
        RegentarNegocio,
        RitosSagrados,
        PropagarRumores,
        GanarPrestigio,
        ComprarObjetoMagico
    },
    data() {
        return {
            //actividades: ["Construir una fortaleza",  "Fabricar un objeto magico","Ganar prestigio","Irse de juerga","Propagar rumores","Realizar ritos sagrados","Regentar un negocio","Vender objetos magicos"],
            actividades: [],
            seleccion: 'Actividad'
        }
    },
    methods: {
        cambiarSeleccion(seleccion){
            this.seleccion = seleccion
        },
        leerActividades(){
            this.actividades = actividadesJSON.actividades
        }
    },
    mounted(){
        this.leerActividades()
    }
}
</script>
<style scoped>
    .form-select {
        margin-bottom: 1rem;
    }
</style>