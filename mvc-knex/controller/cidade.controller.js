const repository = require('../repository/cidade.repository');

module.exports = {

    find: (req, res) => {

        repository.find(req.params).then(result => {

            if (result.length > 0) {
                //res.send(result[0]);

                console.log(result);

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


            } else {
                res.status(404).send('not found');
            }

        }).catch(error => {
            res.status(500).send(error);
        });
    },

    findByID: (req, res) => {

        repository.findById(req.params).then(result => {

            if (result.length > 0) {

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
            } else {
                res.status(404).send('not found');
            }

        }).catch(error => {
            res.status(500).send(error);
        });

    },

    create: (req, res) => {

        // Converte de objeto para relacional
        const cidade = {
            nome: req.body.nome,
            estado_id: req.body.estado.id
        }

        repository.create(cidade).then(result => {
            req.body.id = result[0];

            res.send(req.body);
        }).catch(error => {
            res.status(500).send(error);
        });
    },


    update: (req, res) => {


        // Converte de objeto para relacional
        const cidade = {
            id: req.params.id,
            nome: req.body.nome,
            estado_id: req.body.estado.id
        }

        repository.update(cidade).then(result => {
            if (result.affectedRows == 0) {
                res.status(404).send();
            }
            res.send(req.body);
        }).catch(error => {
            res.status(500).send(error);
        })
    },

    delete: (req, res) => {
        repository.delete(req.params).then(result => {

            if (result.length > 0) {
                res.send(result[0]);
            } else {
                res.status(404).send('not found');
            }

        }).catch(error => {
            res.status(500).send(error);
        });
    }
}