const validateName = value => {
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
};

const validateEmail = value => {
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
};

const validatePassword = value => {
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
};

const validateSignUpForm = () => {
  const fName = document.getElementById('first-name').value;
  const lName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  const fNameResult = validateName(fName);
  const lNameResult = validateName(lName);
  const emailResult = validateEmail(email);
  const passwordResult = validatePassword(password);
  const confirmPasswordResult = passwordResult.isValid
    ? confirmPassword === password
    : undefined;

  // console.log(
  //   fNameResult,
  //   lNameResult,
  //   emailResult,
  //   passwordResult,
  //   confirmPasswordResult
  // );

  return {
    fName: fNameResult,
    lName: lNameResult,
    email: emailResult,
    password: passwordResult,
    confirmPassword: {
      isValid: confirmPasswordResult,
      message: `Passwords didn't match !`
    }
  };
};

const validateSignInForm = () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const emailResult = validateEmail(email);
  const passwordResult = validatePassword(password);
  // console.log(emailResult, passwordResult);

  return {
    email: emailResult,
    password: passwordResult
  };
};

const validatePasswordResetForm = () => {
  const email = document.getElementById('email').value;

  const emailResult = validateEmail(email);
  // console.log(emailResult);

  return emailResult;
};

export {
  validateName,
  validateEmail,
  validatePassword,
  validateSignUpForm,
  validateSignInForm,
  validatePasswordResetForm
};
