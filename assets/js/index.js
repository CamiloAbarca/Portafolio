//Botón para volver arriba
document.getElementById('boton-volver-arriba').addEventListener('click', function () {
    window.scrollTo(0, 0);
    window.history.pushState({}, document.title, "/");
});

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


//Efecto entrada imagen project
const sectionProject = document.querySelector('#project');
const querySelectorProject = document.querySelector('#imgProject');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const sectionTop = sectionProject.offsetTop;

    if (scrollPosition >= sectionTop) {
        querySelectorProject.classList.add('roll-in-left');
        querySelectorProject.removeAttribute("hidden");
    } else {
        querySelectorProject.classList.remove('roll-in-left');
        querySelectorProject.setAttribute("hidden", true);
    }
});

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


//Efecto entrada de skill
const sectionSkill = document.querySelector('#skill');
const querySelectorSkill = document.querySelector('#skillItems');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const sectionTop = sectionSkill.offsetTop;

    if (scrollPosition >= sectionTop) {
        querySelectorSkill.classList.add('slide-in-elliptic-top-fwd');
        querySelectorSkill.removeAttribute("hidden");
    } else {
        querySelectorSkill.classList.remove('slide-in-elliptic-top-fwd');
        querySelectorSkill.setAttribute("hidden", true);
    }
});

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


//Al presionar el botón Enviar, se muestra un Alerts solo si el formulario está completo
document.getElementById('btnSubmit').addEventListener('click', function (event) {
    event.preventDefault();
    var form = document.querySelector('form');
    var inputs = form.querySelectorAll('input, textarea');
    var isValid = true;
    const elemento = document.querySelector('#alertSend');
    const elementoError = document.querySelector('#alertSendError');

    // Validar email
    var email = document.querySelector('#email');
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var emailError = document.querySelector('#error');
    if (!emailRegex.test(email.value)) {
        isValid = false;
        email.classList.add('error');
        emailError.textContent = 'Ingrese un email válido';
        emailError.removeAttribute("hidden");
    } else {
        email.classList.remove('error');
        emailError.setAttribute("hidden", true);
    }
    //Fin Validar email

    inputs.forEach(function (input) {
        var errorElement = input.nextElementSibling;
        if (input.value === '') {
            isValid = false;
            input.classList.add('error');
            errorElement.textContent = 'Este campo es obligatorio';
            errorElement.removeAttribute("hidden");
        } else {
            input.classList.remove('error');
            errorElement.setAttribute("hidden", true);
        }
    });

    if (isValid) {
        elemento.removeAttribute("hidden");
        form.reset();
        setTimeout(function () {
            elemento.setAttribute("hidden", true);
        }, 5000);
    }
    if (!isValid) {
        elementoError.removeAttribute("hidden");
        setTimeout(function () {
            elementoError.setAttribute("hidden", true);
        }, 2000);
    }

});