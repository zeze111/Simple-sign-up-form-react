export const validateUser = (user) => {
  const errors = {};
    if (user.firstName.length === 0 || user.firstName.length < 2) {
        const message = 'First name is required and must contain more than 1 character';
        errors.firstname = message;
    } if (user.surname.length === 0 || user.surname.length < 2)  {
        const message = 'Surname is required and must contain more than 1 character';
        errors.surname = message;
    } if (user.email.length === 0)  {
        const message = 'Email is required';
        errors.emailreq = message;
    } if (user.password.length === 0)  {
        const message = 'Password is required';
        errors.passwordreq = message;
    } if (user.email && !user.email.includes('@') || !user.email.includes('.')) {
        const message = 'Invalid email, please use format email@any.com';
        errors.email = message;
    } if (user.password && /\s/.test(user.password) || user.password.length < 6) {
        const message = 'No spaces in password and Password must have at least 6 characters';
        errors.password = message;
    } if(Object.keys(errors).length === 0) {
      return true
    }
    else {
      return errors;
    }
}
