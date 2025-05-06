import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom'; // For portal

const AuthModal = ({ isOpen, onClose, startWithLogin = true }) => {
  const [isLogin, setIsLogin] = useState(startWithLogin);

  useEffect(() => {
    setIsLogin(startWithLogin);
  }, [startWithLogin]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✖
        </button>
        
        <h2 className="text-2xl font-bold text-red-700 mb-4">{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
        <p className="text-gray-600 mb-6">{isLogin ? 'Enter your credentials to access your account' : 'Sign up to get started'}</p>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm mb-2">Email Address</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm mb-2">Password</label>
            <input type="password" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          {!isLogin && (
            <div>
              <label className="block text-gray-700 text-sm mb-2">Confirm Password</label>
              <input type="password" className="w-full p-2 border border-gray-300 rounded" />
            </div>
          )}
          <button type="submit" className="w-full bg-red-700 text-white p-2 rounded hover:bg-red-700">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <div className="text-center mt-4">
          {isLogin ? (
            <p className="text-gray-600">
              Don’t have an account?{" "}
              <button onClick={() => setIsLogin(false)} className="text-blue-600 hover:underline">
                Create one
              </button>
            </p>
          ) : (
            <p className="text-gray-600">
              Already have an account?{" "}
              <button onClick={() => setIsLogin(true)} className="text-blue-600 hover:underline">
                Login
              </button>
            </p>
          )}
        </div>
      </div>
    </div>,
    document.body // portal to body
  );
};

export default AuthModal;
