/* --------------spread para array */

let numeros = [1,2,3,4];

let outros = [...numeros,5,6,7,8];

console.log(outros);

let info = {
    nome:'maxwell',
    sobrenome:'sothero',
    idade:39
};


/* ------------spread para objeto */
let novaInfo = {
    ...info,
    cidade:'fortaleza-ce',
    estado:'ceara',
    pais:'Brasil'
};

console.log(novaInfo)

