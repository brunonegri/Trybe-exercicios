/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */
function corretorP(elemento,texto) {
    document.getElementsByTagName(elemento)[1].innerText = texto;
  }
  corretorP('p', 'Dev Pleno Fullstack Web')

  function squareColorChanceGreen(elemento, cor) {
    document.getElementsByClassName(elemento)[0].style.backgroundColor =
      cor;
  }
  squareColorChanceGreen("main-content", "rgb(76,164,109)");

  function squareColorChanceWhite(elemento, cor) {
    document.getElementsByClassName(elemento)[0].style.backgroundColor =
      cor;
  }
  squareColorChanceWhite("center-content", "white");
  function corretorH1(elemento, texto) {
    document.getElementsByClassName(elemento)[0].innerText = texto;
  }
  corretorH1('title','Exercício 5.1 - JavaScript')

  function tudoMaiusculo(elemento) {
    let texto = document.getElementsByTagName(elemento)[0,1,2]
    texto.innerText = texto.innerText.toUpperCase()
  }
  tudoMaiusculo('p')

  function showLog() {
    let elemento = document.getElementsByTagName('p');
    for (let index = 0; index < elemento.length; index += 1) {
      console.log(elemento[index].innerHTML);
    }
  }
  showLog();