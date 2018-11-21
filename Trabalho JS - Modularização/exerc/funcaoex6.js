function principal(){
    var sexo = document.getElementById("sexo").value;
    var altura = document.getElementById("altura").value;
    var resultado = calcula(sexo,altura);
    document.getElementById("r6").innerHTML = "Peso ideal: " + resultado.toFixed(2)
}
function calcula(pSexo,pAltura){
    var peso = 0
    if(pSexo == "M"){
        peso = 72.7 * pAltura - 58;
    }
    else{
        peso = 62.1 * pAltura - 44.7;
    }
    return peso
}