/* 
Crear un algoritmo con una condicional
Crear un algoritmo utilizando un ciclo
*/

//Hice una combinación de las dos consignas, espero que este bien


function esparOImpar(num){
    if(num % 2 === 0){
        alert(`El número ${num} es par`);
    }else{
        alert(`El número ${num} es impar`);
    }
}

let numero=parseInt(prompt("Ingresar un numero o 0(cero) para terminar"));

while(numero!==0){
    esparOImpar(numero);
    numero=parseInt(prompt("Ingresar un numero o 0(cero) para terminar"));
}