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
