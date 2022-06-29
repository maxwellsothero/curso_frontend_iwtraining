function alterar(titulo){
    document.querySelector("#titulo").innerHTML =titulo;
 
    document.querySelector("#campo").value =titulo;
}


function somar(x,y){
    let total = x +y;
    return total;
    
    /* colocando pra exibir o numero no id campo */
    /* document.querySelector("#campo").value = total; */

    /* utilizando return */
}

var  resultado = somar(10,15);
console.log(resultado);
