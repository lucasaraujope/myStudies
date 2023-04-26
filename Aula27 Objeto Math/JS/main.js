//Arredondando número

let num1 = 9.54578

//arredondando número para baixo
let num2 = Math.floor(num1);

//arredondando número para cima
let num3 = Math.ceil(num1);

//arredondando automático
let num4 = Math.round(num1);

//Selecionando o menor número da lista de números
console.log(Math.min(1,2,3,4,5,6,7,8,9,10));

//Selecionando o maior número da lista de números
console.log(Math.max(1,2,3,4,5,6,7,8,9,10));

//Gerando um número aleatório
console.log(Math.random()); 

//Gerando um número aleatório emtre 5 e 10
const aleatorio = Math.round(Math.random() * (10 - 5) + 5);
console.log(aleatorio);

//valor de PI
console.log(Math.PI);

//potenciação
console.log(Math.pow(2, 10));
console.log(2 ** 10);

//pegando a raiz quadrada de um número
let num7 = 16;
console.log(num7 ** 0.5);
