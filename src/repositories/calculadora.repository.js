class Calculadora {

    calcular = (tipo, a, b) => {
        switch(tipo){
            case "soma":
            case "+":  
                return(`Resultado: ${a} + (${b}) = ${a + b}`);
            case "sub":
            case "-": 
                return(`Resultado: ${a} - (${b}) = ${a - b}`); 
            case "mult":
            case "*": 
                return(`Resultado: ${a} * (${b}) = ${a * b}`);
            case "div":
            case "/":  
                return(`Resultado: ${a} / (${b}) = ${a / b}`);
            case "resto":
            case "%":  
                return(`Resultado: ${a} % (${b}) = ${a % b}`);
            case "exp":
            case "^":  
                return(`Resultado: ${a} ^ (${b}) = ${a ** b}`);
            default: 
                return(`Operação ${tipo} não suportada. Os tipos válidos para GET são soma, sub, mult, div, resto e exp e para o POSt são +, -, *, /, %, ^.`);
        }
    }
    
}

module.exports= new Calculadora();