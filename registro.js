const inicioFormulario = document.getElementById("inicio");


const mostrarMensaje = (title, text, type) => {
	Swal.fire(title, text, type);
};


inicioFormulario.addEventListener("submit", (e) => {
	e.preventDefault();
	const nombre = document.getElementById("nombre").value;
	const pass = document.getElementById("password").value;
	fetch("../cuentas.json")
		.then((response) => response.json())
		.then((users) => {
			const user = users.find((user) => user.nombre === nombre);
			if (user) {

				if (pass === user.password) {
					mostrarMensaje(`¡Buen día, ${user.nombre}!`, "Ingresando al sitio...", "success");
					setTimeout(() => {
						location.href = "../index.html";
					}, 1500);

				} else {
					mostrarMensaje("Error al iniciar sesión", "Contraseña incorrecta.", "error");
				}

			} else {
				mostrarMensaje("Error al iniciar sesión", "Nombre incorrecto.", "error");
			}
		});
});
