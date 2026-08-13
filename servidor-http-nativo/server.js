const http = require('node:http');

const PORTA = 3000;

const server = http.createServer((req, res) =>{

    console.log(`Requisicao recebida! ${req.method} ${req.irI}`)

    res.statusCode = 201;
    res.setHeader('Content-Type' , ' application/json; charset=utf-8');

    res.end(JSON.stringify({ status: "ok" }))
});

server.listen(PORTA, () =>{
    console.log(`Servidor funcionando na porta ${PORTA}`)
    console.log(`${new Date().toISOString()}`);
});


