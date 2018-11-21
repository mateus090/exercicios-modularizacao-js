function principal(){
    var h = Number(document.getElementById("h").value);
    var m = Number(document.getElementById("m").value);
    var s = Number(document.getElementById("s").value);
    var resultado = calcula(h, m, s);
    document.getElementById("aviso").innerHTML = resultado + " segundos.";
}
function calcula(horas, minutos, segundos){
    var total = 0;
    horas = horas * 3600
    minutos = minutos * 60
    total = horas + minutos + segundos;
    return total
}