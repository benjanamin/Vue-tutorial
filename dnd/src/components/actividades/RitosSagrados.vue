<template>
    <div>
        <p>Un personaje especialmente pío podría invertir su tiempo entre aventuras en llevar a cabo ritos sagrados en un templo a filiado con uno de los dioses a los que venera. Además, entre ritual y ritual, el aventurero puede dedicarse a orar y meditar.</p>
        <p>Los personajes que sean sacerdotes de un templo podrán dirigir estos ritos. Algunos ejemplos son bodas, funerales u ordenaciones. En lo que a los laicos respecta, siempre pueden ofrecer sacrificios al tempo o ayudar a un sacerdote como monaguillo.</p>
        <p>Un personaje que pase al menos 10 días realizando ritos sagrados recibirá inspiración (descrita en el capítulo 4 del Player's Handbook) al principio de cada día durante los siguientes 2d6 días.</p>
        <div class="row">

            <div class="col-5">
                
            </div>
        </div>
        <h3>Tirada {{tirada}}</h3>
        <input type="button" value="Tirar" style="margin-top: 1rem;" @click="tirarDado">
    </div>
</template>
<script>
export default {
    name: 'RitosSagrados',
    data(){
        return {
            tirada: 0
        }
    },
    methods: {
        tirarDado(){
            this.tirada = Math.floor(Math.random()*6)+ 1 + Math.floor(Math.random()*6) + 1
        }
    }
}
</script>