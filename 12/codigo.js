function validarFecha(fecha) {
    let pattern = /^(0?[1-9]|[12][1-9]|3[01])\/(0?[1-9]|1[0-2])\/([12][0-9])\d(2)$/;
    console.log(pattern.test("Nací el " + fecha + " en Donostia."));
    return ;
}
let fecha ="05/04/1982";
validarFecha(fecha);