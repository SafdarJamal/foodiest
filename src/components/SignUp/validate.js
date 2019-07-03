let form = document.getElementById('form');
let fName = document.getElementById('fName');
let lName = document.getElementById('lName');
let email = document.getElementById('email');
let password = document.getElementById('password');
let showHideEl = document.getElementById('show-hide');
let loginB = document.getElementById('login-button');
let signupB = document.getElementById('signup-button');
let verifyB = document.getElementById('verify');
let passwordResetB = document.getElementById('reset-password');
let fbLoginB = document.getElementById('fb');
let loginMenu = document.getElementById('loginMenu');
let userMenu = document.getElementById('userMenu');
let profilePic = document.getElementById('profile-pic');
let userName = document.getElementById('userName');
let logoutB = document.getElementById('logout-button');

/**
 * Feedback elements
 */

let f = document.getElementById('f-feedback');
let l = document.getElementById('l-feedback');
let e = document.getElementById('e-feedback');
let p = document.getElementById('p-feedback');

function validateFName() {
  const regex = /^[A-Za-z]?([\ ]?[A-Za-z])+$/;
  const field = fName.value;
  let flag = true;
  if (field === '') {
    flag = false;
    fName.className = 'form-control negative';
    f.innerHTML = 'Please fill out this field !';
    f.className = 'feedback now-invalid';
    return false;
  } else if (field.indexOf(' ') === 0) {
    flag = false;
    fName.className = 'form-control negative';
    f.innerHTML = 'Invalid username !';
    f.className = 'feedback now-invalid';
    return false;
  } else if (!field.match(regex)) {
    flag = false;
    fName.className = 'form-control negative';
    f.innerHTML = 'Invalid username !';
    f.className = 'feedback now-invalid';
    return false;
  } else {
    f.className = 'feedback';
    fName.className = 'form-control positive';
    return true;
  }
}

function validateLName() {
  const regex = /^[A-Za-z]?([\ ]?[A-Za-z])+$/;
  const field = lName.value;
  let flag = true;
  if (field === '') {
    flag = false;
    lName.className = 'form-control negative';
    l.innerHTML = 'Please fill out this field !';
    l.className = 'feedback now-invalid';
    return false;
  } else if (field.indexOf(' ') === 0) {
    flag = false;
    lName.className = 'form-control negative';
    l.innerHTML = 'Invalid username !';
    l.className = 'feedback now-invalid';
    return false;
  } else if (!field.match(regex)) {
    flag = false;
    lName.className = 'form-control negative';
    l.innerHTML = 'Invalid username !';
    l.className = 'feedback now-invalid';
    return false;
  } else {
    l.className = 'feedback';
    lName.className = 'form-control positive';
    return true;
  }
}

function validateEmail() {
  const regex = /^\w+([\.-]?\w+)*@[a-zA-Z0-9]([\.-]?[a-zA-Z0-9])*(\.[a-zA-Z]{2,4})+$/;
  const field = email.value;
  let flag = true;
  if (!field.match(regex)) {
    flag = false;
    email.className = 'form-control negative';
    if (field === '') {
      e.innerHTML = 'Please fill out this field !';
      e.className = 'feedback now-invalid';
      return false;
    } else {
      e.innerHTML = 'Invalid Email address !';
      e.className = 'feedback now-invalid';
      return false;
    }
  } else {
    e.className = 'feedback';
    email.className = 'form-control positive';
    return true;
  }
}

function validatePassword() {
  const regex = /^[a-zA-Z0-9.-_#*+/$@%,-?!]([\.]?[a-zA-Z0-9.-_#*+/$@%,-?!]{7,63})$/;
  const field = password.value;
  let flag = true;
  if (!field.match(regex)) {
    flag = false;
    if (field === '') {
      password.className = 'form-control negative';
      p.innerHTML = 'Please fill out this field !';
      p.className = 'feedback now-invalid';
      return false;
    } else if (field.indexOf(' ') !== -1) {
      password.className = 'form-control negative';
      p.innerHTML = 'Can not contain spaces !';
      p.className = 'feedback now-invalid';
      return false;
    } else if (field.length < 8) {
      password.className = 'form-control negative';
      p.innerHTML = 'At least 8 characters long !';
      p.className = 'feedback now-invalid';
      return false;
    }
    password.className = 'form-control negative';
    p.innerHTML = 'Invalid characters !';
    p.className = 'feedback now-invalid';
    return false;
  } else {
    p.className = 'feedback';
    password.className = 'form-control positive';
    return true;
  }
}

function validateSignupForm() {
  const a = validateFName();
  const b = validateLName();
  const c = validateEmail();
  const d = validatePassword();

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

function validateLoginForm() {
  const a = validateEmail();
  const b = validatePassword();

  if (a === false) {
    return false;
  } else if (b === false) {
    return false;
  } else {
    return true;
  }
}

export {
  validateFName,
  validateLName,
  validateEmail,
  validatePassword,
  validateSignupForm,
  validateLoginForm
};
