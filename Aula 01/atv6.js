let idade = 20

if (idade <= 0 || typeof idade !== 'number'){
    console.log('idade incorreta')
}else if (idade >= 18) {
    console.log('Maior de idade')
}else {
    console.log('menor de idade')
}