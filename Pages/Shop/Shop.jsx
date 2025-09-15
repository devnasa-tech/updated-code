'use client'
import React, { useState } from "react";
const shop_banner_img = "https://i.ibb.co/qYgq4M8m/download-14.jpg";
import { FaHome, FaListUl } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";


import ProductSubCategory from "./ShopCategory/ProductSubCategory";
import ProductCategory from "./ShopCategory/ProductCategory";
import ProductSustainability from "./ShopCategory/ProductSustainability";
import Gender from "./ShopCategory/Gender";
import PriceRangeSlider from "./ShopCategory/PriceRangeSlider";
import SizeFilter from "./ShopCategory/SizeFilter";
import ProductColor from "./ShopCategory/ProductColor";
import ProductFit from "./ShopCategory/ProductFit";
import ShopProductSweper from "./ShopCategory/ShopProductSweper";
import CommonBanner from "../../components/CommonBanner";
import ProductList from "./ShopProducts/ProductList";


const Shop = () => {
  const [viewType, setViewType] = useState("grid");

  return (
    <section className="products_shop  ">
      {/* shop banner */}
      <CommonBanner
        title={"shop"}
        breadcrumb={"shop"}
        backgroundImage={shop_banner_img}
      ></CommonBanner>

      {/* products listing page */}
      <div className="product-listing-page m lg:flex gap-10 lg:gap-6 px-6 sm:px-14  lg:px-8 xl:px-20 py-14 ">
        {/*---------------- sidebar-filters */}
        <div className="sidebar-filters w-full grid grid-cols-1   gap-6 xl:gap-0 lg:block lg:w-[25%] ">
          <ProductCategory></ProductCategory>
          <ProductSubCategory></ProductSubCategory>
          {/* <BrandCheckbox></BrandCheckbox> */}
          <ProductSustainability></ProductSustainability>
          <Gender></Gender>
          <PriceRangeSlider></PriceRangeSlider>
          <SizeFilter></SizeFilter>
          <ProductColor></ProductColor>
          <ProductFit></ProductFit>
          <ShopProductSweper></ShopProductSweper>
          {/* <ColorFilter></ColorFilter> */}
          {/* <div className="col-span-2 md:col-span-1">
                  </div> */}
          {/* <TagsSection></TagsSection> */}
          {/* <div className="hidden lg:block">
              </div> */}
        </div>

        {/* --------------- product-listing-content */}
        <div className="product-listing-content w-full lg:w-[75%]  lg:p-0 ">
          {/* view and sort  */}
          <div className="sm:flex justify-between my-8 sm:my-0">
            {/* view button */}
            <div className="view_buton  flex items-center gap-2 mb-4 sm:mb-0">
              <p className="uppercase font-semibold ">views : </p>

              {/* grid view icon */}
              <button
                className={`grid_icon text-lg cursor-pointer ${
                  viewType === "grid" ? "primary_text" : "text-gray-500"
                }`}
                onClick={() => setViewType("grid")}
              >
                <BsFillGrid3X3GapFill />
              </button>

              {/* list view icon */}
              <button
                className={`flex_icon text-lg cursor-pointer ${
                  viewType === "list" ? "primary_text" : "text-gray-500"
                }`}
                onClick={() => setViewType("list")}
              >
                <FaListUl />
              </button>
            </div>
            {/* sort by price */}
            <div className="sort_products  flex items-center gap-2">
              <p className="uppercase font-semibold whitespace-nowrap">
                sort by :{" "}
              </p>

              <select defaultValue="Pick a color " className="select">
                <option disabled={true}>Pick a color</option>
                <option>Crimson</option>
                <option>Amber</option>
                <option>Velvet</option>
              </select>
            </div>
          </div>

          {/* -----product list */}
          <div className="product_list">
            <ProductList viewType={viewType}></ProductList>
          </div>

          {/* ------ */}
          {/* <div className="text-block-container max-w-4xl mx-auto py-8 text-gray-700">
            <div className="paragraph-section mb-8">
              <p>
                Phasellus placerat orci tincidunt dui facilisis vehicula.{" "}
                <span className="font-bold">
                  Etiam lobortis venenatis odio a pulvinar.
                </span>{" "}
                Donec laoreet vulputate eros, nec scelerisque tortor rutrum non.
                Morbi dapibus massa id sem dignissim, vel aliquam nunc
                vulputate. Etiam imperdiet arcu scelerisque nulla egestas
                posuere. Cras quis congue felis. Quisque dictum auctor nulla,
                sed tempor tortor aliquet vitae. Sed congue hendrerit ex nec
                laoreet.{" "}
                <span className="highlight-text bg-black text-white px-2 py-1 font-bold">
                  Nullam quis iaculis ex, in ullamcorper quam.
                </span>{" "}
                Sed et ullamcorper magna, tempus posuere justo. Vestibulum
                luctus sagittis ante id malesuada. Vestibulum pretium convallis
                porttitor.
              </p>
            </div>

            <div className="paragraph-section">
              <p>
                Cras volutpat purus placerat tellus molestie pulvinar.{" "}
                <span className="font-bold">
                  Nulla nunc orci, dapibus sit amet massa quis, semper ultrices
                  augue. Praesent posuere aliquam nibh, eget blandit augue
                  tincidunt vel.
                </span>{" "}
                Sed luctus facilisis posuere. Phasellus velit est, vulputate vel
                eleifend in, malesuada quis odio.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Shop;