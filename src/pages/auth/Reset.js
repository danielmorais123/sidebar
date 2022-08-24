import { Divider } from '@mui/material';
import { useState } from 'react';
import { sendPasswordReset } from '../../api/auth/functions';
import forgotpic from '../../assets/img/forgot.svg';
import { Link, useNavigate } from 'react-router-dom';

const Reset = () => {
  const [email, setEmail] = useState('');
  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <div className="border-2 border-gray-200 p-5 shadow-md mx-2 flex flex-col items-center">
        <img src={forgotpic} className="w-72 px-3 " />
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

          <button
            className="focus:outline-none text-white bg-primary hover:bg-gray-200 hover:text-primary focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 mb-2 "
            onClick={async () => sendPasswordReset(email)}
          >
            Reset
          </button>
          <Divider />

          <div className="mt-5">
            Already have an account?{' '}
            <Link to="/login" className="underline text-blue-400 ">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reset;
