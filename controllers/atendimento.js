const Atendimento = require('../models/atendimentos')

module.exports = app =>{

    app.get('/atendimentos', (req, res) => {
        Atendimento.lista(res)
    });

    app.get('/atendimentos/:id', (req, res) =>{
        const id =paseInt(req.params.id)

        Atendimento.buscaPorID(id, res)
    
    })

    app.post('/atendimentos',(req, res) =>{
        const atendimento = req.body

        atendimento.adiciona(atendimento, res)
    });

    app.patch('/atendimentos/:id', (req, res) =>{
        const id = parseInt(req.params.id)
        const valores = req.body

        Atendimento.altera(id, valores, res)
    })

    app.delete('/atendimentos/:id', (req, res) =>{
        const id = parseInt(req.params.id)

        Atendimento.deleta(id, res)
    })

}
