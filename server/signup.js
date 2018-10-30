import { Users } from './dummy-database';
import { validateUser } from './validations';

class Authenticate {

  static signup(request, response) {

    let userId = 1000;
    const validate = validateUser(request.body, Users, response);
    if (validate === true) {
      const User = {
      id: userId++,
      firstName: request.body.firstName,
      surname: request.body.surname,
      email: request.body.email,
      password: request.body.password
      };
      Users.push(User);
      return response.status(201).json({
        status: 'Successful',
        message: `Welcome ${User.firstName}`,
        User
      });
    } else {
      return validate;
    }
  }
}

export default Authenticate;
