/**
 * Aritméticos
 * + Adição / concatenação
 * ** Potenciação
 * % Resto da divisão
 */

/*
Precedência dos operadores
()
**
* / % 
+ -
*/

/*toda vez que precisarmos incrementar valor em uma variável 
usaremos Let ao invés de Const
*/
let contador = 1;

//operador de incremento e decremente(usamos o --)
//pré-fixado 
++contador;
console.log(contador);

//pós-fizado
contador++;
console.log(contador);

/*
A diferença entre eles é que o pré-fixado vai incrementar o valor
e apresentá-lo para nós e o pós fixado ele vai mostrar o valor e depois
incrementá-lo, dessa forma temos que char a variável de novo
*/

//contador de mais de um valor
const passo = 5;
let contador1 = 0;

contador1 = contador1 + passo;
console.log(contador1)
contador1 = contador1 + passo;
console.log(contador1)
contador1 = contador1 + passo;
console.log(contador1)

//contador de passo resumido
contador1 += passo; //contador = contador + passo;
contador1 *= passo; //contador = contador * passo;
contador1 /= passo; //contador = contador / passo;
contador1 -= passo; //contador = contador - passo;
contador1 **= passo; //contador = contador ** passo;

/*
Essa soma de num1 e num2 irá retornar em um NAN
Not a Number porque um dos valores não é número
*/
const num1 = 10;
const num2 = 'Lucas';
console.log(num1 * num2);

//converter uma String em um Numero inteiro
const num3 = parseInt('5.3');
console.log(typeof num3);

//converter uma String em um Numero com ponto flutuante
const num4 = parseFloat('5.5');
console.log(typeof num4);
console.log(num4);

//converter uma String em um Numero sem especificar o tipo dele
const num5 = Number('5');
console.log(typeof num5);