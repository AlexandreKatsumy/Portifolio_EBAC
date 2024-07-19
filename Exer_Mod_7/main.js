const form = document.getElementById('form-validador');
const numeroA = document.getElementById('numero-A');
const numeroB = document.getElementById('numero-B');
let formValido = false;

function validaNumero(numeroMenor, numeroMaior) {
    const numeroMenorA = numeroMenor;
    const numeroMaiorB = numeroMaior;
    return numeroMenorA < numeroMaiorB;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const mensagemSucesso = `O número A: <b>${numeroA.value}</b> é menor que o número B: <b>${numeroB.value}. Formulário é valido!`;

    formValido = validaNumero(numeroA.value, numeroB.value)
    if (formValido) {
        const containerMenssagemSucesso = document.querySelector('.success-message');
        containerMenssagemSucesso.innerHTML = mensagemSucesso;
        containerMenssagemSucesso.style.display = 'block';

        numeroA.style.border = '';
        numeroB.style.border = '';
        document.querySelector('.error-message').style.display = 'none';

    } else {
        numeroA.style.border = '1px solid red';
        numeroB.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
})

//numeroA.addEventListener('keyup', function(e) {
//
//    formValido = validaNumero(numeroA.value, numeroB.value)
//    if (!formValido) {
//        numeroA.classList.add('error');
//        numeroB.classList.add('error');
//        document.querySelector('.error-message').style.display = 'block';
//    } else {
//        numeroA.classList.remove('error');
//        numeroB.classList.remove('error');
//        document.querySelector('.error-message').style.display = 'none';
//    }
//})

