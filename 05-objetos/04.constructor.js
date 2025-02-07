// {id: 1, recuperarClave: function(){}}
function Usuario(){
    this.id = 1;
    this.recuperarClave = function(){ // método
        console.log('recuperando clave...');
    }
}

let usuario = new Usuario();
console.log(usuario);