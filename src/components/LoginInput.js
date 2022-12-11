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
      <form onSubmit={this.onSubmitHandler} className='login-input my-10'>
        <div className='mt-6'>
        <label className='leading-7 text-sm text-custom-text-primary'>Email</label>
        <input type="email" placeholder='Masukan email anda' value={this.state.email} onChange={this.onEmailChangeHandler}  className="w-full bg-gray-200 rounded-lg border border-gray-400 outline-2 outline-form-secondry text-background-primary text-sm normal-case py-1 px-3 leading-8"/>
        </div>

        <div className='mt-4'>
        <label className='leading-7 text-sm text-custom-text-primary'>Password</label>
        <input type="password" placeholder='Masukan password anda' value={this.state.password} onChange={this.onPasswordChangeHandler} className="w-full bg-gray-200 rounded-lg border border-gray-400 outline-2 outline-form-secondry text-background-primary text-sm normal-case py-1 px-3 leading-8"/>
        </div>

        <div className='my-6'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold text-md py-2 px-4 rounded'>
            Masuk
          </button>
        </div>
      </form>
    );
  }
}
 
LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
}
 
export default LoginInput;
