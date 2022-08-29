
let num = [5, 8, 2, 9, 3]
num.push(6)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições ` )
console.log(`O primeiro valor do vetor é ${num[0]}`)

//EXEMPLO 1

for ( let pos = 0 ; pos < num.length ; pos++)
console.log(`A posição ${pos} tem o valor ${num[pos]}`)

//EXEMPLO 2

for (let pos in num ){
console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}


var senha = num.indexOf(6)

if (senha == -1) {
    console.log('Sua senha não foi encontrada')
} 
else {
    console.log(`a minha senha está na posição ${senha}`)
}



