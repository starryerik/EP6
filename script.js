function silco(){
    var respostaCerta = "correta";
    var respostaUsuario = document.querySelector('input[name="resposta"]:checked');

    if(respostaUsuario){
        if(respostaUsuario.value == respostaCerta){
            document.getElementById("retorno").innerHTML = "BIIIOGOOO IGOBIGOBIGO";
        }
        else{
            document.getElementById("retorno").innerHTML = "UUGIGIGIOOOO BIOOGOOOO :(";
        }
    }
    else{
        alert("está contente com as escolhas que anda fazendo nessa sua encarnação?");
    }
}