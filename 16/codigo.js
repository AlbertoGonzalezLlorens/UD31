window.setInterval(
    window.onload = function reloj(){
        var hora = document.getElementById("hora");
        var minutos = document.getElementById("minutos");
        var segundos = document.getElementById("segundos");

        if (new Date().getHours()==00){
            hora.innerHTML = "00";
        } else {
            hora.innerHTML = new Date().getHours();
        }
        

        if (new Date().getMinutes() < 10){
            if (new Date().getMinutes() == 00){
                minutos.innerHTML = "00";
            }
            minutos.innerHTML = "0"+ new Date().getMinutes();
        } else {
            minutos.innerHTML = new Date().getMinutes();
        }
        
        segundos.innerHTML = new Date().getSeconds();
    },1000
)