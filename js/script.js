var botao = document.querySelector("#my-egg");
const musica = new Audio("./musicas/erroplanejado.mp3");


document.querySelector("#enviar").addEventListener('click', () =>{
    var nome = document.querySelector("#input-nome").value;

    if (nome != "") {
        alert('Obrigado sr(a) ' + nome + ' os seus dados foram encaminhados com sucesso');
    } 
});





    var nome = document.querySelector("#input-nome").value;

    if (nome != "") {
        alert('Obrigado sr(a) ' + nome + ' os seus dados foram encaminhados com sucesso');
    }







function tocarMusica(song, id, pause) {
    musica.src = song;
    musica.play();
    document.querySelector(pause).style.display = "block";
    document.querySelector(id).style.display = "none";

}

function pausarMusica(song, id, play) {
    musica.src = song;
    musica.pause();
    document.querySelector(id).style.display = "none";
    document.querySelector(play).style.display = "block";

}