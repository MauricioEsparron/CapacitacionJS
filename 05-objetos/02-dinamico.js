const user = {id:1};

user.name = 'Mauricio';
user.guardar = function(){
    console.log('Guardando', user.name);
}

user.guardar();

delete user.name;
delete user.guardar;
console.log(user);

//const user1 = Object.freeze({id: 1}); // para que no se le pueda cmabiar propiedades ni valores
const user1 = Object.seal({id: 1}); // para que las propiedades esten fijas pero que sus valore se puedan cambiar
user1.name = 'Mau';
user1.id = 2;    
console.log(user1);