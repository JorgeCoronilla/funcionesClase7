/*Una función que devuelva el número de 
cifras de un entero solicitado al usuario*/

function primera() {
    let esEntero = false, numero;
    do {
        numero = prompt("Introduce un número entero");
        if (parseInt(numero) !== "NaN" && Number.isInteger(+numero)) { esEntero = true }
        else {
            esEntero = false;
            alert("Eso no es un número entero colega")
        }
    } while (!esEntero);
    let numeroCifras = 0;
    do {
        numero = Math.floor(numero / 10);
        numeroCifras++;
    } while (numero != 0);
    return (numeroCifras);
}

/*Una función que muestre al usuario una secuencia de * 
(se debe construir la cadena de uno en uno), 
la cantidad de * será solicitada al usuario */

function muestra() {
    let asteriscosString;
    let asteriscos, esNumeroOK = false;

    do {
        asteriscos = prompt("¿Cuántos asteriscos quieres?");
        if (parseInt(asteriscos) !== "NaN" && Number.isInteger(+asteriscos)) { esNumeroOK = true }
        else {
            esNumeroOK = false;
            alert("Eso no es un número correcto colega")
        }
    } while (!esNumeroOK);

    for (let i = 0; i < asteriscos; i++) {
        //asteriscosString.push('*');
        asteriscosString = asteriscosString + '*';
    }
    alert(asteriscosString);
}

/*Una función que permita mostrar la secuencia 
(se debe construir la cadena de uno en uno):
 *+_*+_*+_*+_ */

var pregunta = "Cuántos *+_ quieres??";

function cadenaSignos(cantidad) {
    let esNumeroOK = false;
    if (parseInt(cantidad) !== "NaN" && Number.isInteger(+cantidad)) {
        esNumeroOK = true;
        let cadena = [];
        for (let i = 0; i < cantidad; i++) {
            cadena.push('*');
            cadena.push('+');
            cadena.push('-');
        }
        alert(cadena);
    }
    else {
        esNumeroOK = false;
        alert("Eso no es un número correcto colega");
    }
}



function cadenaSignos2(cantidad) {
    let esNumeroOK = false;
    if (parseInt(cantidad) !== "NaN" && Number.isInteger(+cantidad)) {
        esNumeroOK = true;
        let cadena;
        for (let i = 0; i < cantidad; i++) {
            cadena = cadena + '*';
            cadena = cadena + '+';
            cadena = cadena + '-';
        }
        alert(cadena);
    }
    else {
        esNumeroOK = false;
        alert("Eso no es un número correcto colega");
    }
}
/*Una función que permita mostrar un triángulo como el siguiente:
*
**
***
****
*****
*/

function triangulo() {
    let cadenaTriangulo = [];
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < i; j++) {
            cadenaTriangulo.push('*');
        }
        cadenaTriangulo.push("\n");
    }
    alert(cadenaTriangulo)
}


/* Una función que devuelva la diferencia en días 
entre dos fechas del mismo año (sólo tenemos en cuenta dia y mes) */

function diferenciaDias() {
    let month1, day1, month2, day2;
    let date1 = false, date2 = false;
    do {
        month1 = prompt("Introduce el mes (01-12) de la primera fecha");
        day1 = prompt("Introduce el día de la primera fecha");
        if (month1 < 13 && month1 > 0 && day1 < 32 && day1 > 0) {
            date1 = true;
            alert("La fecha 1 es correcta");
        } else {
            alert("La fecha 1 es incorrecta, vuelve a intentarlo");
        }
    } while (!date1);

    do {
        month2 = prompt("Introduce el mes (01-12) de la segunda fecha");
        day2 = prompt("Introduce el día de la segunda fecha");
        if (parseInt(month2) < 13 && parseInt(month2) > 0 && parseInt(day2) < 32 && parseInt(day2) > 0) {
            date2 = true;
            alert("La fecha 2 es correcta");
        } else {
            alert("La fecha 1 es incorrecta, vuelve a intentarlo");
        }
    } while (!date2);

    let dateComplete1 = new Date(month1 + "/" + day1 + "/2020");
    let dateComplete2 = new Date(month2 + "/" + day2 + "/2020");

    let diffTime = Math.abs(dateComplete2 - dateComplete1);
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    alert("La diferencia es de " + diffDays + " días");
}


/* https://stackoverflow.com/questions/3224834/get-difference-between-2-dates-in-javascript
const date1 = new Date('7/13/2010');
const date2 = new Date('12/15/2010');
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
console.log(diffTime + " milliseconds");
console.log(diffDays + " days");

https://www.freecodecamp.org/news/how-to-convert-a-string-to-a-number-in-javascript/#:~:text=ADVERTISEMENT-,How%20to%20convert%20a%20string%20to%20a%20number%20in%20JavaScript,base%20in%20a%20numeral%20system.

*/