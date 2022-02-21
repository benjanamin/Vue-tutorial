<template>
    <div class="container">
        <div class="row">
            <div class="col" v-for="item in pepe" v-bind:key="item">
                <div class="card" >
                    <img src="" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">Card title {{item}}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>

            
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'Index',
    data(){
        return {
            pepe: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
        }
    }
}
</script>