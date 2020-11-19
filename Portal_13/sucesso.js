var http = require ('http')

http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type' : 'text/plain'});

    response.end('PROVA ENVIADA COM SUCESSO')
}).listen(5001);


console.log('Servidor esta rodando na porta 5001')