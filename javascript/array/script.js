let  lista = ['ovo','corante','manteiga','farinha'];

/* converte array em string */
let res = lista.toString();

/* converte array em uma string substituindo pelo caracter desejado para separar
os itens */
let res1 = lista.join('-');

/* procura a posição do elemento no array, uqnado não acha retorna -1 */
let res2 = lista.indexOf('corante');

/* remove o ultimo elemento do array */
lista.pop();

let res3 = lista;

/* remove o ultimo elemento do array */
lista.shift();

let res4 = lista;

/* adiciona um novo itemno array */

lista.push('prato');

let res5 = lista;

/* alterando 1 item do array diretamente , caso tente alterar um item que não existe ele
cria um novo*/
lista[2] = 'pratos novos';

let res6 =lista;

console.log(res);

console.log(res1);

console.log(res2);

console.log(res3);

console.log(res4);

console.log(res5);

console.log(res6);

