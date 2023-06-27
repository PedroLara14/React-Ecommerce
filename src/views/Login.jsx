import React from 'react';
import LoginForm from '../components/login/LoginForm';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const isUserLogged = useSelector((state) => state.user.isLogged);

  return (
    <div className="absolute flex flex-col items-center justify-center w-[24rem] bg-white p-6 rounded-md h">
      <div className="top-4">
        <p className="font-semibold text-lg text-center">
          Welcome! Enter your email and password to continue
        </p>
        <div className="mt-6 bg-[#d8f5fd] text-black rounded-sm px-14 h-28">
          <h2 className="text-center text-xl font-bold"> Test Data</h2>
          <p className="mt-4 whitespace-nowrap text-[1.05rem] font-bold">
            Email: prueba1234@gmail.com
          </p>
          <p className="text-[1.1rem] whitespace-nowrap font-bold">Password: pedro1234</p>
        </div>
        <LoginForm />
        {isUserLogged && <Navigate to={'/profile'} replace />}
      </div>
    </div>
  );
};

export default Login;
