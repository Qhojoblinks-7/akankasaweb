import React, { useState } from 'react';
import { EnvelopeIcon, LockClosedIcon, UserIcon } from '@heroicons/react/20/solid';
import { FcGoogle } from 'react-icons/fc';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'; // Import eye icons

const RegistrationForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className="flex h-screen w-full bg-black overflow-y-auto">
      <div className="w-full hidden md:inline-block bg-akan-blue-700">
        <img
          className="h-full w-full object-cover"
          src="/src/assets/medium-shot-woman-having-fun-outdoors_23-2150726005.jpg"
          alt="Akan cultural background"
        />
      </div>

      <div className="w-full  flex flex-col items-center justify-center px-6 lg:px-8">
       <form className="w-full flex flex-col items-center justify-center">
       <div className="md:w-96 w-80 flex flex-col items-center justify-center">
          <img
            className="h-12 w-auto mb-2"
            src="/src/assets/logo1.svg"
            alt="Akan Kasa ne Amammere Logo"
          />
          <p className="text-sm text-gray-100/90 mt-2">Create your account to start your Akan journey</p>

          <button
            type="button"
            className="w-full mt-6 bg-white border border-[#d7b053] shadow-sm flex items-center justify-center h-12 rounded-full focus:outline-none focus:ring-2 focus:ring-[#d7b053]"
          >
            <FcGoogle className="h-6 w-6 mr-2" />
            Sign up with Google
          </button>

          <div className="flex items-center gap-4 w-full my-5">
            <div className="w-full h-px bg-gray-100/90"></div>
            <p className="w-full text-nowrap text-sm text-gray-200/90">or sign up with email</p>
            <div className="w-full h-px bg-gray-100/90"></div>
          </div>

          <div className="flex items-center w-full bg-white border border-gray-300 shadow-sm h-12 rounded-full overflow-hidden pl-4 gap-2 focus-within:ring-2 focus-within:ring-akan-blue-500">
            <UserIcon className="h-5 w-5 text-[#d7b053]" aria-hidden="true" />
            <input
              type="text"
              placeholder="Username"
              className="bg-transparent text-gray-900/80 placeholder-gray-500/80 outline-none w-full h-full"
              autoComplete='username'
              required
            />
          </div>

          <div className="flex items-center mt-4 w-full bg-white border border-gray-300 shadow-sm h-12 rounded-full overflow-hidden pl-4 gap-2 focus-within:ring-2 focus-within:ring-akan-blue-500">
            <EnvelopeIcon className="h-5 w-5 text-[#d7b053]" aria-hidden="true" />
            <input
              type="email"
              placeholder="Email address"
              className="bg-transparent text-gray-900/80 placeholder-gray-500/80 outline-none w-full h-full"
              required
              autoComplete='email'
            />
          </div>

          <div className="relative flex items-center mt-4 w-full bg-white border border-gray-300 shadow-sm h-12 rounded-full overflow-hidden pl-4 focus-within:ring-2 focus-within:ring-[#d7b053]">
            <LockClosedIcon className="h-5 w-5 text-[#d7b053] mr-2" aria-hidden="true" />
            <input
              type={passwordVisible ? 'text' : 'password'} // Toggle password visibility
              placeholder="Password"
              className="bg-transparent text-gray-900/80 placeholder-gray-600/80 outline-none w-full h-full pr-10" // Added padding for the icon
              required
              autoComplete="new-password"
            />
            <button
              type="button"
              className="absolute right-3 focus:outline-none"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? (
                <EyeIcon className="h-5 w-5 text-[#d7b053]" />
              ) : (
                <EyeSlashIcon className="h-5 w-5 text-[#d7b053]" />
              )}
            </button>
          </div>

          <div className="relative flex items-center mt-4 w-full bg-white border border-gray-300 shadow-sm h-12 rounded-full overflow-hidden pl-4 focus-within:ring-2 focus-within:ring-[#d7b053]">
            <LockClosedIcon className="h-5 w-5 text-[#d7b053] mr-2" aria-hidden="true" />
            <input
              type={confirmPasswordVisible ? 'text' : 'password'} // Toggle confirm password visibility
              placeholder="Confirm Password"
              className="bg-transparent text-gray-900/80 placeholder-gray-600/80 outline-none w-full h-full pr-10" // Added padding for the icon
              required
              autoComplete="confirm-password"
            />
            <button
              type="button"
              className="absolute right-3 focus:outline-none"
              onClick={toggleConfirmPasswordVisibility}
            >
              {confirmPasswordVisible ? (
                <EyeIcon className="h-5 w-5 text-[#d7b053]" />
              ) : (
                <EyeSlashIcon className="h-5 w-5 text-[#d7b053]" />
              )}
            </button>
          </div>

          <div className="w-full flex items-start mt-6 text-gray-200/80">
            <input className="h-4 w-4 rounded bg-gray-300 border-gray-300 text-[#d7b053] focus:ring-[#d7b053]" type="checkbox" id="terms" required />
            <label className="text-sm ml-2" htmlFor="terms">
              I agree to the <a className="text-akan-blue-600 hover:underline" href="/terms">Terms of Service</a> and <a className="text-akan-blue-600 hover:underline" href="/privacy">Privacy Policy</a>
            </label>
          </div>

          <button
            type="submit"
            className="mt-6 w-full h-11 rounded-full text-black bg-[#d7b053] hover:bg-akan-blue-700 focus:outline-none focus:ring-2 focus:ring-black transition-colors"
          >
            Register
          </button>
          <p className="text-white text-sm mt-4">
            Already have an account?
            <a className="text-akan-blue-600 hover:underline" href="/signin">
              Sign in
            </a>
          </p>
        </div>
        </form> 
      </div>
    </div>
  );
};

export default RegistrationForm;