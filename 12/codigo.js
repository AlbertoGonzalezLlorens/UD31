function validarFecha(fecha) {
    var pattern = /(0?[1-9]|[12][1-9]|3[01])\/(0?[1-9]|1[0-2])\/([12][0-9])\d(2)/;
    console.log(pattern.test("Nací el " + fecha + " en Donostia."));
}
validarFecha("05/04/1982");

function validarCorreo(correo){
    var pattern = /\w+([.-]?\w+)*@\w*(\.\w{2,3})/;
    console.log(pattern.test(correo));
}
validarCorreo("alberto-gonzalez.llorens@gmail.com");

function invertirNombre(nombre){
    console.log(nombre.replace(/([a-zA-Z]+) ([a-zA-Z]+)/,"$2, $1"));
}
invertirNombre("Will Smith");

function eliminarEtiquetas(etiqueta) {
    console.log(etiqueta.replace(/<[^>]?[\w\s]*>/g, ""));
}
eliminarEtiquetas("Se borra script <script></script>")