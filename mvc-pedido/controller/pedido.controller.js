const repository = require('../repository/pedido.repository');
const pedido = [];

//////////////////////////////////////////////////////////////////////////
//               AINDA NÃO AJUSTEI O RESTANTE DO ARQUIVO               ///
//////////////////////////////////////////////////////////////////////////
module.exports = {

    find: (req, res) => {

        repository.find((error, result) => {
            if (error) {
                res.status(500).send(error);
            }

       
            const pedidoes = [];

            // Converte de relacional para objeto
            for (item of result) {
                let pedido = {
                    codigo: item.CODIGO,
                    dtpedido: item.DTPEDIDO,
                    observacao: item.OBSERVACAO,
                    cliente_id: item.CLIENT_ID
                }
                pedidoes.push(pedido);
            };

            res.send(pedidoes);
        });

    },

    findByID: (req, res) => {

        repository.findById(req.params, (error, result) => {
            if (error) {
                res.status(500).send(error);
            };

            const pedidos = [];

            // Converte de relacional para objeto
            for (item of result) {
                let pedido = {
                    codigo: item.CODIGO,
                    dtpedido: item.dtpedido,
                    observacao: item.observacao,
                    cliente_id: item.cliente_id
                }
                pedidos.push(pedido);
            };

            res.send(pedidos);

        });

    },

    create: (req, res) => {

        // Converte de objeto para relacional
        const pedido = {
            codigo: req.body.codigo,
            nome: req.body.nome,
            email: req.body.email
        }

        repository.create(pedido, (error, result) => {
            if (error) {
                res.status(500).send(error);
            }

            res.send(result);
        });

    },

    update: (req,res) => {
        //Atualiza o id do objeto do req.body
        req.body.id = req.params.id;

        repository.update(req.body, (error, result) => {
            if (error) {
                res.status(500).send(error);
            }

            if (result.affectedRows == 0 ) {
                res.status(404).send();                
            }

            res.send(result);
        });
    },

    delete: (req, res) => {
        repository.delete(req.params, (error, result) => {
            if (error) {
                res.status(500).send(error);
            }

            res.status(204).send();
        });
    }

}