let password = document.getElementById('password');
let confirm_password = document.getElementById('password_confirm');
let form = document.querySelector('form');

document.querySelector('button').addEventListener('click', () => {
  if (password.value != confirm_password.value && !document.getElementById('validation')) {
    password.classList.toggle('error');
    confirm_password.classList.toggle('error');

    let validation = document.createElement('p');
    validation.setAttribute('id', 'validation');
    validation.textContent = '* Passwords do not match';

    form.appendChild(validation);
  }
  else if (password.value == confirm_password.value && document.getElementById('validation')) {
    password.classList.toggle('error');
    confirm_password.classList.toggle('error');

    form.removeChild(document.getElementById('validation'))
  }
});