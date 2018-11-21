function principal(){
    var c1 = document.getElementById("c1").value;
    var c2 = document.getElementById("c2").value;
    var resultado = compara(c1,c2);
    document.getElementById("aviso").innerHTML = resultado;
}
function compara(pc1,pc2){
    if (pc1 == pc2){
        return "São iguais";
    }
    else{
        var maiorLength = (pc1.length > pc2.length) ? pc1.length : pc2.length;
        for(var i=0;i<maiorLength;i++){
            if(pc1[i] != pc2[i]){
                return "São diferentes na posição " + i;
            }
        }
    }
}
