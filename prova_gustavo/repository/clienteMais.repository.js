const connection = require('../mysql-connection');

const query = '  select cliente.id as cliente_id, ' +
                        'cliente.codigo as codido_cliente, ' + 
                        'cliente.nome as nome_cliente, ' + 
                        'cliente.email, ' + 
                        'cidade.id AS cidade_id, ' + 
                        'cidade.nome AS cidade_nome, ' + 
                        'estado.id as estado_id, ' +  
                        'estado.nome as estado_nome, ' + 
                        'estado.sigla as estado_sigla, ' +
                        'tabelapreco.id AS tabelapreco_id, ' + 
                        'tabelapreco.codigo AS tabelapreco_codigo, ' + 
                        'tabelapreco.nome AS tabelapreco_nome, ' + 
                        'tabelapreco.fator AS tabelapreco_fator ' + 
                   'FROM cliente ' + 
                   'left join cidade on (cliente.cidade_id = cidade.id) ' + 
                   'left JOIN estado ON (estado.id = cidade.estado_id) ' + 
                   'left join tabelapreco on (cliente.TABELAPRECO_ID = tabelapreco.id)';

module.exports = {
    find: (callBack) => {
        connection.query(query, callBack);
    }
}