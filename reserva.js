
function finalizarReserva() {

    //pegando os valores do html
    let dataReservada = document.getElementById("dataReserva").value
    let inputDataReserva = new Date(dataReservada)
    let diaAtual = new Date()
    let numPessoas = document.getElementById("numeroPessoas").value

    //variaveis para validacao de informacoes
    let validacaoData
    let validacaoNumPessoas

    validacaoNumPessoas = numPessoas >= 2 //se >=2, true, do contrario, false
    validacaoData = inputDataReserva > diaAtual //se reserva > dia atual, true, do contrario, false

    //apresentacao validacao no html
    if (validacaoData == true && validacaoNumPessoas == true) {
        document.getElementById("resultadoReserva").innerHTML = "Reserva confirmada com sucesso!"
    }

    if (validacaoData == true && validacaoNumPessoas == false) {
        document.getElementById("resultadoReserva").innerHTML = "Sua reserva deve ter no mínimo 2 pessoas!"
        document.getElementById("numeroPessoas").value = ""
    }

    if (validacaoData == false && validacaoNumPessoas == true) {
        document.getElementById("resultadoReserva").innerHTML = "A data da sua reserva não pode ser anterior ao dia de hoje!"
        document.getElementById("dataReserva").value = ""
    }

}