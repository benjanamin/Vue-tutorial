<template>
    <div>
        <h2 class="clickeable" @click="cambiarVisibilidad">Ventaja y desventaja</h2>
        <div v-if="visible">
            <p>Lo habitual es que los personajes obtengan ventaja o desventaja a través del uso de capacidades especiales, acciones, conjuros o cualquier otro rasgo de sus clases o trasfondos. Pero, además, en cualquier momento puedes decidir que ciertas circunstancias influyen en una tirada, ya sea positiva o negativamente, y dar así ventaja o desventaja a la misma. Valora el conceder ventaja cuando:</p>
            <ul>
                <li>Circunstancias que no estén relacionadas con las capacidades intrínsecas a una criatura la ayuden. </li>
                <li>Algunos aspectos del entorno aumenten las posibilidades de éxito de un personaje. </li>
                <li>Un jugador muestre una creatividad o astucia excepcionales a la hora de llevar a cabo o describir una tarea</li>
                <li>Acciones previas, ya fueran ejecutadas por quien hace la prueba u otra criatura, hagan más probable el éxito de un personaje . </li>
            </ul>
            <p>Valora el imponer desventaja cuando:</p>
            <ul>
                <li>Las circunstancias dificulten el llevar a cabo la tarea. </li>
                <li>Algún aspecto del entorno haga que el éxito sea menos probable. Siempre y cuando este aspecto no haya sido tenido en cuenta ya en forma de penalizador a la tirada .</li>
                <li>Una parte del plan o de la des cripción sobre cómo se lleva a cabo la acción reduce las posibilidades de tener éxito. </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Ventaja',
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