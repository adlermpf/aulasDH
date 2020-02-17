const http = require('http');

const server = http.createServer((req, res) => {
    
    if(req.url == "/pets"){
        return res.end("Aqui eu estou listando pets");
    }

    res.end("Olá Mundo");
}).listen(3000, "localhost", () => {
    console.log("servidor rodando :)");
});