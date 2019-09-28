const repository = require('../repository/vendedorMais.repository');
const estado = [];

module.exports = {


    find: (req, res) => {

        repository.find((error, result) => {
            if (error) {
                res.status(500).send(error);
            }

            const vendedors = [];

            // Converte de relacional para objeto
            for (item of result) {
                let vendedor = {
                    id: item.VENDEDOR_id,
                    codigo: item.codido_VENDEDOR,
                    nome: item.nome_vendedor,
                    email: item.email,
                    cidade: { 
                        id: item.cidade_id, 
                        nome: item.cidade_nome,
                        estado: {
                            id: item.estado_id,
                            nome: item.estado_nome,
                            sigla: item.estado_sigla
                        }
                    } 
                }
                vendedors.push(vendedor);
            };

            res.send(vendedors);
        });

    }
}