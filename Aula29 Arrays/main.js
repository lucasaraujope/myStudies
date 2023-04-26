//Array

const alunos = ['Lucas', 'Leticia', 'Gabriel'];

//alterando o indice de um array
alunos[0] = 'Giovanna';

//Para saber o tamanho de um array
console.log(alunos.length);

//adicionando um item no array de 3 formas
//Em um indice especifico

//N final do array
alunos[alunos.length] = 'Nicolas Antonio'

alunos.push('Otávio');

//adicionando um item no começo do array

alunos.unshift('Arieli');

console.log(alunos);

//Para excluir um item do final do array
const removidofinal = alunos.pop();
console.log(removidofinal);
console.log(alunos);

//Para excluir um item do inicio  do array
const removidoInicio = alunos.shift();
console.log(removidoInicio);
console.log(alunos);

/* ara excluir um item de um indice especifico, mas nesse caso a posiçãp não será realocada com outro nome e sim ficará vazi */ 

delete alunos[3];
console.log(alunos);

//para pegar um intervalo de arrays
alunos[3]= 'Lucas';
alunos.push('Nicolas Antonio');

console.log(alunos);

console.log('A seleção do array foi', (alunos.slice(0, 4)));

//para confirmar se a variável é um array

console.log(alunos instanceof Array);
