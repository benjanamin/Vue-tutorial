<template>
    <div>
        <h2>Calculadora de construccion de objetos</h2>
        <div class="row mt-4">
            <div class="col-2">
                <h5>Precio de compra</h5>
            </div>
            <div class="col-1">
                <input type="number" class="form-control" id="exampleFormControlInput1" v-model="precioCompra">
            </div>
            
        </div>
        <div class="row mt-3">
            <div class="col" v-if="flag">
                <h5>Coste materiales: {{coste}} po</h5>
                <h5>Tiempo: {{dias}} dias</h5>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col">
                <input type="button" value="Calcular" @click="calcular">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Calculadora',
    data() {
        return {
            coste: 0,
            precioCompra: 0,
            dias: 0,
            flag: false
        }
    },
    methods: {
        calcular(){
            this.flag = true
            this.coste = this.precioCompra / 2 
            this.dias = (this.precioCompra  * 7/ 50)
        }
    }
}
</script>