
//Funcion para mostrar el modal del carrito
const pintarCarrito = () =>{
    modalContainer.innerHTML=""; //reset al modal para que el carrito se actualice
    modalContainer.style.display="flex" //estilo flex al modal

    //creamos el header del modal
    const modalHeader=document.createElement("div");

    modalHeader.className="modal-header"; //clase al modalheader para darle estilo
    modalHeader.innerHTML=`<h1 class="modal-header-title">Carrito </h1>` 
    modalContainer.append(modalHeader); //lo agregamos al modalcontainer
    
    //creamos un boton para el modal header
    const modalButton=document.createElement("h1");
    
    modalButton.innerText="✖️";
    modalButton.className="modal-header-button"; //clase al boton para darle estilo
    
    //Al hacer click en el boton desaparece el modal
    modalButton.addEventListener("click",()=>{
        modalContainer.style.display="none"
    });
    
    //lo agregamos al modal header
    modalHeader.append(modalButton);
    
    //mostrar en el modal los productos que se compraron
    carrito.forEach((produc)=>{
        let carritoContent=document.createElement("div");
        carritoContent.className="modal-content";
        carritoContent.innerHTML=`
        <img src="${produc.img}">
        <h2>${produc.nombre}</h2>
        <p>$ ${produc.precio}</p>
        <span class="delete-product"> ❌ </span>` //boton para eliminar el producto del carrito

        //lo agregamos al modal container
        modalContainer.append(carritoContent);

        //dandole funcion al boton para elimiar producto del carrito
        let eliminar=carritoContent.querySelector(".delete-product");
        
        eliminar.addEventListener("click",()=>{
            eliminarProducto(produc.id); //llamamos ala funcion eliminarProducto y le pasamos el id
            //libreria toastify
            Toastify({
                text: `Producto ${produc.nombre} removido del carrito`,
                duration: 2000,
                gravity: "bottom", // `top` or `bottom`
                position: "right",
                style: {
                    color:"#000",
                    background:"rgb(241,35,35)", 
                    background: "linear-gradient(90deg, rgba(134,1,1,1) 0%, rgba(241,35,35,1) 100%)",
                },
            }).showToast();
        });
    });
    
    //usando reduce, calculamos el total a pagar. "el" representa a cada uno de los productos
    //el acumulador es "acc", que va sumando el precio dependiento cuanta productos hay
    const total = carrito.reduce((acc, el) => acc + el.precio , 0); //Con 0 arranca el acc
    
    //creamos un div para mostar el total a pagar
    const totalCompra = document.createElement("div");
    totalCompra.className="total-content";  //clase al total para darle estilo
    totalCompra.innerHTML=`Total a Pagar:<b class="monto-total"> $ ${total}</b>`; //se muestra el total calculado
    modalContainer.append(totalCompra); //lo agregamos al modal container
}


//Funcion a ejecutarse al presionar el carrito
verCarrito.addEventListener("click",pintarCarrito);


//Funcion eliminarProducto
const eliminarProducto = (id) =>{
    const foundId = carrito.find((element)=>element.id === id); //usando find, buscamos el producto que el usuario desea eliminar con el id
    
    //usando filter, filtramos todos los productos del carrito que NO tenga el id que se quiere eliminar del carrito
    //y reasignamos el nuevo valor del carrito
    carrito = carrito.filter((carritoId)=>{
        return carritoId !== foundId;
    });
    saveLocal(); //guardamos en el sessionStorage pero sin el producto que fue eliminado
    pintarCarrito(); //mostramos el carrito nuevamente pero sin el producto que fue eliminado
}


