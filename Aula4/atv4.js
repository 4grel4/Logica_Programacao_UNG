var idade1 = Number(prompt("Digite a primeira idade:"));
var idade2 = Number(prompt("Digite a segunda idade:"));
var idade3 = Number(prompt("Digite a terceira idade:"));

var maiorIdade = idade1;

if(idade2 > maiorIdade){
  maiorIdade = idade2;
}

if(idade3 > maiorIdade){
  maiorIdade = idade3;
}

alert("A maior idade é: " + maiorIdade);