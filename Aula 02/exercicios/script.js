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

function verificar_primo(){
    
    let numero = Number(prompt('Digite o número que gostaria de verificar: '))
  
    if (numero <= 1){
        alert('Número tem que ser maior que 1')
    }else {
        let verifica = true
        for (let i = 2; i < numero; i++){
            if (numero % i == 0){
                verifica = false
                break
            }
        }

        if (verifica) {
            alert(`O número ${numero} é um número primo`)
        }else{
             alert(`O número ${numero} não é um número primo`)
        }
    }
}

const soma = () => {
    let a = Number(prompt('Digite o primeiro valor'))
    let b = Number(prompt('Digite o segundo valor'))
    return alert('A soma dos valores é: '+ (a + b))
}


function printarDados(nome, idade){
    if (nome === undefined){
        alert(`Sua idaded é ${idade}`)
    }else if (idade === undefined){
        alert(`Seu nome é ${nome}`)
    }else {
        alert(`Seu nome é ${nome} e sua idade é ${idade}`)
    }
}

function multiplicacao(a, b = 2){
    if (b == 2){
        return alert(`O dobro de ${a} é ` + (a * b))
    }else {
        return alert(`A multiplicação dos números ${a} e ${b} é ` + (a * b))
    }
}

function verificarPalindromo(palavra){
    let resposta = palavra.toLowerCase().replaceAll(' ', '')
    let original = palavra.replaceAll(' ', '')
    if (resposta.split('').reverse().join('') !== resposta){
        alert(`${original} não é um palíndromo`)
    }else {
        alert(`${original} é um palíndromo`)
    }
}

function receberNumeros(quant){
    let numeros = []

    for (let i = 1 ; i <= quant; i++){
        let valor = prompt(`Digite o ${i} número: `)
        numeros.push(Number((valor)))
    }

    return numeros
}

function calculateAverage(numeros){
    let soma = 0

    for (let i = 0; i < numeros.length; i++){
        soma += numeros[i]
    }

    return alert('A média dos números é: ' + (soma / numeros.length))
}