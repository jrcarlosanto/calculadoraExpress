const express = require('express');
const Calculadora = require ('../repositories/calculadora.repository');
const calcularRoute = express.Router();

calcularRoute.get('/:tipo', (req, res) => { // /tipo?a=1&b=2
    const tipo = req.params.tipo; //pegar soma, mult, div, resto
    const numero1 = parseInt(req.query.a); //pegar a=1
    const numero2= parseInt(req.query.b); //pegar b=1

    if(isNaN(numero1) && isNaN(numero2) ){
        res.send(`Falta o primeiro e segundo número. A consulta de ser assim http://localhost:3000/tipo?a=1&b=1`);
    }else if(isNaN(numero1)){
        res.send(`Falta o primeiro número. A consulta de ser assim http://localhost:3000/tipo?a=1&b=1`);    
    }else if(isNaN(numero2)){
        res.send(`Falta o segundo número. A consulta de ser assim http://localhost:3000/tipo?a=1&b=1`);    
    } else{
        const resultado = Calculadora.calcular(tipo, numero1, numero2);
        res.send(resultado);
    }

});

module.exports=calcularRoute;
