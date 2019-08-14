const persons = [];

module.exports = {

    find: (req,res) => {
        res.send(persons);
    },

    create: (req,res) => {
        const person = req.body;

        persons.push(person);

        res.send(person);
    },

    findByID: (req,res) => {
        const {id} = req.params;

        res.send(persons[id-1]);
    },

    update: (req,res) => {
        const {id} = req.params;
        const person = req.body;

        persons[id-1] = person;

//        persons.push(); Não precisa.

        res.send(person);
    },

    delete: (req,res) => {
        const {id} = req.params;

        persons.splice(id-1, 1)

        res.send(204).send();      
    }

}