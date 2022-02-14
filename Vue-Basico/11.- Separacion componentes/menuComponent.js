_app.component('menu-component',{
    template: `<nav>
                <a href="index.html">{{usuario}}</a> |
                <a href="">Reglas</a> 
            </nav>`,
    props:{
        usuario: String
    }
})