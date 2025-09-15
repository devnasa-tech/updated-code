'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { FaRegHeart, FaStar, FaGem } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// --- Static Data ---
const products = [
  { id: 1, name: 'Women floral dress', price: 399, reviews: 212, image: 'https://plus.unsplash.com/premium_photo-1709993971389-2ffe68115dd4?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0', colors: ['#84cc16', '#f472b6'], category: "Women", subCategory: "Dress", size: "M" },
  { id: 2, name: 'Women floral dress', price: 399, reviews: 25, image: 'https://images.unsplash.com/photo-1602010069450-0a62034f235c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0', colors: ['#60a5fa', '#111827'], category: "Women", subCategory: "Dress", size: "L" },
  { id: 3, name: 'Women floral dress', price: 399, reviews: 110, image: 'https://images.unsplash.com/photo-1727685841596-dd8fe1e0b2ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0', colors: ['#38bdf8', '#475569'], category: "Women", subCategory: "Top", size: "S" },
  { id: 4, name: 'Women denim jacket', price: 399, reviews: 4, image: 'https://images.unsplash.com/photo-1692220438327-fd668e8a7bbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0', colors: ['#5eead4', '#64748b'], category: "Women", subCategory: "Jacket", size: "M" },
];

// --- Product Card ---
const ProductCard = ({ product }) => {
  const handleWishlist = () => {
    console.log("Added to wishlist:", product.name);
  };

  return (
    <Link
      href={`/shop/${product.id}`}
      className="group relative w-full bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col border border-gray-100 hover:-translate-y-2"
    >
      {/* Wishlist Button */}
      <button
        onClick={(e) => { e.preventDefault(); handleWishlist(); }}
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

      {/* Product Details */}
      <div className="px-3 py-2 flex flex-col flex-grow space-y-2">
        {/* Colors */}
        <div className="flex flex-wrap gap-1">
          {product.colors.slice(0, 8).map((color, index) => (
            <div key={index} className="relative group/color">
              <span
                className="w-4.5 h-4.5 rounded-md border-2 border-gray-200 block cursor-pointer transition-transform group-hover/color:scale-110"
                style={{ backgroundColor: color }}
              ></span>
            </div>
          ))}
        </div>

        {/* Title */}
        <h3
          className="text-gray-900 font-bold text-lg leading-tight line-clamp-2 group-hover:text-[#ffbb42] transition-colors duration-300 capitalize"
          title={product?.name}
        >
          {product?.name}
        </h3>

        {/* Category + SubCategory */}
        <div className="flex flex-wrap gap-x-2">
          <span className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-200">
            {product?.category}
          </span>
          <span className="bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-green-200">
            {product?.subCategory}
          </span>
        </div>

        {/* Size + Rating */}
        <div className="flex items-center justify-between border-gray-100">
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">
              Size
            </span>
            <span className="font-bold text-gray-900 text-lg">
              {product?.size}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex">
              {[...Array(2)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-sm" />
              ))}
            </div>
            <span className="text-sm text-gray-500 font-medium">
              ({product?.reviews})
            </span>
          </div>
        </div>

        {/* Price + Shop Now */}
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-gray-900">
            ${product?.price}
          </p>
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

// --- Featured Collection ---
const FeaturedCollection = () => {
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

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  const startIndex = currentSlide * productsPerPage;
  const selectedProducts = products.slice(startIndex, startIndex + productsPerPage);

  return (
    <section className="bg-white py-16">
      <div className="container max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Featured Collections
          </h2>
          <div className="flex justify-center items-center my-6 space-x-4">
            <div className="w-16 h-px bg-gray-300"></div>
            <FaGem className="text-gray-700 w-6 h-6" />
            <div className="w-16 h-px bg-gray-300"></div>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="mb-4 flex justify-between items-center">
          <p className="text-gray-500 text-center w-full max-w-lg mx-auto">
            Discover our top trending products selected just for you.
          </p>
          <div className="flex justify-end space-x-3 text-gray-800">
            <button onClick={prevSlide} className="p-2 rounded-full hover:bg-gray-100 transition" aria-label="Previous slide">
              <IoIosArrowBack size={20} />
            </button>
            <button onClick={nextSlide} className="p-2 rounded-full hover:bg-gray-100 transition" aria-label="Next slide">
              <IoIosArrowForward size={20} />
            </button>
          </div>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-5">
          {selectedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All */}
        <div className="mt-16 text-center">
          <button className="bg-gray-800 text-white px-10 py-3 rounded-lg hover:bg-gray-700 transition">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;