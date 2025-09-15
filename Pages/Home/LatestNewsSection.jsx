'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const DiamondIcon = () => (
    <svg className="h-3 w-3 text-gray-400" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.55013 0.350131C5.7931 0.107161 6.2069 0.107161 6.44987 0.350131L11.6499 5.55013C11.8928 5.7931 11.8928 6.2069 11.6499 6.44987L6.44987 11.6499C6.2069 11.8928 5.7931 11.8928 5.55013 11.6499L0.350131 6.44987C0.107161 6.2069 0.107161 5.7931 0.350131 5.55013L5.55013 0.350131Z"/>
    </svg>
);

const TagIcon = () => (
    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5a.997.997 0 01.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
);

const UserIcon = () => (
    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
);

const CommentIcon = () => (
    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.155-3.85A8.025 8.025 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM4.416 14.616l.113.123a6.976 6.976 0 003.903 1.259 6.976 6.976 0 003.903-1.259l.113-.123a4.975 4.975 0 00-7.832 0z" clipRule="evenodd"></path></svg>
);

const articlesData = [
  {
    id: 1,
    imageSrc: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    title: 'Contrary to popular belief',
  },
  {
    id: 2,
    imageSrc: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    title: 'Simply dummy text',
  },
  {
    id: 3,
    imageSrc: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
    title: 'Contrary to popular belief',
  },
  {
    id: 4,
    imageSrc: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
    title: 'The standard Lorem Ipsum',
  },
];

const ArticleCard = ({ article }) => {
    return (
        <div className="bg-white shadow-lg">
            <div className="relative">
                <img src={article.imageSrc} alt={article.title} className="w-full h-56 object-cover" />
                <div className="absolute top-4 left-4 bg-amber-400 text-zinc-800 w-14 h-14 flex flex-col items-center justify-center">
                    <span className="text-xl font-bold">05</span>
                    <span className="text-xs uppercase">nov</span>
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800">{article.title}</h3>
                <p className="mt-2 text-sm text-gray-500 truncate">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod...
                </p>
                <div className="mt-4 flex items-center space-x-4 text-xs text-gray-500">
                    <div className="flex items-center space-x-1.5">
                        <TagIcon />
                        <span>Beauty</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                        <UserIcon />
                        <span>Rachel</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                        <CommentIcon />
                        <span>0</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const LatestNewsSection = () => {
  return (
    <div className="relative bg-white pb-24 overflow-hidden">
      <div className="absolute inset-0 top-1/2 bg-amber-50" aria-hidden="true"></div>
      
      <div className="relative container mx-auto max-w-6xl py-16">
        <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800">Our latest news & articles!</h2>
            <div className="flex items-center justify-center mt-4 space-x-2">
                <div className="h-px w-12 bg-gray-300"></div>
                <DiamondIcon />
                <div className="h-px w-12 bg-gray-300"></div>
            </div>
        </div>

        <div className="relative mt-4">
            <p className="text-center text-gray-500 max-w-lg mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="absolute top-1/2 right-0 -translate-y-1/2 hidden md:flex items-center space-x-2">
                <button className="news-swiper-button-prev text-gray-600 text-xl">&larr;</button>
                <button className="news-swiper-button-next text-gray-600 text-xl">&rarr;</button>
            </div>
        </div>

        <div className="mt-12">
            <Swiper
                modules={[Navigation]}
                spaceBetween={32}
                slidesPerView={3}
                navigation={{
                    nextEl: '.news-swiper-button-next',
                    prevEl: '.news-swiper-button-prev',
                }}
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 16 },
                    768: { slidesPerView: 2, spaceBetween: 24 },
                    1024: { slidesPerView: 3, spaceBetween: 32 },
                }}
            >
                {articlesData.map((article) => (
                    <SwiperSlide key={article.id}>
                        <ArticleCard article={article} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
      </div>
    </div>
  );
};

export default LatestNewsSection;