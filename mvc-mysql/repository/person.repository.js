const connection = require('../mysql-connection');

module.exports = {

    find: (callback) => {
        connection.query('SELECT * FROM PERSON', callback);
},

    findById: (params, callback) => {        
        connection.query('SELECT * FROM PERSON WHERE ID = ?', [params.id], callback);
},

    create: (params, callback) => {
            connection.query('INSERT INTO PERSON (NAME,GENDER,AGE) VALUES(?,?,?)', [params.name,
            params.gender, params.age], callback);           
    },

    update: {},
    delete: {}
};