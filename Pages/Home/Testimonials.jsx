'use client'
import React, { useState } from 'react';

// --- SVG Icon Components (No changes) ---

const DiamondIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700">
    <path d="M12 2L2 12L12 22L22 12L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const StarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-yellow-400">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
  </svg>
);

const QuoteIcon = () => (
    // Responsive size for the quote icon
  <svg width="60" height="46" viewBox="0 0 60 46" fill="currentColor" className="absolute -top-8 left-0 text-gray-300 transform -translate-x-3 -translate-y-3 w-10 h-10 md:w-auto md:h-auto md:-translate-x-4 md:-translate-y-4">
    <path d="M22.5834 0.916016C18.4167 0.916016 14.8334 2.16602 11.8334 4.66602C8.83335 7.16602 6.75002 10.5827 5.58335 14.916L0.500016 13.416C2.25002 7.08268 5.91668 2.91602 11.5 0.916016H22.5834ZM59.5834 0.916016C55.4167 0.916016 51.8334 2.16602 48.8334 4.66602C45.8334 7.16602 43.75 10.5827 42.5834 14.916L37.5 13.416C39.25 7.08268 42.9167 2.91602 48.5 0.916016H59.5834V45.916H31.75V27.416H47.4167V0.916016H59.5834Z" />
  </svg>
);

const LeftArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 12H4M10 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const RightArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 12h16m-6 6l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const testimonialsData = [
  {
    id: 1,
    image: 'https://i.pravatar.cc/150?u=rachel',
    title: 'They delivered best quality',
    rating: 5,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    name: 'Rachel',
    role: 'Customer'
  },
  {
    id: 2,
    image: 'https://i.pravatar.cc/150?u=david',
    title: 'Amazing customer support',
    rating: 5,
    text: "The support team was incredibly responsive and helpful. They resolved my issue within minutes, and their friendly attitude made the experience pleasant. Highly recommended for their excellent service!",
    name: 'David',
    role: 'Client'
  },
  {
    id: 3,
    image: 'https://i.pravatar.cc/150?u=sarah',
    title: 'A truly seamless experience',
    rating: 4,
    text: "From browsing the products to the final checkout, everything was smooth and intuitive. The product arrived on time and exceeded my expectations. I will definitely be a returning customer.",
    name: 'Sarah',
    role: 'Shopper'
  }
];

// --- Main Testimonials Component ---

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800">Their Words, Our Pride</h2>
          <div className="flex justify-center items-center my-4 space-x-4">
            <div className="w-16 h-px bg-gray-300"></div>
            <DiamondIcon />
            <div className="w-16 h-px bg-gray-300"></div>
          </div>
          <p className="text-gray-500">Happy Words of our Happy Customers</p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop view: wrapper with large side arrows */}
          <div className="hidden lg:flex items-center">
            <button 
              onClick={prevSlide}
              className="w-12 h-[236px] bg-yellow-400 flex items-center justify-center text-gray-800 hover:bg-yellow-500 transition-colors border-r-2 border-yellow-500 flex-shrink-0"
              aria-label="Previous testimonial"
            >
              <LeftArrowIcon />
            </button>
            
            <div className="bg-white w-full overflow-hidden h-[236px]">
              <div 
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonialsData.map((testimonial) => (
                  <div key={testimonial.id} className="w-full bg-[#f9f9f9] h-full p-8 relative flex gap-8 items-center flex-shrink-0">
                    <div className="flex-shrink-0 w-50 h-60 bg-gray-200">
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="relative w-full">
                      <QuoteIcon />
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-gray-800 text-lg">{testimonial.title}</h3>
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => <StarIcon key={i} />)}
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {testimonial.text}
                      </p>
                      <p className="font-semibold text-gray-800">
                        {testimonial.name} <span className="font-normal text-gray-500">- {testimonial.role}</span>
                      </p>
                    </div>
                    <div className='w-2 h-60 bg-amber-400'></div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={nextSlide}
              className="w-12 h-[236px] bg-yellow-400 flex items-center justify-center text-gray-800 hover:bg-yellow-500 transition-colors border-l-2 border-yellow-500 flex-shrink-0"
              aria-label="Next testimonial"
            >
              <RightArrowIcon />
            </button>
          </div>

          {/* Mobile view: single card with bottom arrows */}
          <div className="lg:hidden">
            <div className="bg-white w-full overflow-hidden">
                <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                {testimonialsData.map((testimonial) => (
                    <div key={testimonial.id} className="w-full bg-[#f9f9f9] p-6 text-center md:p-8 md:text-left flex-shrink-0">
                        <div className="flex flex-col md:flex-row gap-6 items-center">
                            <div className="flex-shrink-0 w-28 h-28 md:w-32 md:h-32 bg-gray-200 mx-auto">
                                <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="relative w-full">
                                <QuoteIcon />
                                <div className="flex flex-col md:flex-row items-center gap-2 mb-2">
                                  <h3 className="font-bold text-gray-800 text-lg">{testimonial.title}</h3>
                                  <div className="flex">
                                    {[...Array(testimonial.rating)].map((_, i) => <StarIcon key={i} />)}
                                  </div>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                  {testimonial.text}
                                </p>
                                <p className="font-semibold text-gray-800">
                                  {testimonial.name} <span className="font-normal text-gray-500">- {testimonial.role}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
            {/* Mobile Arrow controls */}
            <div className="flex justify-center items-center mt-6 space-x-3">
              <button onClick={prevSlide} className="p-2 rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors" aria-label="Previous testimonial">
                <LeftArrowIcon />
              </button>
              <button onClick={nextSlide} className="p-2 rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors" aria-label="Next testimonial">
                <RightArrowIcon />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;