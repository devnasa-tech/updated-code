import React from 'react';
import ProductsDetailsSlider from '../Prductdetails/ProductsDetailsSlider';

const Wishlist = () => {
  return (
    <div>
      <ProductsDetailsSlider></ProductsDetailsSlider>
    </div>
  );
};

export default Wishlist;
// 'use client'
// import React from 'react';
// import { FaStar, FaShoppingCart, FaHome } from 'react-icons/fa';
// import { IoClose } from 'react-icons/io5';

// const Wishlist = () => {

//   const products = [
//     {
//       name: 'Women floral dress',
//       price: '$399.00',
//       rating: 5,
//       reviews: '212',
//       colors: ['bg-lime-500', 'bg-pink-500'],
//     },
//     {
//       name: 'Women floral dress',
//       price: '$399.00',
//       rating: 4,
//       reviews: '25',
//       colors: [],
//     },
//     {
//       name: 'Women floral dress',
//       price: '$399.00',
//       rating: 4,
//       reviews: '110',
//       colors: ['bg-slate-500', 'bg-black'],
//     },
//     {
//       name: 'Women danim...',
//       price: '$399.00',
//       rating: 4,
//       reviews: '04',
//       colors: ['bg-teal-200', 'bg-indigo-800', 'bg-slate-400'],
//     },
//   ];

//   return (
//     <div className="bg-white min-h-screen font-sans">
//       <header className="bg-zinc-800 text-white py-8 sm:py-10">
//         <div className="container mx-auto text-center px-4">
//           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">My Wishlist</h1>
//           <div className="flex justify-center items-center text-sm">
//             <FaHome className="mr-1.5" />
//             <a href="#" className="text-white hover:underline mx-1">Home</a>
//             <span className="text-gray-400">/</span>
//             <span className="text-amber-500 font-medium ml-2">My Wishlist</span>
//           </div>
//         </div>
//       </header>

//       <main className="max-w-6xl mx-auto py-12 sm:py-16">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
//           {products.map((product, index) => (
//             <div key={index}>
//               <div className="relative group">
//                 <div className="bg-gray-200 w-full aspect-[3/4]"></div>
//                 <button className="absolute top-3 right-3 bg-white rounded-full w-6 h-6 flex items-center justify-center text-gray-600 hover:bg-gray-100 shadow-sm">
//                   <IoClose className="h-4 w-4" />
//                 </button>
//               </div>
//               <div className="mt-4">
//                 <div className="flex justify-between items-start gap-2">
//                   <h3 className="text-gray-800 text-base">{product.name}</h3>
//                   <div className="flex items-center space-x-1 flex-shrink-0">
//                     <div className="flex">
//                       {[...Array(product.rating)].map((_, i) => (
//                         <FaStar key={i} className="w-4 h-4 text-orange-400" />
//                       ))}
//                     </div>
//                     <span className="text-gray-500 text-sm">({product.reviews})</span>
//                   </div>
//                 </div>

//                 <div className="flex justify-between items-center mt-2">
//                   <div className="group [perspective:1000px]">
//                     <div className="relative h-6 w-32 [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)] transition-transform duration-700 ease-in-out">
//                       <div className="absolute inset-0 [backface-visibility:hidden] flex items-center">
//                         <p className="text-gray-900 font-medium">{product.price}</p>
//                       </div>
//                       <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateX(180deg)] flex items-center">
//                         <button className="flex items-center text-gray-800">
//                           <FaShoppingCart className="h-5 w-5" />
//                           <span className="ml-2 text-base underline underline-offset-2">Add to cart</span>
//                         </button>
//                       </div>
//                     </div>
//                   </div>

//                   {product.colors.length > 0 && (
//                     <div className="flex space-x-1.5">
//                       {product.colors.map((color, colorIndex) => (
//                         <span key={colorIndex} className={`block w-4 h-4 rounded-full border border-gray-200 ${color}`}></span>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Wishlist;