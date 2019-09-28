const connection = require('../mysql-connection');

const query = 'select   VENDEDOR.id as VENDEDOR_id, VENDEDOR.codigo as codido_VENDEDOR, VENDEDOR.nome as nome_VENDEDOR, VENDEDOR.email,cidade.id AS cidade_id, cidade.nome AS cidade_nome, estado.id as estado_id, estado.nome as estado_nome, estado.sigla as estado_sigla ' +
                'FROM VENDEDOR ' +
                'left join cidade on (VENDEDOR.cidade_id = cidade.id) '+ 
                'left JOIN estado ON (estado.id = cidade.estado_id) ';

module.exports = {
    find: (callBack) => {
        connection.query(query, callBack);
    }
}