const connection = require('../mysql-connection');

const query = 'SELECT c.id AS cidade_id, c.nome AS cidade_nome, e.id AS estado_id, e.nome AS estado_nome, e.sigla AS estado_sigla FROM cidade c ' + 
              'INNER JOIN estado e ON (e.id = c.estado_id)';

module.exports = {
    find: (callBack) => {
        connection.query(query, callBack);
    },
    findById: (params, callBack) => {
        connection.query('SELECT c.id AS cidade_id, c.nome AS cidade_nome, e.id AS estado_id, e.nome AS estado_nome, e.sigla AS estado_sigla FROM cidade c INNER JOIN estado e ON (e.id = c.estado_id)  WHERE c.ID = ?', [params.id], callBack);
    },
    create: (params, callback) => {
        connection.query('INSERT INTO CIDADE (NOME,estado_id) VALUES(?,?)', [params.nome,
        params.estado_id], callback);           
    },
    update: (params, callback) => {
        connection.query('UPDATE CIDADE SET NOME = ?, estado_id = ? WHERE ID = ?', [params.nome,
            params.estado_id, params.id], callback);      
    },
        delete: (params, callBack) => {
            connection.query('DELETE FROM WHERE ID = ?', [params.id], callBack);
        },
}