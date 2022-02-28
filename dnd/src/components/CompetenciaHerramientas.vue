<template>
    <div>
        <h1>Competencias con herramientas</h1>
        <p>Las competencias en herramientas son una manera útil de resaltar los trasfondos y talentos de un personaje. Sin embargo, en la mesa de juego, el uso de herramientas a veces se superpone con el uso de habilidades, y puede no estar claro cómo usarlas juntas en ciertas situaciones. Esta sección ofrece varias formas en las cuales se pueden usar las herramientas en el juego</p>
        <h3>Herramientas y habilidades juntas</h3>
        <p>Las herramientas tienen aplicaciones más específicas que las habilidades. La habilidad de Historia se aplica a cualquier evento en el pasado. Una herramienta como un kit de falsificación se usa para hacer objetos falsos y poco más. Por lo tanto, ¿por qué un personaje que tiene la oportunidad de adquirir uno u otro desea obtener competencia en una herramienta en lugar de competencia en una habilidad?</p>
        <p>Para que las competencias de las herramientas sean opciones más atractivas para los personajes, puedes utilizar los métodos que se describen a continuación.</p>
        <p><b> Ventaja. </b>Si el uso de una herramienta y el uso de una habilidad se aplican a una prueba, y un personaje es competente con la herramienta y la habilidad, considera permitir que el personaje haga la prueba con ventaja. Este simple beneficio puede ser de gran ayuda para alentar a los jugadores a adquirir competencias en herramientas. En las descripciones de herramientas que siguen, este beneficio a menudo se expresa como información adicional (o algo similar), lo que se traduce en una mayor probabilidad de que la prueba sea un éxito</p>
        <p><b>Beneficio añadido</b>Además, considera dar a los personajes que tienen tanto una habilidad relevante como una competencia con herramienta relevante un beneficio adicional en una prueba exitosa. Este beneficio puede ser en forma de información más detallada o puede simular el efecto de un tipo diferente de prueba exitoso. Por ejemplo, un personaje competente con las herramientas de albañil realiza una prueba de Sabiduría (Percepción) exitosa para encontrar una puerta secreta en un muro de piedra. No solo el personaje se da cuenta de la presencia de la puerta, sino que decides que la competencia con la herramienta le da derecho al personaje a un éxito automático en una prueba de Inteligencia (Investigación) para determinar cómo abrir la puerta</p>
        <Albanil v-if="seleccion === 'albanil'"></Albanil>
    </div>
</template>
<script>
import Albanil from './profesiones/Albanil.vue'
export default {
    name: 'CompetenciaHerramientas',
    components: {
        Albanil
    },
    data() {
        return {
            herramientas: [],
            seleccion: ''
        }
    }
}
</script>