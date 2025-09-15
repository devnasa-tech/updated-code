// components/ProductVariantsForm.jsx

import React from "react";
import { useFieldArray, Controller } from "react-hook-form";
import Select from "react-select";
import { FaPlus } from "react-icons/fa"; // 1. আইকন import করা হয়েছে

const ProductVariantsForm = ({ control, errors, colorOptions, sizeOptions }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "variants",
  });

  // Common styles from the parent form
  const labelStyle = "block text-sm font-medium text-gray-700 mb-2";
  const errorMsgClass = "text-red-500 text-xs mt-1";

  return (
    <div className="pt-6 mt-3">
      <h2 className="block text-lg font-medium text-black mb-2">Product Variants</h2>
      {fields.map((field, index) => (
        <div key={field.id} className="mb-6 p-4 border border-gray-300 rounded-lg space-y-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Color Selector */}
            <div>
              <label className={labelStyle}>Variant {index + 1}: Color</label>
              <Controller
                name={`variants.${index}.color`}
                control={control}
                // rules={{ required: "Color is required" }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={colorOptions}
                    placeholder="Select Color"
                    className="basic-single"
                    classNamePrefix="select"
                  />
                )}
              />
              {errors.variants?.[index]?.color && (
                  <p className={errorMsgClass}>{errors.variants[index].color.message}</p>
              )}
            </div>

            {/* Size Multi-Selector */}
            <div>
              <label className={labelStyle}>Available Sizes</label>
              <Controller
                name={`variants.${index}.sizes`}
                control={control}
                render={({ field }) => (
                  <Select
                    isMulti
                    options={sizeOptions}
                    placeholder="Select Sizes"
                    className="basic-multi-select"
                    classNamePrefix="select"
                    value={sizeOptions.filter(option =>
                      field.value?.includes(option.value)
                    )}
                    onChange={selectedOptions =>
                      field.onChange(selectedOptions ? selectedOptions.map(option => option.value) : [])
                    }
                  />
                )}
              />
               {errors.variants?.[index]?.sizes && (
                  <p className={errorMsgClass}>{errors.variants[index].sizes.message}</p>
              )}
            </div>
          </div>

          {/* Remove Button */}
          {fields.length > 1 && (
            <button
              type="button"
              onClick={() => remove(index)}
              className="absolute top-2 right-2 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full hover:bg-red-600"
            >
              X
            </button>
          )}
        </div>
      ))}

      {/* Add Variant Button Wrapper for positioning */}
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => append({ color: null, sizes: [] })}
          className=" flex items-center gap-2 px-4 py-2 bg-[#ffbb42] text-white font-semibold rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 cursor-pointer"
        >
          <FaPlus size={14} /> 
          Add  
        </button>
      </div>


    </div>
  );
};

export default ProductVariantsForm;