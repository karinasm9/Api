//CRUD (Create, read, update and delete)

import express from "express";
import db from "./config/dbConect.js";
import routes from "./routes/index.js";


db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => {
    console.log('Conexão com banco de dados feita com sucesso!!')
})

const app = express();
app.use(express.json())
routes(app);

/*const jogo = [
        {id: 1, "Título": "Karina"},
        {id: 2, "Título": "Paola"}
]

app.get('/',(req, res) => {
    res.status(200).send('Cinema');
})

app.get('/jogo',(req, res) => {
    jogo.find((err, jogo) => {
    res.status(200).json(jogo);
    })
})

app.post('/jogo', (req, res) => {
    jogo.push(req.body);
    res.status(201).send('Nomes cadastrados com sucesso');
})

app.put('/jogo/:id', (req, res) => {
    let index = buscaJogos(req.params.id);
    jogo[index].Título = req.body.Título;
    res.json(jogo)
})

app.delete('/jogo/:id', (req, res) => {
    let{id} = req.params;
    let index = buscaJogos(id);
    jogo.splice(index, 1);
    res.send(`Nome ${id} removido com sucesso`)
})

function buscaJogos(id) {
    return jogo.findIndex(jogo => jogo.id == id);
}
*/
export default app