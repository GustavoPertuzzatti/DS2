const connection = require('../mysql-connection');

module.exports = {
    find: (callBack) => {
        connection.query('SELECT * FROM TABELAPRECO', callBack);
    },
    findById: (params, callBack) => {
        connection.query('SELECT * FROM TABELAPRECO  WHERE TABELAPRECO.ID = ?', [params.id], callBack);
    },
    create: (params, callback) => {
        connection.query('INSERT INTO TABELAPRECO (CODIGO, NOME, FATOR) VALUES(?,?,?)', [params.codigo,
        params.nome, params.fator], callback);           
    },
    update: (params, callback) => {
        connection.query('UPDATE TABELAPRECO SET CODIGO = ?, NOME = ?, FATOR = ? WHERE ID = ?', [params.codigo, params.nome,
            params.fator, params.id], callback);      
    },
        delete: (params, callBack) => {
            connection.query('DELETE FROM TABELAPRECO WHERE ID = ?', [params.id], callBack);
        },
}