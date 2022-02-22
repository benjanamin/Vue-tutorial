<template>
    <div>
        <h2>Construir una fortaleza</h2>
        <p>Un personaje puede pasar el periodo de tiempo entre aventuras erigiendo una fortaleza. Pero antes de poder empezar con los trabajos de construcción deberá adquirir una parcela de tierra. Si el emplazamiento se encuentra en el interior de un reino o dominio similar, será necesario conseguir un permiso real (un documento que concede permiso de la corona para administrar la linea), una cesión de tierras (un documento que cede la custodia de la tierra al personaje mientras este permanezca leal a la corona) o una escritura de propiedad (un documento que prueba que el personaje posee la tierra). Asimismo, la tierra puede ser heredada o adquirida mediante otros medios .</p>
        <p>Los permisos reales y las cesiones de tierras suelen ser concedidas por la corona como premio a un acto de servicio, aunque también es posible adquirirlos. Las escrituras pueden comprarse o heredarse. Una linea pequeña podría venderse por entre 100 y 1.000 po, mientras que una grande podría costar 5.000 po o incluso más, si es que está a la venta.</p>
        <p>Una vez se posee la linea , el personaje de be conseguir los materiales y obreros necesarios para la construcción. La tabla "construcción de una forta leza" muestra el coste de edificar la fortaleza (materiales y mano de obra incluidos), así como la cantidad de tiempo necesario para ello. Eso sí, siempre y cuando el personaje pued a utilizar un periodo de descanso entre aventuras para supervisar los trabajos. El trabajo puede progresar mientras el aventurero no esté presente, pero por cada día que permanezca alejado de la obra se añadirán 3 días al tiempo de construcción.</p>
        <table class="table" >
                <thead>
                    <tr>
                        <th><b>Fortaleza</b></th>
                        <th><b>Coste de construccion</b></th>
                        <th><b>Tiempo de construccion</b></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Abadía</td>
                        <td>50.000 po </td>
                        <td>400 días</td>

                    </tr>
                    <tr>
                        <td>Casa gremial en pueblo o ciudad</td>
                        <td>5.000 po</td>
                        <td>60 días</td>
                    </tr>
                    <tr>
                        <td>Finca de noble con mansion</td>
                        <td>25.000 po</td>
                        <td>150 días</td>
                    </tr>
                    <tr>
                        <td>Fortaleza o castillo pequeño</td>
                        <td>50.000 po</td>
                        <td>400 días</td>
                    </tr>
                    <tr>
                        <td>Palacio o castillo grande</td>
                        <td>500.000 po</td>
                        <td>1.200 días</td>
                    </tr>
                    <tr>
                        <td>Puesto comercial</td>
                        <td>5.000 po</td>
                        <td>60 días</td>
                    </tr>
                    <tr>
                        <td>Puesto fronterizo o fuerte</td>
                        <td>15.000 po</td>
                        <td>100 días</td>
                    </tr>
                    <tr>
                        <td>Templo</td>
                        <td>50.000 po</td>
                        <td>400 días</td>
                    </tr>
                    <tr>
                        <td>Torre fortificada</td>
                        <td>15.000 po</td>
                        <td>100 días</td>
                    </tr>
                    
                </tbody>
                
            </table>
    </div>
</template>
<script>
export default {
    name: 'ConstruirFortaleza'
}
</script>