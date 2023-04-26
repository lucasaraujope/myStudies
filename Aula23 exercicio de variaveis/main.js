let varA = 'A';
let varB = 'B';
let varC = 'C';

const varAlteraA = varA;
const varAlteraB = varB;
const varAlteraC = varC;

varA = varAlteraB;
varB = varAlteraC;
varC = varAlteraA;


console.log(varA, varB, varC);
