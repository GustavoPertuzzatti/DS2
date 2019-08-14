module.exports = app => {
    app.post('/tarefa01', (req,res) => {

        var cFabrica = req.body.custoFabrica;
        var PDistribuidor = req.body.percentualDistribuidor;
        var PImpostos = req.body.percentualImpostos;

        var resultado = cFabrica + ((cFabrica * (PDistribuidor/ 100)) + (cFabrica * (PImpostos/ 100)));

       /* console.log(`Custo de Fábrica: R$ ${cFabrica}`);  
        console.log(`% Distribuidor R$ ${PDistribuidor}%`);
        console.log(`% Impostos: ${PImpostos}%`);
        console.log(`Custo Final: R$ ${resultado}`);

        res.send(`Custo de Fábrica: R$ ${cFabrica} 
                       % Distribuidor: R$ ${PDistribuidor}% 
                       % Impostos: ${PImpostos}% 
                       Custo Final: R$ ${resultado} `);*/
  
        res.send({
            custoFabrica: cFabrica,
            percentualDistribuidor: PDistribuidor,  
            percentualImpostos: PImpostos,
            resultado: resultado
        });

        //res.json( {result: req.body.mensagem} );

    });
}