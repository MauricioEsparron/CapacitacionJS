/**
 * crear un algoritmo que devuelva la cantidad
 * de números prositivos de un array
 */

let array = [2,5,7,15,-5,-100,55,2];


function cuantosPositivos(arr){
    let cantidad = 0;
    for(elemento of arr){
        if(elemento > 0){
            cantidad++;
        }
    }
    return cantidad;
}
let resultado = cuantosPositivos(array)
console.log(resultado);