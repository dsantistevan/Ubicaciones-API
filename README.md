# Ubicaciones-API
Implementación de un API REST para consultar ubicaciones de una base de datos no relacional MongoDB, y una pequeña demostración en Vanilla JavaScript.

# Instrucciones de uso

## Backend

### Requisitos
a. Para que funcione el backend se necesita que esté activa la base de datos de MongoDB

b. Una vez descargada es necesario ejecutar por consola el comando 
```npm install```
dentro del directorio backend

### Inicialización
Para iniciar el servidor se necesita ejecutar por consola el comando ```npm start``` con la base de datos operativa.
De caso contrario, el servidor no podrá funcionar correctamente.

### Ejecución
El Backend tiene dos rutas principales que ejecutan las dos acciones esenciales del servidor

a. Consultar ubicaciones
    ruta: ```localhost:3000/ubicacion```
    Estructura: JSON similar al archivo mapa_datos.json
    Función: 
        - Permite extraer la información importante de la base de datos al front end

b. Consultar 1 usuario
    ruta: localhost:3000/ubicacion/(id)
    Parámetros:
        id: identificador de la ubicación seleccionada
    Estructura: JSON que contiene la latitud, la longitud, el nombre de usuario y el id del usuario que se solicita
    Función: 
        - Permite mostrar en el mapa su ubicación por su latitud y longitud.
        - Se incluye el nombre de usuario para mostrarlo al hacer click en el marcador




## Frontend
### Requisitos
No existen pre requisitos, solo que el servidor esté funcionando

### Ejecución
Al ejecutar el sitio, el usuario encontrará el mapa y el combobox con un valor inicial.

Puede seleccionar un usuario de la lista desplegable, y al existir un cambio el mapa reubicará el marcador
en la ubicación del usuario seleccionado.

Se puede hacer click en el marcador para ver más información del usuario.
