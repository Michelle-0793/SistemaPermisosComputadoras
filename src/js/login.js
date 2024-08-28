import { getUsers } from "../servicios/getUsuarios"

const cedula = document.getElementById("cedula")
const contrasena = document.getElementById("contrasena")
const btnLogin = document.getElementById("btnLogin")
const mensaje = document.getElementById("mensaje")

btnLogin.addEventListener("click", function () {
    validarUsuario()

   async function validarUsuario() {
   const lista = await getUsers()
   let usuarioEncontrado = false;

   for (let index = 0; index < lista.length; index++) {
      if (lista[index].cedula === cedula.value && lista[index].contrasena === contrasena.value) {
      // Guardar nombre y rol en localStorage
      const usuarioDatos = {
      nombre: lista[index].nombre,
      rol: lista[index].rol, 
      cedula: lista[index].cedula
      }


      localStorage.setItem("usuarioDatos", JSON.stringify(usuarioDatos));

      usuarioEncontrado = true;
      window.location.href = "formulario.html";
      return; // Detener el bucle y la ejecución
      }
   }
   
   if (!usuarioEncontrado) {
      Swal.fire({
         icon: "error",
         confirmButtonColor: "#04082c",
         title: "Oops...",
         text: "¡Usuario no registrado!",
         customClass: {
            popup: "modalUsuarioNoEncontrado"
        }
       });
   }
}
})


