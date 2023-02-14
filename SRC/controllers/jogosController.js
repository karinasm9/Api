import jogos from "../models/jogo.js";

class JogosController {
    static listarJogos = (req, res) => {
        jogos.find()
        .populate('plataforma')
        .exec((err, jogos) => {
            res.status(200).json(jogos);
        })
    }
   static cadastrarJogos = (req, res) => {
       let jogo = new jogos(req.body);

       jogo.save((err) => {
           if(err) {
               res.status(500).send({message: `${err.message} - Falha ao cadastrar o Jogo`});
           } else {
               res.status(201).send(jogo.toJSON())
           }
       })
   }

    static atualizarJogo = (req, res) => {
        const id = req.params.id;

    jogos.findByIdAndUpdate(id, {$set: req.body}, err => {
        if(!err){
            res.status(200).send({message: `Jogo atualizado com sucesso!!`});
        } else {
            res.status(500).send({err: err.menssage})
        }
    })    
    }
    static listarJogosPorId = (req, res) => {
        const id = req.params.id;

        jogos.findById(id, (err, jogo) => {
            if(err) {
                res.status(400).send({message: `${err.message} - id do jogo não localizada`});
            } else {
                res.status(200).send(jogo)
            }
        })
    }
    static excluirJogo = (req, res) => {
        const id = req.params.id;

        jogos.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: 'Jogo removido com sucesso'});
            } else{
                res.status(500).send({message: err.message})
            }
        })
    }
    static listarJogosPorProdutora = (req, res) => {
        const produtora = req.query.produtora

        jogos.find({'produtora': produtora}, {}, (err, jogos) => {
            res.status(200).send(jogos);
        })
    }
}

export default JogosController
