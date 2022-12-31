"use strict"; // Seleccionar el Modo de JavaScript estricto
let nuevaVentana; // Variable que hará referencia a la ventana nueva que vamos a crear
/**
 * Función del primer apartado de la Tarea
 */
function primeraFuncion() {
  // Comprobamos si la nueva ventana está creada no no
  if (nuevaVentana == null) {
    // Inicialmente definimos los parámetros de la nueva ventana.
    const url = "";
    const nombreVentana = "";
    /* Ojo. el parámetro resizable únicamente se ejecuta si la App la abrimos en Internet Explorer. El motivo es que
    nos nuevos navegadores no lo permiten ya que de la otra forma impide la usabilidad de los usuarios */
    const opciones = "width=1000,height=1000,top=150,left=150,resizable=no";
    nuevaVentana = window.open(url, nombreVentana, opciones); // Abrimos la nueva ventana
    // Ahora, generamos el nuevo código que poseerá la nueva ventana. Para ello utilizamos write() o writeln()
    nuevaVentana.document.writeln("<!DOCTYPE html>");
    nuevaVentana.document.writeln('<html lang="es">');
    nuevaVentana.document.writeln("<head>");
    nuevaVentana.document.writeln('<meta charset="utf-8" />');
    nuevaVentana.document.writeln('<meta name="viewport" content="width=device-width,initial-scale=1.0" />');
    nuevaVentana.document.writeln('<meta name="application-name" content="Tarea para DWEC03" />');
    nuevaVentana.document.writeln(
      '<meta name="description" content="Tarea de la Unidad 3 de Desarrollo Web en Entorno Cliente (Modelo de Objetos Predefinidos en JavaScript)" />'
    );
    nuevaVentana.document.writeln('<meta name="keywords" content="html,css,javascript" />');
    nuevaVentana.document.writeln('<meta name="author" content="Donato Ramos Martínez" />');
    nuevaVentana.document.writeln("<title>DWEC03 - Ventana Nueva</title>");
    nuevaVentana.document.writeln("</head>");
    nuevaVentana.document.writeln("<body>");
    nuevaVentana.document.writeln("<header>");
    nuevaVentana.document.writeln("<h3>Ejemplo de Ventana Nueva</h3>");
    nuevaVentana.document.writeln("</header>");
    nuevaVentana.document.writeln("<main>");
    nuevaVentana.document.writeln("<section>");
    nuevaVentana.document.writeln("<ul>");
    nuevaVentana.document.writeln("<li>URL Completa: " + nuevaVentana.document.URL + "</li>"); // Mostramos la URL Completa
    nuevaVentana.document.writeln("<li>Protocolo utilizado: " + nuevaVentana.location.protocol + "</li>"); // Mostramos el protocolo
    nuevaVentana.document.writeln("<li>Nombre en código del navegador: " + nuevaVentana.navigator.appCodeName + "</li>"); // Mostramos el nombre del Navegador
    let disponibilidadJava = nuevaVentana.navigator.javaEnabled() ? "Sí" : "No"; // Usamos el operador ternario para comprobar si está habilitada JVM
    nuevaVentana.document.writeln("<li>¿Java está disponible? : " + disponibilidadJava + "</li>"); // Mostramos si Java está disponible
    nuevaVentana.document.writeln("<li>iFrame: </li>");
    nuevaVentana.document.writeln("<div id='miIFrame'>");
    let nuevoIFrame = nuevaVentana.document.createElement("iframe"); // Creamos un nuevo elemento llamado nuevoIFrame
    const attrSrcNuevoIFrame = nuevaVentana.document.createAttribute("src"); // Creamos un nuevo Nodo de Atributo llamado attrScrNuevoIFrame
    attrSrcNuevoIFrame.value = "https://www.google.es"; // Insertamos le URL dentro de attrScrNuevoIFrame
    nuevoIFrame.setAttributeNode(attrSrcNuevoIFrame); // Insertamos el attrScrNuevoIFrame dentro del elemento nuevoIFrame
    const attrWidthNuevoIFrame = nuevaVentana.document.createAttribute("width"); // Creamos un nuevo Nodo de Atributo llamado attrWidthNuevoIFrame
    attrWidthNuevoIFrame.value = 800; // Insertamos el ancho que poseerá el attrWidthNuevoIFrame
    nuevoIFrame.setAttributeNode(attrWidthNuevoIFrame); // Insertamos el attrWidthNuevoIFrame dentro del elemento nuevoIFrame
    const attrHeightNuevoIFrame = nuevaVentana.document.createAttribute("height"); // Creamos un nuevo Nodo de Atributo llamado attrHeightNuevoIFrame
    attrHeightNuevoIFrame.value = 600; // Insertamos el ancho que poseerá el attrHeightNuevoIFrame
    nuevoIFrame.setAttributeNode(attrHeightNuevoIFrame); // Insertamos el attrHeightNuevoIFrame dentro del elemento nuevoIFrame
    nuevaVentana.document.getElementById("miIFrame").appendChild(nuevoIFrame); // Insertamos dentro de DOM, como hijo del elemento con ID miIFrame el nuevoIFrame
    nuevaVentana.document.writeln("</div>");
    nuevaVentana.document.writeln("</ul>");
    nuevaVentana.document.writeln("</body>");
    nuevaVentana.document.writeln("</html>");
    /* Podemos observar que, si intentamos cargar dentro del IFrame la página principal de Google, no lo conseguimos. Esto es debido a que algunas páginas de
    servidores bloquean esta función, para de esta forma, impedir agujeros de seguridad */
  }
}
primeraFuncion(); // Se ejecuta la función de la primera parte de la tarea
const cajaRespuesta = window.document.getElementById("idResultado"); // Almacenamos el Nodo del DOM correspondiente al id especificado
let datoOk; // Variable que usaremos como comodín para controlar el flujo de datos
let arrayNombreApellidos; // Se almacenará el nombre y apellidos en el formato correcto.
do {
  datoOk = true;
  const expRegular1 = /\s+/; // Expresión regular con la que eliminaremos los espacios en blanco sobrantes
  const expRegular2 = /\d+/g; // Expresión regular con la que nos cercioraremos que tanto el nombre como los apellidos no tienen caracteres numéricos
  // Se requiere mediante una ventana emergente el nombre y los apellidos, si se eliminar los espacios tanto delante como detrás
  let nombreYApellidos = prompt("introduzca su nombre y apellidos").trim();
  // Comprobamos que no hay caracteres numéricos
  if (nombreYApellidos.search(expRegular2) == -1) {
    // Comprobamos que, al menos hay escritos 3 nombres (nombre, primer apellido, segundo apellido) o podría haber más para nombres compuestos
    arrayNombreApellidos = nombreYApellidos.split(expRegular1);
    if (arrayNombreApellidos.length >= 3) {
      datoOk = false;
    } else {
      alert("Datos introducidos no válidos: O falta el nombre o alguno de los apellidos");
    }
  } else {
    alert("No existen nombres o apellidos con números");
  }
} while (datoOk);
datoOk = true;
let fechaOk = true; //Variable que usaremos como comodín para controlar el flujo de datos
let dia; // Día de nacimiento
let mes; // Mes de nacimiento
let anho; // Año de nacimiento
let fechaNacimientoUSA; // Fecha en formato anglosajón
// Pedimos las fechas y las vamos comprobando
do {
  do {
    dia = Number(prompt("introduzca DIA de nacimiento"));
    if (!isNaN(dia)) {
      dia = parseInt(dia);
      datoOk = false;
    } else {
      alert("El valor insertado no es un valor numérico");
    }
  } while (datoOk);
  datoOk = true;
  do {
    mes = Number(prompt("introduzca MES de nacimiento"));
    if (!isNaN(mes)) {
      mes = parseInt(mes);
      datoOk = false;
    } else {
      alert("El valor insertado no es un valor numérico");
    }
  } while (datoOk);
  datoOk = true;
  do {
    anho = Number(prompt("introduzca AÑO de nacimiento"));
    if (!isNaN(anho)) {
      anho = parseInt(anho);
      datoOk = false;
    } else {
      alert("El valor insertado no es un valor numérico");
    }
  } while (datoOk);
  fechaNacimientoUSA = `${anho}-${mes}-${dia}`;
  // Si nos da un valor numérico, la fecha es correcta. Sin embargo, si nos da NaN la fecha no es válida
  if (!isNaN(Date.parse(fechaNacimientoUSA))) {
    fechaOk = false;
  } else {
    alert("Fecha introducida incorrecta");
  }
} while (fechaOk);
// Escribimos el nombre completo en el formato correcto
let nombreCompleto = "";
for (let lugar = 0; lugar < arrayNombreApellidos.length; lugar++) {
  if (lugar != 0) {
    nombreCompleto += " ";
  }
  nombreCompleto += arrayNombreApellidos[lugar];
}
// Utilizamos la variable resultado para la salid, que la daremos en una lista no ordenada
let resultado = "<ul>";
resultado += `<li>Buenos días ${arrayNombreApellidos[0]}</li>`; // Muestra el primer nombre
resultado += `<li>Tu nombre tiene ${nombreCompleto.length} caracteres, incluidos espacios</li>`;
resultado += `<li>La primera letra A de tu nombre está en la posición: ${nombreCompleto.toLowerCase().indexOf("a")}</li>`;
resultado += `<li>La última letra A de tu nombre está en la posición: ${nombreCompleto.toLowerCase().lastIndexOf("a")}</li>`;
resultado += `<li>Tu nombre menos las 3 primeras letras es: ${nombreCompleto.substring(3)}</li>`;
resultado += `<li>Tu nombre todo en mayúsculas es: ${nombreCompleto.toUpperCase()}</li>`;
// Comprobamos cuál es la edad actual
let objetoFechaNacimiento = new Date(fechaNacimientoUSA);
let objetoFechaHoy = new Date();
let diferenciaAnhos = objetoFechaHoy.getFullYear() - objetoFechaNacimiento.getFullYear();
let diferenciaMeses = objetoFechaHoy.getMonth() - objetoFechaNacimiento.getMonth();
if (diferenciaMeses < 0 || (diferenciaMeses == 0 && objetoFechaHoy.getDate() < objetoFechaNacimiento.getDate())) {
  diferenciaAnhos--;
}
let edad = diferenciaAnhos;
// Array que usaremos para indicar el día de semana
const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
resultado += `<li>Tu edad es: ${edad} años</li>`;
resultado += `<li>Naciste un feliz ${
  diasSemana[objetoFechaNacimiento.getDay()]
} del año ${objetoFechaNacimiento.getFullYear()}</li>`;
resultado += `<li>El coseno de 180 grados es ${Math.cos(180)}</li>`;
resultado += `<li>El mayor número de (34,67,23,75,35,19) es ${Math.max(34, 67, 23, 75, 35, 19)}</li>`;
resultado += `<li>Ejemplo de número al azar: ${Math.round(Math.random() * (10 - 1) + 1)}</li>`;
resultado += "</ul>";
// Se muestra el resultado en el section con el id='idResultado'
cajaRespuesta.innerHTML = resultado;
