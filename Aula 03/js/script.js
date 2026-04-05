function mostrar(){
    
    let pessoa = {
        nome: 'Carlos',
        profissao: 'Dev',
        idade: 23,
        dormir: () => alert('Dormindo')
    }

    alert(Object.values(pessoa))
    alert(pessoa.nome)
    alert(pessoa.profissao)
    alert(pessoa.idade)
    pessoa.nome = prompt(`Adicione um novo nome: `)
    alert(pessoa.nome)
    pessoa.dormir()
    alert(Object.keys(pessoa))
}

function deletandoEAtribuindo(){
    let carro = {
        marca: 'Tesla',
        rodas: 4,
        portas: 2,
    }

    alert('O carro possui: ' + Object.values(carro))
    delete carro.marca
    alert('Marca deletada')
    alert(Object.values(carro))
    carro.marca = prompt('Adicione uma nova marca: ')
    carro.eletrico = prompt('O carro vai ser eletrico? ')
    alert(Object.values(carro))
}

function copiar(){
    pessoa1 = {
        nome: 'Wolney',
        idade: 22,
        namora: true
    }

    pessoa2 = {
        profissao: 'Dev',
        nerd: true
    }

    alert('Objeto 1: ' + Object.values(pessoa1))
    alert('Objeto 2: ' + Object.values(pessoa2))

    Object.assign(pessoa1, pessoa2)

    alert('Objeto 1: ' + Object.values(pessoa1))
    alert('Objeto 2: ' + Object.values(pessoa2))
}

function mutacao(){
    
    let obj1 = {
        pontos: 10,
        comePeixe: true
    }

    let obj2 = obj1
    
    let obj3 = {
        pontos: 10,
        comePeixe: true
    }

    alert(obj1 === obj2)
    alert(obj1 === obj3)

    alert('Obj1 pontos: ' + obj1.pontos)
    alert('Obj2 pontos: ' + obj2.pontos)

    obj2.pontos = 20
    alert('Mudando pontos de obj2 para 20')
    alert('Obj1 pontos: ' + obj1.pontos)
    alert('Mudando pontos de obj1 para 30')
    obj1.pontos = 30
    alert('Obj2 pontos: ' + obj2.pontos)
    alert('Mudar algo em 1 altera 2')
}

function pessoaRemovida(){

    let pessoa = ['Matheus', ' João', ' Ricardo']
    alert(pessoa)
    let pessoasRemovidas = pessoa.pop()
    alert('Tirando: ' + pessoasRemovidas)
    alert(pessoa)
    pessoa.push(prompt('Agora adicione uma pessoa: '))
    alert(pessoa)
}

function pessoaRemovida2(){

    let pessoa = ['Matheus', ' João', ' Ricardo']
    alert(pessoa)
    let pessoasRemovidas = pessoa.shift()
    alert('Tirando: ' + pessoasRemovidas)
    alert(pessoa)
    pessoa.unshift(prompt('Agora adicione uma pessoa: '))
    alert(pessoa)
}


function indexof(){

    let numeros = [0, 1, 2, 1, 0]
    alert(numeros)

    alert('Posição do primeiro 1 no array: ' + numeros.indexOf(1))
    alert('Posição do 1 mais perto do fim no array: ' + numeros.lastIndexOf(1))
}

function num () {
    let nums = [0,1,2,3,4,5,6,7,8,9]

    alert(nums.slice(4,5))
    alert(nums.slice(0,4))
}

function foreach() {
    let nomes = ['Carlos', 'Pedro', 'josé', 'limão']

    nomes.forEach(nome => {
        alert('O nome é: ' + nome)
    })
}

function inc() {
    let peixes = ['tubarão', 'peixe-lua', 'tucunaré']
    alert(peixes.includes('tubarão'))
}

function reverse(){
    let peixes = ['tubarão', 'peixe-lua', 'tucunaré']
    alert(peixes.reverse())
}

function padstart(){
    let milAoContrario = '1'
    alert(milAoContrario.padStart(4, '0'))
}

function split() {
    let frase = 'Quem com ferro fere com ferro será ferido'
    let palavras = frase.split(' ')
    alert(palavras)
}

function join() {
    let frase = 'Quem com ferro fere com ferro será ferido'
    let palavras = frase.split(' ')
    let novaFrase = palavras.join('<->')
    alert(novaFrase)
    alert(palavras.join(' '))
}

function repeat() {
    let palavra = 'opa '
    alert(palavra.repeat(20))
}

function rest() {
    let num = '1'
    let num1 = '5'
    let num2 = '23'
    let num3 = '18'

    function imprimir(...args) {
        for(let i = 0; i < args.length; i++){
            alert(args[i])
        }
    }

    alert(imprimir(num, num1))
    alert(imprimir(num2, num3))
    alert(imprimir(num, num1, num2, num3))
    alert(imprimir('4', '5' ,'6' ,'7' ,'8'))
}