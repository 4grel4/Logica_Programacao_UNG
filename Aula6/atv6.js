var pares = 0;
var impares = 0;

for(var i = 1; i <= 10; i++){
  var num = Number(prompt("Digite o " + i + "º número:"));
  if(num % 2 === 0){
    pares++;
  }else{
    impares++;
  }
}

alert("Quantidade de números pares: " + pares + "\n Quantidade de números ímpares: " + impares);