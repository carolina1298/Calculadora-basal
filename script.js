const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    if (DATO > 0){
        ERROR.style.display = 'none'
        let flujo = calcFlujo(DATO);
        let mantenimiento = flujo*1.5;
        FLU.innerHTML = flujo + ' cc/hr';
        MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
})
   
function calcFlujo(peso){
    let resto = peso;
    let flujo = 0;
    if (resto=>20){
        let aux = resto-20;
        flujo += aux*1;
        resto -= aux;
    } 
    if (resto=>10){
        let aux = resto-10;
        flujo += aux*2;
        resto -= aux;
    }
    flujo += resto*4;
    return flujo;
}

const superficieCorp = document.getElementById('superficieCorp');
const peso1 = document.getElementById('peso1');
const peso2 = document.getElementById('peso2');

CALCULAR.addEventListener('click', () => {
    const peso1 = document.getElementById('superficieCorp').value
    if (peso1 >= 30){
        ERROR.style.display = 'none';
        let flujo1 = calcFlujo1(peso1);
        superficieCorp.innerHTML = resultadoFinal1 + ' cc/hr';
        superficieCorp.style.display = 'block';
}})

function calcFlujo1(peso1){
    let calcFlujo1;
    if (peso1 >= 30) {
        calcFlujo1 = ((peso1 *4) + 7) / (peso1 + 90);
    }
    const volumen1500 = calcFlujo1 * 1500;
    const volumen2000 = calcFlujo1 * 2000;
    const resultadoFinal1 = (volumen1500 > volumen2000) ? volumen1500 : volumen2000;
}
    return resultadoFinal1;