import express from "express";
import PlataformasController from "../controllers/plataformasController.js";

const router = express.Router();
router
     .get("/plataforma", PlataformasController.listarPlataforma)
     .get("/plataforma/:id", PlataformasController.listarPlataformaPorId)
     .post("/plataforma", PlataformasController.cadastrarPlataforma)
     .put("/plataforma/:id", PlataformasController.atualizarPlataforma)
     .delete("/plataforma/:id", PlataformasController.excluirPlataforma)

export default router;