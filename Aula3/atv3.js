var n1 = Number(prompt("Digite o primeiro número:"));
var n2 = Number(prompt("Digite o segundo número:"));

if(n1 > n2){
  alert("O primeiro número é maior: " + n1);
}else if(n2 > n1){
  alert("O segundo número é maior: " + n2);
}else{
  alert("Os números são iguais.");
}