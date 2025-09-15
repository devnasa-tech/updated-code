"use client";
import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { FaSpinner } from "react-icons/fa";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import useProductAttributesData from "../../Hooks/useProductAttributesData";
import Select from "react-select";
import ProductDetailsDescription from "./ProductDetailsDescription";
import PrintingEmbroidery from "./PrintingEmbroidery";
import TextileCare from "./TextileCare";
import ProductVariantsForm from "../Blogs/ProductVariantsForm";

const ProductEditModal = ({ isOpen, onClose, product, onProductUpdated,refetch }) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { isSubmitting, errors },
  } = useForm();

  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const {
    productCategory,
    productSubCategory,
    productSize,
    productColour,
    productFit,
  } = useProductAttributesData();

  // Populate form with existing product data when the modal opens
  useEffect(() => {
    if (product) {
      const parseJson = (jsonString) => {
        try {
          return JSON.parse(jsonString);
        } catch (e) {
          return null;
        }
      };

      const transformedData = {
        ...product,
        colors:
          product.colors?.map((color) => ({
            value: { name: color.name, code: color.code },
            label: color.name,
          })) || [],
        variants: product.availabelVarients?.map((variant) => ({
          color: {
            label: variant.colorName,
            value: variant.colorName,
            colorCode: variant.colorCode,
          },
          sizes: variant.availableSize || [],
        })) || [{ color: null, sizes: [] }],
        richDescription: parseJson(product.description),
        printingEmbroidery: parseJson(product.printingEmbroidery),
        textileCare: parseJson(product.textileCare),
      };
      reset(transformedData);
    }
  }, [product, reset]);

  const colorOptions = productColour.map(({ value }) => ({
    value: { name: value.colourName, code: value.colourCode },
    label: value.colourName,
  }));

  const colorOptionsForVariant = productColour.map(({ value }) => ({
    label: value.colourName,
    value: value.colourName,
    colorCode: value.colourCode,
  }));

  const sizeOptionsForSelect = productSize.map(({ value }) => ({
    label: value,
    value: value,
  }));

  // Handle Form Submission for UPDATE
  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      // Append all simple text/select fields
      const simpleFields = [
        "title",
        "metaTitle",
        "productCode",
        "GSM_Code",
        "productCategory",
        "productSubCategory",
        "Sustainability",
        "Gender",
        "productSize",
        "fit",
        "price",
        "disCountPrice",
        "metaDescription",
      ];
      simpleFields.forEach((field) => {
        if (data[field] !== undefined && data[field] !== null) {
          formData.append(field, data[field]);
        }
      });

      formData.append("email", user?.email || "");

      // Handle complex JSON fields
      if (data.colors)
        formData.append(
          "colors",
          JSON.stringify(data.colors.map((c) => c.value))
        );
      if (data.variants) {
        const formattedVariants = data.variants
          .map((v) => ({
            colorName: v.color?.label,
            colorCode: v.color?.colorCode,
            availableSize: v.sizes || [],
          }))
          .filter((v) => v.colorName);
        formData.append("availabelVarients", JSON.stringify(formattedVariants));
      }

      if (data.richDescription)
        formData.append("description", JSON.stringify(data.richDescription));
      if (data.printingEmbroidery)
        formData.append(
          "printingEmbroidery",
          JSON.stringify(data.printingEmbroidery)
        );
      if (data.textileCare)
        formData.append("textileCare", JSON.stringify(data.textileCare));

      // Handle file uploads (only if new files are selected)
      if (data.mainImage?.[0]) formData.append("mainImage", data.mainImage[0]);
      if (data.galleryImages?.length > 0)
        Array.from(data.galleryImages).forEach((file) =>
          formData.append("galleryImages", file)
        );
      if (data.brandLogo?.length > 0)
        Array.from(data.brandLogo).forEach((file) =>
          formData.append("brandLogo", file)
        );
      if (data.mainPdfs?.length > 0)
        Array.from(data.mainPdfs).forEach((file) =>
          formData.append("mainPdfs", file)
        );

      // Send PATCH request
      const res = await axiosSecure.patch(
        `/update-product/${product._id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (res.data?.success) {
        toast.success("Product updated successfully!",{
          duration : 3000
        });
        onProductUpdated?.();
        onClose();
        refetch()
      } else {
        toast.error(res.data?.message || "Update failed.");
      }
    } catch (err) {
      console.error("Error while updating product:", err);
      toast.error("An error occurred during the update.");
    }
  };

  const inputStyle =
    "w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500";
  const labelStyle = "block text-sm font-medium text-gray-700 mb-2";
  const errorMsgClass = "text-red-500 text-xs mt-1";

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-start z-50 p-4 animate-fadeIn">
      <div className="bg-white w-full max-w-6xl rounded-lg shadow-xl p-6 transition-all duration-300 ease-out max-h-[95vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4 pb-3">
          <h2 className="text-2xl font-bold text-gray-800">Edit Product</h2>
          <button
            onClick={onClose}
            className="text-2xl text-gray-500 hover:text-gray-800"
          >
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Title & Meta Title */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="title" className={labelStyle}>
                Product Title
              </label>
              <input
                id="title"
                type="text"
                {...register("title")}
                className={inputStyle}
                placeholder="e.g. Premium Cotton T-Shirt"
              />
            </div>
            <div>
              <label htmlFor="metaTitle" className={labelStyle}>
                Meta Title
              </label>
              <input
                id="metaTitle"
                type="text"
                {...register("metaTitle")}
                className={inputStyle}
                placeholder="SEO meta title..."
              />
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
                {...register("productCode")}
                className={inputStyle}
                placeholder="e.g. 12345"
              />
            </div>
            <div>
              <label htmlFor="GSM_Code" className={labelStyle}>
                GSM Code
              </label>
              <input
                id="GSM_Code"
                type="text"
                {...register("GSM_Code")}
                className={inputStyle}
                placeholder="e.g. 180"
              />
            </div>
            <div>
              <label htmlFor="productCategory" className={labelStyle}>
                Category
              </label>
              <select
                id="productCategory"
                {...register("productCategory")}
                className={inputStyle}
              >
                <option value="">Select category</option>
                {productCategory.map(({ id, value }) => (
                  <option key={id} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Other Attributes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="productSubcategory" className={labelStyle}>
                Sub Category
              </label>
              <select
                id="productSubcategory"
                {...register("productSubCategory")}
                className={inputStyle}
              >
                <option value="">Select Sub Category</option>
                {productSubCategory.map(({ id, value }) => (
                  <option key={id} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="Sustainability" className={labelStyle}>
                Sustainability
              </label>
              <select
                id="Sustainability"
                {...register("Sustainability")}
                className={inputStyle}
              >
                <option value="">Select Sustainability</option>
                <option value="eco-friendly">Eco-Friendly</option>
                <option value="recycled">Recycled Materials</option>
                <option value="standard">Standard</option>
              </select>
            </div>
            <div>
              <label htmlFor="Gender" className={labelStyle}>
                Gender
              </label>
              <select id="Gender" {...register("Gender")} className={inputStyle}>
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="unisex">Unisex</option>
              </select>
            </div>
            <div>
              <label htmlFor="productSize" className={labelStyle}>
                Size
              </label>
              <select
                id="productSize"
                {...register("productSize")}
                className={inputStyle}
              >
                <option value="">Select productSize</option>
                {productSize.map(({ id, value }) => (
                  <option key={id} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelStyle}>Select Colors (multiple)</label>
              <Controller
                name="colors"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    isMulti
                    options={colorOptions}
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
                )}
              />
            </div>
            <div>
              <label htmlFor="fit" className={labelStyle}>
                Fit
              </label>
              <select id="fit" {...register("fit")} className={inputStyle}>
                <option value="">Select Fit</option>
                {productFit.map(({ id, value }) => (
                  <option key={id} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="price" className={labelStyle}>
                Price ($)
              </label>
              <input
                id="price"
                type="number"
                step="0.01"
                {...register("price", {
                  min: { value: 0, message: "Price cannot be negative" },
                })}
                className={inputStyle}
                placeholder="e.g. 350"
              />
              {errors.price && (
                <p className={errorMsgClass}>{errors.price.message}</p>
              )}
            </div>
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
                <p className={errorMsgClass}>{errors.disCountPrice.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="mainImage" className={labelStyle}>
                Upload New Main Image
              </label>
              <input
                id="mainImage"
                type="file"
                accept="image/*"
                {...register("mainImage")}
                className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:font-semibold file:bg-yellow-100 file:text-yellow-700 hover:file:bg-yellow-200"
              />
            </div>
          </div>

          {/* Image & PDF Uploads */}
          <div className="img_upload grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
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
            </div>
            <div>
              <label htmlFor="brandLogo" className={labelStyle}>
                Brand Logo (multiple)
              </label>
              <input
                id="brandLogo"
                type="file"
                accept="image/*"
                multiple
                {...register("brandLogo")}
                className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:font-semibold file:bg-green-100 file:text-green-700 hover:file:bg-green-200"
              />
            </div>
            <div>
              <label htmlFor="mainPdfs" className={labelStyle}>
                Upload PDFs (multiple)
              </label>
              <input
                id="mainPdfs"
                type="file"
                accept="application/pdf"
                multiple
                {...register("mainPdfs")}
                className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:font-semibold file:bg-purple-100 file:text-purple-700 hover:file:bg-purple-200 cursor-pointer"
              />
            </div>
          </div>

          <ProductVariantsForm
            control={control}
            errors={errors}
            colorOptions={colorOptionsForVariant}
            sizeOptions={sizeOptionsForSelect}
          />

          <div>
            <textarea
              id="metaDescription"
              rows="3"
              {...register("metaDescription")}
              className={inputStyle}
              placeholder="Enter SEO meta description..."
            ></textarea>
          </div>

          <ProductDetailsDescription name="richDescription" control={control} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PrintingEmbroidery name="printingEmbroidery" control={control} />
            <TextileCare name="textileCare" control={control} />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-[180px] flex items-center justify-center px-6 py-2 bg-yellow-400 text-gray-800 font-semibold rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-75 disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <FaSpinner className="animate-spin h-5 w-5 mr-2" /> Saving...
                </>
              ) : (
                "Save Changes"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductEditModal;