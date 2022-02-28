<template>
    <div>
        <h2 class="clickeable" @click="cambiarVisibilidad">Clase de dificultad (CD)</h2>
        <div v-if="visible">
            <p>Es tarea tuya decidir la Clase de Dificultad de las pruebas de característica y tiradas de salvación para las que ni las reglas ni la aventura a la que estáis jugando te den un valor concreto. E incluso habrá veces en las que consideres oportuno cambiar las CD que se te proporcionan. Sea como fuere, tendrás que pensar en la dificultad de la tarea a realizar, para así obtener la CD asociada a ella, que se muestra en la tabla "CD típicas".</p>
            <h4>CD Tipicas</h4>
            <table class="table">
                <thead>
                    <tr>
                        <th>Tarea</th>
                        <th>CD</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Muy fácil</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>Fácil</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>Moderada</td>
                        <td>15</td>
                    </tr>
                    <tr>
                        <td>Difícil</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>Muy difícil</td>
                        <td>25</td>
                    </tr>
                    <tr>
                        <td>Casi imposible</td>
                        <td>30</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ClaseDificultad',
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