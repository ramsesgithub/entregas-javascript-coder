const shopContent=document.getElementById("shopContent"); //contenido
const verCarrito=document.getElementById("verCarrito"); //carrito 🛒
const modalContainer=document.getElementById("modal-container"); //modal
const cantidadCarrito=document.getElementById("cantidadCarrito"); //cantidad de productos en el carrito

//el carrito se le asigna lo que hay en el sessionStogare y sino hay nada, entonces es igual a un array vacio.
let carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];

//Fetch para traer los productos
fetch("/js/pro.json")
.then(respose=>respose.json())
.then(data=>data.forEach(produc=>{
    //Se crea un div para luego meter los productos
    let content=document.createElement("div");
    content.innerHTML = `
    <img src="${produc.img}">
    <h2>${produc.nombre}</h2>
    <p>$ ${produc.precio}</p>`;

    shopContent.append(content);
    
    //creamos boton para comprar 
    let comprar=document.createElement("button");
    comprar.innerText=`Comprar`
    
    content.append(comprar); //lo agregamos al content de los productos
    content.classList.add("content"); //le agregamos una clase para darle estilo
    
    comprar.addEventListener("click",()=>{
        //Cuando el usuario haga click en el boton "comprar" pushea el producto con id,img,nombre,precio y cantidad
        carrito.push({
            id:produc.id,
            img:produc.img,
            nombre:produc.nombre,
            precio:produc.precio,
            cantidad:produc.cantidad,
        });
        saveLocal(); //y tambien lo guardamos en el sessionStorage, los productos que agregaron al carrito

        //libreria toastify
        Toastify({
            text: `Producto ${produc.nombre} agregado al carrito`,
            duration: 2000,
            gravity: "bottom", // `top` or `bottom`
            position: "right",
            style: {
                color:"#000",
                background:"rgb(169,247,142)",
                background: "linear-gradient(90deg, rgba(169,247,142,1) 0%, rgba(132,222,62,1) 100%)",
            },
        }).showToast();
    })
}))




//Funcion con sessionStorage
const saveLocal=()=>{
    sessionStorage.setItem("carrito", JSON.stringify(carrito)); //guardamos el carrito en el sessionStorage
}



