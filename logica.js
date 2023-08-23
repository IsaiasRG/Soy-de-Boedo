
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


// Cards agregados desde DOM

let cardsProd = document.getElementById("cards-tienda");

for (const producto of tienda) {
  cardsProd.innerHTML += `<div class="col-md-3">
      <div class="card cartas-div" style="width: 18rem;">
          <img src="${producto.foto}" class="card-img-top" height="300px" alt="imagen del producto">
          <div class="card-body">
              <h5 class="card-title texto">${producto.nombre}</h5>
              <p class="card-text">${producto.precio} $</p>
              <a href="#" class="btn btn-primary añadir-carro">Añadir al carrito</a>
          </div>
      </div>
  </div>`;
}


// funcion del carrito y el carrido agregado desde DOM


const agregarAlCarrito = (id) => {

	if (!carrito.some((producto) => producto.id === id)) {
		const producto = tienda.find((producto) => producto.id === id);
		carrito.push({ ...producto, cantidad: 1 });

	} else {
		const producto = carrito.find((producto) => producto.id === id);
		producto.cantidad++;
	}
	

	localStorage.setItem("carrito", JSON.stringify(carrito));
	mostrarCarrito();
};


const mostrarCarrito = () => {
	const contenedorCarrito = document.querySelector(".carrito");
	contenedorCarrito.innerHTML = "";
	   
	if (carrito.length > 0) {

		const productsCart = document.createElement("ul");
		productsCart.classList.add("productsCart");
		contenedorCarrito.appendChild(productsCart);
		
		const contenedorTotal = document.createElement("p");
		actualizarTotal(contenedorTotal);
		contenedorCarrito.appendChild(contenedorTotal);
		carrito.forEach((producto) => {
			const li = document.createElement("li");
			li.innerHTML = `
			<img src="${producto.imagen}" alt="${producto.nombre}" />
			<div class="productContent">
				<h3>${producto.nombre}</h3>
				<p class="product-price">$${producto.precio}</p>
				<p class="product-price">${producto.cantidad}u.</p>
			</div>
			<button id="eliminar-${producto.id}" class="remove">Eliminar</button>
		`;
			
			productsCart.appendChild(li);
			const boton = document.getElementById(`eliminar-${producto.id}`);
			boton.addEventListener("click", () => {
				eliminarProducto(producto.id);
			});
		});
	} 
    
    else {
		contenedorCarrito.innerHTML = '<p class="empty">Aun no has elejido ningun producto</p>';
	}
};

const eliminarProducto = (id) => {
	carrito = carrito.filter((producto) => producto.id !== id);
	localStorage.setItem("carrito", JSON.stringify(carrito));
	mostrarCarrito();
};

const actualizarTotal = (contenedor) => {
	const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio * producto.cantidad, 0);
	contenedor.textContent = `Total: $${total}`;
};

