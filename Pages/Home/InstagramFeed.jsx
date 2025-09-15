'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const InstagramIcon = () => (
    <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

const images = [
  'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1542291026-7eec264c27ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1578996953842-0347d0255925?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1550837368-6594235de85c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
];


const InstagramFeed = () => {
  return (
    <section className="bg-white pt-16 sm:pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-800">
                Follow@Instagram
            </h2>
            <div className="flex items-center justify-center mt-4 space-x-2">
                <div className="h-px w-12 bg-gray-300"></div>
                <InstagramIcon />
                <div className="h-px w-12 bg-gray-300"></div>
            </div>
        </div>

        <div className="relative mt-4">
            <p className="text-center text-gray-500 max-w-lg mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="absolute top-1/2 right-0 -translate-y-1/2 hidden md:flex items-center space-x-2">
                <button className="instagram-swiper-button-prev text-gray-600 text-xl">&larr;</button>
                <button className="instagram-swiper-button-next text-gray-600 text-xl">&rarr;</button>
            </div>
        </div>
      </div>
      
      <div className="mt-12">
        <Swiper
            modules={[Navigation]}
            spaceBetween={2}
            slidesPerView={6}
            loop={true}
            navigation={{
                nextEl: '.instagram-swiper-button-next',
                prevEl: '.instagram-swiper-button-prev',
            }}
            breakpoints={{
                320: { slidesPerView: 2, spaceBetween: 2 },
                640: { slidesPerView: 3, spaceBetween: 2 },
                1024: { slidesPerView: 6, spaceBetween: 2 },
            }}
            className="w-full"
        >
            {images.map((src, index) => (
                <SwiperSlide key={index}>
                    <div className="aspect-square bg-gray-200">
                         <img src={src} alt={`Instagram post ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default InstagramFeed;