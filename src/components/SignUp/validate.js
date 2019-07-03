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
      // p.innerHTML = 'Can not contain spaces !';
      return false;
    } else if (field.length < 8) {
      // p.innerHTML = 'At least 8 characters long !';
      return false;
    }
    // p.innerHTML = 'Invalid characters !';
    return false;
  } else {
    return true;
  }
}

// function validateSignupForm() {
//   const a = validateName();
//   const b = validateEmail();
//   const c = validatePassword();

//   if (a === false) {
//     return false;
//   } else if (b === false) {
//     return false;
//   } else if (c === false) {
//     return false;
//   } else {
//     return true;
//   }
// }

// function validateLoginForm() {
//   const a = validateEmail();
//   const b = validatePassword();

//   if (a === false) {
//     return false;
//   } else if (b === false) {
//     return false;
//   } else {
//     return true;
//   }
// }

export {
  validateName,
  validateEmail,
  validatePassword
  // validateSignupForm,
  // validateLoginForm
};
