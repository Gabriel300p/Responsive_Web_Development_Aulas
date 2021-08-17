// document.querySelector('#btnMensagem').onclick = function() {
//     alert('Este evento esta no arquivo externo.')
// }

document.querySelector('#btnMensagem').onclick = () => {
    alert('Agora usando um arrow function')
}

let correr = (velocidade) => console.log('O carro esta correndo a' + velocidade)

correr(100)