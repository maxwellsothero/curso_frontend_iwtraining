function verde(){
    limpar()
    document.querySelector("#exemplo").classList.add('verde');
    
}

function vermelho(){
    limpar()
    document.querySelector("#exemplo").classList.add('vermelho');

}

function azul(){
    limpar()
    document.querySelector("#exemplo").classList.add('azul');

}

function limpar(){
    document.querySelector("#exemplo").classList.remove("verde");
    document.querySelector("#exemplo").classList.remove("vermelho");
    document.querySelector("#exemplo").classList.remove("azul");
}

function trocar(){
    if(document.querySelector(".ex button").classList.contains('azul')){
        document.querySelector(".ex button").classList.remove("azul");
        document.querySelector(".ex button").classList.add("verde");
    }else{
        document.querySelector(".ex button").classList.remove("verde");
        document.querySelector(".ex button").classList.add("azul");

    }
}