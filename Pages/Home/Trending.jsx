'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaRegHeart, FaStar, FaRegStar, FaGem } from 'react-icons/fa';
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md';

// Dummy Star Component
const CustomStarRating = ({ numberOfStars }) => {
  const totalStars = 5;
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: totalStars }, (_, i) =>
        i < numberOfStars ? (
          <FaStar key={i} className="text-yellow-400 text-sm" />
        ) : (
          <FaRegStar key={i} className="text-gray-300 text-sm" />
        )
      )}
    </div>
  );
};

// --- Product Card (your main design reused) ---
const ProductCard = ({ product, handleWishlist }) => {
  return (
    <Link
      href={`/shop/${product?._id}`}
      className="group relative w-full bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col border border-gray-100 hover:-translate-y-2"
    >
      {/* Wishlist Button */}
      <button
        onClick={handleWishlist}
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
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
      </div>

      {/* Details */}
      <div className="px-3 py-2 flex flex-col flex-grow space-y-2">
        {/* Colors */}
        <div className="flex flex-wrap gap-1">
          {product.colors.slice(0, 8).map((color, index) => (
            <span
              key={index}
              className="w-4.5 h-4.5 rounded-md border-2 border-gray-200 block cursor-pointer transition-transform hover:scale-110"
              style={{ backgroundColor: color }}
            ></span>
          ))}
        </div>

        {/* Title */}
        <h3
          className="text-gray-900 font-bold text-lg leading-tight line-clamp-2 group-hover:text-[#ffbb42] transition-colors duration-300 capitalize"
          title={product?.name}
        >
          {product?.name}
        </h3>

        {/* Category */}
        <div className="flex flex-wrap gap-x-2">
          <span className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-200">
            {product?.category}
          </span>
          <span className="bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-green-200">
            {product?.subCategory}
          </span>
        </div>

        {/* Size + Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">
              Size
            </span>
            <span className="font-bold text-gray-900 text-lg">
              {product?.size}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <CustomStarRating numberOfStars={product.rating} />
            <span className="text-sm text-gray-500 font-medium">
              ({product.reviews})
            </span>
          </div>
        </div>

        {/* Price + Shop Now */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <p
              className={`${
                product.discount
                  ? 'line-through text-sm text-[#777777]'
                  : 'text-lg font-bold text-gray-900'
              }`}
            >
              ${product?.price}
            </p>
            {product.discount && (
              <p className="text-lg font-bold text-gray-900">
                ${product.price - product.discount}
              </p>
            )}
          </div>

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

// --- Static Products ---
const products = [
  {
    _id: 1,
    name: 'Women floral dress',
    price: 399,
    discount: 50,
    reviews: 212,
    rating: 4,
    image:
      'https://plus.unsplash.com/premium_photo-1709993971389-2ffe68115dd4?q=80&w=436&auto=format&fit=crop',
    colors: ['#d9f99d', '#f9a8d4'],
    category: 'Dress',
    subCategory: 'Floral',
    size: 'M',
  },
  {
    _id: 2,
    name: 'Men leather jacket',
    price: 799,
    discount: 0,
    reviews: 301,
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1692220438343-d054c8b7d7c0?q=80&w=387&auto=format&fit=crop',
    colors: ['#111827', '#78350f'],
    category: 'Jacket',
    subCategory: 'Leather',
    size: 'L',
  },
];

// --- Main Component ---
const Trending = () => {
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

  const totalSlides = Math.ceil(products.length / productsPerPage);
  const startIndex = currentSlide * productsPerPage;
  const selectedProducts = products.slice(
    startIndex,
    startIndex + productsPerPage
  );

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  const handleWishlist = (e) => {
    e.preventDefault();
    console.log('Wishlist clicked!');
  };

  return (
    <section className="bg-white py-16">
      <div className="container max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Our Trending Products
          </h2>
          <div className="flex justify-center items-center my-6 space-x-4">
            <div className="w-16 h-px bg-gray-300"></div>
            <FaGem className="text-gray-700 text-lg" />
            <div className="w-16 h-px bg-gray-300"></div>
          </div>
        </div>

        {/* Arrows */}
        <div className="flex justify-end space-x-3 text-gray-800 mb-5">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <MdOutlineArrowBackIosNew />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <MdOutlineArrowForwardIos />
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {selectedProducts.map((p) => (
            <ProductCard
              key={p._id}
              product={p}
              handleWishlist={handleWishlist}
            />
          ))}
        </div>

        {/* View All */}
        <div className="mt-16 text-center">
          <button className="bg-gray-800 text-white px-10 py-3 hover:bg-gray-700 transition-colors rounded-lg">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Trending;