function calc(){
  
    var temp = document.getElementById("temperatura");
    var celcius = temp.value;
    
    var farenheit = celcius * 33.8;
    var kelvin = celcius * 274.15;
  
        far=farenheit.toFixed(2);
        kel=kelvin.toFixed(2);
  
    var exfarenheit = document.getElementById("farenheit");
    var txtf = "A Temperatura em Farenheit é de : " +far;
    var exkelvin = document.getElementById("kelvin");
    var txtk = "A Temperatura em Kelvin é de : " +kel;
    
    exfarenheit.innerHTML = txtf;
    exkelvin.innerHTML = txtk;
}