//clase animales

class Animales{
    constructor(animal,nombre){
        this.animal=animal;
        this.nombre=nombre;
    }
}

//array con los tipos de animales
const tiposDeAnimales=["perro","gato","conejo","caballo","raton","loro","tortuga","gallina","vaca","hamster","pez","huron","pato","pajaro"]

//prompt para preguntar tipo de animal
let animal=prompt(`¿Qué ANIMAL tienes?`).toLowerCase();

//metodo includes para verificar si se encuentra el animal ingresado
let trueOFalse=tiposDeAnimales.includes(animal);


while(trueOFalse!==true){
    alert("ese AMINAL NO EXISTE");
    animal=prompt(`¿Qué ANIMAL tienes?`).toLowerCase();
    trueOFalse=tiposDeAnimales.includes(animal);
}


let nombre=prompt(`¿Cuál es el nombre del animal?`);

if(nombre===""){
    const animal1 = new Animales(animal,"desconocido");
    alert(`Tu animal es un : ${animal1.animal} y su nombre es : ${animal1.nombre}`);
}else{
    const animal1 = new Animales(animal,nombre);
    alert(`Tu animal es un : ${animal1.animal} y su nombre es : ${animal1.nombre}`);
}