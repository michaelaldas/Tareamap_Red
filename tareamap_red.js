 //1) Se pide crear la funcion/nes que devuelvan aquellas palabras 
 //que NO tienen las misma vocal
const entrada = ["racear", "amalgan", "oligopoly", "zoom", "cama", "enano"];
const esperado = ["racear", "oligopoly", "enano"];

/*
2) Dado el siguiente vector array = [5,4,20,7,5,10]
use map, para devolver cada elemento del vector multiplicadp por 10
resultado esperado [50,40,200,70,50,100]
*/
const array=[5,4,20,7,5,10];

function MultiplicaArrayx10( array ){
    return array.map( data => {
        return data*10;
    })
}
function MultiplicaArrayx10v2( array ){
    return array.map ( data => data*10);
}

console.log(MultiplicaArrayx10(array));
console.log(MultiplicaArrayx10v2(array));

/*
3) Dada la siguiente matriz = [[1,2,3],[4,5,6], [7,8,9]]
y usando únicamente map, devuelva cada elemento de la matri multiplicada
resultado esperado = [[3,6,9],[12,15,18], [21,24,27]]
*/

matriz = [ [1, 2, 3],[4, 5, 6], [7, 8, 9] ];
function matrizMultiplicax3 ( array ){

    return array.map ( item => {
        return item.map( data => {
            console.log(item);
        })
    });
}
console.log(matrizMultiplicax3(matriz));


//4) Dada la siguiente matriz = [[ 1, 2, 3 ],[ 4, 5 ],[ 6 ]];
//utilice reduce para encontrar el producto de sus elementos,
//resultado esperado: 720

const array1= [1, 2, 3, 4];
const x2 = array1. reduce ((ac, va) =>{
    return ac + va;
})
// 1+2+3+4
console.log(x2);
matrizRed = [[ 1, 2, 3 ],[ 4, 5 ],[ 6 ]];

//matrizred=[1,2,3,4,5,6]
function multiplicaMatriz (array) {
    return array.reduce ((ac, va) =>{
      return ac.concat(va);
    }). reduce((ac, va) => {
        return (ac* va);
    });
}

console.log ("matriz Original : ", matrizRed)
console.log (multiplicaMatriz(matrizRed));

//se tiene un vector con los siguientes elementos
// input = [30, 48, 11,5, 32]
//se pide diseñar la funcion que devuelva la siguiente cadena:
//tus numeros de la suerte son: 30,48,11,5 y 32
// use la funcion reduce

const arrayNumeros = [30, 48, 11,5, 32];
function numerosDeLaSuerte (array){
    const cad = "tus numeros de la suerte son: ";
    return cad + array.reduce ((ac, va, index, array) =>{
        var aux = index < ( array.length -1)? " , ": ", y ";
        return (ac) + aux + (va);

    });
}

console.log (numerosDeLaSuerte(arrayNumeros)); 

// verificar si uno de los elementos del array es mayor a 10
const goodInput = [8, 9, 10, 11, 16];
function numerosMayor10(array){
    return array.some(data => {
        return data > 10;
    })
}
console.log(numerosMayor10(goodInput));

//1) Verificar si una de las cadenas de caracteres del array
//tiene más de 10 caracteres

const vectorCadenas = ["Ecuador", "Argentina", "Dinamarca","Coreal del Norte"];
const  cadenaSeparaa =  vectorCadenas . paraCada ( elemento  => {
    consola.registro ( elemento ) ;
    
} )
const  palabras =  vectorCadenas . algunos ( datos  =>  {
     datos  >  10 ;
} )


//2) Chequear si uno de los elementos de la matriz es true

const vectorBooleano = [

    [false, false, false],
    [false, false, false],
    [false, false, true]

  ];
  if ( vectorBooleano . incluye ( Verdadero ) ) {
    consola.log ( "Verdadero esta presente" ) ;
  } {
    consola.log ( "Verdadero no encontrado" ) ;
  }


//3) verificar si la palabra 'Lost' existe dentro del siguiente array:

const vectorParrafo = [

    "Strange is the night where black stars rise,",
    "And strange moons circle through the skies,",
    "But stranger still is",
    "Lost Carcosa."

  ];
var vectorParrafo = ["Strange is the night where black stars rise,","Lost", "And strange moons circle through the skies,",
  "But stranger Lost still is","Lost Carcosa."
  ];
if(vectorParrafo.includes("Lost")){
  console.log("La palabra Lost esta presente");
}else{
  console.log("La palabra Lost no encontrada");
}