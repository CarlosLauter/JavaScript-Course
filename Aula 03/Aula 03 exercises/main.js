function exe1() {
    
    let arr = [1, 2, 3, 4 ,5]

    console.log(arr[0])
    console.log(arr[2])
    console.log(arr[3])
}

exe1()
console.log('')

function exe2() {
    let arr = [0, 1]
    let arr1 = [0, 1, 2, 3]

    console.log(arr.length)
    console.log(arr1.length)
}

exe2()
console.log('')

function exe3() {
    let onibus = {
        'rodas': 8,
        'limitePassageiros': 40,
        'portas': 2,
    }

    console.log(Object.values(onibus))
    onibus.janela = 20
    delete onibus.rodas
    console.log(Object.values(onibus))
}

exe3()
console.log('')

function exe4() {
    let arr = ['Mahena', 'Mogli', 'Mainha', 'Painho', 'Carlos']

    if (arr.includes('Carlos')){
        console.log("Tem")        
    }
}

exe4()
console.log('')

function exe5() {
    let arr = [0, 1, 2, 3]
    let arr1 = [0, 1, 2, 3, 4, 5]

    function confirma(arr){
        if (arr.length > 5){
            console.log('Muitos elementos')
        }else {
            console.log('Poucos elementos')
        }
    }

    confirma(arr)
    confirma(arr1)
}

exe5()
console.log('')

function exe6() {
    let arr = [0, 1, 2, 3, 4]

    for(let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}

exe6()
console.log('')

function exe7() {
    const pessoa = {
        "nome": "Carlos",
        "idade": 23,
        "profissão": "Dev"
    }

    let carlos = JSON.stringify(pessoa)

    console.log(carlos)
}

exe7()
console.log('')

function exe8() {
    let frase = "Eu gosto de comer um peixe"

    let arr = frase.split(' ')

    for(let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}

exe8()
console.log('')

function exe9() {
    
    let calculadora = {
        somar: function(a, b){
            return a + b
        },
        subtrair: function(a, b){
            return a - b
        },
        multiplicar: function(a, b){
            return a * b
        },
        dividir: function(a, b){
            return a / b
        }
    }

    console.log(calculadora.somar(2, 3))
    console.log(calculadora.subtrair(2, 3))
    console.log(calculadora.multiplicar(2, 3))
    console.log(calculadora.dividir(2, 3))
}

exe9()
console.log('')