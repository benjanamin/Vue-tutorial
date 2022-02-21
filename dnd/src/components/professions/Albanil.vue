<template>
    <div>
        <div>
            <h2>Herramientas de albañil</h2>
            <p>Las Herramientas de albañil te permiten construir estructuras de piedra
                , incluyendo muros y edificios hechos de ladrillo.
            </p>
            <p><b>Componentes.</b> Las herramientas de albañil consisten en
                una paleta, un martillo, un cincel, cepillos y una escuadra.</p>
            <p><b>Historia.</b> Tu experiencia le ayuda a identificar la fecha de
                construcción y el propósito de un edificio de piedra, junto con
                una idea de quién podría haberlo construido.</p><p>
                <b>Investigación.</b> Obtienes información adicional cuando
                inspeccionas áreas dentro de estructuras de piedra.</p><p> 
                <b>Percepción.</b> Puedes detectar irregularidades en paredes o
                pisos de piedra, lo que facilita la búsqueda de trampas y
                pasajes secretos.</p>
                <p><b>Demolición.</b> Tu conocimiento de la albañilería te permite
                detectar puntos débiles en las paredes de ladrillo. Infliges
                doble daño a tales estructuras con los ataques de tu arma</p>
        </div>
        <div>
            <h3>Herramientas de albañil</h3>
            <table class="table">
                <thead>
                    <tr>
                        <th><b>Actividad</b></th>
                        <th><b>CD</b></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td @click="tirarDado" class="dado">Martillar un pequeño hueco en un muro de piedra</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td @click="tirarDado" class="dado">Encontrar un punto débilen un muro de piedra</td>
                        <td>15</td>
                    </tr>
                </tbody>
                
            </table>
            <h4 v-if="(tirada != 0)">Tirada: {{tirada}}</h4>
        </div>
    </div>
</template>
 <script>
 export default {
     name: 'Albanil',
     data() {
         return{
             tirada: 0
         }
     },
     methods: {
         tirarDado(){
             this.tirada = Math.floor(Math.random() * (21 - 1) + 1);

         }
     }
 }
 </script>
 <style scoped>
    .dado {
        color:skyblue;
    }
 </style>