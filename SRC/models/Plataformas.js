import mongoose from "mongoose";

const plataformaSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        país: {type: String, required: true}
    }   
)

const plataformas = mongoose.model('plataformas', plataformaSchema);

export default plataformas