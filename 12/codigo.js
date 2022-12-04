function validarFecha(fecha) {
    let pattern = /([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])(\/|-)([0-2][0-9][0-9][0-9])/;
    console.log(pattern.test("Nací el " + fecha + " en Donostia."));
}
let fecha ="05/04/1982";
validarFecha(fecha);