"use strict"; // Seleccionar el Modo de JavaScript estricto
let newWindow; // Variable que hará referencia a la ventana nueva que vamos a crear
let myTimeout; // Tiempo máximo para dibujar la ventana nueva
/**
 * Función del primer apartado de la Tarea
 */
function firstFunction() {
    // Comprobamos si la nueva ventana está creada no no
    if (newWindow == null) {
        // Inicialmente definimos los parámetros de la nueva ventana.
        const url = "";
        const nameWindow = "";
        /* Ojo. el parámetro resizable únicamente se ejecuta si la App la abrimos en Internet Explorer. El motivo es que
        nos nuevos navegadores no lo permiten ya que de la otra forma impide la usabilidad de los usuarios */
        const options = "width=1000,height=1000,top=150,left=150,resizable=no";
        newWindow = window.open(url, nameWindow, options); // Abrimos la nueva ventana
        // Ahora, generamos el nuevo código que poseerá la nueva ventana. Para ello utilizamos write() o writeln()
        newWindow.document.writeln("<!DOCTYPE html>");
        newWindow.document.writeln('<html lang="es">');
        newWindow.document.writeln("<head>");
        newWindow.document.writeln('<meta charset="utf-8" />');
        newWindow.document.writeln('<meta name="viewport" content="width=device-width,initial-scale=1.0" />');
        newWindow.document.writeln('<meta name="application-name" content="Tarea para DWEC03" />');
        newWindow.document.writeln(
            '<meta name="description" content="Tarea de la Unidad 3 de Desarrollo Web en Entorno Cliente (Modelo de Objetos Predefinidos en JavaScript)" />'
        );
        newWindow.document.writeln('<meta name="keywords" content="html,css,javascript" />');
        newWindow.document.writeln('<meta name="author" content="Donato Ramos Martínez" />');
        newWindow.document.writeln("<title>DWEC03 - Ventana Nueva</title>");
        newWindow.document.writeln("<script type='text/javascript' defer>window.blur();window.opener.focus();</script>");
        newWindow.document.writeln("</head>");
        newWindow.document.writeln("<body>");
        newWindow.document.writeln("<header>");
        newWindow.document.writeln("<h3>Ejemplo de Ventana Nueva</h3>");
        newWindow.document.writeln("</header>");
        newWindow.document.writeln("<main>");
        newWindow.document.writeln("<section>");
        newWindow.document.writeln("<ul>");
        newWindow.document.writeln("<li>URL Completa: " + newWindow.document.URL + "</li>"); // Mostramos la URL Completa
        newWindow.document.writeln("<li>Protocolo utilizado: " + newWindow.location.protocol + "</li>"); // Mostramos el protocolo
        newWindow.document.writeln("<li>Nombre en código del navegador: " + newWindow.navigator.appCodeName + "</li>"); // Mostramos el nombre del Navegador
        let javaAvailability = newWindow.navigator.javaEnabled()
            ? "Java SI disponible en esta ventana"
            : "Java NO disponible en esta ventana"; // Usamos el operador ternario para comprobar si está habilitada JVM
        newWindow.document.writeln("<li>¿Java está disponible? : " + javaAvailability + "</li>"); // Mostramos si Java está disponible
        newWindow.document.writeln("<li>iFrame: </li>");
        newWindow.document.writeln("</ul>");
        newWindow.document.writeln("<div id='miIFrame'>");
        let newIFrame = newWindow.document.createElement("iframe"); // Creamos un nuevo elemento llamado nuevoIFrame
        const attrTitleNewIFrame = newWindow.document.createAttribute("title"); // Creamos un nuevo Nodo de Atributo llamado attrTitleNuevoIFrame
        attrTitleNewIFrame.value = "google"; // Insertamos el título dentro de attrTitleNuevoIFrame
        newIFrame.setAttributeNode(attrTitleNewIFrame); // Insertamos el attrTitleNuevoIFrame dentro del elemento nuevoIFrame
        const attrSrcNewIFrame = newWindow.document.createAttribute("src"); // Creamos un nuevo Nodo de Atributo llamado attrScrNuevoIFrame
        attrSrcNewIFrame.value = "https://www.google.es"; // Insertamos le URL dentro de attrScrNuevoIFrame
        newIFrame.setAttributeNode(attrSrcNewIFrame); // Insertamos el attrScrNuevoIFrame dentro del elemento nuevoIFrame
        const attrWidthNewIFrame = newWindow.document.createAttribute("width"); // Creamos un nuevo Nodo de Atributo llamado attrWidthNuevoIFrame
        attrWidthNewIFrame.value = 800; // Insertamos el ancho que poseerá el attrWidthNuevoIFrame
        newIFrame.setAttributeNode(attrWidthNewIFrame); // Insertamos el attrWidthNuevoIFrame dentro del elemento nuevoIFrame
        const attrHeightNewIFrame = newWindow.document.createAttribute("height"); // Creamos un nuevo Nodo de Atributo llamado attrHeightNuevoIFrame
        attrHeightNewIFrame.value = 600; // Insertamos el ancho que poseerá el attrHeightNuevoIFrame
        newIFrame.setAttributeNode(attrHeightNewIFrame); // Insertamos el attrHeightNuevoIFrame dentro del elemento nuevoIFrame
        newWindow.document.getElementById("miIFrame").appendChild(newIFrame); // Insertamos dentro de DOM, como hijo del elemento con ID miIFrame el nuevoIFrame
        newWindow.document.writeln("</div>");
        newWindow.document.writeln("</section>");
        newWindow.document.writeln("</body>");
        /* Podemos observar que, si intentamos cargar dentro del IFrame la página principal de Google, no lo conseguimos. Esto es debido a que algunas páginas de
        servidores bloquean esta función, para de esta forma, impedir agujeros de seguridad */
        newWindow.blur();
        window.focus();
    }
}
const nodeIDResultado = window.document.getElementById("idResultado"); // Almacenamos el Nodo del DOM correspondiente al id especificado
let dataToBeChecked; // Variable que usaremos como comodín para controlar el flujo de datos
let arrayNameSurname; // Se almacenará el nombre y apellidos en el formato correcto.
firstFunction(); // Se ejecuta la función de la primera parte de la tarea
window.focus();
myTimeout = window.setTimeout(mainRoutine, 1000);
function mainRoutine() {
    do {
        dataToBeChecked = true;
        const expRegular1 = /\s+/; // Expresión regular con la que eliminaremos los espacios en blanco sobrantes
        const expRegular2 = /\d+/g; // Expresión regular con la que nos cercioraremos que tanto el nombre como los apellidos no tienen caracteres numéricos ni símbolos
        // Se requiere mediante una ventana emergente el nombre y los apellidos, si se eliminar los espacios tanto delante como detrás
        let nameSurname = prompt("introduzca su nombre y apellidos");
        if (nameSurname != undefined) {
            nameSurname = nameSurname.trim();
            // Comprobamos que no hay caracteres numéricos
            if (nameSurname.search(expRegular2) == -1) {
                // Comprobamos que, al menos hay escritos 3 nombres (nombre, primer apellido, segundo apellido) o podría haber más para nombres compuestos
                arrayNameSurname = nameSurname.split(expRegular1);
                if (arrayNameSurname.length >= 3) {
                    dataToBeChecked = false;
                } else {
                    alert("Datos introducidos no válidos: O falta el nombre o alguno de los apellidos");
                }
            } else {
                alert("No existen nombres o apellidos con números");
            }
        } else {
            alert("No ha introducido ningún dato");
        }
    } while (dataToBeChecked);
    dataToBeChecked = true;
    let dateToBeChecked = true; //Variable que usaremos como comodín para controlar el flujo de datos
    let day; // Día de nacimiento
    let month; // Mes de nacimiento
    let year; // Año de nacimiento
    let dateOfBirthUSA; // Fecha en formato anglosajón
    // Pedimos las fechas y las vamos comprobando
    do {
        do {
            day = Number(prompt("introduzca DIA de nacimiento"));
            if (!isNaN(day)) {
                day = parseInt(day);
                dataToBeChecked = false;
            } else {
                alert("El valor insertado no es un valor numérico");
            }
        } while (dataToBeChecked);
        dataToBeChecked = true;
        do {
            month = Number(prompt("introduzca MES de nacimiento"));
            if (!isNaN(month)) {
                month = parseInt(month);
                dataToBeChecked = false;
            } else {
                alert("El valor insertado no es un valor numérico");
            }
        } while (dataToBeChecked);
        dataToBeChecked = true;
        do {
            year = Number(prompt("introduzca AÑO de nacimiento"));
            if (!isNaN(year)) {
                year = parseInt(year);
                dataToBeChecked = false;
            } else {
                alert("El valor insertado no es un valor numérico");
            }
        } while (dataToBeChecked);
        //dateOfBirthUSA = `${year}-${month}-${day}`;
        // Si nos da un valor numérico, la fecha es correcta. Sin embargo, si nos da NaN la fecha no es válida
        dataToBeChecked = true;
        dateOfBirthUSA = validateDate(day, month, year);
        if (dateOfBirthUSA != -1) {
            dateToBeChecked = false;
        } else {
            alert("Fecha introducida incorrecta");
        }
    } while (dateToBeChecked);
    // Escribimos el nombre completo en el formato correcto
    let fullName = "";
    for (let lugar = 0; lugar < arrayNameSurname.length; lugar++) {
        if (lugar != 0) {
            fullName += " ";
        }
        fullName += arrayNameSurname[lugar];
    }
    // Utilizamos la variable resultado para la salid, que la daremos en una lista no ordenada
    let result = "<ul>";
    result += `<li>Buenos días ${arrayNameSurname[0]}</li>`; // Muestra el primer nombre
    result += `<li>Tu nombre tiene ${fullName.length} caracteres, incluidos espacios</li>`;
    result += `<li>La primera letra A de tu nombre está en la posición: ${fullName.toLowerCase().indexOf("a") + 1}</li>`;
    result += `<li>La última letra A de tu nombre está en la posición: ${fullName.toLowerCase().lastIndexOf("a") + 1}</li>`;
    result += `<li>Tu nombre menos las 3 primeras letras es: ${fullName.substring(3)}</li>`;
    result += `<li>Tu nombre todo en mayúsculas es: ${fullName.toUpperCase()}</li>`;
    // Comprobamos cuál es la edad actual
    let objectDateOfBirth = new Date(dateOfBirthUSA);
    let objectDateNow = new Date();
    let differenceInYears = objectDateNow.getFullYear() - objectDateOfBirth.getFullYear();
    let differenceInMonths = objectDateNow.getMonth() - objectDateOfBirth.getMonth();
    if (differenceInMonths < 0 || (differenceInMonths == 0 && objectDateNow.getDate() < objectDateOfBirth.getDate())) {
        differenceInYears--;
    }
    let age = differenceInYears;
    // Array que usaremos para indicar el día de semana
    const daysOfTheWeek = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    result += `<li>Tu edad es: ${age} años</li>`;
    result += `<li>Naciste un feliz ${
        daysOfTheWeek[objectDateOfBirth.getDay() - 1]
    } del año ${objectDateOfBirth.getFullYear()}</li>`;
    result += `<li>El coseno de 180 grados es ${Math.cos(180)}</li>`;
    result += `<li>El mayor número de (34,67,23,75,35,19) es ${Math.max(34, 67, 23, 75, 35, 19)}</li>`;
    result += `<li>Ejemplo de número al azar: ${Math.round(Math.random() * (10 - 1) + 1)}</li>`;
    result += "</ul>";
    // Se muestra el resultado en el section con el id='idResultado'
    nodeIDResultado.innerHTML = result;
}
