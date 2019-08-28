const repository = require('../repository/cidade.repository');
const cidade = [];

module.exports = {

    find: (req, res) => {

        repository.find((error, result) => {
            if (error) {
                res.status(500).send(error);
            }

            const cidades = [];

            // Converte de relacional para objeto
            for (item of result) {
                let cidade = {
                    id: item.cidade_id,
                    nome: item.cidade_nome,
                    estado: {
                        id: item.estado_id,
                        nome: item.estado_nome,
                        sigla: item.estado_sigla
                    }
                }
                cidades.push(cidade);
            };

            res.send(cidades);
        });

    },

    findByID: (req, res) => {

        repository.findById(req.params, (error, result) => {
            if (error) {
                res.status(500).send(error);
            };

            const cidades = [];

            // Converte de relacional para objeto
            for (item of result) {
                let cidade = {
                    id: item.cidade_id,
                    nome: item.cidade_nome,
                    estado: {
                        id: item.estado_id,
                        nome: item.estado_nome,
                        sigla: item.estado_sigla
                    }
                }
                cidades.push(cidade);
            };

            res.send(cidades);

        });

    },

    create: (req, res) => {

        // Converte de objeto para relacional
        const cidade = {
            nome: req.body.nome,
            estado_id: req.body.estado.id
        }

        repository.create(cidade, (error, result) => {
            if (error) {
                res.status(500).send(error);
            }

            res.send(result);
        });

    },

    update: (req, res) => {
        // Converte de objeto para relacional
        const cidade = {
            id: req.params.id,
            nome: req.body.nome,
            estado_id: req.body.estado.id
        }

        repository.update(cidade, (error, result) => {
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