<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light" style="margin-bottom:1rem;">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link clickeable" @click="cambiarPagina('index')">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link clickeable" @click="cambiarPagina('reglas')">Reglas</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link clickeable" @click="cambiarPagina('actividad')">Actividades</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link clickeable" @click="cambiarPagina('')">Blanco</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle clickeable"  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Actividades
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        <div class="container">
            <div v-if="pagina === 'index'">
                <h1>Index</h1>
            </div>
            <Actividad v-if="pagina === 'actividad'"></Actividad>
            <Reglas v-if="pagina === 'reglas'"></Reglas>
        </div>
        <footer class="bg-dark text-center text-white mt-5">
            <!-- Grid container -->
            <div class="container p-4">
                <!-- Section: Text -->
                <section class="mb-4">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                    repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                    eum harum corrupti dicta, aliquam sequi voluptate quas.
                </p>
                </section>
                <!-- Section: Text -->

                <!-- Section: Links -->
                <section class="">
                <!--Grid row-->
                <div class="row">
                    <!--Grid column-->
                    <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase">Links</h5>

                    <ul class="list-unstyled mb-0">
                        <li>
                        <a href="#!" class="text-white">Link 1</a>
                        </li>
                        <li>
                        <a href="#!" class="text-white">Link 2</a>
                        </li>
                        <li>
                        <a href="#!" class="text-white">Link 3</a>
                        </li>
                        <li>
                        <a href="#!" class="text-white">Link 4</a>
                        </li>
                    </ul>
                    </div>
                    <!--Grid column-->

                    <!--Grid column-->
                    <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase">Links</h5>

                    <ul class="list-unstyled mb-0">
                        <li>
                        <a href="#!" class="text-white">Link 1</a>
                        </li>
                        <li>
                        <a href="#!" class="text-white">Link 2</a>
                        </li>
                        <li>
                        <a href="#!" class="text-white">Link 3</a>
                        </li>
                        <li>
                        <a href="#!" class="text-white">Link 4</a>
                        </li>
                    </ul>
                    </div>
                    <!--Grid column-->

                    <!--Grid column-->
                    <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase">Links</h5>

                    <ul class="list-unstyled mb-0">
                        <li>
                        <a href="#!" class="text-white">Link 1</a>
                        </li>
                        <li>
                        <a href="#!" class="text-white">Link 2</a>
                        </li>
                        <li>
                        <a href="#!" class="text-white">Link 3</a>
                        </li>
                        <li>
                        <a href="#!" class="text-white">Link 4</a>
                        </li>
                    </ul>
                    </div>
                    <!--Grid column-->

                    <!--Grid column-->
                    <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase">Links</h5>

                    <ul class="list-unstyled mb-0">
                        <li>
                        <a href="#!" class="text-white">Link 1</a>
                        </li>
                        <li>
                        <a href="#!" class="text-white">Link 2</a>
                        </li>
                        <li>
                        <a href="#!" class="text-white">Link 3</a>
                        </li>
                        <li>
                        <a href="#!" class="text-white">Link 4</a>
                        </li>
                    </ul>
                    </div>
                    <!--Grid column-->
                </div>
                <!--Grid row-->
                </section>
                <!-- Section: Links -->
            </div>
            <!-- Grid container -->

            <!-- Copyright -->
            <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
                © 2020 Copyright:
                <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>
            <!-- Copyright -->
        </footer>
        <!-- Footer -->
        
    </div>
    
</template>

<script>

//import Albanil from './professions/Albanil.vue'
import Actividad from './Actividad.vue'
import Reglas from './Reglas.vue'
export default {
    
    name: 'Index',
    components: {
        Actividad,
        Reglas
        //Albanil
    },
    data(){
        return {
            pagina: 'index'
        }
    },
    methods: {
        cambiarPagina(pagina){
            this.pagina = pagina
        }
    }
}
</script>
<style>
    .clickeable {
        cursor:pointer;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }
</style>