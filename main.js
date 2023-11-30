// function Escolher(idioma) {

//     fetch(`textos_${idioma}.json`)
//     .then(resposta => resposta.json())
//     .then(texto => {

//         document.getElementById('paragrafo1').innerHTML = texto.paragrafo1;
//         document.getElementById('paragrafo2').innerHTML = texto.paragrafo2;
//         document.getElementById('paragrafo3').innerHTML = texto.paragrafo3;
//         document.getElementById('paragrafo4').innerHTML = texto.paragrafo4;
//         document.getElementById('paragrafo5').innerHTML = texto.paragrafo5;

//     })
//     .catch(error => console.error('Erro buscando textos:', error));
// }

const titulo = document.getElementById('titulo');
const paragrafo1 = document.getElementById('paragrafo1');
const paragrafo2 = document.getElementById('paragrafo2');
const paragrafo3 = document.getElementById('paragrafo3');
const paragrafo4 = document.getElementById('paragrafo4');
const paragrafo5 = document.getElementById('paragrafo5');

let conteudos = document.querySelectorAll('.conteudo');


function Escolher(idioma){
    fetch(`textos_${idioma}.json`)
        .then(resposta => resposta.json())
        .then(texto => {


            titulo.style.opacity = 0;
            conteudos.forEach(conteudo => {
                conteudo.style.opacity = 0;
            })
            
            setTimeout( () => {
                titulo.innerHTML = texto.titulo;
                paragrafo1.innerHTML = texto.paragrafo1;
                paragrafo2.innerHTML = texto.paragrafo2;
                paragrafo3.innerHTML = texto.paragrafo3;
                paragrafo4.innerHTML = texto.paragrafo4;
                paragrafo5.innerHTML = texto.paragrafo5;
            },1000)

            setTimeout(() => {
                conteudos.forEach(conteudo => {
                    conteudo.style.opacity = 1;
                })
                titulo.style.opacity = 1;
            }, 1500)
        })
        .catch(error => console.error('Erro buscando textos: ', error));
}
escolher('ptbr')