let n =10;

/*  transforma numero em string */
let res = n.toString();
console.log(res);


/* seta as casas decimais apos a virgula */
let n1 =10.43243243423;

let res1 =n1.toFixed(2);

console.log(res1);

/* transforma uma string em inteiro  */
let n2 = '25';

let res2 = parseInt(n2)+5;

console.log(res2);

/* transforma string em inteiro e
preserva as casas decimais, caso exista, otimo pra formularios  */

let n3 ='25.9';

let res3 = parseFloat(n3) +5;
console.log(res3);