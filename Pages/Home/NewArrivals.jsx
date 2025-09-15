'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaRegHeart } from 'react-icons/fa';

// --- SVG Icon Components ---
const DiamondIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
    xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700" aria-hidden="true">
    <path d="M12 2L2 12L12 22L22 12L12 2Z" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LeftArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
    xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M20 12H4M10 18l-6-6 6-6" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const RightArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
    xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M4 12h16m-6 6l6-6-6-6" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// --- Static Data ---
const products = [
  { id: 1, name: 'Women floral dress', price: 399, reviews: 212, image: 'https://plus.unsplash.com/premium_photo-1709993971389-2ffe68115dd4?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0', colors: ['#a3e635', '#f9a8d4'], category: "Dress", subCategory: "Floral", size: "M" },
  { id: 2, name: 'Women floral dress', price: 399, reviews: 25, image: 'https://images.unsplash.com/photo-1602010069450-0a62034f235c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0', colors: ['#e2e8f0'], category: "Dress", subCategory: "Summer", size: "L" },
  { id: 3, name: 'Women floral dress', price: 399, reviews: 110, image: 'https://images.unsplash.com/photo-1727685841596-dd8fe1e0b2ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0', colors: ['#93c5fd', '#1e293b'], category: "Dress", subCategory: "Casual", size: "S" },
  { id: 4, name: 'Women denim jacket', price: 399, reviews: 4, image: 'https://images.unsplash.com/photo-1692220438327-fd668e8a7bbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0', colors: ['#99f6e4', '#64748b', '#60a5fa'], category: "Jacket", subCategory: "Denim", size: "XL" },
  { id: 5, name: 'Elegant evening gown', price: 549, reviews: 88, image: 'https://plus.unsplash.com/premium_photo-1661337376780-1ec70bcce8db?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0', colors: ['#ef4444', '#000000'], category: "Gown", subCategory: "Evening", size: "M" },
  { id: 6, name: 'Casual summer shirt', price: 129, reviews: 150, image: 'https://images.unsplash.com/photo-1746002312068-ab5d604966cc?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0', colors: ['#ffffff', '#38bdf8'], category: "Shirt", subCategory: "Casual", size: "M" },
  { id: 7, name: 'Men\'s leather jacket', price: 799, reviews: 301, image: 'https://images.unsplash.com/photo-1692220438343-d054c8b7d7c0?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0', colors: ['#78350f', '#000000'], category: "Jacket", subCategory: "Leather", size: "L" },
  { id: 8, name: 'Comfortable sneakers', price: 250, reviews: 512, image: 'https://images.unsplash.com/photo-1629993775033-59e6e790b82d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0', colors: ['#d1d5db', '#dc2626', '#2563eb'], category: "Shoes", subCategory: "Sneakers", size: "42" },
];

// --- Product Card (Same as Main Card Design) ---
const ProductCard = ({ product }) => {
  return (
    <Link
      href={`/shop/${product.id}`}
      className="group relative w-full bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col border border-gray-100 hover:-translate-y-2"
    >
      {/* Wishlist */}
      <button
        className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white hover:scale-110 transition-all duration-300"
      >
        <FaRegHeart className="text-gray-700 text-lg" />
      </button>

      {/* Product Image */}
      <div className="relative w-full h-72 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
      </div>

      {/* Details */}
      <div className="px-3 py-2 flex flex-col flex-grow space-y-2">
        {/* Colors */}
        <div className="flex flex-wrap gap-1 ">
          {product.colors.slice(0, 8).map((color, index) => (
            <span
              key={index}
              className="w-4.5 h-4.5 rounded-md border-2 border-gray-200 block cursor-pointer transition-transform hover:scale-110"
              style={{ backgroundColor: color }}
            ></span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-gray-900 font-bold text-lg leading-tight line-clamp-2 group-hover:text-[#ffbb42] transition-colors duration-300 capitalize">
          {product.name}
        </h3>

        {/* Extra Info */}
        <div className="flex flex-wrap gap-x-2">
          <span className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-200">
            {product.category}
          </span>
          <span className="bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-green-200">
            {product.subCategory}
          </span>
        </div>

        {/* Size + Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">Size</span>
            <span className="font-bold text-gray-900 text-lg">{product.size}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
            <span className="text-sm text-gray-500 font-medium">({product.reviews})</span>
          </div>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-gray-900">${product.price}</p>
          <div className="overflow-hidden rounded-xl">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ffbb42] to-yellow-400 hover:from-yellow-400 hover:to-[#ffbb42] text-black font-bold px-6 py-3 shadow-lg text-sm uppercase transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
              Shop Now
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

// --- Main Component ---
const NewArrivals = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [productsPerPage, setProductsPerPage] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setProductsPerPage(4);
      else if (window.innerWidth >= 640) setProductsPerPage(2);
      else setProductsPerPage(1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => setCurrentSlide(0), [productsPerPage]);

  const totalSlides = Math.ceil(products.length / productsPerPage);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  const startIndex = currentSlide * productsPerPage;
  const selectedProducts = products.slice(startIndex, startIndex + productsPerPage);

  return (
    <section className="bg-white py-16">
      <div className="container max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">Our Highlight Product</h2>
          <div className="flex justify-center items-center my-6 space-x-4">
            <div className="w-16 h-px bg-gray-300"></div>
            <DiamondIcon />
            <div className="w-16 h-px bg-gray-300"></div>
          </div>
        </div>

        {/* Sub text + Arrows */}
        <div className="mb-1">
          <div className="text-center w-full max-w-lg mx-auto">
            <p className="text-gray-500">Discover our premium T-shirts, polo shirts, and hoodies, crafted for global apparel markets.</p>
          </div>
          <div className="flex justify-end space-x-3 text-gray-800">
            <button onClick={prevSlide} className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Previous slide">
              <LeftArrowIcon />
            </button>
            <button onClick={nextSlide} className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Next slide">
              <RightArrowIcon />
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {selectedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="bg-gray-800 text-white px-10 py-3 hover:bg-gray-700 transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;