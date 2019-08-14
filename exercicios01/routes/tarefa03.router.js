module.exports = app => {
    app.get('/tarefa03', (req,res) => {
    
        var nNumero = req.query.numero;

        if ((nNumero % 2) >= 1)  {
            res.send(`O número ${nNumero}, enviado por parâmetro, é ÍMPAR`);
        }else{
            res.send(`O número ${nNumero}, enviado por parâmetro, é PAR`);
        }
    });
}