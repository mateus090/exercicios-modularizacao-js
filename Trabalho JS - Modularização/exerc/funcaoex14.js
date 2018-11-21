function principal(){
    var x = [];
    var a = [];
    var b = [];
    var saidaP = ""; var saidaI = "";
    for(var i=0;i<30;i++){
        x.push(prompt("Digite um número"))
    }
    criaVetores(x,a,b);
    for(var i=0;i<a.length;i++){
        saidaP += a[i] + ",";  
    }
    for(var i=0;i<b.length;i++){
        saidaI += b[i] + ",";
    }
    document.getElementById("r14").innerHTML = "Vetor par: " + saidaP.slice(0,-1) + "<br><br>" + "Vetor ímpar: " + saidaI.slice(0,-1);
}
function criaVetores(pX, pA, pB){
    for(i=0;i<30;i++){
        if(pX[i] % 2 == 0){
            pA.push(pX[i])
        }
        else{
            pB.push(pX[i])
        }
    }
}