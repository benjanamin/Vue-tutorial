<template>
    <div>
        <h2>Comprar un objeto magico</h2>
        <p>Comprar un objeto mágico requiere tiempo y dinero para buscar y ponerse en contacto con personas dispuestas a vender objetos. Incluso entonces, no hay garantía de que un vendedor tenga los objetos que un personaje desea.</p>
        <p><b>Recursos. </b>Un personaje que busca comprar un objeto mágico hace una prueba de Carisma (Persuasión) para determinar la calidad del vendedor encontrado. El personaje obtiene un bono de + l en la prueba por cada semana laboral más allá de la primera que se gasta en la búsqueda de un vendedor y un bono de +1 por cada 100 po adicionales gastados en la búsqueda, hasta un bono máximo de +10. El costo monetario incluye un estilo de vida rico, ya que un comprador debe impresionar a los socios comerciales potenciales</p>
        <p>Como se muestra en la tabla de Compra de objetos mágicos, el total de la prueba determina en cual tabla de la Guía del Dungeon Master se debe tirar para determinar qué objetos están en el mercado. O puedes tirar para los objetos de cualquier tabla asociada con un total más bajo en la tabla de Compra de objetos mágicos. Como una opción adicional para reflejar la disponibilidad de objetos en tu campaña, puedes aplicar una penalización de -10 para campañas bajas en magia o un bono de +10 para campañas abundantes en magia. Además, puedes duplicar los costos de los objetos mágicos en campañas de bajo nivel de magia. </p>
        <p>Usando la tabla de precios de objetos mágicos, luego asigna precios a los objetos disponibles, en función de su rareza. Reduce a la mitad el precio de cualquier objeto consumible, como una poción o un pergamino, cuando utilices la tabla para determinar el precio de venta.</p>
        <p>Tú tienes la última palabra para determinar qué objetos están a la venta y su precio final, sin importar lo que digan las tablas. </p>
        <p>Si los personajes buscan un objeto mágico específico, primero decide si es un elemento que quieres permitir en tu juego. Si es así, incluye el objeto deseado entre los objetos en venta en una prueba total de 10 o más si el objeto es común, 15 o más si es poco común, 20 o más si es raro, 25 o más si es muy raro, y 30 o superior si es legendario. </p>
        <h4>Compra de objetos magicos</h4>
        <table class="table">
            <thead>
                <tr>
                    <th>Total de prueba</th>
                    <th>Objetos adquiridos</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>1-5</th>
                    <th>Tira 1d6</th>
                </tr>
                <tr>
                    <th>6-10</th>
                    <th></th>
                </tr>
                <tr>
                    <th>11-15</th>
                    <th></th>
                </tr>
                <tr>
                    <th>16-20</th>
                    <th></th>
                </tr>
                <tr>
                    <th>21-25</th>
                    <th></th>
                </tr>
                <tr>
                    <th>26-30</th>
                    <th></th>
                </tr>
                <tr>
                    <th>31-35</th>
                    <th></th>
                </tr>
                <tr>
                    <th>36-40</th>
                    <th></th>
                </tr>
                <tr>
                    <th>41+</th>
                    <th></th>
                </tr>
            </tbody>
        </table>
         <h4>Precio de objetos magicos</h4>
         <table class="table">
             <thead>
                 <tr>
                     <th>Rareza</th>
                     <th>Precio al preguntar*</th>
                 </tr>
             </thead>
             <tbody>
                 <tr>
                     <th>Comun</th>
                     <th @click="obtenerPrecio('comun')">(1d6 + 1)x 10 gp</th>
                 </tr>
                 <tr>
                     <th>Poco comun</th>
                     <th @click="obtenerPrecio('poco comun')">1d6 x 100 gp</th>
                 </tr>
                 <tr>
                     <th>Raro</th>
                     <th @click="obtenerPrecio('raro')"> 2d10 x 1.000 gp</th>
                 </tr>
                 <tr>
                     <th>Muy raro</th>
                     <th @click="obtenerPrecio('muy raro')">(1d4 + 1) x 10.000 gp</th>
                 </tr>
                 <tr>
                     <th>Legendario</th>
                     <th @click="obtenerPrecio('legendario')">2d6 x 25.000 gp</th>
                 </tr>
             </tbody>
         </table>
        <h4 v-if="precio != 0">Precio: {{precio}} gp</h4>
        <p><b>*Reducido a la mitad para un objeto consumible como una poción o un pergamino</b></p>
        <p><b>Complicaciones. </b>El comercio de objetos mágicos está lleno de peligros. Las grandes sumas de dinero involucradas y el poder ofrecido por los objetos mágicos atraen a ladrones, estafadores y otros villanos. Si quieres hacer las cosas más interesantes para los personajes, desplázate en la tabla Complicaciones al comprar Objetos Mágicos o inventa tu propia complicación. </p>

    </div>
</template>
<script>
export default {
    name: 'ComprarObjetoMagico',
    data() {
        return {
            precio: 0
        }
    },
    methods: {
        obtenerPrecio(rareza){
            if(rareza === 'comun'){
                this.precio = (Math.floor(Math.random() *6) + 2) * 10;
            }
            else if(rareza === 'poco comun'){
                this.precio = (Math.floor(Math.random() *6) + 1) * 100;
            }
            else if(rareza === 'raro'){
                this.precio = ( Math.floor(Math.random() * (20 - 2 + 1) + 2)) * 1000;
            }
            else if(rareza === 'muy raro'){
                this.precio = (Math.floor(Math.random() *4) + 2) * 10000;
            }
            else{
                this.precio = ((Math.floor(Math.random() *6) + 1) + (Math.floor(Math.random() *6) + 1)) * 25000;
            }
        }
    }
}
</script>