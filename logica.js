
    localStorage.getItem('usuarios','Isaias Ramirez')
    localStorage.setItem('miStock', JSON.stringify(tienda));

    const usuario = localStorage.getItem('usuarios',)
    if (usuario == null){
        Swal.fire({
            title:'Ingrese su nombre para registrarse',
            input:'text',
            showConfirmButton: true,
        })
    }
     else (
        Swal.fire('Bienvenido de nuevo Isaias')
     )

    
    

let productosCards = document.getElementById('cards-tienda');

for (const productos of tienda){
  productosCards.innerHTML += 
  `<div class="col-md-3">
      <div class="card cartas-div" style="width: 18rem;">
          <img src="${productos.foto}" class="card-img-top" height="300px" alt="imagen del producto">
          <div class="card-body">
              <h5 class="card-title texto">${productos.nombre}</h5>
              <p class="card-text">${productos.precio} $</p>
              <a href="#" class="btn btn-primary añadir-carro">Añadir al carrito</a>
          </div>
      </div>
  </div>`;
};
const tbody = document.getElementById('body-t');
 const carrito = [];
function agregandoCarrito(product){
    carrito.push(product);
    Swal.fire('Acabas de agregar '+ product.nombre + 'al carrito🛒');
    tbody.innerHtml += `
    <tr>    

        <td>${product.nombre}</td>
        <td>${product.precio}</td>


    </tr>`

}

let añadirCarrito = document.getElementsByClassName('añadir-carro');
for(const botones of añadirCarrito){
  botones.onclick = () => {
    const productoCarro = tienda.find((product) => product.id == botones.id);
    agregandoCarrito(productoCarro);
  }

}



