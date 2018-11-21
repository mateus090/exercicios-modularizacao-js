function principal(){
    var x = [];
    for(var i=0;i<20;i++){
        x.push(prompt("Digite um número"))
    }
    var resultado = calcula(x);
    document.getElementById("r16").innerHTML = "Soma do vetor: " + resultado;
}
function calcula(pX){
    var soma = 0
    for(i=0;i<20;i++){
        soma += Number(pX[i])
    }
    return soma
}