'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaSpinner } from 'react-icons/fa';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const AddProductFit = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors }, 
  } = useForm();

const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    try {
      const formData = {
        key: "productFit",
        value: data.productFit,
      };

      const res = await axiosSecure.post("/post-productAttribute", formData);

      const result = res.data;

      if (result.acknowledged == true && result.modifiedCount > 0) {
        toast.success("New Product Fit created successfully.", {
          duration: 2000, // 2 seconds
        });
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Failed to add Profuct Fit");
    } finally {
      reset();
    }
  };



  const inputStyle = "w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 capitalize";
  const labelStyle = "block text-sm font-medium text-gray-700 mb-1 ";

  return (
    <div className="max-w-6xl mt-7 ">
  <div className="">

        <h1 className="text-2xl font-bold text-gray-800 lg:mb-5">Add Fit</h1>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-6 border border-gray-200 rounded-lg">
          {/* Product Title */}
          <div>
            {/* <label htmlFor="title" className={labelStyle}>Add New Category</label> */}
            <input
              id="productFit"
              type="text"
              {...register("productFit", { required: "Product Sub Category is required" })}
              className={inputStyle}
              placeholder="e.g. OVERSIZED,REGULAR,SLIM FIT"
            />
             {errors.productFit && <p className="text-red-500 text-xs mt-1">{errors.productFit.message}</p>}
          </div>

          {/* Action Buttons */}
          <div className="w-[180px] flex items-center gap-4 pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-[180px] flex items-center justify-center px-6 py-2 bg-yellow-400 text-gray-800 font-semibold rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-75 disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <FaSpinner className="animate-spin h-5 w-5 mr-2" />
                  Submitting...
                </>
              ) : (
                "Add"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductFit;