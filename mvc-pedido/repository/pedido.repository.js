const connection = require('../mysql-connection');

const query = 'select PEDIDO.*, ' +
    'CLIENTE.ID AS CLIENTE_ID, CLIENTE.CODIGO AS CLIENTE_CODIGO, CLIENTE.NOME AS CLIENTE_NOME, CLIENTE.EMAIL AS CLIENTE_EMAIL, ' +
    'VENDEDOR.ID AS VENDEDOR_ID, VENDEDOR.CODIGO AS VENDEDOR_CODIGO, VENDEDOR.NOME AS VENDEDOR_NOME, VENDEDOR.EMAIL AS VENDEDOR_EMAIL ' +
    'FROM PEDIDO ' +
    'LEFT JOIN CLIENTE ON CLIENTE.ID = PEDIDO.CLIENTE_ID ' +
    'LEFT JOIN VENDEDOR ON VENDEDOR.ID = PEDIDO.VENDEDOR_ID'

const queryItens = 'SELECT ip.id as ip_id, ip.qtdade, ip.vlrunit, ' +
    'p.id as p_id, p.codigo, p.nome, p.descricao, p.preco ' +
    'FROM itempedido ip ' +
    'INNER JOIN produto p ON p.id = ip.produto_id ' +
    'WHERE ip.pedido_id = '

module.exports = {
    find: (callback) => {
        connection.query(query, (error, resultPedido) => {

            if (error) {
                callback(error, false);
                return;
            }

            const idPedido = resultPedido[0].ID;

            const queryItens = 'SELECT ip.id as ip_id, ip.qtdade, ip.vlrunit, ' +
                'p.id as p_id, p.codigo, p.nome, p.descricao, p.preco, IP.QTDADE ' +
                'FROM itempedido ip ' +
                'INNER JOIN produto p ON p.id = ip.produto_id ' +
                'WHERE ip.pedido_id = ' + idPedido;

            connection.query(queryItens, (error, resultItens) => {
                if (error) {
                    callback(error, false);
                    return;
                }

                const itens = [];

                for (item of resultItens) {

                    let itempedido = {
                        id: item.ip_id,
                        qtdade: item.qtdade,
                        vlrunit: item.vlrunit,
                        produto: {
                            id: item.p_id,
                            codigo: item.codigo,
                            nome: item.nome,
                            descricao: item.descricao,
                            preco: item.preco
                        }
                    }

                    itens.push(itempedido);

                }

                resultPedido[0].itens = itens;

                callback(error, resultPedido);
            });
        });
    },

    findById: (params, callback) => {

        const idPedido = params.id;
        connection.query(query + ' WHERE PEDIDO.ID =' + idPedido, (error, resultPedido) => {

            if (error) {
                callback(error, false);
                return;
            }
            const queryItens = 'SELECT ip.id as ip_id, ip.vlrunit, ' +
                'p.id as p_id, p.codigo, p.nome, p.descricao, p.preco, IP.QTDADE ' +
                'FROM itempedido ip ' +
                'INNER JOIN produto p ON p.id = ip.produto_id ' +
                'WHERE ip.pedido_id = ' + idPedido;

            connection.query(queryItens, (error, resultItens) => {
                if (error) {
                    callback(error, false);
                    return;
                }

                const itens = [];

                for (item of resultItens) {

                    let itempedido = {
                        id: item.ip_id,
                        qtdade: item.QTDADE,
                        vlrunit: item.vlrunit,
                        produto: {
                            id: item.p_id,
                            codigo: item.codigo,
                            nome: item.nome,
                            descricao: item.descricao,
                            preco: item.preco
                        }
                    }

                    itens.push(itempedido);

                }

                resultPedido[0].itens = itens;

                callback(error, resultPedido);
            });
        });
    },
    create: (params) => {
        connection.beginTransaction(error => {
            if (error) {
                callback(error, false);
                return
            };
            //Insere o cabeçalho do pedido   
            connection.query('INSERT INTO PEDIDO (CODIGO,DTPEDIDO,OBSERVACAO, VENDEDOR_ID, CLIENTE_ID) VALUES(?,?,?,?,?)',
                [params.codigo, params.dtPedido, params.observacao, params.vendedor_id, params.cliente_id], (error, cabecResult) => {
                    // Faz roolback, se error no cabecalho
                    if (error) {
                        connection.rollback(() => {
                            callback(error, false);
                            return;
                        })
                    };

                    const pedidoId = cabecResult.id;
                    //Monta query de insercao de itens
                    let queryAux = '';
                    let qrInsertItens = 'INSERT INTO ITEMPEDIDO (QUANTIDADE,VLRUNIT,PRODUTO_ID, PEDIDO_ID) VALUES';
                    //Insere os Itens do Pedido
                    for (item of params.itens) {

                        queryAux += queryAux == '' ? '' : ',';
                        queryAux += "(" + pedidoId + "," + item.produto.id + ", " + item.qtdade + ", " + item.vlrunit +
                            ")";

                        qrInsertItens = + queryAux;
                    }

                    connection.query(qrInsertItens, (error, itensResult) => {
                        if (error) {
                            connection.rollback(() => {
                                callback(error, false);
                                return;
                            })
                        };

                        connection.commit((error) => {
                            if (error) {
                                connection.rollback(() => {
                                    callback(error, false);
                                    return;
                                });

                                params.id = pedidoId;
                                callback(false, params);
                            };
                        })
                    });
                });
        });
    },

    update: (params, callback) => {

    },
    delete: (params, callBack) => {

    },
}