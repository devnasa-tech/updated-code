'use client'
import React, { useState } from 'react';
import { IoChevronUp } from "react-icons/io5";


const sustainabilityOptions = [
  { id: 'organic', label: 'Organic' },
  { id: 'recycled', label: 'Recycled' },
];

const ProductSustainability = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [checkedState, setCheckedState] = useState({
    organic: false,
    recycled: false,
  });

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedState({
      ...checkedState,
      [name]: checked,
    });
  };

  return (
    <div className="w-full max-w-xs mx-auto p-4 bg-white font-sans ">
       {/* Title */}
         <div className="">
           <div className="flex items-center justify-between">
             <h3 className="text-sm font-bold tracking-wide uppercase">
               Sustainability
             </h3>
   
             <button onClick={toggleOpen} className="">
               <IoChevronUp
                 className={`h-4 w-4 text-gray-700 transform transition-transform duration-300 font-extralight ${
                   isOpen ? "" : "rotate-180"
                 }`}
               />
             </button>
           </div>
           <div className="mt-2 mb-4 relative">
             <div className="absolute top-0 w-full h-0.5 bg-gray-100"></div>
             <div className="absolute top-0 w-12 h-0.5 bg-yellow-400 rounded"></div>
           </div>
         </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-48 mt-4' : 'max-h-0'
        }`}
      >
        {sustainabilityOptions.map((option) => (
          <div key={option.id} className="mb-3">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                name={option.id}
                checked={checkedState[option.id]}
                onChange={handleCheckboxChange}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-3 text-sm text-gray-700">{option.label}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSustainability;