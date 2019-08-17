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

    update: (params, callback) => {

        connection.query('UPDATE PERSON SET NAME = ?, GENDER = ?, AGE = ? WHERE ID = ?', [params.name,
            params.gender, params.age, params.id], callback);  
        
    },

    delete: (params, callback) => { 
        connection.query('DELETE FROM PERSON WHERE ID = ?', [params.id], callback);
       
    }
};