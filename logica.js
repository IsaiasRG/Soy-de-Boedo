
    localStorage.getItem('usuarios','Isaias Ramirez')

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
    `<div class="card cartas-div" style="width: 18rem; ">
    <img src=" ${productos.foto} " class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title texto">${productos.nombre}</h5>
      <p class="card-text"> ${productos.precio} $</p>
      <a href="#" class="btn btn-primary">Añadir al carrito</a>
    </div>
  </div>`;
};


