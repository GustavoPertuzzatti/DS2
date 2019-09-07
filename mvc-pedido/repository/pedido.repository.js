const connection = require('../mysql-connection');

module.exports = {
    find: (callBack) => {
        connection.query('select PEDIDO.*, '+ 
        'CLIENTE.ID AS CLIENTE_ID, CLIENTE.CODIGO AS CLIENTE_CODIGO, CLIENTE.NOME AS CLIENTE_NOME, CLIENTE.EMAIL AS CLIENTE_EMAIL, '  + 
        'VENDEDOR.ID AS VENDEDOR_ID, VENDEDOR.CODIGO AS VENDEDOR_CODIGO, VENDEDOR.NOME AS VENDEDOR_NOME, VENDEDOR.EMAIL AS VENDEDOR_EMAIL '  + 
        'FROM PEDIDO ' + 
        'LEFT JOIN CLIENTE ON CLIENTE.ID = PEDIDO.CLIENTE_ID ' +
        'LEFT JOIN VENDEDOR ON VENDEDOR.ID = PEDIDO.VENDEDOR_ID', callBack);
    },
    findById: (params, callBack) => {

    },
    create: (params, callback) => {
         
    },
    update: (params, callback) => {
    
    },
    delete: (params, callBack) => {

    },
}