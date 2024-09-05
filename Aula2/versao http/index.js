
const mod1 = require('./modulo1')
const mod2 = require('./modulo2')

let mensagem = mod1.fn("Hello World!")

console.log(mod2.imprimirMsg(mensagem))

//ou decompor o mod2

const {imprimirMsg, imprimirTxt} = require('./modulo2')


console.log(imprimirMsg(mensagem))