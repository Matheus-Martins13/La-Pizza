const readMore = document.querySelector('.read-more');
const moreContent = document.querySelector('.more-content');
const send = document.querySelector('.send');
const message = document.querySelector('.message');

readMore.addEventListener('click', (e) => {
  moreContent.innerHTML = '<br/> A pizzaria é um patrimônio cultural brasileiro, onde reinventamos a culinária, de modo que só a gente sabe fazer. Fomos avaliados com nota máxima pelos maiores chefs do continente. Nós não somos apenas uma pizzaria, nós somos La Pizza, o lugar onde todo sabor é o sabor da sua vida.';
  readMore.delete;
});


send.addEventListener('click', (e) => {
  e.preventDefault();
  message.innerHTML = 'Mensagem enviada com sucesso!';
  message.classList.add('success', 'p-3');
});
