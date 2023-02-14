import express from "express";
import JogosController from "../controllers/jogosController.js";

const router = express.Router();

router
    .get("/jogos", JogosController.listarJogos)
    .get("/jogos/busca", JogosController.listarJogosPorProdutora)
    .get("/jogos/:id", JogosController.listarJogosPorId)
    .post("/jogos", JogosController.cadastrarJogos)
    .put("/jogos/:id", JogosController.atualizarJogo)
    .delete("/jogos/:id", JogosController.excluirJogo)
        
export default router;