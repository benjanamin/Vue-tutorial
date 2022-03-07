<template>
    <div>
        <h2 class="clickeable" @click="cambiarVisibilidad">Exploracion</h2>
        <div v-if="visible">
            <p>Esta sección te servirá de guía para dirigir las partes de exploración de la partida, por lo que se centra sobre todo en el viaje, el rastreo y la visibilidad. </p>
            <h4>Ritmos de viajes </h4>
            
            <p>Los personajes que monten en un corcel fantasma, surquen los cielos sobre una alfombra voladora o viajen en un artilugio gnomo alimentado por vapor o un velero no se desplazan al ritmo normal, pues la magia, el motor o el viento, a difere ncia de las criaturas, no se cansan. Además, el aire es un medio con muchos menos obstáculos que la tierra. Cuando una criatura viaje utilizando una velocidad volando que haya obtenido mediante medios mágicos, gracias a un motor o debido a una fuerza natural (como el viento o una corriente de agua), emplea las reglas siguientes para calcular el ritmo de viaje:</p>
            <ul>
                <li>En 1 minuto podrá recorrer tantos pies como diez veces su velocidad.</li>
                <li>En 1 hora podrá recorrer tantas millas como su velocidad dividida por diez.</li>
                <li>Para calcular la distancia recorrida cada día, multiplica e l ritmo por hora por el número de horas viajadas (norma lmente 8).</li>
                <li>Si va a un ritmo rápido, aumenta la distancia recorrida en un tercio</li>
                <li>Si va a un ritmo lento, multiplica la distancia recorrida por dos tercios. </li>
            </ul>
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