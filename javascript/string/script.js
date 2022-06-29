

let temp_cerveja = 4;
if(temp_cerveja >=8){
    document.querySelector("#possobeber").innerHTML = 'Cerveja Impropria pra Consumo';
}else{
    document.querySelector("#possobeber").innerHTML = 'Me chame Pra beber';
}

let nome ='maxwell sothero coelho lopes';
/* usado para saber o tamanho da string */
let resultado = nome.length;

/* usado para procurar algo dentro da string */
let resultado1 =nome.indexOf('');

/* slice pega um pedaço da string apartir de onde vc quer ate aonde vc quer */

let resultado2 = nome.slice(10, 15);

/*  substr  e o que mais usa para pegar partede de uma string*/

let resultado3 = nome.substr(1, 5);
let resultado4 = nome.substring(1,5);

/* replace */
let resultado5 = nome.replace("maxwell","ravi");

/* função trim() ela serve pra remover os espaços em brancos */
let resultado6 = nome.trim();

/* charAt() */
let resultado7 = nome.charAt(4);

/* slipt() */
let resultado8 = nome.split(' ');


console.log("legth -- "+resultado);
console.log("indexOf -- "+resultado1);
console.log("slice -- "+resultado2);
console.log("substr -- "+resultado3);
console.log("substring -- "+resultado4);
console.log("replace -- "+resultado5);
console.log("trim() -- "+resultado6);
console.log("charAt() -- "+resultado7);
console.log("slipt -- "+resultado8);








