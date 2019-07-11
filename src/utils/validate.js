function validateName(value) {
  const regex = /^[A-Za-z]?([ ]?[A-Za-z])+$/;
  const field = value;
  // console.log(value);

  if (field === '') {
    return { isValid: false, message: 'Please fill out this field !' };
  } else if (field.indexOf(' ') === 0) {
    return { isValid: false, message: 'Invalid name !' };
  } else if (!field.match(regex)) {
    return { isValid: false, message: 'Invalid name !' };
  } else {
    return { isValid: true };
  }
}

function validateEmail(value) {
  const regex = /^\w+([.-]?\w+)*@[a-zA-Z0-9]([.-]?[a-zA-Z0-9])*(\.[a-zA-Z]{2,4})+$/;
  const field = value;
  // console.log(value);

  if (!field.match(regex)) {
    if (field === '') {
      return { isValid: false, message: 'Please fill out this field !' };
    } else {
      return { isValid: false, message: 'Invalid email address !' };
    }
  } else {
    return { isValid: true };
  }
}

function validatePassword(value) {
  const regex = /^[a-zA-Z0-9.-_#*+/$@%,-?!]([.]?[a-zA-Z0-9.-_#*+/$@%,-?!]{7,63})$/;
  const field = value;
  // console.log(value);

  if (!field.match(regex)) {
    if (field === '') {
      return { isValid: false, message: 'Please fill out this field !' };
    } else if (field.indexOf(' ') !== -1) {
      return { isValid: false, message: 'Can not contain spaces !' };
    } else if (field.length < 8) {
      return { isValid: false, message: 'At least 8 characters long !' };
    }
    return { isValid: false, message: 'Invalid characters !' };
  } else {
    return { isValid: true };
  }
}

function validateRestaurateurSignUpForm() {
  const fName = document.getElementById('first-name').value;
  const lName = document.getElementById('last-name').value;
  const rName = document.getElementById('restaurant-name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  const a = validateName(fName);
  const b = validateName(lName);
  const c = validateName(rName);
  const d = validateEmail(email);
  const e = validatePassword(password);
  const f = d.isValid ? confirmPassword === password : undefined;

  // console.log(a, b, c, d, e);

  return {
    fName: a,
    lName: b,
    rName: c,
    email: d,
    password: e,
    confirmPassword: { isValid: f, message: `Passwords didn't match !` }
  };
}

function validateFoodieSignUpForm() {
  const fName = document.getElementById('first-name').value;
  const lName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  const a = validateName(fName);
  const b = validateName(lName);
  const c = validateEmail(email);
  const d = validatePassword(password);
  const e = d.isValid ? confirmPassword === password : undefined;

  // console.log(a, b, c, d, e);

  return {
    fName: a,
    lName: b,
    email: c,
    password: d,
    confirmPassword: { isValid: e, message: `Passwords didn't match !` }
  };
}

function validateSignInForm() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const a = validateEmail(email);
  const b = validatePassword(password);

  // console.log(a, b);

  return {
    email: a,
    password: b
  };
}

function validatePasswordResetForm() {
  const email = document.getElementById('email').value;

  const a = validateEmail(email);

  // console.log(a);

  return a;
}

export {
  validateName,
  validateEmail,
  validatePassword,
  validateRestaurateurSignUpForm,
  validateFoodieSignUpForm,
  validateSignInForm,
  validatePasswordResetForm
};
