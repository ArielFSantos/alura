var numeroSecreto = parseInt(Math.random() * 11);

function testar() {
     var resultado = document.getElementById("resultado");
     var chute = parseInt(document.getElementById("numero").value);
     

     if(chute == numeroSecreto){
         console.log("Acertou")
         document.getElementById("resultado").innerHTML="Acertou"
         document.getElementById("resultado").style.background="green";
     }
     else if(chute <0 || chute > 10){
        document.getElementById("resultado").innerHTML="Somente 0 a 10", document.getElementById("resultado").style.background="red";
     }
    else{
        document.getElementById("resultado").innerHTML="ERROOOU"
        document.getElementById("resultado").style.background="red";
    }

}