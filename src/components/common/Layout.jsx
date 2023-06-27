import React from 'react';
import { Outlet } from 'react-router-dom';
import Cart from './Cart';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Layout = () => {
  const [cartVsible, setCartVsible] = useState(false);

  const navigate = useNavigate();

  const isUserLogged = useSelector((state) => state.user.isLogged);

  const userLoggedHandle = () => {
    if (isUserLogged) {
      return '/profile';
    } else {
      return '/login';
    }
  };

  const cartHandleClick = () => {
    if (isUserLogged) setCartVsible(!cartVsible);
    else navigate('/login');
  };

  const purchasesHnadleClick = () => {
    if (isUserLogged) navigate('/purchases');
    else navigate('/login');
  };

  return (
    <div>
      <div className="flex flex-col bg-stone-100 h-screen w-[100%]">
        <div className="fixed w-screen z-10">
          <header className="flex flex-row items-center h-10 bg-white">
            <div className="w-40">
              <button onClick={() => navigate('/')} className="ml-2">
                <h2 className="text-orange-400 font-bold text-2xl">e-commerce</h2>
              </button>
            </div>
            <div className="ml-auto">
              <button
                onClick={() => navigate(userLoggedHandle(), { replace: true })}
                className="border-l-2 w-16 sm:w-24 h-10 text-2xl text-slate-500"
              >
                <i className="bx bx-user"></i>
              </button>
              <button
                className="border-l-2 w-16 sm:w-24 h-10 text-2xl text-slate-500"
                onClick={purchasesHnadleClick}
              >
                <i className="bx bx-box"></i>
              </button>
              <button
                className="border-l-2 w-16 sm:w-24 h-10 text-2xl text-slate-500"
                onClick={cartHandleClick}
              >
                <i className="bx bx-cart"></i>
              </button>
            </div>
          </header>
        </div>
        <Cart isVsible={cartVsible} />
        <div>
          <main className="flex flex-col items-center justify-center min-h-screen">
            <Outlet />
          </main>
          <footer className="inset-x-0 bottom-full p-[3rem] w-screen text-center bg-[#3c3c3b] text-white">
            © Pedro Andres Lara Campo - 2023
            <div className="inset-0 bottom-full mt-2 flex items-center justify-center">
              <a href="https://github.com/PedroLara14" target="_blank">
                <FaGithub size="1.5em" className="mr-2" />
              </a>
              <a href="https://www.linkedin.com/in/pedroandreslara/" target="_blank">
                <FaLinkedin size="1.5em" />
              </a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Layout;
