let timer;

function comecar() {

    timer = setInterval(showtime, 1000);
}    

function parar() {

    clearInterval(timer);
}

function showtime(){

    let d =new Date();

    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    let txt = h+':'+m+':'+s;

    document.querySelector('.demo').innerHTML = txt ;
}