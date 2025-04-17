const form = document.getElementById('form-numbers');
let formEValido = false;

function maiorQue(numero1, numero2) {
    return numero2 > numero1;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const campoA = document.getElementById('primeiro-campo');
    const campoB = document.getElementById('segundo-campo');
    const mensagemSucesso = `Correto! <b>${campoB.value}</b> é maior que <b>${campoA.value}</b>`;
    const mensagemErro = `Incorreto! <b>${campoB.value}</b> não é maior que <b>${campoA.value}</b>`;


    formEValido = maiorQue(campoA.value, campoB.value);
    if(formEValido) {
        const containerMensagemSucesso = document.querySelector('.return-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.backgroundColor = 'green'
        containerMensagemSucesso.style.display = 'block';

        campoA.value = '';
        campoB.value = ''; 
    }else {
        const containerMensagemErro = document.querySelector('.return-message');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.backgroundColor = 'red';
        containerMensagemErro.style.display = 'block';

        campoA.value = '';
        campoB.value = '';
    }

})