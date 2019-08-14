module.exports = app => {
    app.post('/tarefa02', (req,res) => {
    
        var vSalario = req.body.salario;
        var pReajuste = req.body.reajuste;

        var resultado = vSalario + ((vSalario * (pReajuste/ 100)));
  
        res.send({
            salario: vSalario,
            reajuste: pReajuste,  
            resultado: resultado
        });

    });
}