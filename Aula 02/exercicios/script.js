function idade(){
    let idade = prompt('Digite sua idade: ')

    if (idade <= 0) {
        alert('Inexistente')
    }else if (idade < 18){
        alert('criança')
    }else if (idade >= 60){
        alert('idoso')
    }else{
        alert('adulto')
    }
}



function usando_math(){
    let a = Number(prompt('Digite um número'))
    let b = Number(prompt('Digite um número'))
    let c = Number(prompt('Digite um número'))

    alert('O maior número é: ' + Math.max(a, b, c))
    alert('O menor número é: ' + Math.min(a, b, c))

    let media = (a + b + c) / 3

    alert('Arredondamento da divisão dos 3 números: ' + Math.round(media))
    alert('Arredondamento para cima: ' + Math.ceil(media))
}

function contar(){
    let x = Number(prompt('Digite até onde deseja contar'))

    for (i = 1; i <= x; i++){
        alert(i)
    }
}

function escolha(){
    let response = Number(prompt('Escolha qual você prefere:\n1- Bolo  2- Refri  3- Salgado'))

    switch (response){
        case 1:
            alert('Você ganhou um bolo!')
            break;
        case 2:
            alert('Você ganhou um refri!')
            break;
        case 3:
            alert('Você ganhou um salgado!')
            break;
        default:
            alert('Essa opção é inexistente, boboca')
            break;
    }
}