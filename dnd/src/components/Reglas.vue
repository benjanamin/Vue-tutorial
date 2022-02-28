<template>
    <div>
        <h1 class="mb-4">Reglas</h1>
        <p><b>LAS REGLAS ESTÁN PARA QUE TANTO TÚ COMO TUS JUGADORES</b> os lo paséis bien jugando. Ellas os sirven a vosotros, y no al revés. Pero, además de las reglas del juego propiamente dichas, también hay una serie de normas, consensuadas por cada grupo, que afectan a la forma de jugar. Sin ir más lejos, los jugadores deben saber a qué atenerse cuando uno de ellos se pierde una sesión. Igualmente, necesitan estar al tanto de si tienen que traer miniaturas, qué reglas especiales has decidido utilizar y qué hacer cuando un dado se queda "borracho" (cae de tal forma que no queda claro cuál de sus caras es el resultado). Estos aspectos, entre otros muchos, son el objetivo de este capítulo. </p>
        <PruebaCaracteristica></PruebaCaracteristica>
        <hr>
        <ClaseDificultad></ClaseDificultad>

    </div>
</template>

<script>
import PruebaCaracteristica from './reglas/PruebaCaracteristica.vue'
import ClaseDificultad from './reglas/ClaseDificultad.vue'

export default {
    name: 'Reglas',
    components: {
        PruebaCaracteristica,
        ClaseDificultad
    }
}
</script>