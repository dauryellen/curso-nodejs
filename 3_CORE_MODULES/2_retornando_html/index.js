const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    // envia HTML
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Olá, este é um servidor com HTML!</h1>");
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});