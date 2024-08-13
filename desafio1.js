const banana = {
    calorias: 105,
    carbo: 27,
    prote: 0,
    grasa: 0
}
const atun = {
    calorias: 120,
    carbo: 0,
    prote: 30,
    grasa: 0
}
const oliva = {
    calorias: 9,
    carbo: 0,
    prote: 0,
    grasa: 1
}

// como tiene que comerse bananas enteras, latas enteras y gramos de olvia enteros, redondea para arriba
function zetadieta(C,P,G){
    let caloriasTotales = 0
    bananaCount = Math.ceil(C / banana.carbo)
    atunCount = Math.ceil(P / atun.prote)
    olivaCount = Math.ceil(G / oliva.grasa)

    caloriasTotales += bananaCount * banana.calorias + atunCount * atun.calorias + olivaCount * oliva.calorias
    return caloriasTotales
}


console.log(zetadieta(88,90,50))