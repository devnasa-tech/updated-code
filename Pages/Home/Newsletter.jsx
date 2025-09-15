'use client'
import React from 'react';

const Newsletter = () => {
  return (
    <section className="bg-gray-300 py-20"  style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
  }} >
      <div className="container mx-auto px-4 text-center">
        
        <h2 className="text-4xl font-bold text-gray-600 mb-4">
          Join Our Newsletter
        </h2>
        
        <p className="text-gray-600 max-w-xl mx-auto mb-10">
          Sign up to receive the latest promotional information and get a 20% discount on the first online payment
        </p>

        <form 
          className="max-w-md mx-auto" 
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex items-center bg-gray-700 rounded-full p-1">
            <input 
              type="email" 
              placeholder="Your email address"
              className="w-full bg-transparent text-white placeholder-gray-300 px-5 py-2 focus:outline-none"
            />
            <button 
              type="submit"
              className="bg-yellow-500 text-gray-800 font-semibold text-sm px-8 py-2 rounded-full hover:bg-yellow-600 transition-colors"
            >
              SUBMIT
            </button>
          </div>
        </form>

      </div>
    </section>
  );
};

export default Newsletter;