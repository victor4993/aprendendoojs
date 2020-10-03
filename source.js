console.log("Ta rodando esse arquivo");

function calculaIMC(){
	//pegando os valores
	elemento_peso = document.getElementById("peso");
	elemento_altura = document.getElementById("altura");
	peso = elemento_peso.value;
	altura = elemento_altura.value;
	
	//calcula o imc
	imc = peso/(altura**2);

	//logando na tela
	console.log("peso: " + peso)
	console.log("altura: " + altura)
	console.log("imc: " + imc)
	
	//calcula o resultado
	resultado = "";
	if (imc < 17){
		resultado = "Ta magro, em linda?"
		console.log("Ta magro, em linda?");
	} else {
		resultado = "Gorda pra porra, em?"
		console.log("Gorda pra porra, em?");
	}

	//mostra o resultado na div resultado
	elemento_resultado = document.getElementById("resultado");
	elemento_resultado.innerHTML = "Seu peso é: " + peso + " Sua altura é " + altura + " IMC: " + imc + " Seu resultado é: " + resultado; 

}

