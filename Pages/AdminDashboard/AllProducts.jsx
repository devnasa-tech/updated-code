'use client'
import React, { useEffect, useState } from "react";
import { FaBoxOpen, FaSearch } from "react-icons/fa";
import { MdFilterList } from "react-icons/md";
import AllProductsList from "./AllProductsList";
import useAllProducts from "../../Hooks/useAllProducts";
import LoadingSpinner from "../../components/LoadingSpinner";


const AllProducts = () => {

     const [allProducts,refetch,isLoading] = useAllProducts();


    if(isLoading){
    return <LoadingSpinner></LoadingSpinner>
  }


    //  Show message if no products
  if (!allProducts || allProducts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-gray-500">
        <FaBoxOpen className="text-6xl mb-4 text-[#ffbb42]" />
        <p className="text-lg font-semibold">No products available right now</p>
      </div>
    );
  }



  return (
    <main className=" max-w-6xl mt-7">
      {/* title */}
     
        <h1 className="text-2xl font-bold text-gray-800 lg:mb-5 ">All Products</h1>
      

      {/* search and filter section */}
      <section className="w-full  flex justify-between gap-4">
        {/* search */}
        <div className="flex items-center w-full sm:w-1/2 md:w-[60%] lg:w-[70%] border border-gray-300 rounded-lg px-4 ">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            // value={searchTerm}
            // onChange={handleSearch}
            placeholder="Search products..."
            className="w-full outline-none text-gray-700 "
          />
        </div>

        {/*  Filter */}
        <div className="flex items-center w-full sm:w-1/2 md:w-[40%] lg:w-[30%] gap-2">

          <select
            // value={selectedCategory}
            // onChange={handleCategoryChange}
            className="border border-gray-300 rounded-lg px-3 py-2 w-full outline-none"
          >
            <option value='t_shirt'> T-Shirt</option>
            <option value='t_shirt'> T-Shirt</option>
            <option value='t_shirt'> T-Shirt</option>
            <option value='t_shirt'> T-Shirt</option>
          </select>
        </div>
      </section>

      {/* all product list */}
         <section className="all_product_list">
                    {
                      allProducts.map((product) => <AllProductsList key={product._id} product={product} refetch={refetch}></AllProductsList>)
                    }
         </section>
    </main>
  );
};

export default AllProducts;