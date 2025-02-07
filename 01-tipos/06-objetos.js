// personaje de TV


// Declaramos una variable llamada "nombre" y le asignamos el valor "Tanjiro".
let nombre = "Tanjiro";

// Declaramos una variable llamada "anime" y le asignamos el valor "Demon Slayer".
let anime = "Demon Slayer";

// Declaramos una variable llamada "edad" y le asignamos el valor 16.
let edad = 16;

// Creamos un objeto llamado "personaje" con las propiedades nombre, anime y edad.
let personaje = {
    nombre: "Tanjiro",  // Propiedad "nombre" con el valor "Tanjiro".
    anime: "Demon Slayer",  // Propiedad "anime" con el valor "Demon Slayer".
    edad: 16,  // Propiedad "edad" con el valor 16.
};

// Imprimimos el objeto "personaje" en la consola.
console.log(personaje);

// Imprimimos la propiedad "nombre" del objeto "personaje" en la consola.
console.log(personaje.nombre);

// Accedemos a la propiedad "anime" del objeto "personaje" usando notación de corchetes y la imprimimos.
console.log(personaje['anime']);

// Actualizamos la propiedad "edad" del objeto "personaje" y le asignamos el valor 13.
personaje.edad = 13;
console.log(personaje.edad);

// Declaramos una variable llamada "llave" y le asignamos el valor 'edad'.
let llave = 'edad';

// Usamos la notación de corchetes para actualizar la propiedad "edad" del objeto "personaje" a 16.
personaje['edad'] = 16;

// Eliminamos la propiedad "anime" del objeto "personaje".
delete personaje.anime;

// Imprimimos el objeto "personaje" actualizado en la consola.
console.log(personaje);
