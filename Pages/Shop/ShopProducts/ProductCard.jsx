'use client'
import React from "react";
import { FaRegHeart, FaSearchPlus, FaShoppingCart } from "react-icons/fa";
import { RiLoopRightLine } from "react-icons/ri";
import CustomStarRating from "../../../components/CustomStarRating";
import Link from "next/link";
import Image from "next/image";
const img_api = process.env.NEXT_PUBLIC_API_BASE_URL;

const ProductCard = ({ product, viewType }) => {

    console.log(product);

    // Common base URL
    

  // if (viewType === "list") {
  //   // Renders the list view layout
  //   return (
  //     <Link
  //       to={`/product-details/${product.id}`}
  //       key={product.id}
  //       className="group w-full bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 md:flex gap-6 p-4"
  //     >
  //       {/* Product Image Section */}
  //       <div className="md:w-2/5 flex-shrink-0 relative">
  //         <div className="w-full h-[250px] sm:h-[280px] md:h-64 bg-[#F5F5F5] rounded-lg flex items-center justify-center overflow-hidden">
  //           {/* <img
  //           src={product.image}
  //           alt={product.title}
  //           className="w-full h-full  group-hover:scale-105 transition-transform duration-300"
  //         /> */}
  //         </div>
  //       </div>

  //       {/* Product Details Section */}
  //       <div className="flex flex-col justify-between flex-grow mt-4 md:mt-0">
  //         <div>
  //           {/* Colors */}
  //           {product.colors?.length > 0 && (
  //             <div className="flex space-x-2 mb-3">
  //               {/* {product.colors.map((color, index) => (
  //                 <span
  //                   key={index}
  //                   className="w-4 h-4 rounded-sm border border-gray-300 shadow-sm"
  //                   style={{ backgroundColor: color }}
  //                 ></span>
  //               ))} */}
  //             </div>
  //           )}

  //           {/* Title + Rating */}
  //           <h3 className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-[#ffbb42] transition-colors line-clamp-2">
  //             {product.title}
  //           </h3>
  //           <div className="flex items-center text-sm mt-1">
  //             <CustomStarRating numberOfStars={5} />
  //             <span className="ml-2 text-gray-500">({product.reviews})</span>
  //           </div>
  //         </div>

  //         {/* Price + Size + Buttons */}
  //         <div className="mt-4">
  //           {/* Price */}
  //           <div className="mb-4">
  //             <p className="text-sm text-gray-500">
  //               Available Size: <span className="font-medium">L</span>
  //             </p>
  //             <p className="text-lg md:text-xl font-bold text-gray-900 mt-1">
  //               {product.price}
  //             </p>
  //           </div>

  //           {/* Buttons */}
  //           <div className="flex gap-3">
  //             <button className=" bg-[#ffbb42] hover:bg-yellow-500 text-black font-semibold py-2 px-5 rounded-md text-sm uppercase transition-colors">
  //               Order Now
  //             </button>
  //             <button
  //               aria-label="Add to Wishlist"
  //               className="p-3 bg-gray-100 border border-gray-200 rounded-md hover:bg-gray-200 transition-colors cursor-pointer flex items-center justify-center"
  //             >
  //               <FaRegHeart className="text-gray-600 hover:text-red-500 text-base" />
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </Link>
  //   );
  // }

 
  return (
    <Link
       href={`/shop/${product?._id}`} 
      className="group w-full bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col"
    >
      {/* Product? Image Section */}
   <div className="relative w-full h-70">
        <Image
                  src={`${img_api}${product.mainImage}`} 

          alt={product.title}
          fill 
          style={{ objectFit: "cover" }}
          className="rounded-md"
          priority 
        />
      </div>

      {/* Product? Details Section */}
      <div className="pt-2 pb-3 px-4 flex flex-col flex-grow">
        {/* colors  */}
        <div className="flex space-x-1 my-2">
          {product?.productColors?.map((color, index) => (
            <span
              key={index}
              className="w-4 h-4 rounded-sm border border-gray-300"
              style={{ backgroundColor: color.code }}
            ></span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-gray-800 font-semibold text-lg mb-1 hover:text-[#ffbb42] transition-colors line-clamp-1">
          {product?.title}
        </h3>

        {/* Rating + size */}
        <div className="">
          <div className="flex items-center mb-1">
            <CustomStarRating numberOfStars={2} />
            <span className="ml-2 text-sm text-gray-500">
              (30)
            </span>
          </div>
          <div className="size ">
            <p className="text-sm text-gray-500">
              Available Size: <span className="font-medium text-black text-base"> {product?.productSize} </span>
            </p>
          </div>
        </div>

        {/* Price & Colors */}
        <div className="flex items-center gap-2 mt-2 mb-4">
          <p className={`  ${product.disCountPrice ? 'line-through text-sm text-[#777777]' : 'text-lg font-bold text-gray-900'}`}>${product?.price}</p>

          <p className={`${product.disCountPrice? 'text-lg font-bold text-gray-900' : 'hidden'}`}>
             ${product?.price - product?.disCountPrice}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button className="flex-1 bg-[#ffbb42] hover:bg-yellow-500 text-black font-semibold py-2 rounded-md text-sm uppercase transition-colors cursor-pointer">
           <Link 
              href={`/shop/${product?._id}`} 
           >Order</Link>
          </button>
          <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-600 hover:white hover:border-yellow-400 transition-colors cursor-pointer">
            <FaRegHeart className="" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;