function mostrarTarjeta() {
    if (tarjeta2.style.display === "block") {
        tarjeta.style.display === "none"
        document.getElementById("tarjeta2").style.display = "none";
        document.getElementById("tarjeta3").style.display = "none";

    }else{
    if (tarjeta.style.display === "none") {
        document.getElementById("tarjeta3").style.display = "none";

        document.getElementById("tarjeta2").style.display = "none";
        tarjeta.style.display = "block";
    } else {
        tarjeta.style.display = "none";
    }
}
}
    function mostrarTarjetaNueva() {
        document.getElementById("tarjeta").style.display = "none";
        document.getElementById("tarjeta3").style.display = "none";

        document.getElementById("tarjeta2").style.display = "block";
    }
    

    function mostrarTarjeta3() {
        document.getElementById("tarjeta").style.display = "none";
        document.getElementById("tarjeta2").style.display = "none";
        document.getElementById("tarjeta3").style.display = "block";
    }
    