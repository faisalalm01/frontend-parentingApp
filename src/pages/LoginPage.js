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
    <section className='login-page flex p-8 flex-col md:ml-auto w-full mt-10 md:mt-0 items-center'>
      <Logo />

      <div className='login-page__intro text-center'>
        <p className='text-md'>Silahkan masukan email dan password untuk masuk</p>
      </div>
      
      <div className='flex'>
      <LoginInput login={onLogin} />
      <img src='../public/images/cuate.png' className='mx-10'>
        </img>
      </div>

      <div className='login-page__link-to-register'>
        <p className='text-sm my-10'>Belum memiliki akun? Silahkan daftar <Link to="/register" className='text-blue-500 hover:text-blue-700'>disini</Link></p>
      </div>
    </section>
  );
}
 
LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
}
 
export default LoginPage;
