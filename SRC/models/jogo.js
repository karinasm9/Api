import mongoose from "mongoose";

const jogoSchema = new mongoose.Schema(
    {
        id: {type: String},
        titulo: {type: String, required: true},
        produtora: {type: String, required: true},
        plataforma: {type: String, required: true},
        ano: {type: Number}
    }   
)

const jogos = mongoose.model('jogos', jogoSchema);

export default jogos