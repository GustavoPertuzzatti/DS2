const repository = require('../repository/tabelaPreco.repository');
const cidade = [];

module.exports = {

    find: (req, res) => {

        repository.find((error, result) => {
            if (error) {
                res.status(500).send(error);
            }

            const tabelaPreco = [];

            // Converte de relacional para objeto
            for (item of result) {
                let tabela = {
                    id: item.ID,
                    codigo: item.CODIGO,
                    nome: item.NOME,
                    fator: item.FATOR
                }
                tabelaPreco.push(tabela);
            };

            res.send(tabelaPreco);
        });

    },

    findByID: (req, res) => {

        repository.findById(req.params, (error, result) => {
            if (error) {
                res.status(500).send(error);
            };

            const tabelaPreco = [];

            // Converte de relacional para objeto
            for (item of result) {
                let tabela = {
                    id: item.ID,
                    codigo: item.CODIGO,
                    nome: item.NOME,
                    fator: item.FATOR
                }
                tabelaPreco.push(tabela);
            };

            res.send(tabelaPreco);

        });

    },

    create: (req, res) => {

        // Converte de objeto para relacional
        const tabelaPreco = {
            codigo: req.body.codigo,
            nome: req.body.nome,
            fator: req.body.fator
        }

        repository.create(tabelaPreco, (error, result) => {
            if (error) {
                res.status(500).send(error);
            }

            res.send(result);
        });

    },

    update: (req, res) => {

        //Atualiza o id do objeto do req.body
        req.body.id = req.params.id;

        repository.update(req.body, (error, result) => {
            if (error) {
                res.status(500).send(error);
            }

            if (result.affectedRows == 0) {
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