var cds = Number(prompt("Digite a quantidade de CDs da coleção:"));
var totalGasto = 0;

for(var i = 1; i <= cds; i++){
  var valorCd = parseFloat(prompt("Digite o valor do CD " + i + ":")); // tentei com o Number, porém deu NaN T-T
  totalGasto += valorCd;
}

var mediaGasto = totalGasto / cds;

alert("Valor total investido: R$" + totalGasto.parseFloat(2) + "\n  Valor médio gasto em cada CD: R$" + mediaGasto.parseFloat(2));