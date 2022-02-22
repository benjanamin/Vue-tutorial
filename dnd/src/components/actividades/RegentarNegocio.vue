<template>
    <div>
        <h2>Regentar un negocio</h2>
        <p>Los aventureros pueden acabar poseyendo negocios que no tengan nada que ver con internarse en mazmorras o salvar el mundo. Un personaje podría heredar una forja, o quizá el grupo reciba una parcela de tierra cultivable o una taberna como recompensa. Si se encariñan del negocio, cabe la posibilidad de que se sientan obligados a dedicar parte de su tiempo entre aventuras a asegurarse de su buena marcha.</p>
        <p>El personaje tirará 1d100 y añadirá el número de días que ha pasado en esta actividad entre aventuras (hasta un máximo de 30) y buscará el resultado en la tabla "regentar un negocio" para determinar lo que ocurre.</p>
        <p>Si, como resultado de esta tirada, el personaje se ve obligado a pagar un coste, pero se niega a hacerlo, el negocio empezará a hundirse. Por cada deuda de este tipo sin pagar, el personaje recibirá un penalizador de - 10 a las siguientes tiradas que realice en esta tabla.</p>
        <table class="table">
            <thead>
                <tr>
                    <td><b>d100 + días</b></td>
                    <td><b>Resultado</b></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>01-20</td>
                    <td>Debes pagar una vez y media el coste de mantenimiento del negocio para cada uno de los días</td>
                </tr>
                <tr>
                    <td>21-30</td>
                    <td>Debes pagar el coste de mantenimiento del negocio para cada uno de los días</td>
                </tr>
                <tr>
                    <td>31-40</td>
                    <td>Debes pagar la mitad del coste de mantenimiento del negocio para cada uno de los días. Los beneficios cubren la otra mitad.</td>
                </tr>
                <tr>
                    <td>41-60</td>
                    <td>El negocio cubre sus costes de mantenimiento para cada uno de los días</td>
                </tr>
                <tr>
                    <td>61-80</td>
                    <td>El negocio cubre sus costes de mantenimiento para cada uno de los días. Además, produce un beneficio de 1d6 x 5 po.</td>
                </tr>
                <tr>
                    <td>81 - 90</td>
                    <td>El negocio cubre sus costes de mantenimiento para cada uno de los días. Además, produce un beneficio de 2d8 x 5 po.</td>
                </tr>
                <tr>
                    <td>91 o más</td>
                    <td>El negocio cubre sus costes de mantenimiento para cada uno de los días. Además, produce un beneficio de 3d10 x 5 po.</td>
                </tr>
            </tbody>
        </table>
        <div class="row">
            <h3>Tirada 1d100</h3>
            <div class="col-1">
                <input type="number" class="form-control" id="exampleFormControlInput1" v-model="dias">
            </div>
            <div class="col-5">
                <h3>Tirada {{tirada}}</h3>
            </div>
        </div>
        <input type="button" value="Tirar" style="margin-top: 1rem;" @click="tirarDado">
    </div>
</template>
<script>
export default {
    name: 'RengentarNegocio',
    data() {
        return {
            dias: 0,
            tirada: 0
        }
    },
    methods: {
        tirarDado(){
            if(this.dias > 30){
                this.tirada = Math.floor(Math.random() *100) + 1 + 30;
            }
            else{
                this.tirada = Math.floor(Math.random() *100 ) + 1 + this.dias;
            }
            
        }
    }
}
</script>