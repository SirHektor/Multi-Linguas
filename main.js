function Escolher(idioma) {

    fetch(`textos_${idioma}.json`)
    .then(resposta => resposta.json())
    .then(texto => {
        document.getElementById('paragrafo1').innerHTML = texto.paragrafo1;
        document.getElementById('paragrafo2').innerHTML = texto.paragrafo2;
        document.getElementById('paragrafo3').innerHTML = texto.paragrafo3;
        document.getElementById('paragrafo4').innerHTML = texto.paragrafo4;
        document.getElementById('paragrafo5').innerHTML = texto.paragrafo5;
    })
    .catch(error => console.error('Erro buscando textos:', error));
}