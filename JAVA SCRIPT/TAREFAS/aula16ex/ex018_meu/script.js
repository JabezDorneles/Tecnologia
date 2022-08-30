function formatarArray(array){
    var formato = ''
    var tamanho = array.length-1
    formato += `${array[0]}`
    for(let e=1;e<tamanho;e++){
        formato += `, ${array[e]}`
    }
    if(tamanho>0) formato += ` e ${array[tamanho]}`;
    return formato;
}

var callN = document.getElementById('callN');
var callD = document.getElementById('div');
callN.focus()
var arrayN = []
var finalizou = false;
//SELECT
var callS = document.getElementById('select');

function Adicionar(){
    if (finalizou==true){
        finalizou = false;
        callD.innerHTML='';
    }
    //INPUT NUMBER
    var valueN = callN.value;
    var NumberN = Number(valueN);
    callN.focus()

    //RESETAR INPUT
    callN.value = ''

    //IF (SE ESTÁ ESGOTADO)
    if (arrayN.length == 100) return alert('TODOS OS NÚMEROS DE 1 A 100 FORAM PREENCHIDOS!!!')

    //IF (SE É DE 1 À 100)
    if(1 > NumberN || NumberN > 100){
        return alert(`Coloque de 1 a 100`)
    }

    //IF (VALOR JÁ EXISTE)
    if (arrayN.indexOf(NumberN)>-1) 
    return alert(`Tente um diferente de: ${formatarArray(arrayN)}`)

    //ARRAY (ADD INPUT NUMBER NO ARRAY)
    arrayN.push(NumberN)

    //OPTION (MONTANDO)
    var jsOp = document.createElement('option');
    jsOp.innerHTML = `Valor ${NumberN} adicionado.`;

    //OPTION (ADICIONANDO-O NO SELECT ID 'select')
    callS.appendChild(jsOp);
}

function Finalizar(){
    if (arrayN==0) return alert('Adicione um valor!')
    finalizou = true;
    callD.innerHTML='';
    var soma = 0;
    for(e of arrayN){
        soma += e;
    }
    var inf = [
        `Ao todo, temos ${arrayN.length} números cadastrados`,
        `O maior valor informado foi ${Math.max(...arrayN)}`,
        `O menor valor informado foi ${Math.min(...arrayN)}`,
        `Somando todos valores, temos: ${soma}`,
        `A média dos valores digitados é ${soma/arrayN.length}`
    ]
    for(e of inf){
        var jsP = document.createElement('p');
        jsP.innerHTML = e;
        callD.appendChild(jsP)
    }
}