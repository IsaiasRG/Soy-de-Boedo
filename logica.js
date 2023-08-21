localStorage.setItem("miStock", JSON.stringify(tienda));
localStorage.setItem("miStock-remeras", JSON.stringify(remeraslista));
localStorage.setItem("miStock-abrigos", JSON.stringify(abrigosLista));
localStorage.setItem("miStock-conj", JSON.stringify(conjuntosLista));
localStorage.setItem("miStock-otros", JSON.stringify(variedadLista));

// Cards agregados desde DOM

let cardsRemeras = document.getElementById("cards-tienda-remeras");

for (const productos of remeraslista) {
  cardsRemeras.innerHTML += `<div class="col-md-3">
      <div class="card cartas-div" style="width: 18rem;">
          <img src="${productos.foto}" class="card-img-top" height="300px" alt="imagen del producto">
          <div class="card-body">
              <h5 class="card-title texto">${productos.nombre}</h5>
              <p class="card-text">${productos.precio} $</p>
              <a href="#" class="btn btn-primary añadir-carro">Añadir al carrito</a>
          </div>
      </div>
  </div>`;
}

let cardsAbrigos = document.getElementById("cards-tienda-abrigos");

for (const productos of abrigosLista) {
  cardsAbrigos.innerHTML += `<div class="col-md-3">
      <div class="card cartas-div" style="width: 18rem;">
          <img src="${productos.foto}" class="card-img-top" height="300px" alt="imagen del producto">
          <div class="card-body">
              <h5 class="card-title texto">${productos.nombre}</h5>
              <p class="card-text">${productos.precio} $</p>
              <a href="#" class="btn btn-primary añadir-carro">Añadir al carrito</a>
          </div>
      </div>
  </div>`;
}

let cardsConjutos = document.getElementById("cards-tienda-conjuntos");

for (const productos of conjuntosLista) {
  cardsConjutos.innerHTML += `<div class="col-md-3">
      <div class="card cartas-div" style="width: 18rem;">
          <img src="${productos.foto}" class="card-img-top" height="300px" alt="imagen del producto">
          <div class="card-body">
              <h5 class="card-title texto">${productos.nombre}</h5>
              <p class="card-text">${productos.precio} $</p>
              <a href="#" class="btn btn-primary añadir-carro">Añadir al carrito</a>
          </div>
      </div>
  </div>`;
}

let cardsOtrosprodc = document.getElementById("cards-tienda-variedad");

for (const productos of variedadLista) {
  cardsOtrosprodc.innerHTML += `<div class="col-md-3">
      <div class="card cartas-div" style="width: 18rem;">
          <img src="${productos.foto}" class="card-img-top" height="300px" alt="imagen del producto">
          <div class="card-body">
              <h5 class="card-title texto">${productos.nombre}</h5>
              <p class="card-text">${productos.precio} $</p>
              <a href="#" class="btn btn-primary añadir-carro">Añadir al carrito</a>
          </div>
      </div>
  </div>`;
}

// funcion del carrito y el carrido agregado desde DOM


let añadirCarrito = document.getElementsByClassName('añadir-carro');
for(const botones of añadirCarrito){
  botones.onclick = () => {
    const productoCarro = tienda.find((product) => product.id == botones.id);
    agregandoCarrito(productoCarro);
    console.log(productoCarro)
  }

}

const tbody = document.getElementById('body-t');
 const carrito = [];
function agregandoCarrito(product){
    carrito.push(product);
    // Swal.fire('Acabas de agregar '+ product.nombre + 'al carrito🛒');
    tbody.innerHtml += `
    <tr>    

        <td>${product.nombre}</td>
        <td>${product.precio}</td>


    </tr>`

}
