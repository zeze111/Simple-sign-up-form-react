import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { signup } from './signupActions';
import signupReducer from './signupReducer';
import { validateUser } from './validations';
import './style.scss';

class SignupForm extends Component {

  constructor(props){
    super(props)
    this.state = {
      firstName: '',
      surname: '',
      email: '',
      password: '',
      errors: {},
      error: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  resetForm() {
    this.setState({
        ...this.state,
        firstName: '',
        surname: '',
        email: '',
        password: '',
        errors: {},
        error: ''
    })
 }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit(event) {
    event.preventDefault();
    const { firstName, surname, email, password } = this.state;
    const user = { firstName, surname, email, password };
    const validate = validateUser(user);
    console.log(validate);

    if (validate === true) {
      this.props.signup(user)
      .then(() => {
        if (!this.state.error && this.props.error) {
          this.setState({ error: this.props.error});
        } else {
          alert(this.props.message);
          this.resetForm();
        }
      })
    } else {
      this.setState({
        errors: validate
      });
    }
  }


  render() {
    const { errors, error } = this.state;

    return (
      <div>
        <div>
          <h3>Quarteth Health Pre-Engagement</h3>
        </div>
        <form id="signupForm">
          <div>
            <p>
              <label htmlFor="firstName"> First Name: </label>
              <input
                value={this.state.firstName}
                onChange={this.onChange}
                type="text"
                id="firstName"
                name="firstName">
                </input>
            </p>
            {errors &&
                <span className="span-error">{errors.firstname}</span>
              }
            <p>
              <label htmlFor="surname"> Surname: </label>
              <input
                value={this.state.surname}
                onChange={this.onChange}
                type="text"
                id="sname"
                name="surname">
              </input>
            </p>
            {errors &&
              <span className="span-error">{errors.surname}</span>
              }
            <p>
              <label htmlFor="email"> Email: </label>
              <input
                value={this.state.email}
                onChange={this.onChange}
                type="email"
                id="email"
                name="email">
              </input>
            </p>
            {errors &&
              <div>
              <span className="span-error">{errors.emailreq}</span>
              </div>
              }
            {errors &&
              <span className="span-error">{errors.email}</span>
              }
            <p>
              <label htmlFor="password"> Password: </label>
              <input
                value={this.state.password}
                onChange={this.onChange}
                type="password"
                id="password"
                name="password">
              </input>
            </p>
            {errors &&
              <div>
              <span className="span-error">{errors.passwordreq}</span>
              </div>
              }
            {errors &&
              <span className="span-error">{errors.password}</span>
              }
            <p>
            {error &&
              <span className="span-error">{error}</span>
              }
              </p>
              <p>
            <button onClick={this.onSubmit}> Submit </button>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

SignupForm.propTypes = {
  signup: PropTypes.func.isRequired,
  message: PropTypes.string,
  error: PropTypes.string
}

SignupForm.defaultProps = {
  message: '',
  error: ''
}

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user))
});

const mapStateToProps = state => ({
  message: state.message,
  error: state.error
})


export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
