const knex = require('../mysql-connection');

module.exports = {
    find: () => {
       return knex('cidade')
        .join('estado', 'estado.id', '=', 'cidade.estado_id')
        .select('cidade.id AS cidade_id', 'cidade.nome AS cidade_nome', 'estado.id AS estado_id', 'estado.nome AS estado_nome', 'estado.sigla AS estado_sigla')
    
    },    
    findById: (params) => {
        return knex('cidade')
        .join('estado', 'estado.id', '=', 'cidade.estado_id')
        .select('cidade.id AS cidade_id', 'cidade.nome AS cidade_nome', 'estado.id AS estado_id', 'estado.nome AS estado_nome', 'estado.sigla AS estado_sigla')
        .where('cidade.id', params.id)
    }, 
    create: (params) => {
        return knex.insert(params).into('CIDADE');
    },
    update: (params) => {
        return knex('CIDADE').update(params).where({ id: params.id });
    },

    delete: (params) => {
        return knex('CIDADE').del().where({ id: params.id });
    }
}