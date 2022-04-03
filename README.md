# Comados

Calculadora feita pelo métodos get e post através do express.

## Instalar as depedências

1. npm install

## Executar server

1. npm start

## Consultas

### GET

1. http://localhost:3000/soma?a=1&b=1
2. http://localhost:3000/sub?a=1&b=1
3. http://localhost:3000/mult?a=1&b=1
4. http://localhost:3000/div?a=1&b=1
5. http://localhost:3000/resto?a=1&b=1
6. http://localhost:3000/exp?a=1&b=1

### POST

1. http://localhost:3000/calculadora
2. Json do POST: 
{
   "numero1": 12,
   "numero2": 12,
   "operador": "+"
}


## Depedências

1. express para criar o server.
2. nodemon para atualizar o server sem precisa ficar derrubando o server.
