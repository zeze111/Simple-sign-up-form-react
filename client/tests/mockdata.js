const data = {
  signupResponse: {
    status: 'Successful',
    message: 'Welcome Jane',
    user: {
      id: 1000,
      firstName: 'Jane',
      surname: 'Doe',
      email: 'jane@yahoo.com',
      password: 'andela'
    },
  },

  signupData: {
    firstName: 'Jane',
    surname: 'Doe',
    email: 'jane@yahoo.com',
    password: 'amdela',
  },

  signupFailedResponse: {
    status: 'Unsuccessful',
    message: 'Email already exists'
  }
}

export default data;
