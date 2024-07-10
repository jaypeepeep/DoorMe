import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignInCard = () => {
  const navigate = useNavigate();

  const proceedLogin = () => {
    navigate("/Login");
  };

  return (
    <div className="bg-[#311B92] py-28 px-10 rounded-xl m-auto w-3/4 flex flex-col gap-10 md:flex-row items-center justify-between">
      <div className="sm:pb-10">
        <h1 className="font-montserrat text-left text-3xl font-medium text-white mb-4">Sign in to streamline your search</h1>
        <p className="font-montserrat text-left text-white">Save properties, create alerts and keep track of the enquiries you send to agents.</p>
      </div>
      <button className="bg-white text-[#311B92] font-medium py-3 px-6 rounded-md hover:bg-gray-200 transition-colors" onClick={proceedLogin}>
        Login or register an account
      </button>
    </div>
  );
}

export default SignInCard;
