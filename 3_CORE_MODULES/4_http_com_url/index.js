const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    const urlInfo = require("url").parse(req.url, true);
    const name = urlInfo.query.name;

    res.statusCode = 200;
    // envia HTML
    res.setHeader("Content-Type", "text/html");

    if (!name) {
        res.end(
            `<h1>Preencha o seu nome: </h1>
            <form method="GET">
                <input type="text" name="name" />
                <input type="submit" value="Enviar" />
            </form>`
        );
    } else {
        res.end(`<h1>Seja bem-vindo(a), ${name} </h1>`);
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});