function principal(){
    var fatorial = document.getElementById("fatorial").value;
    var resultado = calcula(fatorial);
    document.getElementById("r8").innerHTML = "Fatorial de " + fatorial + ": " + resultado
}
function calcula(pFatorial){
    var n=1
    for(var i=1;i<=pFatorial;i++){
        n = n*i
    }
    return n
}