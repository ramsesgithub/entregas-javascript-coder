//accediento al elemento via id
const txtOp1=document.getElementById ("op1");
const txtoperacion=document.getElementById ("operacion");
const txtOp2=document.getElementById ("op2");
const btnCalcular=document.getElementById ("calcular");
const pResultado=document.getElementById ("resultado");

const botonDarkMode=document.getElementById("btn-dark-mode");
const body=document.body;

//cada vez que se haga click ejecuta la funcion
btnCalcular.addEventListener("click", calcular)

//Funcion cada vez a apretamos el submit
function calcular(e){
    //evitar que el form se "envie" o recargue
    e.preventDefault();

    const operacion=txtoperacion.value; //guardamos el valor  en una variable
    const op1=parseFloat(txtOp1.value);  //guardamos el valor en una variable y lo pasamos a float
    const op2=parseFloat(txtOp2.value);  //guardamos el valor en una variable y lo pasamos a float

    if (operacion == "+" || operacion=="-" || operacion=="*" || operacion =="/"){
        let res=0;
        switch (operacion){
            case "+":
                res=op1+op2
                break;
            case "-":
                res=op1-op2
                break;
            case "*":
                res=op1*op2
                break;
            case "/":
                res=op1/op2
                break;
            }
        if(isNaN(res))pResultado.innerHTML=`<p class="red">La operacion no es posible ❌`
        else pResultado.innerHTML=`<p>El resultado es: ${res} ✅</p>`
    }else pResultado.innerHTML=`<p class="red">La operacion no es posible ❌`
}


/* Dark Mode con localStorage */

//creando el localstorage
let darkMode=localStorage.getItem("dark-mode"); 

const activarDarkMode=()=>{
    body.classList.add("dark-mode");
    //true dark-moode en localstorage
    localStorage.setItem("dark-mode","activado") 
}

const desactivarDarkMode=()=>{
    body.classList.remove("dark-mode");
    //false dark-moode en localstorage
    localStorage.setItem("dark-mode","desactivado") 
}


//guardar al refrescar la pagina
if(darkMode==="activado") activarDarkMode();
else desactivarDarkMode();


botonDarkMode.addEventListener("click",()=>{
    //ver el valor de dark-mode
    darkMode=localStorage.getItem("dark-mode");
    if(darkMode==="activado") desactivarDarkMode();
    else activarDarkMode();
})