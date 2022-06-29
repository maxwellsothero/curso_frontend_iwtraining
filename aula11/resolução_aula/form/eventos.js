const BTN_ADD = document.getElementById('btn-add');
const TABELA = document.getElementById('tabela');
const FORMULARIO = document.getElementById('formulario');

BTN_ADD.addEventListener('click', function () {
    TABELA.classList.remove('col-md-12');
    TABELA.style.transition = '1s';
    TABELA.classList.add('col-md-8');


    // FORMULARIO.style.display = 'block';
    FORMULARIO.classList.remove('col-md-0');
    FORMULARIO.classList.remove('d-none');
    FORMULARIO.style.transition = '1s';
    FORMULARIO.classList.add('col-md-4');
});