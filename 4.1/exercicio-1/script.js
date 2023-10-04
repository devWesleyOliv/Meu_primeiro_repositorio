document.getElementById("page-title").innerText = "Harry Potter";

document.getElementById("first-paragraph").innerText = "Meu Malvado Favorito";

document.getElementById("subtitle").innerText = "E a pedra filosofal";

const paragraphs = document.getElementsByClassName("paragraph-style");
const firstParagraph = paragraphs[0];
firstParagraph.style.fontStyle = "italic";

const secondParagraph = document.getElementById('second-paragraph');
secondParagraph.innerText = 'Direção: Wesley Oliveira. Roterista: Thaymara'

const subtitle = document.getElementsByTagName('h2');
subtitle[0].style.color = 'yellow';
