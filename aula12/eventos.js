const INPUT_NOME = document.getElementById('nome');
const INPUT_BIN  = document.getElementById('bin');
const INPUT_MES  = document.getElementById('mes')  ;
const INPUT_ANO  = document.getElementById('ano');
const INPUT_CVV  = document.getElementById('cvv');
const PARCELA    = document.getElementById('parcela');
MSG_ERRO = document.querySelector('[id="msg-erro"]');


function validar(event){
   event.preventDefault(); 
    let valido = true ;

    if(INPUT_NOME.value.length <7){        
        INPUT_NOME.classList.add('is-invalid')
        valido = false;
    }
    if(INPUT_BIN.value.length !==16){
        INPUT_BIN.classList.add('is-invalid');
        valido =false;
    }
    if(INPUT_MES.value < 1 || INPUT_MES.value >12){
        INPUT_MES.classList.add('is-invalid');
        valido =false;
    }
    if(INPUT_ANO.value < 2022){
        INPUT_ANO.classList.add('is-invalid');
        valido =false;
    }
    if(INPUT_CVV.value <1 || INPUT_CVV.value >999){
        INPUT_CVV.classList.add('is-invalid');
        valido =false;
    }

    if(valido !==true){
        MSG_ERRO.style.display = 'block';
        return;
    }

    alert('Pronto, Tudo Certo!!!');

}

INPUT_NOME.addEventListener('keyup',function(){
    MSG_ERRO.style.display = 'none';
    INPUT_NOME.classList.remove('is-invalid');

    if(INPUT_NOME.value.length >= 7){
        INPUT_NOME.classList.add('is-valid');
    }else{
        INPUT_NOME.classList.add('is-invalid');
    }
});

INPUT_BIN.addEventListener('keyup',function(){
    MSG_ERRO.style.display = 'none';
    INPUT_BIN.classList.remove('is-invalid');

    if(INPUT_BIN.value.length === 16){
        INPUT_BIN.classList.add('is-valid');
    }else{
        INPUT_BIN.classList.add('is-invalid');
    }
});
INPUT_MES.addEventListener('keyup',function(){
    MSG_ERRO.style.display = 'none';
    INPUT_MES.classList.remove('is-invalid');

    if(INPUT_MES.value >= 1 && INPUT_MES.value <=12){
        INPUT_MES.classList.add('is-valid')
    }else{
        INPUT_MES.classList.add('is-invalid');
    }
})
INPUT_ANO.addEventListener('keyup',function(){
    MSG_ERRO.style.display = 'none';
    INPUT_ANO.classList.remove('is-invalid');

    if(INPUT_ANO.value >= 2022){
        INPUT_ANO.classList.add('is-valid')
    }else{
        INPUT_ANO.classList.add('is-invalid');
    }
})
INPUT_CVV.addEventListener('keyup',function(){
    MSG_ERRO.style.display = 'none';
    INPUT_CVV.classList.remove('is-invalid');

    if(INPUT_CVV.value.length === 3){
        if(INPUT_CVV.value >=000 && INPUT_CVV.value <=999){
            INPUT_CVV.classList.add('is-valid')
        }else{
            INPUT_CVV.classList.add('is-invalid');
        }
    }else{
        INPUT_CVV.classList.add('is-invalid');
    }    
})