// empezamos con los datos del contacto
const datosContacto = {
    whatsapp: "34600000000",
    email: "info@silviacorral.com"
};
// aqui vamos a desarrollar la funcion del boton de whatsapp para que al hacer click en el boton se abra 
// la aplicacion de whatsapp con un mensaje predefinido y el numero de telefono de contacto.
const botonWhatsapp = document.querySelector("#boton-whatsapp");
if (botonWhatsapp) {
    const mensajeWhatsapp =
        "Hola Silvia, he visto tu web y me gustaría recibir información.";
    botonWhatsapp.href =
        `https://wa.me/${datosContacto.whatsapp}?text=${encodeURIComponent(mensajeWhatsapp)}`;
}
// aqui vamos a desarrollar la funcion del boton de email para que al hacer click en el boton se abra
// el cliente de correo predeterminado del usuario con un mensaje predefinido y el email de contacto.
const botonEmail = document.querySelector("#boton-email");
if (botonEmail) {
    botonEmail.href = `mailto:${datosContacto.email}`;
}
// =========================
// CLIENTES INTERACTIVOS
// // =========================
const clientes = document.querySelectorAll(".cliente");
clientes.forEach((cliente) => {

    cliente.addEventListener("click", () => {

        // Si ya está abierto, lo cerramos
        if (cliente.classList.contains("activo")) {
            cliente.classList.remove("activo");
            return;
        }

        // Cerramos cualquier otra tarjeta abierta
        clientes.forEach((otroCliente) => {
            otroCliente.classList.remove("activo");
        });

        // Abrimos la tarjeta seleccionada
        cliente.classList.add("activo");

    });

});

// =========================
// FORMULARIO DE CONTACTO
// =========================

const formulario = document.querySelector("#formulario-contacto");
const mensajeFormulario = document.querySelector("#mensaje-formulario");

if (formulario && mensajeFormulario) {

    formulario.addEventListener("submit", async (event) => {

        event.preventDefault();

        mensajeFormulario.textContent = "Enviando...";
        mensajeFormulario.className = "mensaje-formulario";

        const datos = new FormData(formulario);

        try {

            const respuesta = await fetch("backend/contacto.php", {
                method: "POST",
                body: datos
            });

            const resultado = await respuesta.json();

            if (resultado.ok) {

                mensajeFormulario.textContent =
                    "Gracias. Tu mensaje ha sido enviado correctamente.";

                mensajeFormulario.classList.add("exito");

                formulario.reset();

            } else {

                mensajeFormulario.textContent =
                    resultado.mensaje;

                mensajeFormulario.classList.add("error");
            }

        } catch (error) {

            console.error("Error:", error);

            mensajeFormulario.textContent =
                "No hemos podido enviar el mensaje. Inténtalo de nuevo.";

            mensajeFormulario.classList.add("error");
        }
    });
}