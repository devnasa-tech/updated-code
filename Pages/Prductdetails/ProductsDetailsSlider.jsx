'use client'
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { IoDiamondOutline } from "react-icons/io5";
import SweperProductCard from "./SweperProductCard";
import { HiMiniArrowLongLeft,HiMiniArrowLongRight } from "react-icons/hi2";







export default function ProductsDetailsSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

const productsArray = [
  {
    id: 1,
    image: "https://plus.unsplash.com/premium_photo-1709993971389-2ffe68115dd4?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Women floral dress",
    price: "$235.00",
    discountPrice: "$199.00",
    rating: 4.5,
    reviews: 212,
    colors: ["#4CAF50", "#E91E63"],
    productCategory: "Clothing",
    productSubCategory: "Dresses"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1602010069450-0a62034f235c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvbWFuJTIwZmxvcmFsJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D",
    title: "Women denim jacket",
    price: "$249.00",
    discountPrice: "$199.00",
    rating: 4.0,
    reviews: 4,
    colors: ["#607D8B", "#B0BEC5", "#90A4AE"],
    productCategory: "Clothing",
    productSubCategory: "Jackets"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1727685841596-dd8fe1e0b2ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdvbWFuJTIwZmxvcmFsJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D",
    title: "Women floral dress",
    price: "$299.00",
    discountPrice: "$249.00",
    rating: 4.5,
    reviews: 25,
    colors: ["#607D8B", "#B0BEC5", "#90A4AE"],
    productCategory: "Clothing",
    productSubCategory: "Dresses"
  },
  {
    id: 4,
    image: "https://plus.unsplash.com/premium_photo-1709993971389-2ffe68115dd4?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Elegant evening gown",
    price: "$350.00",
    discountPrice: "$299.00",
    rating: 5.0,
    reviews: 89,
    colors: ["#880E4F", "#F06292"],
    productCategory: "Clothing",
    productSubCategory: "Evening Wear"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1727685841596-dd8fe1e0b2ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdvbWFuJTIwZmxvcmFsJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D",
    title: "Classic leather bag",
    price: "$150.00",
    discountPrice: "$120.00",
    rating: 4.0,
    reviews: 110,
    colors: ["#4E342E", "#D7CCC8"],
    productCategory: "Accessories",
    productSubCategory: "Bags"
  }
];


  return (
    <div className="max-w-6xl mx-auto mb-20">
      {/* Title */}
      <div className="title flex justify-center flex-col items-center mt-10">
        <div className="text-[30px] font-semibold sub_title_color capitalize">
          You may also like
        </div>
        <div className="icons flex items-center gap-1">
          <TfiLayoutLineSolid />
          <IoDiamondOutline />
          <TfiLayoutLineSolid />
        </div>
      </div>

      {/* Custom Arrows */}
      <div className="flex justify-end mb-4 gap-2">
        <div
          ref={prevRef}
          className="cursor-pointer text-2xl p-2 bg-gray-200 rounded hover:bg-gray-300 transition"
        >
          <HiMiniArrowLongLeft />
        </div>
        <div
          ref={nextRef}
          className="cursor-pointer text-2xl p-2 bg-gray-200 rounded hover:bg-gray-300 transition"
        >
          <HiMiniArrowLongRight />
        </div>
      </div>

      {/* Swiper Slider */}
      <Swiper
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        modules={[Navigation]}
        loop={true}
        spaceBetween={20}
        slidesPerGroup={1}
        breakpoints={{
          0: { slidesPerView: 1 },    
          640: { slidesPerView: 1 }, 
          768: { slidesPerView: 2 }, 
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 } 
        }}
      >
        {productsArray.map((product) => (
          <SwiperSlide key={product.id}>
            <SweperProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}