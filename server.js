import app from "./SRC/app.js";
const port = process.env.PORT || 3000;

/*const rotas = {
    '/': 'Aprender Node',
    '/jogos': 'Pagina de Jogos',
    '/genero': 'Pagina de Generos',
    '/produtoras': 'Lista de Produtoras'
}*/

/*const server = http.createServer((req, res) => 
    {res.writeHead(200, {'Content-Type': 'text/plain'});
    //res.end("Apendendo Node"); 
    res.end(rotas[req.url]);
})*/

app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})
