var argumentos = process.argv.splice(2),
		operacion = argumentos[0],
		valor1 = parseInt(argumentos[1],10),
		valor2 = parseInt(argumentos[2],10),
		nombreOperacion,resultado;

if(operacion === undefined || valor1 === undefined || valor2 === undefined)
{
	console.error("Alguno de los parametros no ha sido especificado.");
}
else
{
	switch(operacion)
	{
		case '*':{
			nombreOperacion = "multiplicacion";
			resultado = valor1*valor2;
			break;
		}
		case '+':{
			nombreOperacion = "suma";
			resultado = valor1 + valor2;
			break;
		}
		case '-':{
			nombreOperacion = "resta";
			resultado = valor1 - valor2;
			break;
		}
		case '/':{
			nombreOperacion = "division";
			resultado = valor1 / valor2;
			break;
		}
		case '^':{
			nombreOperacion = "potencia";
			resultado = Math.pow(valor1,valor2);
			break;
		}
		default:{
			console.error("La operacion %s no ha sido implementada",operacion);
			break;
		}
	}
	if (resultado !== undefined){
		console.log("El resultado de la %s es %d",nombreOperacion,resultado);
	}
}
