<template>
    <div>
        <h2>Crear un objeto</h2>
        <p>Un personaje que tiene el tiempo, el dinero y las herramientas necesarias puede usar el tiempo de inactividad para crear armaduras, armas, ropa u otro tipo de equipo no mágico.</p>
        <p><b>Recursos y Resolución. </b>Además de las herramientas adecuadas para el objeto que se va a elaborar, un personaje necesita materias primas que valgan la mitad del costo de venta del objeto. Para determinar cuántas semanas de trabajo se necesitan para crear un objeto, divide su costo en piezas de oro entre 50. Un personaje puede completar varios objetos en una semana laboral si el costo combinado de los objetos es de 50 po o menos. Los artículos que cuestan más de 50 po se pueden completar durante largos períodos de tiempo, siempre que el trabajo en curso se almacene en un lugar seguro. </p>
        <p>Múltiples personajes pueden combinar sus esfuerzos. Divide el tiempo necesario para crear un elemento por el número de personajes que trabajan en él. Usa tu criterio para determinar cuántos personajes pueden colaborar en un elemento. Un artículo particularmente pequeño, como un anillo, puede permitir solo a uno o dos trabajadores, mientras que un artículo grande y complejo puede permitir a cuatro o más trabajadores. </p>
        <p>Un personaje debe ser competente con las herramientas necesarias para elaborar un objeto y tener acceso al equipo apropiado. Todos los que colaboran necesitan tener la competencia adecuada de herramientas. Debes realizar cualquier juicio sobre si un personaje tiene el equipo correcto. En el cuadro a continuación figuran algunos ejemplos:</p>
        <table class="table">
            <thead>
                <tr>
                    <th>Competencia</th>
                    <th>Objetos</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Utiles de herborista</td>
                    <td>Antitoxina, pocion de curacion</td>
                </tr>
                <tr>
                    <td>Herramientas de curtidor</td>
                    <td>Armaduras de cuero, botas</td>
                </tr>
                <tr>
                    <td>Herramientas de herrero</td>
                    <td>Armadura, armas</td>
                </tr>
                <tr>
                    <td>Herramientas de tejedor</td>
                    <td>Capas tunicas</td>
                </tr>
            </tbody>
        </table>



        <Calculadora></Calculadora>
    </div>
</template>
<script>
import Calculadora from '../util/Calculadora.vue'
export default {
    name: 'CrearObjeto',
    components: {
        Calculadora
    }
}
</script>