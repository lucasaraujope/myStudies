//O JS segue o padrão IEEE 754.2008 para fazer os cáculos

let num1 = 122.52525; // Number
let num2 = 2.5; //Number

//transformando um número em uma String 
console.log(num1.toString() + num2);//ele não faz a conta e sim a concatenação, por um tipo ser String e o outro ser Number

//mostrando a representação binária de um número, para fazer isso acrescentamos o número 2
console.log(num1.toString(2))

//Arredondando o número usando o toFixed, colocamos quantas casas decimais vai ter após a virgula dentro de parenteses
console.log(num1.toFixed(2))

//Para transformar um número em inteiro
console.log(Number.isInteger(num1));

//Para validar se um npumero é válido
let temp = num1 * 'Olá';
console.log(Number.isNaN(temp));

//resolvendo a imprecisão do JS para fazer cáculos
//devemos usar o toFixed junto com o parseFloat ou Number
num3 = 0.7;
num4 = 0.1;

//jeito errado
num3 += num4; //0.8
num3 += num4; //0.9
num3 += num4; //1.0
//os resultados deveriam ser esses más o que de fato será exibido será o número 0.999999 e para arrumar isso segue abaixo o jeito coreto

num3 = parseFloat(num3.toFixed(2));
console.log(num3);

//resolvendo o problema multiplicando por 100

num5 = 0.7;
num6 = 0.1;

num5 = ((num5 * 100) + (num6 * 100)) / 100; //0.8
num5 = ((num5 * 100) + (num6 * 100)) / 100; //0.9
num5 = ((num5 * 100) + (num6 * 100)) / 100; //1.0
console.log(num5);