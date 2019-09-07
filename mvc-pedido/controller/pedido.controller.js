const repository = require('../repository/pedido.repository');
const itemRepository = require('../repository/itemPedido.repository');
const moment = require('moment');
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
                    id: item.ID,
                    codigo: item.CODIGO,
                    dtpedido: moment(item.DTPEDIDO).format('YYYY-MM-DD'),
                    observacao: item.OBSERVACAO,
                    cliente: {
                        id: item.CLIENTE_ID,
                        codigo: item.CLIENTE_CODIGO,
                        nome: item.CLIENTE_NOME,
                        email: item.CLIENTE_EMAIL
                    },
                    vendedor: {
                        id: item.VENDEDOR_ID,
                        codigo: item.VENDEDOR_CODIGO,
                        nome: item.VENDEDOR_NOME,
                        email: item.VENDEDOR_EMAIL
                    }
            /// Aqui virá a chado do itemPedido, retornando os itens do pedido (PRetendo implementar isso indo para ctba)              
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
            }
            res.send(pedidos);
        })
    },
    create: (req, res) => {

    },

    update: (req,res) => {

    },

    delete: (req, res) => {

    }

}