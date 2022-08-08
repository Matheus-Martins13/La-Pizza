const send = document.querySelector('.send');
const message = document.querySelector('.message');

send.addEventListener('click', (e) => {
  e.preventDefault();
  message.innerHTML = 'Mensagem enviada com sucesso!';
  message.classList.add('success', 'p-3');
});
