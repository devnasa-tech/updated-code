"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaSpinner, FaFilePdf } from "react-icons/fa";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import useProductAttributesData from "../../Hooks/useProductAttributesData";
import Select from "react-select";

import PrintingEmbroidery from "./PrintingEmbroidery";
import TextileCare from "./TextileCare";
import ProductVariantsForm from "../Blogs/ProductVariantsForm";
import ProductDetailsDescription from "./ProductDetailsDescription";


const AddProductForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    watch, 
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: {
      colors: [],
       variants: [{ color: null, sizes: [] }], 
            richDescription: null,
        printingEmbroidery: null, 
      textileCare: null,      
    },
  });

  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const {
    productCategory,
    productSubCategory,
    productSize,
    productColour,
    productFit,
  } = useProductAttributesData();

  
  const selectedPdfFiles = watch("mainPdfs");



  
  const colorOptionsForVariant = productColour.map(({ value }) => ({
    label: value.colourName,
    value: value.colourName,
    colorCode: value.colourCode,
  }));

  const sizeOptionsForSelect = productSize.map(({ value }) => ({
    label: value,
    value: value,
  }));





  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      // Text fields
      formData.append("title", data.title);
      formData.append("productCode", data.productCode);
      formData.append("GSM_Code", data.GSM_Code);
      formData.append("productCategory", data.productCategory);
      formData.append("productSubCategory", data.productSubCategory);
      formData.append("productSize", data.productSize);
      formData.append("colors", JSON.stringify(data.colors));
      formData.append("Gender", data.Gender);
      formData.append("fit", data.fit);
      formData.append("Sustainability", data.Sustainability);
      formData.append("price", Number(data.price));
      formData.append(
        "disCountPrice",
        data.disCountPrice ? Number(data.disCountPrice) : ""
      );
      formData.append("email", user?.email || "");

           // নতুন ভেরিয়েন্ট ডেটা ফরম্যাট এবং যোগ করা
      const formattedVariants = data.variants.map(v => ({
        colorName: v.color.label,
        colorCode: v.color.colorCode,
        availableSize: v.sizes || []
      }));
      formData.append("availabelVarients", JSON.stringify(formattedVariants));



      // Meta fields
      formData.append("metaTitle", data.metaTitle);
      formData.append("metaDescription", data.metaDescription);

      // Main image
      if (data.mainImage?.[0]) {
        formData.append("mainImage", data.mainImage[0]);
      }

      // Gallery images
      if (data.galleryImages?.length > 0) {
        Array.from(data.galleryImages).forEach((file) => {
          formData.append("galleryImages", file);
        });
      }
      
      // Main PDF files
      if (data.mainPdfs?.length > 0) {
        Array.from(data.mainPdfs).forEach((file) => {
          formData.append("mainPdfs", file);
        });
      }

      // Brand Logo
      if (data.brandLogo?.length > 0) {
        Array.from(data.brandLogo).forEach((file) => {
          formData.append("brandLogo", file);
        });
      }

      if (data.richDescription) {
        formData.append("description", JSON.stringify(data.richDescription));
      }


        // Printing & Embroidery 
      if (data.printingEmbroidery) {
        formData.append("printingEmbroidery", JSON.stringify(data.printingEmbroidery));
      }
      // Textile Care 
      if (data.textileCare) {
        formData.append("textileCare", JSON.stringify(data.textileCare));
      }


      // send data to api
      const res = await axiosSecure.post("/post-products", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.data?.success) {
        toast.success("Product added successfully!", { duration: 2000 });
        reset(); 
      } else {
        console.warn("Something went wrong:", res.data);
        toast.error("Something went wrong");
      }
    } catch (err) {
      console.error("Error while adding product:", err);
      toast.error("Something went wrong");
    }
  };





 
  const inputStyle =
    "w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500";
  const labelStyle = "block text-sm font-medium text-gray-700 mb-2";
  const errorMsgClass = "text-red-500 text-xs mt-1";

  return (
    <div className="max-w-6xl flex my-6">
      <div className="w-full">
        <h1 className="text-2xl font-bold text-gray-800 lg:mb-5">
          Add New Product
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 p-6 border border-gray-200 rounded-lg"
        >
          {/* Title & Meta Title */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="title" className={labelStyle}>
                Product Title
              </label>
              <input
                id="title"
                type="text"
                {...register("title", {
                  required: "Product title is required",
                })}
                className={inputStyle}
                placeholder="e.g. Premium Cotton T-Shirt"
              />
              {errors.title && (
                <p className={errorMsgClass}>{errors.title.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="metaTitle" className={labelStyle}>
                Meta Title
              </label>
              <input
                id="metaTitle"
                type="text"
                {...register("metaTitle", {
                  required: "Meta title is required",
                })}
                className={inputStyle}
                placeholder="SEO meta title..."
              />
              {errors.metaTitle && (
                <p className={errorMsgClass}>{errors.metaTitle.message}</p>
              )}
            </div>
          </div>

          {/* Product Code, GSM, Category */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="productCode" className={labelStyle}>
                Product Code
              </label>
              <input
                id="productCode"
                type="text"
                {...register("productCode", {
                  required: "Product Code is required",
                })}
                className={inputStyle}
                placeholder="e.g. 12345"
              />
              {errors.productCode && (
                <p className={errorMsgClass}>{errors.productCode.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="GSM_Code" className={labelStyle}>
                GSM Code
              </label>
              <input
                id="GSM_Code"
                type="text"
                {...register("GSM_Code", {
                  required: "GSM Code is required",
                })}
                className={inputStyle}
                placeholder="e.g. 180"
              />
              {errors.GSM_Code && (
                <p className={errorMsgClass}>{errors.GSM_Code.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="productCategory" className={labelStyle}>
                Category
              </label>
              <select
                id="productCategory"
                {...register("productCategory", {
                  required: "Please select a category",
                })}
                className={inputStyle}
              >
                <option value="">Select category</option>
                {productCategory.map(({ id, value }) => (
                  <option key={id} value={value}>
                    {value}
                  </option>
                ))}
              </select>
              {errors.productCategory && (
                <p className={errorMsgClass}>
                  {errors.productCategory.message}
                </p>
              )}
            </div>
          </div>

          {/* Other Attributes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Sub Category */}
            <div>
              <label htmlFor="productSubcategory" className={labelStyle}>
                Sub Category
              </label>
              <select
                id="productSubcategory"
                {...register("productSubCategory", {
                  required: "Please select a subcategory",
                })}
                className={inputStyle}
              >
                <option value="">Select Sub Category</option>
                {productSubCategory.map(({ id, value }) => (
                  <option key={id} value={value}>
                    {value}
                  </option>
                ))}
              </select>
              {errors.productSubCategory && (
                <p className={errorMsgClass}>
                  {errors.productSubCategory.message}
                </p>
              )}
            </div>
            {/* Sustainability */}
            <div>
              <label htmlFor="Sustainability" className={labelStyle}>
                Sustainability
              </label>
              <select
                id="Sustainability"
                {...register("Sustainability", {
                  required: "Please select sustainability",
                })}
                className={inputStyle}
              >
                <option value="">Select Sustainability</option>
                <option value="eco-friendly">Eco-Friendly</option>
                <option value="recycled">Recycled Materials</option>
                <option value="standard">Standard</option>
              </select>
              {errors.Sustainability && (
                <p className={errorMsgClass}>
                  {errors.Sustainability.message}
                </p>
              )}
            </div>
            {/* Gender */}
            <div>
              <label htmlFor="Gender" className={labelStyle}>
                Gender
              </label>
              <select
                id="Gender"
                {...register("Gender", { required: "Please select gender" })}
                className={inputStyle}
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="unisex">Unisex</option>
              </select>
              {errors.Gender && (
                <p className={errorMsgClass}>{errors.Gender.message}</p>
              )}
            </div>
            {/* Size */}
            <div>
              <label htmlFor="productSize" className={labelStyle}>
                Size
              </label>
              <select
                id="productSize"
                {...register("productSize", {
                  required: "Please select product size",
                })}
                className={inputStyle}
              >
                <option value="">Select productSize</option>
                {productSize.map(({ id, value }) => (
                  <option key={id} value={value}>
                    {value}
                  </option>
                ))}
              </select>
              {errors.productSize && (
                <p className={errorMsgClass}>{errors.productSize.message}</p>
              )}
            </div>
            {/* Color */}
            <div>
              <label className={labelStyle}>Select Colors(multiple)</label>
              <Select
                isMulti
                options={productColour.map(({ id, value }) => ({
                  value: { name: value.colourName, code: value.colourCode },
                  label: value.colourName,
                }))}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(selected) => {
                  setValue(
                    "colors",
                    selected?.map((option) => option.value) || [],
                    { shouldValidate: true }
                  );
                }}
              />
              {errors.colors && (
                <p className={errorMsgClass}>{errors.colors.message}</p>
              )}
            </div>
            {/* Fit */}
            <div>
              <label htmlFor="fit" className={labelStyle}>
                Fit
              </label>
              <select
                id="fit"
                {...register("fit", { required: "Please select fit" })}
                className={inputStyle}
              >
                <option value="">Select Fit</option>
                {productFit.map(({ id, value }) => (
                  <option key={id} value={value}>
                    {value}
                  </option>
                ))}
              </select>
              {errors.fit && (
                <p className={errorMsgClass}>{errors.fit.message}</p>
              )}
            </div>
            {/* Price */}
            <div>
              <label htmlFor="price" className={labelStyle}>
                Price ($)
              </label>
              <input
                id="price"
                type="number"
                step="0.01"
                {...register("price", {
                  required: "Price is required",
                  min: { value: 0, message: "Price cannot be negative" },
                })}
                className={inputStyle}
                placeholder="e.g. 350"
              />
              {errors.price && (
                <p className={errorMsgClass}>{errors.price.message}</p>
              )}
            </div>
            {/* Discount Price */}
            <div>
              <label htmlFor="disCountPrice" className={labelStyle}>
                Discount Price ($)
              </label>
              <input
                id="disCountPrice"
                type="number"
                step="0.01"
                {...register("disCountPrice", {
                  min: { value: 0, message: "Discount cannot be negative" },
                })}
                className={inputStyle}
                placeholder="e.g. 300"
              />
              {errors.disCountPrice && (
                <p className={errorMsgClass}>
                  {errors.disCountPrice.message}
                </p>
              )}
            </div>
            {/* Main Image */}
            <div>
              <label htmlFor="mainImage" className={labelStyle}>
                Upload Main Image
              </label>
              <input
                id="mainImage"
                type="file"
                accept="image/*"
                {...register("mainImage", {
                  required: "Main image is required",
                })}
                className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:font-semibold file:bg-yellow-100 file:text-yellow-700 hover:file:bg-yellow-200"
              />
              {errors.mainImage && (
                <p className={errorMsgClass}>{errors.mainImage.message}</p>
              )}
            </div>
          </div>

          {/* Image & PDF Uploads */}
          <div className="img_upload grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {/* Gallery Images */}
            <div>
              <label htmlFor="galleryImages" className={labelStyle}>
                Upload Gallery Images (multiple)
              </label>
              <input
                id="galleryImages"
                type="file"
                accept="image/*"
                multiple
                {...register("galleryImages")}
                className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
              />
              {errors.galleryImages && (
                <p className={errorMsgClass}>
                  {errors.galleryImages.message}
                </p>
              )}
            </div>

            {/* Brand Logo */}
            <div>
              <label htmlFor="brandLogo" className={labelStyle}>
                Brand Logo (multiple)
              </label>
              <input
                id="brandLogo"
                type="file"
                accept="image/*"
                multiple
                {...register("brandLogo", {
                  required: "Brand logo is required",
                })}
                className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:font-semibold file:bg-green-100 file:text-green-700 hover:file:bg-green-200"
              />
              {errors.brandLogo && (
                <p className={errorMsgClass}>{errors.brandLogo.message}</p>
              )}
            </div>

            {/*  PDF Uploade */}
            <div>
              <label htmlFor="mainPdfs" className={labelStyle}>
                Upload  PDFs (multiple)
              </label>
              <input
                id="mainPdfs"
                type="file"
                accept="application/pdf"
                multiple
                {...register("mainPdfs")}
                className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:font-semibold file:bg-purple-100 file:text-purple-700 hover:file:bg-purple-200 cursor-pointer"
              />
              {errors.mainPdfs && (
                <p className={errorMsgClass}>{errors.mainPdfs.message}</p>
              )}
     
            </div>
          </div>


          
          <ProductVariantsForm
            control={control}
            errors={errors}
            colorOptions={colorOptionsForVariant}
            sizeOptions={sizeOptionsForSelect}
          />

          

          {/* Meta Description */}
          <div>
            {/* <label htmlFor="metaDescription" className={labelStyle}>
              Meta Description
            </label> */}
            <textarea
              id="metaDescription"
              rows="3"
              {...register("metaDescription", {
                required: "Meta description is required",
              })}
              className={inputStyle}
              placeholder="Enter SEO meta description..."
            ></textarea>
            {errors.metaDescription && (
              <p className={errorMsgClass}>
                {errors.metaDescription.message}
              </p>
            )}
          </div>

          <ProductDetailsDescription name="richDescription" control={control}></ProductDetailsDescription>

            {/* Printing/Embroidery and Textile Care */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="space-y-2">
                {/* <label className={labelStyle}>Printing & Embroidery</label> */}
                <PrintingEmbroidery name="printingEmbroidery" control={control} />
                {errors.printingEmbroidery && <p className={errorMsgClass}>{errors.printingEmbroidery.message}</p>}
             </div>
             <div className="space-y-2">
                {/* <label className={labelStyle}>Textile Care</label> */}
                <TextileCare name="textileCare" control={control} />
                {errors.textileCare && <p className={errorMsgClass}>{errors.textileCare.message}</p>}
             </div>
          </div>


  

     
          {/* Submit Button */}
          <div className="w-[180px] flex items-center gap-4 pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-[180px] flex items-center justify-center px-6 py-2 bg-yellow-400 text-gray-800 font-semibold rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-75 disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <FaSpinner className="animate-spin h-5 w-5 mr-2" />{" "}
                  Submitting...
                </>
              ) : (
                "Add Product"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;