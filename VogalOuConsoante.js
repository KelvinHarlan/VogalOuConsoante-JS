//Faça um Programa que verifique se uma letra digitada é vogal ou consoante.

function VogalOuConsoante(letra) {
    if (letra === 'a' ||
        letra === 'e' ||
        letra === 'i' ||
        letra === 'o' ||
        letra === 'u') {
        console.log(`A letra escolhida foi '${letra}', ela é uma vogal.`)
    }
    else if (typeof (letra) !== typeof ('String') || letra * 1 == letra) {
        console.log('Dados inválidos')
    }

    else {
        console.log(`A letra escolhida foi '${letra}', ela é uma consoante.`)
    }
}
VogalOuConsoante(letra = 'z')