// Busca div no DOM
const elementoChute = document.querySelector('#chute');

// Ativa microfone no navegador
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

// Atribui escutador de evento ao recognition
recognition.addEventListener('result', onSpeak);

// Capta fala do usuário
function onSpeak(e) {
    const chute = e.results[0][0].transcript 
    exibeChuteNaTela(chute);    
}

// Exibe na tela
function exibeChuteNaTela(chute) { 
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `
}
