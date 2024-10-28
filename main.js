// //Lunes 28
// console.log("hola");
// const objeto ={}//objeto objeto.propiedad
// const array = []//array array[posición]

// function prueba() {
//     console.log("ee")
// }
// // prueba()//llamo a una función
// // console.log(prueba)
// // console.log(prueba())
// // intereses.includes("cocinar")//método de las arrays
// // const ordenador = {
// //     marca:"Asus",
// //     tipo:"portátil",
// //     perifericos:{
// //         touchpad:true
// //     },
// //     almacenamiento:{
// //         discos:["hdd",1,2,"SSD"]
// //     },
// //     procesador:{
// //         velocidad:"2.5 GHz"
// //     }
// // }

// // // TEST 1
// // if (typeof ordenador === "object") {
// //   console.log("apruebas");
// // } else {
// //   console.log("suspendes");
// // }

// // // TEST 2
// // if (ordenador.marca === "Asus") {
// //   console.log("apruebas");
// // } else {
// //   console.log("suspendes");
// // }

// // // TEST 3
// // if (ordenador.tipo === "portátil") {
// //   console.log("apruebas");
// // } else {
// //   console.log("suspendes");
// // }

// // // TEST 4
// // if (ordenador.perifericos.touchpad === true) {
// //   console.log("apruebas");
// // } else {
// //   console.log("suspendes");
// // }

// // // TEST 5
// // if (ordenador.almacenamiento.discos[3] === "SSD") {
// //   console.log("apruebas");
// // } else {
// //   console.log("suspendes");
// // }

// // // TEST 6
// // if (ordenador.procesador.velocidad === "2.5 GHz") {
// //   console.log("apruebas");
// // } else {
// //   console.log("suspendes");
// // }

// //EJERCICIO 2

// const usuario = {
//     nombre:"María",
//     direccion:{
//         ciudad:"Madrid"
//     },
//     intereses:["cocinar"],
//     trabajos:["profe",{
//         empresa:"Google"
//     }]

// }

// // TEST 1
// if (typeof usuario === "object") {
//     console.log("apruebas");
//   } else {
//     console.log("suspendes");
//   }

//   // TEST 2
//   if (usuario.nombre === "María") {
//     console.log("apruebas");
//   } else {
//     console.log("suspendes");
//   }

//   // TEST 3
//   if (usuario.direccion.ciudad === "Madrid") {
//     console.log("apruebas");
//   } else {
//     console.log("suspendes");
//   }

//   // TEST 4
//   if (usuario.intereses.includes("cocinar")) {
//     console.log("apruebas");
//   } else {
//     console.log("suspendes");
//   }

//   // TEST 5
//   if (usuario.trabajos.length === 2) {
//     console.log("apruebas");
//   } else {
//     console.log("suspendes");
//   }

//   // TEST 6
//   if (usuario.trabajos[1].empresa === "Google") {
//     console.log("apruebas");
//   } else {
//     console.log("suspendes");
//   }

//**BUCLES */
// Imprimir los números del 21 al 34 en la consola.
// for (let index = 21; index <= 34; index++) {
//   console.log(index);
// }

// Sumar los números del 1 al 10 y mostrar el resultado en la consola.
// Dado un array de números, imprimir en la consola la suma de todos los números.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let resultado = 0;
for (let index = 0; index < numeros.length; index++) {
  resultado += numeros[index];
}
// console.log(resultado)
function prueba() {
  return "Yeyy resolviendo dudas";
}
// console.log(prueba())
// Dado un array de números, imprimir en la consola solo los números impares.
// for (let index = 0; index < numeros.length; index++) {
//     if(numeros[index]%2 == 1){
//         console.log(numeros[index] + " es impar")
//     }
// }

// Dado un array de objetos con propiedades "nombre" y "edad", imprimir en la consola solo los nombres de las personas mayores de 18 años.
const personas = [
  {
    nombre: "Alberto",
    edad: 12,
  },
  {
    nombre: "Karen",
    edad: 20,
  },
  {
    nombre: "Luis",
    edad: 19,
  },
];
// personas.forEach((persona) => {
//   if (persona.edad > 18) {
//     console.log(persona.nombre);
//   }
// });

//Mostrar por consola el nombre de las personas cuyo nombre incluya la letra "A"
personas.forEach((persona) => {
  let nombreMinusculas = persona.nombre.toLowerCase();
  // console.log(nombreMinusculas.includes("a"))
  if (nombreMinusculas.includes("a") === true) {
    console.log(nombreMinusculas);
  }else{
    console.log(nombreMinusculas + " no tiene la letra A")
  }
  // console.log(persona.nombre.includes("A"))
});
