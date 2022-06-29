let timer;

function rodar(){

    timer = setTimeout(function(){

        document.querySelector('.demo').innerHTML = 'Função executada com Sucesso';
    
    },2000);
}

function parar(){

    clearTimeout(timer);

}

