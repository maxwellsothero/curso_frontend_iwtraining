function digitou(e){
    if(e.keyCode == 13 && e.ctrlKey == true){
        let texto= document.getElementById("campo").value;
        console.log(texto);
    }
    
}
/* ------------ARRAY------------------------ */
let carros = ['palio','uno','corola','onix']
console.log(carros);

console.log(carros[2]);


let ingredientes = [
    ['uva','maça','abacaxi'],
    ['macarrão','queijo','extrato'],
    ['feijão','arroz','calabresa']

];
console.log(ingredientes [1] [2])

/* -------------OBJETO----------------------- */
let ferramentas = {
    marca:'gedore', 
    modelo:'al-21',
    peso:'100gr',
    utilizar:function(){
        console.log ("irei utilizar a ferramenta"+" "+this.marca);
    }
};

/* console.log(ferramentas.modelo); */

ferramentas.utilizar();

/* ------------ARRAY E OBJETOS---------------- */

let roupas = [
    {marca:'GM' ,modelo:'Corsa' ,ano:'2002' ,cor: 'azul'},
    {marca:'fiat' ,modelo:'uno' ,ano:'2010' ,cor: 'preto'},
    {marca:'vw' ,modelo:'gol' ,ano:'2005' ,cor: 'verde'}
];
 console.log(roupas[1].modelo)

 /* --------------mudança de estilo--------------------- */
 function azul(){
    limpar()
    document.getElementById("titulo").classList.add('azul');
 }

function vermelho(){
    limpar()
    document.getElementById("titulo").classList.add('vermelho');
}

function verde(){
    limpar()
    document.getElementById("titulo").classList.add('verde');
}
function limpar(){
    document.getElementById("titulo").classList.remove("azul");
    document.getElementById("titulo").classList.remove("vermelho");
    document.getElementById("titulo").classList.remove("verde");
}

/* -------------- */
function mostrarTelefone(){

    document.getElementById("telefone").style.display = "block";
}

 



