const http = require('http')

//criar a funcao genérica que vai responder as requisicoes do servidor
const tratarRespostaRequisicao = function(requisicao, resposta){
    resposta.writeHead(200, {'Content-Type': 'text/html'})
    resposta.write("<h1>Meu primeiro Servidor Web em Node.js</h1>")
    resposta.end();
}

//executa a funcao createServer do http que espera um tratamento de requisicao e devolve um servidor
const server = http.createServer(tratarRespostaRequisicao)

//executa o servidor na porta 3000 e notifica no console quando o servidor terminar de subir
server.listen(3000, function(){
    console.log(`Servidor no ar na porta 3000`);
})