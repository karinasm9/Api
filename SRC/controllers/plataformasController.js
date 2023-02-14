import plataformas from "../models/Plataformas.js"

class PlataformasController {
    static listarPlataforma = (req,res) => {
        plataformas.find((err, plataformas) =>{
            res.status(200).json(plataformas)
        })
    }
    static cadastrarPlataforma = (req,res) => {
        let plataforma = new plataformas(req.body);

        plataforma.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - Falha ao Cadastrar o Plataforma`});
            } else {
                res.status(201).send(plataforma.toJSON())
            }
        })
    }
    static atualizarPlataforma = (req, res) => {
        const id = req.params.id;

        plataformas.findByIdAndUpdate(id, {$set: req.body} , err => {
            if(!err){
                res.status(200).send({message: 'Plataforma Atualizado com Sucesso '});
            } else {
                res.status(500).send({err: err.message})
            }
        })
    }
    static listarPlataformaPorId = (req, res) => {
        const id = req.params.id;

        plataformas.findById(id, (err, plataforma) => {
            if(err) {
                res.status(400).send({message: `${err.message} - id da plataforma não encontrada`});
            } else {
                res.status(200).send(plataforma)
            }
        })
    }
    static excluirPlataforma = (req, res) => {
        const id = req.params.id;

        plataformas.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: 'Plataforma removida com sucesso!!'});
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default PlataformasController