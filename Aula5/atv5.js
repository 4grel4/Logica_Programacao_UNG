var idade = Number(prompt("Qual é a sua idade? "));
var sexo = prompt("Qual é o seu sexo? (M/F) ");

if (idade >= 21 && sexo == "F") {
    alert("Você tem acesso à balada com desconto VIP!");
} else {
    alert("Você não tem acesso à balada com desconto VIP.");
}