const toggleButton = document.querySelector('#toggleModal');
const modal = document.querySelector('#modal');
const closeButton = document.querySelector('#closeButton');
const correo = document.querySelector('input[type="text"]');
const alerta = document.querySelector('.aviso');
const input = document.querySelector('.datos');

toggleButton.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);
input.addEventListener('click', inicio)

function toggleModal() {
    let cv = correo.value;
    let aprovado = false;
    console.log(cv)
    document.querySelector(".parrafo_modal strong").textContent = cv
    if (cv.includes('@')) {
        let cont = cv.split('').filter(char => char === '@').length;
        if (cont < 2) {
            cv = cv.split('@')
            cv = cv[1]
            if (cv.includes('.')) {
                if (cv[cv.length - 1] !== '.') {
                    modal.classList.toggle('hidden');
                    aprovado = true;
                    document.body.style.overflow = 'hidden';
                }
            }
        }
    }
    if (!aprovado) {
        validEmail()
    }
}

function inicio() {
    alerta.style.display = 'none'
    input.style.boxShadow = 'none'
    input.style.borderColor = 'black';
    input.style.color = 'black'
}

function validEmail() {
    alerta.style.display = 'block'
    input.style.boxShadow = '1px 1px 20px #db8787'
    input.style.borderColor = 'red';
    input.style.color = 'red'
}