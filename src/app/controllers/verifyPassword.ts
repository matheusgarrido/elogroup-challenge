export const getVerifyPassordContent = (
  regex: RegExp,
  password: string
): boolean => {
  for (let i = 0; i < password.length; i++) {
    if (password[i].match(regex)) return false;
  }
  return true;
};
export const verifyPasswordLetter = (password: string) => {
  return getVerifyPassordContent(/^[A-Za-z]+$/, password);
};
export const verifyPasswordNumber = (password: string) => {
  return getVerifyPassordContent(/^[0-9]+$/, password);
};
export const verifyPasswordSpecial = (password: string) => {
  return getVerifyPassordContent(/[^a-z\d]+/i, password);
};
export const errorPassword = (password: string): string => {
  let msg = '';
  //if password shorter than 8 chars
  if (password.length < 8) msg += '8 caracteres';
  //if hasn't a letter char
  if (verifyPasswordLetter(password))
    msg += (msg.length ? ', ' : ' ') + '1 letra';
  // //if hasn't a numeric char
  if (verifyPasswordNumber(password))
    msg += (msg.length ? ', ' : ' ') + '1 número';
  // // //if hasn't a special char
  if (verifyPasswordSpecial(password))
    msg += (msg.length ? ', ' : ' ') + '1 caracter especial';
  if (msg.length && password.length) return 'Mínimo de ' + msg + '.';
  return '';
};
export const validatePassword = (password: string) => {
  return (
    !verifyPasswordLetter(password) &&
    !verifyPasswordNumber(password) &&
    !verifyPasswordSpecial(password)
  );
};

export const validatePasswordConfirm = (
  password: string,
  passwordConfirm: string
) => {
  return password === passwordConfirm;
};

//Error message if passwords is different and if fields not empty
export const errorPasswordConfirm = (
  password: string,
  passwordConfirm: string
): string => {
  if (
    !validatePasswordConfirm(password, passwordConfirm) &&
    passwordConfirm !== '' &&
    password !== ''
  )
    return 'Senhas divergentes';
  return '';
};
