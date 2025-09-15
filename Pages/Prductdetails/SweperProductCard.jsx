'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import CustomStarRating from '../../components/CustomStarRating';

// const img_api = process.env.NEXT_PUBLIC_API_BASE_URL;

const SweperProductCard = ({ product }) => {
  // const handleWishlist = (e) => {
  //   e.preventDefault();
  //   console.log('Wishlist clicked!');
  // };

  return (
    <div

      className="group relative w-full bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col border border-gray-100 hover:-translate-y-2"
    >
      {/* Wishlist Button */}
      <button
        className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white hover:scale-110 transition-all duration-300"
      >
        <FaRegHeart className="text-gray-700 text-lg" />
      </button>

      {/* Product Image Section */}
      <div className="relative w-full h-72 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <Image
          src={`${product.image}`}
          alt={product.title}
          fill
          className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
          priority
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
      </div>

      {/* Product Details Section */}
      <div className="px-3 py-2 flex flex-col flex-grow space-y-2">
        {/* Colors */}
          <div className="flex flex-wrap gap-1 ">
            {product.colors.slice(0, 8).map((color, index) => (
              <div key={index} className="relative group/color">
                <span
                  className="w-4.5 h-4.5 rounded-md border-2 border-gray-200 block cursor-pointer transition-transform group-hover/color:scale-110"
                  style={{ backgroundColor: color.code }}
                ></span>
          
              </div>
            ))}
          </div>


        {/* Title */}
        <h3
          className="text-gray-900 font-bold text-lg leading-tight line-clamp-2 group-hover:text-[#ffbb42] transition-colors duration-300 capitalize"
          title={product?.title}
        >
          {product?.title}
        </h3>

        {/* Extra Info Section */}
        <div className="flex flex-wrap gap-x-2">
          <span className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-200">
            {product?.productCategory}
          </span>
  
            <span className="bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-green-200">
          {product?.productSubCategory}
            </span>

        </div>

        {/* Rating + Size */}
        <div className="flex items-center justify-between  border-gray-100">
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">
              Size
            </span>
            <span className="font-bold text-gray-900 text-lg">
              {product?.productSize}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <CustomStarRating numberOfStars={2} />
            <span className="text-sm text-gray-500 font-medium">(30)</span>
          </div>
        </div>

        {/* Price + Shop Now Button */}

        <div className="flex items-center justify-between">
          {/* Price */}

          <div className="flex items-center gap-2 ">
            <p
              className={`${
                product.disCountPrice
                  ? "line-through text-sm text-[#777777]"
                  : "text-lg font-bold text-gray-900"
              }`}
            >
              {product?.price}
            </p>

            <p
              className={`${
                product.disCountPrice
                  ? "text-lg font-bold text-gray-900"
                  : "hidden"
              }`}
            >
              {" "}
              ${product?.price - product?.disCountPrice}
            </p>
          </div>

          <div className="overflow-hidden rounded-xl">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ffbb42] to-yellow-400 hover:from-yellow-400 hover:to-[#ffbb42] text-black font-bold px-6 py-3 shadow-lg text-sm uppercase transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
              Shop Now
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SweperProductCard;