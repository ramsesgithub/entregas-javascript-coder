//accediento al elemento via id
const btnSumar=document.getElementById("sumar");
const btnRestar=document.getElementById("restar");
const btnMultiplicar=document.getElementById("multiplicar");
const btnDividir=document.getElementById("dividir");

const pResultado=document.getElementById ("resultado");

const botonDarkMode=document.getElementById("btn-dark-mode");

//evento sumar al hacer click
btnSumar.addEventListener("click",(e)=>{
    validar(e,"sumar");
});

//evento restar al hacer click
btnRestar.addEventListener("click",(e)=>{
    validar(e,"restar");
});

//evento multiplicar al hacer click
btnMultiplicar.addEventListener("click",(e)=>{
    validar(e,"multiplicar");
});

//evento dividir al hacer click
btnDividir.addEventListener("click",(e)=>{
    validar(e,"dividir");
});



//crear una funcion para validar y hacer determinada operacion
const validar= (e,btn) =>{
    e.preventDefault(); //evitar que recargue el form

    //valor del numero1 y numero2
    const op1 = document.getElementById('op1').value;
    const op2 = document.getElementById('op2').value;   
    
    //validar que se haya ingresado valores
    if ((op1.length  === 0) || (op2.length === 0)) pResultado.innerHTML= `<p class="red">Debes ingresar dos valores ❌`;
    else{
        let res;
        //usamos switch para que haga una determinada operacion
        switch (btn){
            case "sumar":
                res = parseFloat(op1) + parseFloat(op2); //una vez validado pasarlos a float
                break;
            case "restar":
                res = parseFloat(op1) - parseFloat(op2); //una vez validado pasarlos a float
                break;
            case "multiplicar":
                res = parseFloat(op1) * parseFloat(op2); //una vez validado pasarlos a float
                break;
            case "dividir":
                res = parseFloat(op1) / parseFloat(op2); //una vez validado pasarlos a float
                break;
        }

        //validar que se haya ingreasdo solo numeros
        if (isNaN(res)) pResultado.innerHTML=`<p class="red">La operacion no es posible ❌`;
        else pResultado.innerHTML=`<p>El resultado es: ${res} ✅</p>`;
    }
};




/* Dark Mode con localStorage */

//creando el localstorage
let darkMode=localStorage.getItem("dark-mode"); 

const activarDarkMode=()=>{
    document.body.classList.add("dark-mode");
    //true dark-moode en localstorage
    localStorage.setItem("dark-mode","activado") 
}

const desactivarDarkMode=()=>{
    document.body.classList.remove("dark-mode");
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