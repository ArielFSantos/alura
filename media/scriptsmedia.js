function calc() {
    var name = document.getElementById("nome")
    var realName = name.value;

    var valor1 = document.getElementById("notaum");
    var pUm = valor1.value;
    var primeiraNota = parseFloat(pUm);

    var valor2 = document.getElementById("notadois");
    var pDois = valor2.value;
    var segundaNota = parseFloat(pDois);


    var valor3 = document.getElementById("notadois");
    var pTres = valor3.value;
    var terceiraNota = parseFloat(pTres);

    var valor4 = document.getElementById("notadois");
    var pQuatro = valor4.value;
    var quartaNota = parseFloat(pQuatro);


    var media = (primeiraNota + segundaNota + terceiraNota + quartaNota)/ 4;

   

    if (media >= 6) {
      
      document.getElementById("result").innerHTML = "Ola "+realName+", Sua Media é :"+media+" Voce Foi Aprovado";
      document.getElementById("result").style.backgroundColor = "green";
    } else {
      document.getElementById("result").innerHTML = "Ola "+realName+", Sua Media é :"+media+" Voce Foi Reprovado";
      document.getElementById("result").style.backgroundColor = "red";
      
    }
  }