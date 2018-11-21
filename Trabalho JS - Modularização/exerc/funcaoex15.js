function principal(){
    var x = [];
    for(var i=0;i<15;i++){
        x.push(prompt("Digite um número"))
    }
    var resultado = calcula(x);
    document.getElementById("r15").innerHTML = "Quantidade de pares: " + resultado
}
function calcula(pX){
    var cont = 0
    for(i=0;i<15;i++){
        if(pX[i] % 2 == 0){
            cont++
        }
    }
    return cont
}