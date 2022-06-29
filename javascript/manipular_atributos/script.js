function trocarImagem(filename,animalname){

    /* o setAttribute funciona passando 2 valores, o primeiro o o atributo
    que desejo trocar, e o segundo e o caminho do que vou trocar */
    
    document.querySelector('.imagem').setAttribute('src','images/'+filename);
    document.querySelector('.imagem').setAttribute('data-animal',animalname);


}

function pegarAnimal(){
    /* o getAttribute funciona somente pegar 1 atributo, o desejado */
    let animal =document.querySelector('.imagem').getAttribute('data-animal');
    alert("o animal e um "+animal);
}