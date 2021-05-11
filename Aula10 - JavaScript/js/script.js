// alert('Olá Mundo')

// window.alert('Olá')
document.write('Olá Mundo!')

console.log('Esta no console do navegador')

let string = 'Gabriel Andrade' //String
console.log(string)
console.log(typeof string)

let inteiro = 45 //Numero Inteiro
console.log(inteiro)
console.log(typeof inteiro)

let real = 123.456 //Numero Real (Flutuante)
console.log(real)
console.log(typeof real)

let boolean = true //Booleano
console.log(boolean)
console.log(typeof boolean)

let array = ['Onix', 'Astra', 'X1'] // Array
console.log(array)
console.log(typeof array)

let carro = {
    cor: 'Preto',
    numPortas: 4,
    tipo: 'sedan',
    modelo: 'Onix',
    marca: 'GM',
    correr: function() {
        alert('Estou correndo')
    }
}

console.log(carro)
console.log(typeof carro)
console.log(carro.cor)
// carro.correr()

let teste = "Turma"
console.log(teste)

teste = 150
console.log(teste)

let numFloat = 123.5421
console.log(parseInt(numFloat))

let numString = '545.40'
console.log(parseFloat(numString))

console.log(numFloat.toString())

let pedido = 'Quero um copo d\'agua'
console.log(pedido)
console.log(pedido.length)

let txt = 'Estão chegando as provas'
console.log(txt.indexOf('as'))
console.log(txt.lastIndexOf('as'))
console.log(txt.slice(0,5))
console.log(txt.substr(6,8))
console.log(txt.replace("provas", "avaliações"))
console.log(txt.toLowerCase())
console.log(txt.toUpperCase())

console.log(numFloat.toFixed(2))
console.log(numFloat.toPrecision(4))

console.log(5 + 4)
console.log(5 - 4)
console.log(5 * 4)
console.log(5 / 4)
console.log(5 % 4)
console.log(5 ** 4)

// let confirmacao = confirm('Você estuda na FIAP?')
// console.log(confirmacao)

// let pergunta = prompt('Qual o seu nome?')
// console.log(pergunta)

if(false) {
    console.log("O if funcionou")
}

else {
    console.log("Não Funcionou")
}

let caso1 = "50"
let caso2 = 50

if (caso1 > 30) {
    console.log('Passou');
}

if (caso1 == caso2) {
    console.log('Passou de novo');
}

if (caso1 === caso2) {
    console.log('É igual');
}

else {
    console.log('Não é igual');
}

for (let i = 0; i < 10; i++) {
    console.log('Volta ', i)
}

let frutas = ['Maça', 'Uva', 'Pera', 'Laranja']

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

for (let fruta of frutas) {
    console.log(fruta)
}

function somar(n1, n2) {
    return n1 + n2
}

console.log(somar(7,3))

function avisar() {
    alert('Esta é uma função')
}

let exemplo = function() {
    alert('Outro Exemplo')
}

let titulo = document.getElementById('titulo')
console.log(titulo)
console.log(typeof titulo);
console.log(titulo.innerHTML);
titulo.style.color = 'red'

let titulo1 = document.querySelector("#titulo") //Uma ocorrência
console.log(titulo1)

document.querySelectorAll(".corredor")[0].style.color = "blue"
document.querySelectorAll(".corredor")[1].style.color = "green"
document.querySelectorAll(".corredor")[2].style.color = "red"

document.querySelector(".corredor").style.backgroundColor = "yellow"