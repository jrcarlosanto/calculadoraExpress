class Calculadora {

    calcular = (tipo, a, b) => {
        switch(tipo){
            case "soma": 
                return(`Resultado: ${a} + (${b}) = ${a + b}`);
            case "sub":
                return(`Resultado: ${a} - (${b}) = ${a - b}`); 
            case "mult":
                return(`Resultado: ${a} * (${b}) = ${a * b}`);
            case "div": 
                return(`Resultado: ${a} / (${b}) = ${a / b}`);
            case "resto": 
                return(`Resultado: ${a} % (${b}) = ${a % b}`);
            case "exp": 
                return(`Resultado: ${a} ^ (${b}) = ${a ** b}`);
            default: 
                return(`Operação ${tipo} não suportada. Os tipos válidos são soma, sub, mult, div, resto e exp.`);
        }
    }
    
}

module.exports= new Calculadora();