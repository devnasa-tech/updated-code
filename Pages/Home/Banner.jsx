'use client';

import { useState, useEffect } from "react";

const img_api = process.env.NEXT_PUBLIC_API_BASE_URL;

const Banner = () => {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await fetch(`${img_api}/banners`);
        if (!response.ok) throw new Error('Failed to fetch banners');
        const data = await response.json();
        setSlides(data);

        // Preload images for smoother transitions
        data.forEach((slide) => {
          const img = new Image();
          img.src = `${img_api}${slide.image}`; 
        });

      } catch (error) {
        console.error("Error fetching banner slides:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSlides();
  }, []);

  useEffect(() => {
    if (slides.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [slides.length]);

  if (loading) {
    return <section className="relative w-full h-[78vh] bg-gray-200 animate-pulse"></section>;
  }

  if (slides.length === 0) {
    return (
        <section className="relative w-full h-[78vh] bg-gray-200 flex items-center justify-center">
            <p className="text-gray-600">Welcome to Ayria!</p>
        </section>
    );
  }

  const goToSlide = (index) => setCurrentIndex(index);
  const currentSlide = slides[currentIndex];

  return (
    <section className="relative w-full h-[78vh] bg-gray-200 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide._id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${img_api}${slide.image})`,
            backgroundColor: "#E2E2E2",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      <div className="relative h-full flex items-center justify-start z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <div className="max-w-xl text-left">
            <p className="text-sm md:text-base font-normal text-gray-800 uppercase tracking-wider">
              {currentSlide.subtitle}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-800 font-light mt-4 leading-tight">
              {currentSlide.title1}
              <br />
              {currentSlide.title2}
              <br />
              <span className="font-bold">{currentSlide.titleBold}</span>
            </h1>
            <button className="mt-8 bg-gray-800 text-white px-8 py-3 hover:bg-gray-700 transition-colors duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
              currentIndex === index ? "bg-gray-800" : "bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Banner;