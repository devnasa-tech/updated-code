'use client'
import React, { useState } from 'react';

// --- SVG Icon Components ---

const PlusIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 0V12M0 6H12" stroke="white" strokeWidth="1.5"/>
  </svg>
);

const HeartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LeftArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 12H4M10 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const RightArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 12h16m-6 6l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


// --- Reusable Sub-components ---

const Hotspot = ({ position }) => (
  <button className={`absolute ${position} w-5 h-5 bg-black rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2`}>
    <PlusIcon />
  </button>
);

const ProductCard = ({ product }) => (
  <div className="w-full">
    <div className="relative bg-gray-200 aspect-square">
      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      <button className="absolute top-3 right-3 p-1">
        <HeartIcon />
      </button>
    </div>
    <div className="pt-3">
      <p className="text-sm text-gray-800">{product.name}</p>
      <p className="text-sm text-gray-500 mt-1">${product.price}</p>
    </div>
  </div>
);


// --- Main Lookbook Component ---

const LookbookSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    { id: 1, name: 'Women floral dress', price: 150, image: 'https://picsum.photos/seed/product1/400/400' },
    { id: 2, name: 'Women floral dress', price: 129, image: 'https://picsum.photos/seed/product2/400/400' },
    { id: 3, name: 'Sleek summer top', price: 99, image: 'https://picsum.photos/seed/product3/400/400' },
    { id: 4, name: 'Classic denim jeans', price: 180, image: 'https://picsum.photos/seed/product4/400/400' },
    { id: 5, name: 'Evening cocktail dress', price: 250, image: 'https://picsum.photos/seed/product5/400/400' },
    { id: 6, name: 'Leather ankle boots', price: 220, image: 'https://picsum.photos/seed/product6/400/400' },
  ];

  const productsPerPage = 2;
  const totalSlides = Math.ceil(products.length / productsPerPage);

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, totalSlides - 1));
  };
  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const startIndex = currentIndex * productsPerPage;
  const visibleProducts = products.slice(startIndex, startIndex + productsPerPage);
  
  const isFirstSlide = currentIndex === 0;
  const isLastSlide = currentIndex === totalSlides - 1;

  return (
    <section className="relative bg-white py-12 lg:py-24">
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#FFF7E8] z-0"></div>
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="relative">
            <div className="bg-gray-200 aspect-[4/5]">
              <img 
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1887&auto=format&fit=crop" 
                alt="Lookbook model"
                className="w-full h-full object-cover"
              />
            </div>
            <Hotspot position="top-[10%] left-[60%]" />
            <Hotspot position="top-[20%] left-[80%]" />
            <Hotspot position="top-[45%] left-[30%]" />
            <Hotspot position="top-[50%] left-[75%]" />
            <Hotspot position="top-[70%] left-[55%]" />
            <Hotspot position="top-[90%] left-[45%]" />
          </div>

          <div>
            <h2 className="text-4xl font-light text-gray-800">Lookbook 2021</h2>
            <div className="w-10 h-0.5 bg-gray-800 my-4"></div>
            <p className="text-gray-500 leading-relaxed max-w-md">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
            </p>

            <div className="text-right my-6">
              <button onClick={prevSlide} disabled={isFirstSlide} className={`p-1 mr-2 ${isFirstSlide ? 'text-gray-300 cursor-not-allowed' : 'text-gray-800'}`}>
                <LeftArrowIcon />
              </button>
              <button onClick={nextSlide} disabled={isLastSlide} className={`p-1 ${isLastSlide ? 'text-gray-300 cursor-not-allowed' : 'text-gray-800'}`}>
                <RightArrowIcon />
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {visibleProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="mt-8">
              <button className="bg-gray-800 text-white px-8 py-3 hover:bg-gray-700 transition-colors">
                View All Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LookbookSection;