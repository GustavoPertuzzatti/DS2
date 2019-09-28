const repository = require('../repository/clienteMais.repository');
const estado = [];

module.exports = {


    find: (req, res) => {

        repository.find((error, result) => {
            if (error) {
                res.status(500).send(error);
            }

            const clientes = [];

            // Converte de relacional para objeto
            for (item of result) {
                let cliente = {
                    id: item.cliente_id,
                    codigo: item.codido_cliente,
                    nome: item.nome_cliente,
                    email: item.email,
                    cidade: { 
                        id: item.cidade_id, 
                        nome: item.cidade_nome,
                        estado: {
                            id: item.estado_id,
                            nome: item.estado_nome,
                            sigla: item.estado_sigla
                        }
                    },
                    tabelapreco: {
                        id: item.tabelapreco_id, 
                        codigo: item.tabelapreco_codigo, 
                        nome: item.tabelapreco_nome, 
                        fator: item.tabelapreco_fator
                    } 
                }
                clientes.push(cliente);
            };

            res.send(clientes);
        });

    }
}