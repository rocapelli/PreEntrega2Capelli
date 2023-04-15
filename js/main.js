/* declaración de funciones */

function registroCuenta() {
    nombreUsuario = prompt("El correo ingresado no se encuentra registrado. Por favor, ingrese su nombre.");
    usuarioNuevo = prompt("Ingrese su e-mail para poder registrarse.");
    usuario = usuarioNuevo.toUpperCase();
    contrasenaNueva = prompt("Ingrese su contraseña.");
    contrasena = contrasenaNueva;
    do {
        usuarioVerificacion = prompt("Ingrese su e-mail para acceder a su cuenta.");
        contrasenaverificacion = prompt("Ingrese su contraseña.");
    } while (!(usuarioVerificacion.toUpperCase() == usuario && contrasenaverificacion == contrasena));
    alert("¡Le damos la bienvenida a Cinema Paradiso!");
}

function seleccionCine() {
    let valorObtenido = eleccionCine.toUpperCase();
    while (!(cines.some((unCine) => unCine.id == valorObtenido))) {
        eleccionCine = prompt("No seleccionó ninguna opción. Vuelva a ingresar la opción del complejo al que desea ir: \n A. Belgrano \n B. Palermo \n C. Recoleta");
        valorObtenido = eleccionCine.toUpperCase();
    }
    if (cines.some((unCine) => unCine.id == valorObtenido)) {
        let indice = cines.map((unCine) => unCine.id).indexOf(valorObtenido);
        eleccionCine = cines[indice].nombre;
        return eleccionCine;
    }
}

function seleccionPelicula() {
    let valorObtenido = eleccionPelicula.toUpperCase();
    while (!(peliculas.some((unaPelicula) => unaPelicula.id == valorObtenido))) {
        eleccionPelicula = prompt("No seleccionó ninguna opción. Vuelva a ingresar la opción de la película que quiere ir a ver: \n A. El Padrino \n B. El Rey León \n C. Forrest Gump \n D. Jurassic Park \n E. La vida de bella \n F. Los siete pecados capitales \n G. Mi pobre angelito \n H. Quién quiere ser millonario? \n I. Rocky \n J. Volver al futuro");
        valorObtenido = eleccionPelicula.toUpperCase();
    }
    if (peliculas.some((unaPelicula) => unaPelicula.id == valorObtenido)) {
        let indice = peliculas.map((unaPelicula) => unaPelicula.id).indexOf(valorObtenido);
        eleccionPelicula = peliculas[indice].nombre;
        return eleccionPelicula;
    }
}

function seleccionFormato() {
    let valorObtenido = eleccionFormato.toUpperCase();
    while (!(formatos.some((unFormato) => unFormato.id == valorObtenido))) {
        eleccionFormato = prompt("No seleccionó ninguna opción. Vuelva a ingresar la opción del formato que prefiera: \n A. 2D \n B. 3D \n C. 4D");
        valorObtenido = eleccionFormato.toUpperCase();
    }
    if (formatos.some((unFormato) => unFormato.id == valorObtenido)) {
        let indice = formatos.map((unFormato) => unFormato.id).indexOf(valorObtenido);
        eleccionFormato = formatos[indice].nombre;
        return eleccionFormato;
    }
}

function seleccionIdioma() {
    let valorObtenido = eleccionIdioma.toUpperCase();
    while (!(idiomas.some((unIdioma) => unIdioma.id == valorObtenido))) {
        eleccionIdioma = prompt("No seleccionó ninguna opción. Vuelva a ingresar la opción para el idioma: \n A. Doblada \n B. Subtitulada");
        valorObtenido = eleccionIdioma.toUpperCase();
    }
    if (idiomas.some((unIdioma) => unIdioma.id == valorObtenido)) {
        let indice = idiomas.map((unIdioma) => unIdioma.id).indexOf(valorObtenido);
        eleccionIdioma = idiomas[indice].nombre;
        return eleccionIdioma;
    }
}

