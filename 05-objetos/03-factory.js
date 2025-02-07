function crearUsuario(name, email){
    return {
        email,
        name,
        activo: true,
        recuperarClave: function(){
            console.log('recuperando clave...');
        },
    };
}

let user1 = crearUsuario('Mauricio', 'mau@gmail.com')
let user2 = crearUsuario('Sofia', 'sofia@gmail.com')

console.log(user1,user2);