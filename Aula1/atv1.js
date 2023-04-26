var n1 = Number(prompt("Digite o primeiro número:"));
var n2 = Number(prompt("Digite o segundo número:"));
var n3 = Number(prompt("Digite o terceiro número:"));
var n4 = Number(prompt("Digite o quarto número:"));
var n5 = Number(prompt("Digite o quinto número:"));

var maiorNumero = n1;

if (n2 > maiorNumero) {
    maiorNumero = n2;
}

if (n3 > maiorNumero) {
    maiorNumero = n3;
}

if (n4 > maiorNumero) {
    maiorNumero = n4;
}

if (n5 > maiorNumero) {
    maiorNumero = n5;
}

alert("O maior número é: " + maiorNumero);