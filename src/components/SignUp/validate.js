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
  const regex = /^\w+([\.-]?\w+)*@[a-zA-Z0-9]([\.-]?[a-zA-Z0-9])*(\.[a-zA-Z]{2,4})+$/;
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

// function validatePassword() {
//   const regex = /^[a-zA-Z0-9.-_#*+/$@%,-?!]([\.]?[a-zA-Z0-9.-_#*+/$@%,-?!]{7,63})$/;
//   const field = password.value;
//   let flag = true;
//   if (!field.match(regex)) {
//     flag = false;
//     if (field === '') {
//       password.className = 'form-control negative';
//       p.innerHTML = 'Please fill out this field !';
//       p.className = 'feedback now-invalid';
//       return false;
//     } else if (field.indexOf(' ') !== -1) {
//       password.className = 'form-control negative';
//       p.innerHTML = 'Can not contain spaces !';
//       p.className = 'feedback now-invalid';
//       return false;
//     } else if (field.length < 8) {
//       password.className = 'form-control negative';
//       p.innerHTML = 'At least 8 characters long !';
//       p.className = 'feedback now-invalid';
//       return false;
//     }
//     password.className = 'form-control negative';
//     p.innerHTML = 'Invalid characters !';
//     p.className = 'feedback now-invalid';
//     return false;
//   } else {
//     p.className = 'feedback';
//     password.className = 'form-control positive';
//     return true;
//   }
// }

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
  validateEmail
  // validatePassword,
  // validateSignupForm,
  // validateLoginForm
};
