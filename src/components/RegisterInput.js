import React from 'react';
import PropTypes from 'prop-types';
 
class RegisterInput extends React.Component {
  constructor(props) {
    super(props)
 
    this.state = {
      name: '',
      email: '',
      password: '',
    }
 
    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }
 
  onNameChange(event) {
    this.setState(() => {
      return {
        name: event.target.value,
      };
    });
  }
 
  onEmailChange(event) {
    this.setState(() => {
      return {
        email: event.target.value
      };
    });
  }
 
  onPasswordChange(event) {
    this.setState(() => {
      return {
        password: event.target.value
      };
    })
  }
 
  onSubmitHandler(event) {
    event.preventDefault();
 
    this.props.register({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    });
  }
 
  render() {
    return (
      <form onSubmit={this.onSubmitHandler} className='register-input my-10'>
        <div className='mt-2'>
        <label className='leading-7 text-sm text-custom-text-primary'>Nama</label>
        <input type="text" placeholder="Masukan nama anda" value={this.state.name} onChange={this.onNameChange} className="w-full bg-gray-200 rounded-lg border border-gray-400 outline-2 outline-form-secondry text-background-primary text-sm normal-case py-1 px-3 leading-8"/>
        </div>

        <div className='mt-4'>
        <label className='leading-7 text-sm text-custom-text-primary'>Email</label>
        <input type="email" placeholder="Masukan email anda" value={this.state.email} onChange={this.onEmailChange} className="w-full bg-gray-200 rounded-lg border border-gray-400 outline-2 outline-form-secondry text-background-primary text-sm normal-case py-1 px-3 leading-8"/>
        </div>

        <div className='mt-4'>
        <label className='leading-7 text-sm text-custom-text-primary'>Password</label>
        <input type="password" placeholder="Masukan password anda" autoComplete='current-password' value={this.state.password} onChange={this.onPasswordChange} className="w-full bg-gray-200 rounded-lg border border-gray-400 outline-2 outline-form-secondry text-background-primary text-sm normal-case py-1 px-3 leading-8"/>
        </div>

        <div className='my-6'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold text-md py-2 px-4 rounded'>
            Daftar
          </button>
        </div>
      </form>
    )
  }
}
 
RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};
 
export default RegisterInput;
