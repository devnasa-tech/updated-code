'use client'
import React from 'react';

const AccountDetailsForm = () => {
  return (
   
    <div className="max-w-6xl mt-7">
     
      <h2 className="text-3xl font-bold text-gray-800 lg:mb-5">
        Account Details
      </h2>

      
      <form className="space-y-6">
      
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="first_name" className="block mb-2 text-base font-medium text-gray-700">
              First Name<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 transition-colors duration-300"
            />
          </div>
          <div>
            <label htmlFor="last_name" className="block mb-2 text-base font-medium text-gray-700">
              Last Name<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="last_name"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 transition-colors duration-300"
            />
          </div>
        </div> */}

        <div>
          <label htmlFor="display_name" className="block mb-2 text-base font-medium text-gray-700">
            Display Name<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="display_name"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 transition-colors duration-300"
          />
          <p className="mt-2 text-sm text-gray-500">
            This will be how your name will be displayed in the account section and in reviews.
          </p>
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 text-base font-medium text-gray-700">
            Email address<span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 transition-colors duration-300"
          />
        </div>

       
        <h3 className="text-xl  font-semibold text-gray-800 !mt-10 md:!mt-12 !mb-4">
          Password Change
        </h3>

        <div>
          <label htmlFor="current_password" className="block mb-2 text-base font-medium text-gray-700">
            Current password (leave blank to leave unchanged)
          </label>
          <input
            type="password"
            id="current_password"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 transition-colors duration-300"
          />
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="new_password" className="block mb-2 text-base font-medium text-gray-700">
              New password (leave blank to leave unchanged)
            </label>
            <input
              type="password"
              id="new_password"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 transition-colors duration-300"
            />
          </div>
          <div>
            <label htmlFor="confirm_password" className="block mb-2 text-base font-medium text-gray-700">
              Confirm new password
            </label>
            <input
              type="password"
              id="confirm_password"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 transition-colors duration-300"
            />
          </div>
        </div>

       
        <button
          type="submit"
          className="w-full md:w-auto text-white bg-yellow-400 hover:bg-yellow-300   font-bold cursor-pointer text-base px-6 py-3 text-center transition-colors duration-300 !mt-8"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default AccountDetailsForm;