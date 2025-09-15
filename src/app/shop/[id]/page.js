"use client";
import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import {
  FaRulerHorizontal,
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaPinterest,
  FaSearchPlus,
  FaChevronLeft,
  FaChevronRight,
  FaSyncAlt,
  FaFacebookF,
  FaTwitterSquare,
  FaInstagram,
} from "react-icons/fa";
import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
import CommonBanner from "../../../../components/CommonBanner";
import CustomStarRating from "../../../../components/CustomStarRating";
import ProductDetailsTabs from "../../../../Pages/Shop/ProductDetailsTabs";
import ProductsDetailsSlider from "../../../../Pages/Prductdetails/ProductsDetailsSlider";
import Link from "next/link";
import useAllProducts from "../../../../Hooks/useAllProducts";
import Image from "next/image";
import ProductDetailsData from "../../../../Pages/AdminDashboard/ProductDetailsData";

const img_api = process.env.NEXT_PUBLIC_API_BASE_URL;

const ProductDetails = ({ params }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("XS-5XL");
  const [selectedColor, setSelectedColor] = useState("Black");
  const { id } = React.use(params);

  const [allProducts, refetch, isLoading] = useAllProducts();
  const myProductData = allProducts?.find((data) => data._id == id);


  // consol
  // zoom state
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // responsive thumbnail
  const [thumbnailPosition, setThumbnailPosition] = useState("left");
  useEffect(() => {
    const handleResize = () => {
      setThumbnailPosition(window.innerWidth < 640 ? "top" : "left");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const images =
    myProductData?.galleryImages?.map((url) => ({
      original: `${img_api}${url}`,
      thumbnail: `${img_api}${url}`,
    })) || [];

  // Custom left navigation button
  const renderLeftNav = (onClick, disabled) => (
    <button
      type="button"
      className="image-gallery-left-nav"
      disabled={disabled}
      onClick={onClick}
      aria-label="Previous Slide"
    >
      <FaChevronLeft size={20} />
    </button>
  );

  // Custom right navigation button
  const renderRightNav = (onClick, disabled) => (
    <button
      type="button"
      className="image-gallery-right-nav"
      disabled={disabled}
      onClick={onClick}
      aria-label="Next Slide"
    >
      <FaChevronRight size={20} />
    </button>
  );

  // custom zoom button
  const renderCustomFullscreenButton = () => {
    return (
      <button
        type="button"
        onClick={() => setIsZoomOpen(true)}
        className="absolute top-2 right-2 sm:right-12 bg-black/70 text-white p-2 rounded-md z-10"
      >
        <FaSearchPlus size={18} />
      </button>
    );
  };

  return (
    <main>
      <CommonBanner title="shop" breadcrumb="products details" />

      <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 px-4 sm:px-10 md:px-16 py-10 lg:px-20">
        {/* Image Gallery */}
        <div className="image_gallery relative">
          <ImageGallery
            items={images}
            showPlayButton={false}
            showFullscreenButton={true}
            renderFullscreenButton={renderCustomFullscreenButton}
            renderLeftNav={renderLeftNav}
            renderRightNav={renderRightNav}
            thumbnailPosition={thumbnailPosition}
            onSlide={(index) => setCurrentIndex(index)}
          />
        </div>

  {/* Product Details */}
<div className="product_details p-6 space-y-5 bg-white rounded-xl shadow-sm border border-gray-100">
  {/* Title + Code */}
  <div className="flex items-center justify-between">
    <h1 className="text-2xl font-bold text-gray-900 capitalize">
      {myProductData?.title}
    </h1>
    <p className="text-base text-gray-500"> {myProductData?.productCode}</p>
  </div>

  {/* Category */}
  <div className="flex items-center gap-2">
    <span className="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-700 rounded-full uppercase">
      {myProductData?.productCategory}
    </span>
    <span className="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-700 rounded-full uppercase">
      {myProductData?.productSubCategory}
    </span>
  </div>

  {/* Rating */}
  <div className="flex items-center gap-2">
    <CustomStarRating rating={5} />
    <span className="text-gray-500 text-sm">
      (200 reviews)
    </span>
  </div>

  {/* Price */}
  <div className="flex items-baseline gap-3">
    <p
      className={`${
        myProductData?.disCountPrice
          ? "line-through text-gray-400"
          : "text-2xl font-semibold text-gray-900"
      }`}
    >
      ${myProductData?.price}
    </p>
    {myProductData?.disCountPrice && (
      <p className="text-2xl font-bold">
        ${myProductData?.price - myProductData?.disCountPrice}
      </p>
    )}
  </div>



  {/* Attributes */}
  <div className="flex flex-wrap gap-3 ">
    <span className="px-3 py-1 text-sm font-medium border border-gray-200 rounded-lg">
      Size: {myProductData?.productSize}
    </span>
        <span className="px-3 py-1 text-sm font-medium border border-gray-200 rounded-lg">
 {myProductData?.GSM_Code}
    </span>


    <span className="px-3 py-1 text-sm font-medium border border-gray-200 rounded-lg">
 {myProductData?.fit}
    </span>

        <span className="px-3 py-1 text-sm font-medium border border-gray-200 rounded-lg uppercase">
     {myProductData?.Sustainability}
    </span>



  </div>

  {/* Colors */}
  <div>
    {/* <h3 className="text-sm font-semibold text-gray-700 mb-2">
      Available Colors
    </h3> */}
    <div className="flex items-center gap-2">
      {myProductData?.colors?.map((color, index) => (
        <span
          key={index}
          className="w-6 h-6 rounded-sm border border-gray-300 cursor-pointer hover:scale-110 transition-transform"
          style={{ backgroundColor: color.code }}
        ></span>
      ))}
    </div>
  </div>

  {/* Size Guide */}
     <button className="text-sm font-medium text-orange-600 underline hover:text-orange-700 transition block">
    Size Guide
  </button>


   <button className="w-[180px] inline-block py-2 font-semibold rounded-md bg-[#ffbb42] text-lg capitalize">
     order now
   </button>
 


  {/* Brand Logo */}
  {Array.isArray(myProductData?.brandLogo) && (
    <div>
      {/* <h3 className="text-sm font-semibold text-gray-700 mb-2">
        Brand Partners
      </h3> */}
      <div className="flex items-center flex-wrap gap-2">
        {myProductData.brandLogo.map((logo, index) => (
          <div key={index} className="relative w-14 h-14">
            <Image
              src={`${img_api}${logo}`}
              alt={`brand-logo-${index}`}
              fill
              style={{ objectFit: "contain" }}
              className="rounded-md border border-gray-100"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  )}


       {/* social icons */}
           <div className="social_icons flex justify-between items-center mt-10 ">
              <div className="flex  items-center gap-2">
                     <FaFacebookF className="text-2xl text-blue-500"></FaFacebookF>
                 <FaTwitterSquare className="text-2xl text-blue-500"></FaTwitterSquare>
                 <FaInstagram className="text-2xl text-blue-500"></FaInstagram>
              </div>

               <h2 className="capitalize underline font-semibold text-sm ">ask any quesion ?</h2>
           </div>
</div>



      </section>

      {/* Modal for Zoomed Image */}
      {isZoomOpen && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50">
         <Image
  src={images[currentIndex].original}
  alt="zoomed"
  width={600}       // max width
  height={600}      // max height
  className="object-contain w-[300px] sm:w-[600px] h-[300px] sm:h-[600px]"
  priority           // optional, if you want high LCP priority
/>
          <button
            onClick={() => setIsZoomOpen(false)}
            className="absolute top-5 right-5 text-white text-3xl font-bold"
          >
            ✕
          </button>
        </div>
      )}

      <section className="px-4 sm:px-10 md:px-16 py-10 lg:px-20">
        <ProductDetailsTabs productId={id}  />
        <ProductsDetailsSlider />
      </section>
    </main>
  );
};

export default ProductDetails;
