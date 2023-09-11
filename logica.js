
// Cards agregados desde DOM

let cantidad = document.getElementById('cantidad')
let cardsProd = document.getElementById("cards-tienda");
const botonesAgregar = document.querySelectorAll('.agregoAlcarro');

for (const producto of tienda) {
  cardsProd.innerHTML += `<div class="col-md-3">
      <div class="card cartas-div" style="width: 18rem;">
          <img src="${producto.foto}" class="card-img-top" height="300px" alt="${producto.foto}">
          <div class="card-body">
              <h5 class="card-title texto">${producto.nombre}</h5>
              <p class="card-text">${producto.precio} $</p>
              <a href="#" id="${producto.id}" class="btn btn-primary añadir-carro">Añadir al carrito</a>
          </div>
      </div>
  </div>`;

 
}


// funcion del carrito y el carrido agregado desde DOM

let Micarro = [];

let añadirCarro = document.getElementsByClassName('añadir-carro');
for (const boton of añadirCarro){
	boton.addEventListener("click", () => {
		const agregoalCarro = tienda.find((producto) => producto.id == boton.id);
		agregandoloAlCarro(agregoalCarro);
	})
}

let ul = document.getElementById('ul');
const actualizarCarrito = () => {
	const contenedorcarrito = document.querySelector('#ul');
	contenedorcarrito.innerHTML = ``;
}

function agregandoloAlCarro (producto){
	Micarro.push(producto);
	cantidad.innerText = `Cantidad : ${Micarro.length}`;


	Swal.fire({
		position: 'top-end',
		icon: 'success',
		title: 'Se agrego el producto a tu carrito ✔',
		showConfirmButton: false,
		timer: 2000,
	  })

	  ul.innerHTML += `
	  <li style="list-style: none; display:flex;">
	  <img class="img-carrito" src="${producto.foto}" alt="${producto.nombre}" height="100px" />
			<div class="productContent">
				<h3>${producto.nombre}</h3>
				<p class="product-price">$${producto.precio}</p>
			</div>
			</li>
			`;

	  
	  let total = Micarro.reduce((acumulador, producto) => acumulador + producto.precio, 0);
	  document.getElementById('total').innerText = `El total de la compra es: $` + total;

	  localStorage.setItem('Micarrito-LocalStorage', JSON.stringify(Micarro));
}


let botonCompra = document.getElementById('btn-comprar');

botonCompra.onclick = () => {
	
		Swal.fire({
		position: 'top-end',
		icon: 'success',
		title: 'Gracias por tu compra!!! 😊✔',
		showConfirmButton: false,
		timer: 2000,
		}),


		Micarro = [];
		ul.innerHTML = ``;
		document.getElementById('total').innerText = `No hay productos en tu carrito 🛒`;
		cantidad.innerText = `Cantidad : ${Micarro.length}`;
	}

	




