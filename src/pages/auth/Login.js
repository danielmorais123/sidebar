import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAuthState } from 'react-firebase-hooks/auth';
import {
  logInWithEmailAndPassword,
  signInWithGoogle,
  auth,
} from '../../api/auth/functions';
import loginpic from '../../assets/img/undraw.svg';
import { Divider } from '@mui/material';
import { Lock } from '@mui/icons-material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate('/dash');
  }, [user, loading]);

  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <div className="border-2 border-gray-200 p-5 shadow-md mx-2 flex flex-col items-center">
        <img src={loginpic} className="w-72 px-3 " />
        <div className=" p-5  text-center">
          <div class="relative mb-6">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <input
              autoComplete="off"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
            />
          </div>
          <div class="relative mb-6">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <Lock className="text-[#9CA3AF]" />
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Passw0rd"
            />
          </div>
          <button
            className="focus:outline-none text-white bg-primary hover:bg-gray-200 hover:text-primary focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 mb-2 "
            onClick={() => logInWithEmailAndPassword(email, password)}
          >
            Login
          </button>
          <Divider />
          <button
            onClick={signInWithGoogle}
            className="text-white bg-[#D92929] hover:bg-gray-200 hover:text-[#D92929] focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mt-2 mr-2 mb-2"
          >
            {' '}
            <svg
              class="mr-2 -ml-1 w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
            Login with Google
          </button>

          <div>
            <Link to="/reset">
              Forgot Password?{' '}
              <span className="underline text-blue-400">Reset</span>
            </Link>
          </div>
          <div>
            Don't have an account?{' '}
            <Link to="/register" className="underline text-blue-400">
              Register now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
