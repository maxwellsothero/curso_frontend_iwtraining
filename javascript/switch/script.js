let dia =6;
let diaNome ='';
switch(dia){
    case 1:
        diaNome = 'Segunda-feira';
        break;
    case 2:    
        diaNome ='Terça-feira';
        break;
    case 3:
        diaNome ='Quarta-feira';
        break;
    case 4:
        diaNome ='Quinta-feira';
        break;
    case 5:
        diaNome ='Sexta-feira' ;
        break;
    case 6:
        diaNome ='Sabado'    ;
        break;
    case 7:
        diaNome ='Domingo';    
        break;

}
document.getElementById("dia").innerHTML = "Hoje é  "+diaNome+"   ";

let diasemana = dia;

let diatipo ='';

switch(diasemana){
    case 6:
        diatipo ='Final de semana';
        break;
    case 7:
        diatipo ='Final de semana'    ;
        break;
    default:
        diatipo ='Dia de Semana'    ;
        break;
}
document.getElementById("diasemana").innerHTML = " - "+diatipo