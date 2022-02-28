<template>
    <div>
        <h2 class="clickeable" @click="cambiarVisibilidad">Pruebas de caracteristica</h2>
        <div v-if="visible">
            <p>Las pruebas de característica se utilizan para determinar si una tarea que un personaje está intentando realizar tiene éxito o no. El Player's Handbook contiene ejemplos de para qué puede usarse cada una de las puntuaciones de característica. La tabla "pruebas de característica" resume esta información para que puedas consultarla de forma fácil. </p>
            <table class="table">
                <thead>
                    <tr>
                        <th>Caracteristica</th>
                        <th>Usada para</th>
                        <th>Ejemplos de uso</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Fuerza</td>
                        <td>Capacidades atléticas y fuerza física</td>
                        <td>Derribar una puerta, empujar una roca, utilizar un pincho para atrancar una puerta</td>
                    </tr>
                    <tr>
                        <td>Destreza</td>
                        <td>Agilidad, reflejos y equilibrio</td>
                        <td>Escabullirse tras un guardia, caminar sobre un saliente estrecho, liberarse de unas cadenas</td>
                    </tr>
                    <tr>
                        <td>Constitucion</td>
                        <td>Vigor y salud</td>
                        <td>Aguantar una maratón, soportar el dolor de agarrar un metal caliente, vencer en una competición de beber alcohol</td>
                    </tr>
                    <tr>
                        <td>Inteligencia</td>
                        <td>Memoria y raciocinio</td>
                        <td>Recordar una información concreta, reconocer la importancia de una pista, descifrar un mensaje en clave</td>
                    </tr>
                    <tr>
                        <td>Sabiduria</td>
                        <td>Atención y fuerza de voluntad</td>
                        <td>Descubrir a una criatura oculta, detectar que alguien está mintiendo</td>
                    </tr>
                    <tr>
                        <td>Carisma</td>
                        <td>Elocuencia y confianza</td>
                        <td>Persuadir a una criatura de que haga algo, intimidar a una multitud, mentir a alguien de forma convincente</td>
                    </tr>
                </tbody>
            </table>

            <h4>Tiradas enfrentadas</h4>
            <p>Una tirada enfrentada es un tipo de prueba de característica en la que dos criaturas se desafían entre sí. Puedes recurrir a estas pruebas cuando un personaje intente algo que se opone de forma directa a los esfuerzos de otra criatura. En una tirada enfrentada los resultados de dos pruebas de característica se comparan entre sí, en lugar de con un número objetivo.</p>
            <p>Cuando indiques que es necesaria una tirada enfrentada, escoge la característica que utilizará cada bando, ya sea la misma para los dos o una diferente para cada uno. Si, por ejemplo, una criatura trata de esconderse, participará en una tirada enfrentada de Destreza contra Sabiduría. Pero si dos criaturas están echando un pulso, o si una intenta sujetar una puerta que otra quiere echar abajo, ambas emplearán Fuerza.</p>
            <h4>Tiradas de salvacion</h4>
            <p>Las tiradas de salvación son respuestas inmediatas a un efecto nocivo, y prácticamente nunca se llevan a cabo de forma voluntaria. Una tirada de salvación tendrá sentido cuando algo malo le vaya a suceder a un personaje y este tenga la oportunidad de evitar que esto ocurra. Mientras que una prueba de característica es un intento activo por parte del personaje de conseguir algo, una tirada de salvación es una reacción casi instantánea a un evento producido por algo o alguien.</p>
            <p>La mayoría de las tiradas de salvación se llevarán a cabo cuando un efecto concreto (como un conjuro, la aptitud de un monstruo o una trampa) así lo exija. El mismo efecto indicará el tipo de tirada de salvación a realizar, así como su CD.</p>
            <table class="table">
                <thead>
                    <tr>
                        <th>Caracteristica</th>
                        <th>Usada para...</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Fuerza</td>
                        <td>Resistirse a una fuerza que intenta desplazarte o apresarte</td>
                    </tr>
                    <tr>
                        <td>Destreza</td>
                        <td>Apartarte del peligro</td>
                    </tr>
                    <tr>
                        <td>Constitucion</td>
                        <td>Aguantar una enfermedad, veneno u otro peligro que mine tu vitalidad</td>
                    </tr>
                    <tr>
                        <td>Inteligencia</td>
                        <td>Desconfiar de ciertas ilusiones y resistir asaltos mentales que puedan ser refutados mediante la lógica, la memoria o ambas</td>
                    </tr>
                    <tr>
                        <td>Sabiduria</td>
                        <td>Resistir efectos que hechizan, asustan o atacan a tu voluntad de cualquier otro modo</td>
                    </tr>
                    <tr>
                        <td>Carisma</td>
                        <td>Resistir efectos que anulen tu personalidad, como la posesión, o te arrastren a otro plano de existencia</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'PruebaCaracteristica',
    data() {
        return {
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