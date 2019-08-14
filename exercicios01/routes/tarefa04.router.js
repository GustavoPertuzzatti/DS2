module.exports = app => {
    app.get('/tarefa04', (req,res) => {
    
        var nNumero = req.query.numero;

        if (nNumero >= 0) {
            var resultado = `O número ${nNumero}, enviado por parâmetro, é POSITIVO`;
        }else{
            var resultado = `O número ${nNumero}, enviado por parâmetro, é NEGATIVO`;
        }
        
  
        res.send(
            resultado
        );

    });
}