const INPUT_CEP = document.getElementById('cep');
const INPUT_LOGRADOURO = document.getElementById('logradouro');
const INPUT_NUMERO = document.getElementById('numero');
const INPUT_BAIRRO = document.getElementById('bairro');
const INPUT_CIDADE = document.getElementById('cidade');
const INPUT_UF = document.getElementById('uf');

const MSG_ERRO = document.querySelector('[id="msg-erro"]');

//conjunto de ações definidas para serem executadas
//quando forem chamadas e/ou invocadas
//funções normalmente são declarativas (o contrario de imperativas)
function validar(event) {
    //evitar que o formulario siga com o envio
    event.preventDefault();

    let valido = true;

    if (INPUT_CEP.value.length !== 8) {
        INPUT_CEP.classList.add('is-invalid');
        valido = false;
    }

    if (INPUT_LOGRADOURO.value.length < 4) {
        INPUT_LOGRADOURO.classList.add('is-invalid');
        valido = false;
    }

    if (INPUT_NUMERO.value === '' || INPUT_NUMERO.value === '0') {
        INPUT_NUMERO.classList.add('is-invalid');
        valido = false;
    }

    if (INPUT_BAIRRO.value.length < 4) {
        INPUT_BAIRRO.classList.add('is-invalid');
        valido = false;
    }

    if (INPUT_CIDADE.value === '') {
        INPUT_CIDADE.classList.add('is-invalid');
        valido = false;
    }

    if (INPUT_UF.value.length !== 2) {
        INPUT_UF.classList.add('is-invalid');
        valido = false;
    }

    if (valido !== true) {
        MSG_ERRO.style.display = 'block';
        return;
    }


    alert('Pronto, tudo certo');
}


//codigo imperativo (listener/observer)
INPUT_CEP.addEventListener('keyup', function() {
    MSG_ERRO.style.display = 'none';

    INPUT_CEP.classList.remove('is-invalid');

    if (INPUT_CEP.value.length === 8) {
        INPUT_CEP.classList.add('is-valid');
    } else {
        INPUT_CEP.classList.add('is-invalid');
    }
});

INPUT_LOGRADOURO.addEventListener('keyup', function() {
    MSG_ERRO.style.display = 'none';

    INPUT_LOGRADOURO.classList.remove('is-invalid');

    if (INPUT_LOGRADOURO.value !== '') {
        INPUT_LOGRADOURO.classList.add('is-valid');
    } 
    
    if (INPUT_LOGRADOURO.value.length > 0 && INPUT_LOGRADOURO.value.length < 4) {
        INPUT_LOGRADOURO.classList.add('is-invalid');
    }
});

INPUT_NUMERO.addEventListener('keyup', function() {
    MSG_ERRO.style.display = 'none';

    INPUT_NUMERO.classList.remove('is-invalid');

    if (INPUT_NUMERO.value !== '') {
        INPUT_NUMERO.classList.add('is-valid');
    } else {
        INPUT_NUMERO.classList.add('is-invalid');
    }
});

INPUT_BAIRRO.addEventListener('keyup', function() {
    MSG_ERRO.style.display = 'none';

    INPUT_BAIRRO.classList.remove('is-invalid');

    if (INPUT_BAIRRO.value !== '') {
        INPUT_BAIRRO.classList.add('is-valid');
    } else {
        INPUT_BAIRRO.classList.add('is-invalid');
    }
});

INPUT_CIDADE.addEventListener('keyup', function() {
    MSG_ERRO.style.display = 'none';

    INPUT_CIDADE.classList.remove('is-invalid');

    if (INPUT_CIDADE.value !== '') {
        INPUT_CIDADE.classList.add('is-valid');
    } else {
        INPUT_CIDADE.classList.add('is-invalid');
    }
});

INPUT_UF.addEventListener('keyup', function() {
    MSG_ERRO.style.display = 'none';

    INPUT_UF.classList.remove('is-invalid');

    if (INPUT_UF.value !== '') {
        INPUT_UF.classList.add('is-valid');
    } else {
        INPUT_UF.classList.add('is-invalid');
    }
});