function seleccionDia() {
    let valorObtenido = eleccionDia.toUpperCase();
    while (!(dias.some((unDia) => unDia.id == valorObtenido))) {
        eleccionDia = prompt("No seleccionó ninguna opción. Vuelva a ingresar la opción del día que desea ir: \n A. LUN 06 de febrero \n B. MAR 07 de febrero \n C. MIE 08 de febrero \n D. JUE 09 de febrero \n E. VIE 10 de febrero \n F. SAB 11 de febrero \n G. DOM 12 de febrero");
        valorObtenido = eleccionDia.toUpperCase();
    }
    if (dias.some((unDia) => unDia.id == valorObtenido)) {
        let indice = dias.map((unDia) => unDia.id).indexOf(valorObtenido);
        eleccionDia = dias[indice].nombre;
        return eleccionDia;
    }
}

function seleccionHora() {
    let valorObtenido = eleccionHora.toUpperCase();
    while (!(horas.some((unaHora) => unaHora.id == valorObtenido))) {
        eleccionHora = prompt("No seleccionó ninguna opción. Vuelva a ingresar la opción de la hora que prefiere: \n A. 18 hs \n B. 20 hs \n C. 22 hs");
        valorObtenido = eleccionHora.toUpperCase();
    }
    if (horas.some((unaHora) => unaHora.id == valorObtenido)) {
        let indice = horas.map((unaHora) => unaHora.id).indexOf(valorObtenido);
        eleccionHora = horas[indice].nombre;
        return eleccionHora;
    }
}

function seleccionCantidad() {
    let valorObtenido = eleccionCantidad;
    let resultado = cantidades.find(entradas => entradas == valorObtenido);
    while (valorObtenido != resultado) {
        eleccionCantidad = prompt("No seleccionó ninguna opción. Vuelva a ingresar la cantidad de entradas que desea adquirir. Recuerde que puede comprar hasta 6 entradas.");
        valorObtenido = eleccionCantidad;
        resultado = cantidades.find(entradas => entradas == valorObtenido);
    }
    if (valorObtenido == resultado) {
        eleccionCantidad = valorObtenido;
        return eleccionCantidad;
    }
}

function seleccionMedioPago(){
    while (medioPago.toUpperCase() != "SI" && medioPago.toUpperCase() != "NO") {
        medioPago = prompt("La respuesta proporcionada no es válida. Para acceder al beneficio del 50% de descuento debe pagar con Banco Santander. Desea abonar por este medio? (SI / NO)");
    }
    if (medioPago.toUpperCase() == "SI") {
        medioPago = "Banco Santander";
        importe = eleccionCantidad * 1500 / 2
    }
    if (medioPago.toUpperCase() == "NO") {
        medioPago = "Sin promoción";
        importe = eleccionCantidad * 1500
    }
}

function agregarSugerencias() {
    do {
        let titulo = prompt("Ingrese el nombre de la película que deberíamos incluir.");
        const unaSugerencia = new Sugerencia(titulo);
        sugerencias.push(unaSugerencia);
        respuesta = prompt("Desea seguir agregando películas? SI / NO");
    } while (respuesta.toUpperCase() != "NO");
    alert("¡Muchas gracias por elegirnos!");
}



/* declaración de variables, objetos, arrays */

let usuario = "";
let contrasena;
let nombreUsuario;
let usuarioVerificacion;
let contrasenaverificacion;
let importe;

class Miembro {
    constructor (nombreUsuario, usuario, contrasena) {
        this.nombre = nombreUsuario;
        this.usuario = usuario;
        this.contrasena = contrasena;
    }
}

let cines = [
    {id: "A", nombre: "Belgrano",},
    {id: "B", nombre: "Palermo",},
    {id: "C", nombre: "Recoleta",}
];

let peliculas = [
    {id: "A", nombre: "El Padrino",},
    {id: "B", nombre: "El Rey León",},
    {id: "C", nombre: "Forrest Gump",},
    {id: "D", nombre: "Jurassic Park",},
    {id: "E", nombre: "La vida de bella",},
    {id: "F", nombre: "Los siete pecados capitales",},
    {id: "G", nombre: "Mi pobre angelito",},
    {id: "H", nombre: "Quién quiere ser millonario?",},
    {id: "I", nombre: "Rocky",},
    {id: "J", nombre: "Volver al futuro",}
];

let formatos = [
    {id: "A", nombre: "2D",},
    {id: "B", nombre: "3D",},
    {id: "C", nombre: "4D",}
];

let idiomas = [
    {id: "A", nombre: "Doblada",},
    {id: "B", nombre: "Subtitulada",}
];

