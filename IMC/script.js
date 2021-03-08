function verificar() {
    // Variaveis

    var nome = document.getElementById("nome").value
    var idade = document.getElementById("idade").value
    var altura = document.getElementById("altura").value
    var peso = document.getElementById("peso").value
    var resul = document.getElementById("resultotal")

    // Validação pra ver os campos estão preenchidos
    if (nome !== "" && altura !== "" && peso !== "") {
    // Calculo
        var imc = (peso/(altura*altura))
    // Condições
        var resultado = ""
        if (imc < 18.5){
            resultado = `<p>Olá, <big><strong>${nome}.</strong></big> Infelizmente você <strong>está abaixo do peso!</strong> <p>Cheque a tabela ao lado para saber mais.</p>`
        }else if (imc >= 18.5 && imc < 25){
            resultado = `<p>Olá, <big><strong>${nome}.</strong></big> Você está no <strong>seu peso ideal!</strong> <p>Cheque a tabela ao lado para saber mais.</p>`
        }else if (imc >= 25 && imc <= 29.9 ){
            resultado =  `<p>Olá, <big><strong>${nome}.</strong></big> Você está um pouco <strong>acima do seu peso ideal!</strong> <p>Cheque a tabela ao lado para saber mais.</p>`
        }else if (imc >= 30 && imc <= 34.9){
            resultado =  `<p>Olá, <big><strong>${nome}.</strong></big></p> Você está com <strong>Obesidade grau 1!</strong> <p>Cheque a tabela ao lado para saber mais.</p>`
        }else if (imc >= 35 && imc <= 39.9){
            resultado =  `<p>Olá, <big><strong>${nome}.</strong></big> Você está com <strong>Obesidade grau 2!</strong> <p>Cheque a tabela ao lado para saber mais.</p>`
        }else if (imc >= 40){
            resultado =  `<p>Olá, <big><strong>${nome}.</strong></big> Você está com <strong>Obesidade grau 3 ou Obesidade Mórbida!</strong> <p>Cheque a tabela ao lado para saber mais.</p>`
        }
        resul.innerHTML = `${imc.toFixed(1)}`
        resul.innerHTML += `<p>${resultado}<p>`
    }else {
        resul.innerHTML = "Por favor, preencha todos os campos!!"
    }
    resul.style.display = "block"
}

function resetar() {
    resul.innerHTML = "dsadsadsadsa"
    resul.style.display = "block"
    

}