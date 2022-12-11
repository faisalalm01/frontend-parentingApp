import React from 'react';
import PropTypes from 'prop-types';
 
class LoginInput extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      email: '',
      password: '',
    };
 
    this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this);
    this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }
 
  onEmailChangeHandler(event) {
    this.setState(() => {
      return {
        email: event.target.value
      }
    })
  }
 
  onPasswordChangeHandler(event) {
    this.setState(() => {
      return {
        password: event.target.value
      };
    });
  }
 
  onSubmitHandler(event) {
    event.preventDefault();
 
    this.props.login({
      email: this.state.email,
      password: this.state.password,
    });
  }
 
  render() {
    return (
<<<<<<< HEAD
      <form onSubmit={this.onSubmitHandler} className='login-input'>
        <input type="email" placeholder='Email' value={this.state.email} onChange={this.onEmailChangeHandler} />
        <input type="password" placeholder='Password' value={this.state.password} onChange={this.onPasswordChangeHandler} />
        <button>Masuk</button>
=======
      <form onSubmit={this.onSubmitHandler} className='login-input my-10'>
        <label className='leading-7 text-sm text-custom-text-primary'>Email</label>
        <input type="email" placeholder='Masukan email anda' value={this.state.email} onChange={this.onEmailChangeHandler} className="w-full bg-form-primary rounded-lg border border-gray-700 outline-2 outline-form-secondry text-background-primary text-sm normal-case py-1 px-3 leading-8"/>
        <label className='leading-7 text-sm text-custom-text-primary'>Password</label>
        <input type="password" placeholder='Masukan password anda' value={this.state.password} onChange={this.onPasswordChangeHandler} className="w-full bg-form-primary rounded-lg border border-gray-700 outline-2 outline-form-secondry text-background-primary text-sm normal-case py-1 px-3 leading-8"/>
        <div className='my-6'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold text-md py-2 px-4 rounded'>
            Masuk
          </button>
        </div>
>>>>>>> 8452ae2647f2d4df7fdf5b2d2a360a78742897a4
      </form>
    );
  }
}
 
LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
}
 
export default LoginInput;
