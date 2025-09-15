'use client'
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { FaArrowLeft, FaArrowRight, FaBoxOpen } from "react-icons/fa";
import ProductCard from "./ProductCard";
import useAllProducts from "../../../Hooks/useAllProducts";
import LoadingSpinner from "../../../components/LoadingSpinner";

const ProductList = ({ viewType }) => {
   const [allProducts,refetch,isLoading] = useAllProducts();
  //  console.log(allProducts);
   


  
  // cardsPerPage 
  const cardsPerPage = viewType === "list" ? 5 : 12;
  const [currentPage, setCurrentPage] = useState(0);


  const offset = currentPage * cardsPerPage;
  const currentPageProducts = allProducts.slice(offset, offset + cardsPerPage);
  const pageCount = Math.ceil(allProducts.length / cardsPerPage);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };


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
    <div className="container mx-auto py-6">
      {/* Product Grid/List */}
      <div
        className={`grid gap-10 lg:gap-4 xl:gap-8 ${
          viewType === "grid"
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            : "grid-cols-1"
        }`}
      >
        {currentPageProducts.map((product) => (
          <ProductCard key={product._id} product={product} viewType={viewType} />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-10 flex justify-center items-center">
        <ReactPaginate
          previousLabel={<FaArrowLeft className="text-xl text-[#ffbb42]" />}
          nextLabel={<FaArrowRight className="text-xl text-[#ffbb42]" />}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          forcePage={currentPage}
          containerClassName="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg shadow-md"
          pageLinkClassName="px-3 py-1 border border-gray-300 rounded-md hover:bg-[#ffbb42] hover:text-white transition cursor-pointer"
          activeLinkClassName="bg-[#ffbb42] text-white border-[#ffbb42] font-semibold"
          previousClassName="cursor-pointer"
          nextClassName="cursor-pointer"
          disabledClassName="opacity-50 cursor-not-allowed"
        />
      </div>
    </div>
  );
};

export default ProductList;