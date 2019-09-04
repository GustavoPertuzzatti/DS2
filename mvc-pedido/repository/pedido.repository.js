const connection = require('../mysql-connection');

//////////////////////////////////////////////////////////////////////////
//               AINDA NÃO AJUSTEI O RESTANTE DO ARQUIVO               ///
//////////////////////////////////////////////////////////////////////////

module.exports = {
    find: (callBack) => {
        connection.query('select * from pedido', callBack);
    },
    findById: (params, callBack) => {
        connection.query('SELECT * FROM pedido WHERE ID = ?', [params.id], callBack);
    },
    create: (params, callback) => {
        connection.query('INSERT INTO CLIENTE (CODIGO,NOME,EMAIL) VALUES(?,?,?)', [params.codigo, params.nome,
        params.email], callback);           
    },
    update: (params, callback) => {
        connection.query('UPDATE CLIENTE SET CODIGO = ?, NOME = ?, EMAIL = ? WHERE ID = ?', [params.codigo, params.nome,
            params.email, params.id], callback);      
    },
        delete: (params, callBack) => {
            connection.query('DELETE FROM CLIENTE WHERE ID = ?', [params.id], callBack);
        },
}