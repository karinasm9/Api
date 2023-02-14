import express from "express";
import plataformas from "./plataformaRoutes.js";
import jogos from "./jogoRoutes.js";


const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Aprendendo node"});
    })
    app.use(
        express.json(),
        jogos,
        plataformas
    )
}

export default routes