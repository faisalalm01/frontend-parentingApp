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
    <section className='register-page'>
      <Logo />

      <div>
        <p>Silakan masukan nama, email dan password untuk mendaftar</p>
      </div>

      <RegisterInput register={onRegisterHandler} />

      <div>
        <p>Sudah memiliki akun? Silakan masuk <Link to="/">disini</Link></p>
      </div>
    </section>
  )
}
 
export default RegisterPage;