import { getUsers } from "../servicios/getUsuarios"
import { postUsers } from "../servicios/postUsuarios"

const nombre = document.getElementById("nombre");
const cedula = document.getElementById("cedula");
const email = document.getElementById("email");
const contrasena = document.getElementById("contrasena");
const rol = document.getElementById("selectRol"); // El select para el rol
const btnRegistrar = document.getElementById("btnRegistrar");
const mensaje = document.getElementById("mensaje");
const btnIniciarSesión = document.getElementById("btnIniciarSesión");

btnRegistrar.addEventListener("click", function () {
    crearUsuario()

    async function crearUsuario() {
        // Recoger los valores del formulario
        const nombreUsuario = nombre.value.trim()
        const cedulaUsuario = cedula.value.trim()
        const emailUsuario = email.value.trim()
        const contrasenaUsuario = contrasena.value.trim()
        const selectRol = rol.value.trim()

        // Validar que todos los campos estén llenos
        if (!nombreUsuario || !cedulaUsuario || !emailUsuario || !contrasenaUsuario || !selectRol) {
            mensaje.textContent = "Debe llenar todos los campos";
            return;
        }

        // Limpiar los campos del formulario
        nombre.value = "";
        cedula.value = "";
        email.value = "";
        contrasena.value = "";
        rol.value = "";

        // Verificar si la cédula ya está registrada
        const usuarios = await getUsers();
        const cedulaExistente = usuarios.find(user => user.cedula === cedulaUsuario);

        if (cedulaExistente) {
            mensaje.textContent = "¡La cédula ya está registrada!";
        } else {
            // Registrar el usuario si la cédula no existe
            const response = await postUsers(nombreUsuario, cedulaUsuario, emailUsuario, contrasenaUsuario, selectRol);
            

        // Guardar todos los datos del usuario en localStorage
        const usuarioDatos = {
          nombre: nombreUsuario,
          cedula: cedulaUsuario,
          email: emailUsuario,
          rol: selectRol
        };
        localStorage.setItem("usuarioDatos", JSON.stringify(usuarioDatos));

            // Redirigir a la página de login
            window.location.href = "login.html";
        }
    }
})

function inciarSesión(params) {
    window.location.href = "login.html";
}

btnIniciarSesión.addEventListener("click", inciarSesión )