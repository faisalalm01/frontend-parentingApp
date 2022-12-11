import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../components/Logo';
import RegisterInput from '../components/RegisterInput';

import { register } from '../utils/api'; // API belum terupdate
 
function RegisterPage() {
  async function onRegisterHandler(user) {
    await register(user); // belum terupdate
  }
 
  return (
    <section className='register-page flex p-8 flex-col md:ml-auto w-full mt-10 md:mt-0 items-center'>
      <Logo/>

      <div className='register-page__intro text-center'>
        <p className='text-md'>Silahkan masukan nama, email dan password untuk mendaftar</p>
      </div>

      <div className='flex'>
      <RegisterInput register={onRegisterHandler} />
      </div>

      <div className='register-page__next-to-login'>
        <p className='text-sm my-10'>Sudah memiliki akun? Silahkan masuk <Link to="/" className='text-blue-500 hover:text-blue-700'>disini</Link></p>
      </div>
    </section>
  )
}
 
export default RegisterPage;