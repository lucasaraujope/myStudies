const numero = Number(prompt('Digite um número: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML += `<p>Raiz quadrada: <strong>${numero ** 0.5}</stromg></p>`;
texto.innerHTML += `<p>${numero} é inteiro: <strong>${Number.isInteger(numero)}</stromg></p>`;
texto.innerHTML += `<p>É NaN: <strong>${Number.isNaN(numero)}</stromg></p>`;
texto.innerHTML += `<p>rredondando para baixo: <strong>${Math.floor(numero)}</stromg></p>`;
texto.innerHTML += `<p>Arredondando para cima: <strong>${Math.ceil(numero)}</stromg></p>`;
texto.innerHTML += `<p>Com duas casas decimais: <strong>${numero.toFixed(2)}</stromg></p>`;