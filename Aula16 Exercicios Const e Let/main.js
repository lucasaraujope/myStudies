const nome = 'Lucas';
const sobrenome = 'Araujo'
const idade = 27;
const peso = 90;
const alturaEmCm = 1.80;
let imc = peso / (alturaEmCm * alturaEmCm);
let AnoNascimento = 2022 - idade;

//usando virgula para concatenar
console.log(nome, sobrenome, 'tem', idade, 'anos', 'e pesa', peso, 'Kg');
console.log('tem', alturaEmCm, 'de altura e seu IMC é de', imc);
console.log(nome, sobrenome, 'nasceu em', AnoNascimento);

//usando + para concatenar
console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos ' + ' ' + 'e pesa ' + peso + ' Kg');
console.log('tem ' + alturaEmCm + ' de altura e seu IMC é de ' + imc);
console.log(nome + ' ' + sobrenome + ' nasceu em ' + AnoNascimento);

//template String
console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${peso} Kg`);
console.log(`tem ${alturaEmCm} altura de altura e seu IMC é de ${imc}`);
console.log(`${nome} ${sobrenome} nasceu em ${AnoNascimento}`);