function validateName(value) {
  const regex = /^[A-Za-z]?([ ]?[A-Za-z])+$/;
  const field = value;
  console.log(value);
  if (field.indexOf(' ') === 0) {
    return false;
  } else if (!field.match(regex)) {
    return false;
  } else {
    return true;
  }
}

function validateEmail(value) {
  const regex = /^\w+([.-]?\w+)*@[a-zA-Z0-9]([.-]?[a-zA-Z0-9])*(\.[a-zA-Z]{2,4})+$/;
  const field = value;
  console.log(value);
  if (!field.match(regex)) {
    if (field === '') {
      return false;
    } else {
      return false;
    }
  } else {
    return true;
  }
}

function validatePassword(value) {
  const regex = /^[a-zA-Z0-9.-_#*+/$@%,-?!]([.]?[a-zA-Z0-9.-_#*+/$@%,-?!]{7,63})$/;
  const field = value;
  if (!field.match(regex)) {
    if (field === '') {
      return false;
    } else if (field.indexOf(' ') !== -1) {
      return false;
    } else if (field.length < 8) {
      return false;
    }
    return false;
  } else {
    return true;
  }
}

function validateSignUpForm() {
  const fName = document.getElementById('first-name').value;
  const lName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confPassword = document.getElementById('confirm-password').value;

  const a = validateName(fName);
  const b = validateName(lName);
  const c = validateEmail(email);
  const d = validatePassword(password);
  const e = confPassword === password;

  console.log(a, b, c, d, e);

  if (a === false) {
    return false;
  } else if (b === false) {
    return false;
  } else if (c === false) {
    return false;
  } else if (d === false) {
    return false;
  } else {
    return true;
  }
}

function validateSignInForm() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const a = validateEmail(email);
  const b = validatePassword(password);

  if (a === false) {
    return false;
  } else if (b === false) {
    return false;
  } else {
    return true;
  }
}

export {
  validateName,
  validateEmail,
  validatePassword,
  validateSignUpForm,
  validateSignInForm
};
