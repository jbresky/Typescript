const multiplicator = (a, b, printText) => {
    console.log(printText, a * b);
    
}
console.log(process.argv);

const parseArguments = (args): Array<number> => {
    if(args.length !== 4) throw new Error('Wrong number of arguments')
    // posición uno y cero corresponden a la compilacion de ts-node y la ejecucion del archivo multiplier respectivamente

    const firstNumber = Number(args[2])
    const secondNumber = Number(args[3])
    //los dos numeros de la multiplicacion que se pasan como argumentos son string, se deben volver números

    if(!isNaN(firstNumber) && !isNaN(secondNumber)){
        return [
            firstNumber,
            secondNumber
        ] 
        // devuelve un array de numeros
     }
     throw new Error('Provided values were not numbers');
}

const cleanArguments = parseArguments(process.argv)

const a: number = Number(cleanArguments[0])
const b: number = Number(cleanArguments[1])

multiplicator(a, b, `${a} * ${b} is equal to: `)