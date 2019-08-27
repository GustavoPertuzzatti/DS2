const connection = require('../mysql-connection');

module.exports = {
    find: (callBack) => {
        connection.query('SELECT * FROM ESTADO', callBack);
    },
    findById: (params, callBack) => {
        connection.query('SELECT * FROM ESTADO WHERE ID = ?', [params.id], callBack);
    },
    create: (params, callback) => {
        connection.query('INSERT INTO ESTADO (NOME,SIGLA) VALUES(?,?)', [params.nome,
        params.sigla], callback);           
},
update: (params, callback) => {
    connection.query('UPDATE ESTADO SET NOME = ?, SIGLA = ? WHERE ID =', [params.nome,
        params.sigla, params.id], callback);      
},
    delete: (params, callBack) => {
        connection.query('DELETE FROM WHERE ID = ?', [params.id], callBack);
    },
}