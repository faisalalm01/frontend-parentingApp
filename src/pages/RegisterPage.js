import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/logo.png';
import RegisterInput from '../components/RegisterInput';

import { register } from '../utils/api'; // API belum terupdate

function RegisterPage() {
  async function onRegisterHandler(user) {
    await register(user); // belum terupdate
  }
 
  return (
    <section className='register-page flex p-8 flex-col md:ml-auto w-full mt-10 md:mt-0 items-center'>
      <img
        className="w-60 object-center rounded"
          src={Logo} alt="Smart Family"
      />

      <div className='register-page__intro text-center mt-4'>
        <p className='text-sm text-slate-700'>Silahkan masukan nama, email dan password untuk mendaftar</p>
      </div>

      <div className='flex'>
      <RegisterInput register={onRegisterHandler} />
      </div>

      <div className='register-page__next-to-login'>
        <p className='text-sm mt-2 text-slate-800'>Sudah memiliki akun? Silahkan masuk <Link to="/" className='text-blue-500 hover:text-blue-700'>disini</Link></p>
      </div>
    </section>
  )
}
 
export default RegisterPage;