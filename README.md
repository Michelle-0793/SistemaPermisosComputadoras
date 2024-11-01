# Sistema de Permisos para Uso de Computadoras Académicas

Este proyecto gestiona permisos para el uso de computadoras académicas en una institución educativa. Consta de cuatro módulos principales: Registro de Usuario, Inicio de Sesión, Solicitud de Permisos, e Historial de Solicitudes.

## Funcionalidades

1. **Registro de Usuario**: Permite a los usuarios registrarse con su nombre, cédula, correo electrónico, contraseña y rol (estudiante o administrador). Los datos se almacenan en `localStorage`.
   
2. **Inicio de Sesión**: Valida las credenciales de los usuarios y, en caso de éxito, guarda el rol y nombre en `localStorage` para su uso en la plataforma.

3. **Solicitud de Permisos**: Los usuarios pueden realizar solicitudes de uso de computadoras indicando fechas y sede. Los administradores pueden aprobar o rechazar estas solicitudes. 

## Tecnologías 
- JavaScript (ES6)
- HTML5 y CSS3
- SweetAlert para las notificaciones
