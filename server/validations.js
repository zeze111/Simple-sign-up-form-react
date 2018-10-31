export const validateUser = (user, oldUsers,  response) => {
  const errors = [];
    if (user.firstName.length === 0 || user.firstName.length < 2) {
        const message = {error: 'First name is required and must contain more than 1 character'}
        errors.push(message);
    } if (user.surname.length === 0 || user.surname.length < 2)  {
        const message = {error: 'Surname is required and must contain more than 1 character'}
        errors.push(message);
    } if (user.email.length === 0)  {
        const message = {error: 'Email is required'}
        errors.push(message);
    } if (user.password.length === 0)  {
        const message = {error: 'Password is required'}
        errors.push(message);
    } if (!user.email.includes('@') || !user.email.includes('.')) {
        const message = {error: 'Invalid email, please use format email@any.com'}
        errors.push(message);
    } if (/\s/.test(user.password) || user.password.length < 6) {
        const message = {error: 'No spaces in password and Password must have at least 6 characters'}
        errors.push(message);
    } if (oldUsers.length >= 1) {
        const email = oldUsers.map((oldUser) => {
          if (user.email === oldUser.email) {
            return oldUser.email;
          }
        });
        if (email.length) {
            return 'email exists';
        }
    } if(errors.length === 0) {
      return true
    }
    else {
      return response.status(422).json({
        status: 'Unsuccessful',
        errors,
      });
    }
}
