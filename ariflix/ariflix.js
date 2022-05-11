function clicar(){

    var filmes = document.getElementById("filme").value;
    if(filmes.endsWith(".jpg")){
        var listaFilme = "<img src=" + filmes + ">"
    var exibir = document.getElementById("listaFilmes")
    exibir.innerHTML = exibir.innerHTML + listaFilme;

    }
    else{
    console.error("Enedeço invalido")
    }
    document.getElementById("filme").value = ""

}  


1