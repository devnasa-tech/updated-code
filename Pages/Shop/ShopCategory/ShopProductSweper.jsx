'use client'
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { IoIosArrowBack } from "react-icons/io";
 import { IoIosArrowForward } from "react-icons/io";
import SweperProductCard from "../../Prductdetails/SweperProductCard";
import useAllProducts from "../../../Hooks/useAllProducts";




export default function ShopProductSweper() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [allProducts,refetch,isLoading] = useAllProducts()



  return (
    <div className="xl:p-4 mb-14 lg:mb-0 relative">
      {/* Title */}
      <div className="mb-6 mt-6">
        <h3 className="text-lg font-bold tracking-wide uppercase">
          Best Selling Items
        </h3>
        <div className="mt-2 mb-4 relative flex">
          <div className="absolute w-40 h-0.5 bg-gray-100"></div>
          <div className="absolute w-12 h-0.5 bg-yellow-400 rounded"></div>
        </div>
      </div>

      {/* Custom Arrows */}
      <button
        ref={prevRef}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 
                   text-gray-black font-extralight text-4xl "
      >
        <IoIosArrowBack />
      </button>

      <button
        ref={nextRef}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 
                   text-gray-black font-extralight text-4xl "
      >
        <IoIosArrowForward />
      </button>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        className="mySwiper"
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 1 },
        }}
      >
        {allProducts?.map((product) => (
          <SwiperSlide key={product.id}>
            {/* <SweperProductCard product={product} /> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}