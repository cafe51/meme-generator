const inputText = document.querySelector('#text-input');

function mostraOtexto() {
  const textContainer = document.querySelector('#meme-text');
  textContainer.innerText = inputText.value;
}

function addEventoEnviarTexto() {
  inputText.addEventListener('keyup', mostraOtexto);
}

addEventoEnviarTexto();
