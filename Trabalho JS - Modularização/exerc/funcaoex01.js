function principal(){
    var numero = Number(document.getElementById("numero").value);
    var resultado = soma(numero);
    document.getElementById("aviso").innerHTML = resultado;
}
function soma(pnumero){
    var i; var total = 0;
    for(i=1;i<=pnumero;i++){
        total = total + i;
    }
    return total;
}