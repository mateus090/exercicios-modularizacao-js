function principal(){
    var a = [];
    var resultado = "";
    for(var i=0;i<25;i++){
        a.push(prompt("Digite um número"))
    }
    calcula(a)
    for(var i=0;i<25;i++){
        resultado += a[i] + ","
    }
    document.getElementById("r17").innerHTML = "Vetor: " + resultado.slice(0,-1);
}
function calcula(pA){
    for(i=0;i<25;i++){
        if(pA[i] < 0){
            pA[i] = 0
        }
    }
}