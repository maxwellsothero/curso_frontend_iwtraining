let mercado = {
    higiene:'shampom',
    mesa:'toalha',
    hortifrute:'tomate',
    acougue:'frango',
    bebidas:{
        wisk:'blacklabel',
        cachaca:{
            tipo1:'ypioca prata',
            tipo2:'ypioca ouro'
        },
        cerveja:'devassa'
    }
    };


    /* ----------forma 01----------------- */
/*     let {higiene,mesa,acougue} = mercado;
 */

/* ------------------forma 02------------- */
  /*       let {wisk,cachaca,cerveja} = mercado.bebidas
    console.log(wisk,cachaca,cerveja); */

/* --------------forma 03----------------- */    

    let {higiene,mesa,bebidas:{cachaca:{tipo1:tipocachaca, tipo2}}} = mercado;

    console.log(higiene,mesa,tipocachaca,tipo2);