let dias = [
    {id: "A", nombre: "LUN 06 de febrero",},
    {id: "B", nombre: "MAR 07 de febrero",},
    {id: "C", nombre: "MIE 08 de febrero",},
    {id: "D", nombre: "JUE 09 de febrero",},
    {id: "E", nombre: "VIE 10 de febrero",},
    {id: "F", nombre: "SAB 11 de febrero",},
    {id: "G", nombre: "DOM 12 de febrero",}
];

let horas = [
    {id: "A", nombre: "18 hs",},
    {id: "B", nombre: "20 hs",},
    {id: "C", nombre: "22 hs",}
];

let cantidades = [1, 2, 3, 4, 5, 6];

class Sugerencia {
    constructor(titulo) {
        this.titulo = titulo;
    }
}

let sugerencias = [];
let respuesta = "SI";



/* se ingresa a la cuenta del usuario o en caso de no tener una, se procese con el registro de la misma */

let usuarioNuevo = prompt("Ingrese su e-mail para acceder a su cuenta.");
let contrasenaNueva = prompt("Ingrese su contraseña.");

if (usuarioNuevo.toUpperCase() == usuario && contrasenaNueva == contrasena) {
    alert("¡Le damos la bienvenida a Cinema Paradiso!");
}

if (usuarioNuevo.toUpperCase() == usuario && contrasenaNueva != contrasena) {
    while (contrasenaNueva != contrasena) {
        contrasenaNueva = prompt("La contraseña no es correcta. Vuelva a ingresarla.");
    }
    alert("¡Le damos la bienvenida a Cinema Paradiso!");
}

if (usuarioNuevo.toUpperCase() != usuario) {
    registroCuenta();
}

const miembro1 = new Miembro(nombreUsuario, usuario, contrasena);



/* se realiza la selección de las distintas variantes para la compra de entradas */

let eleccionCine = prompt("Ingrese la opción del complejo al que desea ir: \n A. Belgrano \n B. Palermo \n C. Recoleta");

seleccionCine();

let eleccionPelicula = prompt("Ingrese la opción de la película que quiere ir a ver: \n A. El Padrino \n B. El Rey León \n C. Forrest Gump \n D. Jurassic Park \n E. La vida de bella \n F. Los siete pecados capitales \n G. Mi pobre angelito \n H. Quién quiere ser millonario? \n I. Rocky \n J. Volver al futuro");

seleccionPelicula();

let eleccionFormato =prompt("Ingrese la opción del formato que prefiera: \n A. 2D \n B. 3D \n C. 4D");

seleccionFormato();

let eleccionIdioma = prompt("Ingrese la opción para el idioma: \n A. Doblada \n B. Subtitulada");

seleccionIdioma();

let eleccionDia = prompt("Ingrese la opción del día que desea ir: \n A. LUN 06 de febrero \n B. MAR 07 de febrero \n C. MIE 08 de febrero \n D. JUE 09 de febrero \n E. VIE 10 de febrero \n F. SAB 11 de febrero \n G. DOM 12 de febrero");

seleccionDia();

let eleccionHora = prompt("Ingrese la opción de la hora que prefiere: \n A. 18 hs \n B. 20 hs \n C. 22 hs");

seleccionHora();

let eleccionCantidad = prompt("Ingrese la cantidad de entradas que desea adquirir. Recuerde que puede comprar hasta 6 entradas.");

seleccionCantidad();

let medioPago = prompt("El precio de cada entrada es de $1500. Puede acceder al beneficio del 50% de descuento pagando con Banco Santander. Desea abonar por este medio? (SI / NO)");

seleccionMedioPago();



/* se muestra del detalle de la compra a través de un alert */

alert("DETALLE DE LA COMPRA: \nCine: " + eleccionCine + "\nPelícula: " + eleccionPelicula + "\nFormato: " + eleccionFormato + "\nIdioma: " + eleccionIdioma + "\nDía: " + eleccionDia + "\nHora: " + eleccionHora + "\nCantidad: " + eleccionCantidad + " entrada/s" + "\nPrecio total a pagar: $ " + importe);



/* se le pide al usuario la sugerencia de películas para poder agregar en nuestra cartelera */

alert("Antes que de irse... le pedimos que nos ayude a actualizar nuestra cartelera de clásicos.");

agregarSugerencias();



/* se muestra por consola el nuevo miembro y el array con las sugerencias*/

console.log(miembro1);
console.log(sugerencias);

