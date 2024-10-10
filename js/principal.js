import Cl_Fijo from "./Cl_Fijo.js";

let fijo1 = new Cl_Fijo("Carlos", 25, 100);
let fijo2 = new Cl_Fijo("Carolina", 40, 90);

let salida = document.getElementById("Salida");

let mostrarProfesorFijo = (fijo) => {
    return `
    Nombre del profesor fijo: ${fijo.nombre}
    <br>Monto del bono: ${fijo.bono}
    <br> Monto del sueldo: ${fijo.sueldo}
    <br> Ingreso total del profesor: ${fijo.montoSueldoT()}
    `
}

salida.innerHTML += `
    ${mostrarProfesorFijo(fijo1)}
    <br>
    <br>
    ${mostrarProfesorFijo(fijo2)}
`