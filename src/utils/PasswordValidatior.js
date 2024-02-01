import {getPasswordConfig} from "./ConfigManager"

const validatePassword = (password) => {
  let passwordPolicy = getPasswordConfig()
  if(password.length < passwordPolicy.minLength){
    return false;
  }

  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const hasNumber = /\d/.test(password);

  var numberOfConstrains = 0;

  if (hasLowercase) {
    numberOfConstrains++;
  }

  if (hasUppercase) {
    numberOfConstrains++;
  }

  if (hasSpecialChar) {
    numberOfConstrains++;
  }

  if (hasNumber) {
    numberOfConstrains++;
  }

  if(numberOfConstrains < passwordPolicy.requiredCharacterTypes){
    return false;
  }

  return true;
}

const passwordErrorMessage = getPasswordConfig().errorMessage;

export {validatePassword, passwordErrorMessage}