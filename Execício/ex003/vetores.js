let num = [33, 67, 2, 12, 90, 6]
num.push(10) //acrescentar não precisa saber a posição
num.sort() //colocar em ordem crescente
for (let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem valor igual a ${num[pos]}`)
}
console.log(`Nosso vetor é: ${num}`)
console.log(`o vetor tem ${num.length} posições`)