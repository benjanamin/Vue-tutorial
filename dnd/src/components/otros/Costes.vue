<template>
    <div>
        <h2>Costes de mantenimiento</h2>
        <table class="table" >
            <thead>
                <tr>
                    <td>Propiedad</td>
                    <td>Coste por dia</td>
                    <td>Asalariados cualificados</td>
                    <td>Asalariados no cualificados</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="coste in costes" :key="coste">
                    <td>{{coste.propiedad}}</td>
                    <td>{{coste.coste}}</td>
                    <td>{{coste.cualificados}}</td>
                    <td>{{coste.noCualificados}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import costesJSON from '../../assets/json/costes.json'
export default {
    name: 'Costes',
    data() {
        return {
            costes: []
        }
    },
    methods: {
        leerCostes(){
            this.costes = costesJSON
        }
    },
    mounted() {
        this.leerCostes()
    }
}
</script>