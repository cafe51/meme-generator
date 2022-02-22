const textContainer = document.querySelector('#meme-text');
const imagemInput = document.querySelector('#meme-insert');
const inputText = document.querySelector('#text-input');
// const containerImagem = document.querySelector('#meme-insert');
const img = document.querySelector('#image');

function mostraOtexto() {
  textContainer.innerText = inputText.value;
}

function addEventoEnviarTexto() {
  inputText.addEventListener('keyup', mostraOtexto);
}

function mostraImagem() {
  img.src = URL.createObjectURL(imagemInput.files[0]);
}

function addEventoEnviarImagem() {
  imagemInput.addEventListener('change', mostraImagem);
}

addEventoEnviarTexto();

// mostraImagem();

addEventoEnviarImagem();
