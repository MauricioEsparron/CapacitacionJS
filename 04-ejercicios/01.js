// cual de los dos números es el mayor

function cualEsMayor(a,b){

    // manera 1
    // if(a > b){
    //     return a;
    // }else{
    //     return b;
    // }

    //manera 2
   return (a > b) ? a : b;
}

let mayor = cualEsMayor(10,5);
console.log(mayor);