const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password');
const form = document.querySelector('#signup');

const checkUsername = () => {
  let valid = false;
  const min = 3, max = 25;
  const username = usernameEl.value.trim();
  if (!isRequired(username)) {
    showError(usernameEl, 'El nombre de usuario no puede estar en blanco.');
  } else if (!isBetween(username.length, min, max)) {
    showError(usernameEl, `El nombre de usuario debe tener entre ${min} y ${max} caracteres.`);
  } else {
    showSuccess(usernameEl);
    valid = true;
  }
  return valid;
};

const checkEmail = () => {
  let valid = false;
  const email = emailEl.value.trim();
  if (!isRequired(email)) {
    showError(emailEl, 'El correo electrónico no puede estar en blanco.');
  } else if (!isEmailValid(email)) {
    showError(emailEl, 'El correo electrónico no es válido.');
  } else {
    showSuccess(emailEl);
    valid = true;
  }
  return valid;
};

const checkPassword = () => {
  let valid = false;
  const password = passwordEl.value.trim();
  if (!isRequired(password)) {
    showError(passwordEl, 'La contraseña no puede estar en blanco.');
  } else if (!isPasswordSecure(password)) {
    showError(passwordEl, 'La contraseña debe tener al menos 8 caracteres que incluyan al menos 1 carácter en minúsculas, 1 carácter en mayúsculas, 1 número y 1 carácterespecial en (!@#\$%\^&*).');
  } else {
    showSuccess(passwordEl);
    valid = true;
  }
  return valid;
};

const checkConfirmPassword = () => {
  let valid = false;
  const confirmPassword = confirmPasswordEl.value.trim();
  const password = passwordEl.value.trim();
  if (!isRequired(confirmPassword)) {
    showError(confirmPasswordEl, 'Por favor, ingrese la contraseña nuevamente.');
  } else if (password !== confirmPassword) {
    showError(confirmPasswordEl, 'La contraseña de confirmación no coincide.');
  } else {
    showSuccess(confirmPasswordEl);
    valid = true;
  }
  return valid;
};

form.addEventListener('input', debounce(function (e) {
  switch (e.target.id) {
    case 'username':
      checkUsername();
      break;
    case 'email':
      checkEmail();
      break;
    case 'password':
      checkPassword();
      break;
    case 'confirm-password':
      checkConfirmPassword();
      break;
  }
}));

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let isUsernameValid = checkUsername(),
    isEmailValid = checkEmail(),
    isPasswordValid = checkPassword(),
    isConfirmPasswordValid = checkConfirmPassword();

  let isFormValid = isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid;

  if (isFormValid) {
    // Envía los datos al servidor (no se cubre en este tutorial).
  }
});