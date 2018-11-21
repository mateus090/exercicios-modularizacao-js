var vet = [];
function principal(){
    var nlength = document.getElementById("nlength").value;
    for(var i=0;i<nlength;i++){
        vet.push(prompt("Digite um número"))
    }
    var resultado = calcula(vet,nlength)
    document.getElementById("r7").innerHTML = "Média aritmética: " + resultado
}
function calcula(pMedia,plength){
    var soma = 0
    for(var i=0;i<plength;i++){
        soma += Number(pMedia[i])
    }
    return soma/plength
}