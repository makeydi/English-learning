import { authorization } from "./authorization.js";
import { registration } from "./registration.js";

const formField = document.querySelector('.form-field')
const formTitleBox = document.createElement('div');
formTitleBox.className = 'form-title';
formTitleBox.innerText = 'Авторизация';
const btnEnter = document.createElement('button');
const btnRegistration = document.createElement('button');
const btnRegister = document.createElement("button");

btnEnter.className = 'btn-enter';
btnEnter.innerText = 'Войти';
btnRegistration.className = "btn-registration";
btnRegistration.innerText = 'Регистрация';
btnRegister.className = "btn-register";
btnRegister.innerText = "Зарегистрироваться";

formField.append(formTitleBox, btnEnter, btnRegistration);
btnEnter.type = "submit";

class Input {
    constructor(id, type, name) {
         const inputElement = document.createElement('div'); 
         inputElement.className = 'mb-3';
         inputElement.innerHTML =`
        <label for='${id}' class="form-label">${name}</label>
        <input type='${type}' class="form-control" id='${id}'>
        `;
        return inputElement;
    }
}

const loginInput = new Input('inputEmail', 'email', 'Введите e-mail');
formField.append(loginInput);

const passwordImput = new Input('inputPassword', 'password', 'Введите пароль');
formField.append(passwordImput);

const controlPasswordInput = new Input('inputPassword2', 'password', 'Введите пароль повторно');

btnRegistration.addEventListener('click', event => {
    event.preventDefault();
    formTitleBox.innerText = "Регистрация";
    formField.append(controlPasswordInput);
    formField.removeChild(btnRegistration);
    formField.removeChild(btnEnter);
    formField.append(btnRegister);
    btnRegister.type = "submit";
    let inputs = document.querySelectorAll(".form-control");
    inputs.forEach((item) => item.value = '');  
})

btnRegister.addEventListener('click', event => {
    event.preventDefault();
    const email = document.getElementById("inputEmail");
    const password = document.getElementById("inputPassword");
    const password2 = document.getElementById("inputPassword2");
    if (email.value !== '' && password.value !== '' && password2.value !== '' && password.value == password2.value) {
        registration(email.value, password.value, password2.value);}
})

btnEnter.addEventListener('click', event => {
    event.preventDefault();
    const email = document.getElementById("inputEmail");
    const password = document.getElementById("inputPassword");
    console.log(email.value, password.value);
    if (email.value !== '' && password.value !== '') {
        authorization(email.value, password.value);
        if (authorization) {
            formField.classList.toggle('hide');
            document.body.innerHTML = `<h1>Let's learning English!!!</h1>`
        }
    }
})