//String, Number, undefined, null, boolean, symbol
const nome = 'Lucas'; // String
const sobreNome = 'Araujo'; //String
const num = 27; // Number
const altura = 1.80; //Number
let nomeAluno; //undefined - não aponta para local nenhum na mamória 
let sobrenomeAluno = null; //Nulo - não aponta para local nenhum na mamória
/*
A diferença entre undefined e Null é que o Null nós especificamos 
quando o valor não irá apontar para nenhum lugar na memória, já o 
undefined quem faz essa função é a linguagem
*/

//valor por referência 
/*
aqui quando eu declarei um array para A e atribui o mesmo valor de A 
para B eu fiz com que ambos sustentassem o mesmo espaço de memória
então quando eu altero um ou outro, ambos serão alterados, porque 
ambos ocupam o mesmo espaço de memória
*/
const a = [1, 2];
const b = a;

console.log(a, b)

b.push(3);
console.log(a, b)