var turmas = Number(prompt("Digite a quantidade de turmas:"));
var alunosTotal = 0;

for(var i = 1; i <= turmas; i++){
  var alunos = Number(prompt("Digite a quantidade de alunos da turma " + i + ":"));
  
  if(alunos > 40){
    alert("A turma não pode ter mais de 40 alunos. Digite novamente a quantidade de alunos da turma " + i + ":");
    alunos = Number(prompt("Digite a quantidade de alunos da turma " + i + ":"));
  }
  
  alunosTotal += alunos;
}

var mediaAlunosPorTurma = alunosTotal / turmas;

alert("A média de alunos por turma é: " + mediaAlunosPorTurma.parseFloat(2));