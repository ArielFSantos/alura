function clicar() {

    var idade = document.getElementById("idade");
    var vIdade = idade.value;
    var idadeFloat = parseFloat(vIdade);

    var res = document.getElementById("resultado");
    
    console.log(idadeFloat)

    if(idadeFloat >=18){

    document.getElementById("resultado").innerHTML = "Voce é Maior";
    document.getElementById("resultado").style.background = "green";

    }
    else{
    document.getElementById("resultado").innerHTML = "Voce é Menor";
    document.getElementById("resultado").style.background = "red";

    }
}