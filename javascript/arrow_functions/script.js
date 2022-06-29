
/* ----------Primeiro Metodos de Criar Função-------------- */
/* function somar(x, y){
    return x+y;
} */

/* ----------Segunda Metodo de Criar função------------------- */
/* let somar = function(x,y){
    return x+y;

} */


/* -----------arrow function 01---------------------- */
/* let somar =(x,y)=>{
    return x+y;
}
 */

let somar = (x,y)=> x+y;

console.log(somar(3,9));


/* ------------------arrow function 02--------------- */

let lestrasNoNome = (nome)=>{
    return nome.length;
}

console.log(lestrasNoNome('maxwell'));