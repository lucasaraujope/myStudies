//para usar aspas duplas dentro de um texto também podemos usar a barra
let umaString = "Um \"texto\"";

console.log(umaString);

//ou se eu quiser usar uma barra dentro de um texto tenho que duplicar ela
let duasStrings = "Um \\texto";
console.log(duasStrings);

//As Strings são indexadas e cada caractere tem um indice começando do zero
//                 01234567 
let tresStrings = "Um texto";

/*Para selecionar um determinado elemento(caractere) 
de uma determinada posição.

Obs: se eu tentar pegar um elemento cujo range é maior que o 
do texto ou um negativo, a mensagem exibida será (undefined)
*/
console.log(tresStrings[5]);

//Outra forma de pegar um elemento no texto
console.log(tresStrings.charAt(4));

/*Para saber em qual indice começa determianda paralvra
acrescentando uma virgula e depois dela uma número ele começa 
a buscar a palavra a partir daquele número que eu especifiquei
*/
console.log(tresStrings.indexOf('texto'));

//aqui o indice da letra será 7
console.log(tresStrings.indexOf('o', 3));

/*aqui o indice será -1 porque o número que começará a 
busca é após o indice da letra que queremos buscar*/
console.log(tresStrings.indexOf('U', 3));


/*
Diferente do indexOf temos o oposto lastIndexOf
*/

//para achar o indece e uma letra através da letra com expressões regulares
console.log(tresStrings.search(/x/));

//para substituir uma palavra por outra
console.log(tresStrings.replace(/Um/, 'Dois'));
console.log(tresStrings);

/*Se eu quiser substituir determinada palavra ou texto aplicação
eu uso a letra g depois da barra*/
let quatroStrings = 'O rato roeu a roupa do rei de roma';
console.log(quatroStrings.replace(/r/g, '#'));

//para saber o tamnho de uma String
console.log(quatroStrings.length);

/*para pegar um pedaço de uma String onde eu posso escolher onde eu 
começo e onde eu termino indicando os número de index

*No caso abaixo eu quero pegar a palavra rato inteira, e quando eu quero
fazer isso eu sempre tenho que indicar uma casa após a última letra da
palavra
*/
console.log(quatroStrings.slice(2, 6));

/*
Quando usamos valores negativos nós subtraímos do valor total da String
e nesse caso ele vai começar a partir do resultado dessa soma

No exemplo abaixo eu vou colocar -5 e o length do texto é de 35 nesse 
caso seria o mesmo que eu tivesse selecionando a partir de 30 porque 
na conta de 35 - 5 = 30, selecionando assim a palavra roma inteira 
*/
console.log(quatroStrings.slice(-5));

/*
Para dividir uma String usamos o split e indicamos como vamos separar
no exemplo abaixo eu vou colocar um espaço, uma virgula para acrescentar
os valores que quero pegar e depois vou informar a quantidade de palavras
que quero pegar

resultado: [ 'O', 'rato', 'roeu', 'a' ]
*/
console.log(quatroStrings.split(' ', 4));
