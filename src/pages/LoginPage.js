import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Logo from '../components/Logo';
import LoginInput from '../components/LoginInput';

import { login } from '../utils/api'; // API belum terupdate
 
function LoginPage({ loginSuccess }) {
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password }); // belum terupdate
 
    if (!error) { //belum terupdate
      loginSuccess(data);
    }
  }
 
  return (
    <section className='login-page'>
      <Logo />

      <div className='login-page__intro'>
        <h2>Silakan masuk untuk melanjutkan ...</h2>
      </div>
      
      <LoginInput login={onLogin} />

      <div className='login-page__link-to-register'>
        <p>Belum memiliki akun? Silakan daftar <Link to="/register">disini</Link></p>
      </div>
    </section>
  );
}
 
LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
}
 
export default LoginPage;
