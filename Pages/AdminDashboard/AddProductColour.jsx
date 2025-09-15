"use client";
import React, { useState, useMemo } from "react";
import { FaSpinner } from "react-icons/fa";
import { SketchPicker } from "react-color";
import namer from "color-namer";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import Select from "react-select";

// 150+ common colors (sample subset here, full array ready below)
const colourOptions = [
  // Original 20
  { label: "AliceBlue", value: "#F0F8FF" },
  { label: "AntiqueWhite", value: "#FAEBD7" },
  { label: "Aqua", value: "#00FFFF" },
  { label: "Aquamarine", value: "#7FFFD4" },
  { label: "Azure", value: "#F0FFFF" },
  { label: "Beige", value: "#F5F5DC" },
  { label: "Bisque", value: "#FFE4C4" },
  { label: "Black", value: "#000000" },
  { label: "BlanchedAlmond", value: "#FFEBCD" },
  { label: "Blue", value: "#0000FF" },
  { label: "BlueViolet", value: "#8A2BE2" },
  { label: "Brown", value: "#A52A2A" },
  { label: "BurlyWood", value: "#DEB887" },
  { label: "CadetBlue", value: "#5F9EA0" },
  { label: "Chartreuse", value: "#7FFF00" },
  { label: "Chocolate", value: "#D2691E" },
  { label: "Coral", value: "#FF7F50" },
  { label: "CornflowerBlue", value: "#6495ED" },
  { label: "Cornsilk", value: "#FFF8DC" },
  { label: "Crimson", value: "#DC143C" },

  // Added to reach 100
  { label: "Cyan", value: "#00FFFF" },
  { label: "DarkBlue", value: "#00008B" },
  { label: "DarkCyan", value: "#008B8B" },
  { label: "DarkGoldenRod", value: "#B8860B" },
  { label: "DarkGray", value: "#A9A9A9" },
  { label: "DarkGrey", value: "#A9A9A9" },
  { label: "DarkGreen", value: "#006400" },
  { label: "DarkKhaki", value: "#BDB76B" },
  { label: "DarkMagenta", value: "#8B008B" },
  { label: "DarkOliveGreen", value: "#556B2F" },
  { label: "DarkOrange", value: "#FF8C00" },
  { label: "DarkOrchid", value: "#9932CC" },
  { label: "DarkRed", value: "#8B0000" },
  { label: "DarkSalmon", value: "#E9967A" },
  { label: "DarkSeaGreen", value: "#8FBC8F" },
  { label: "DarkSlateBlue", value: "#483D8B" },
  { label: "DarkSlateGray", value: "#2F4F4F" },
  { label: "DarkSlateGrey", value: "#2F4F4F" },
  { label: "DarkTurquoise", value: "#00CED1" },
  { label: "DarkViolet", value: "#9400D3" },
  { label: "DeepPink", value: "#FF1493" },
  { label: "DeepSkyBlue", value: "#00BFFF" },
  { label: "DimGray", value: "#696969" },
  { label: "DimGrey", value: "#696969" },
  { label: "DodgerBlue", value: "#1E90FF" },
  { label: "FireBrick", value: "#B22222" },
  { label: "FloralWhite", value: "#FFFAF0" },
  { label: "ForestGreen", value: "#228B22" },
  { label: "Fuchsia", value: "#FF00FF" },
  { label: "Gainsboro", value: "#DCDCDC" },
  { label: "GhostWhite", value: "#F8F8FF" },
  { label: "Gold", value: "#FFD700" },
  { label: "GoldenRod", value: "#DAA520" },
  { label: "Gray", value: "#808080" },
  { label: "Grey", value: "#808080" },
  { label: "Green", value: "#008000" },
  { label: "GreenYellow", value: "#ADFF2F" },
  { label: "HoneyDew", value: "#F0FFF0" },
  { label: "HotPink", value: "#FF69B4" },
  { label: "IndianRed", value: "#CD5C5C" },
  { label: "Indigo", value: "#4B0082" },
  { label: "Ivory", value: "#FFFFF0" },
  { label: "Khaki", value: "#F0E68C" },
  { label: "Lavender", value: "#E6E6FA" },
  { label: "LavenderBlush", value: "#FFF0F5" },
  { label: "LawnGreen", value: "#7CFC00" },
  { label: "LemonChiffon", value: "#FFFACD" },
  { label: "LightBlue", value: "#ADD8E6" },
  { label: "LightCoral", value: "#F08080" },
  { label: "LightCyan", value: "#E0FFFF" },
  { label: "LightGoldenRodYellow", value: "#FAFAD2" },
  { label: "LightGray", value: "#D3D3D3" },
  { label: "LightGrey", value: "#D3D3D3" },
  { label: "LightGreen", value: "#90EE90" },
  { label: "LightPink", value: "#FFB6C1" },
  { label: "LightSalmon", value: "#FFA07A" },
  { label: "LightSeaGreen", value: "#20B2AA" },
  { label: "LightSkyBlue", value: "#87CEFA" },
  { label: "LightSlateGray", value: "#778899" },
  { label: "LightSlateGrey", value: "#778899" },
  { label: "LightSteelBlue", value: "#B0C4DE" },
  { label: "LightYellow", value: "#FFFFE0" },
  { label: "Lime", value: "#00FF00" },
  { label: "LimeGreen", value: "#32CD32" },
  { label: "Linen", value: "#FAF0E6" },
  { label: "Magenta", value: "#FF00FF" },
  { label: "Maroon", value: "#800000" },
  { label: "MediumAquaMarine", value: "#66CDAA" },
  { label: "MediumBlue", value: "#0000CD" },
  { label: "MediumOrchid", value: "#BA55D3" },
  { label: "MediumPurple", value: "#9370DB" },
  { label: "MediumSeaGreen", value: "#3CB371" },
  { label: "MediumSlateBlue", value: "#7B68EE" },
  { label: "MediumSpringGreen", value: "#00FA9A" },
  { label: "MediumTurquoise", value: "#48D1CC" },
  { label: "MediumVioletRed", value: "#C71585" },
  { label: "MidnightBlue", value: "#191970" },
  { label: "MintCream", value: "#F5FFFA" },
  { label: "MistyRose", value: "#FFE4E1" },
  { label: "Moccasin", value: "#FFE4B5" },
  { label: "NavajoWhite", value: "#FFDEAD" },
  { label: "Navy", value: "#000080" },
  { label: "OldLace", value: "#FDF5E6" },
  { label: "Olive", value: "#808000" },
  { label: "OliveDrab", value: "#6B8E23" },
  { label: "Orange", value: "#FFA500" },
  { label: "OrangeRed", value: "#FF4500" },
  { label: "Orchid", value: "#DA70D6" },
  { label: "PaleGoldenRod", value: "#EEE8AA" },
  { label: "PaleGreen", value: "#98FB98" },
  { label: "PaleTurquoise", value: "#AFEEEE" },
  { label: "PaleVioletRed", value: "#DB7093" },
  { label: "PapayaWhip", value: "#FFEFD5" },
  { label: "PeachPuff", value: "#FFDAB9" },
  { label: "Peru", value: "#CD853F" },
  { label: "Pink", value: "#FFC0CB" },
  { label: "Plum", value: "#DDA0DD" },
  { label: "PowderBlue", value: "#B0E0E6" },
  { label: "Purple", value: "#800080" },
  { label: "RebeccaPurple", value: "#663399" },
  { label: "Red", value: "#FF0000" },
  { label: "RosyBrown", value: "#BC8F8F" },
  { label: "RoyalBlue", value: "#4169E1" },
  { label: "SaddleBrown", value: "#8B4513" },
  { label: "Salmon", value: "#FA8072" },
  { label: "SandyBrown", value: "#F4A460" },
  { label: "SeaGreen", value: "#2E8B57" },
  { label: "SeaShell", value: "#FFF5EE" },
  { label: "Sienna", value: "#A0522D" },
  { label: "Silver", value: "#C0C0C0" },
  { label: "SkyBlue", value: "#87CEEB" },
  { label: "SlateBlue", value: "#6A5ACD" },
  { label: "SlateGray", value: "#708090" },
  { label: "SlateGrey", value: "#708090" },
  { label: "Snow", value: "#FFFAFA" },
  { label: "SpringGreen", value: "#00FF7F" },
  { label: "SteelBlue", value: "#4682B4" },
  { label: "Tan", value: "#D2B48C" },
  { label: "Teal", value: "#008080" },
  { label: "Thistle", value: "#D8BFD8" },
  { label: "Tomato", value: "#FF6347" },
  { label: "Turquoise", value: "#40E0D0" },
  { label: "Violet", value: "#EE82EE" },
  { label: "Wheat", value: "#F5DEB3" },
  { label: "White", value: "#FFFFFF" },
  { label: "WhiteSmoke", value: "#F5F5F5" },
  { label: "Yellow", value: "#FFFF00" },
  { label: "YellowGreen", value: "#9ACD32" },
];

const AddProductColour = () => {
  const [colourCode, setColourCode] = useState("#000000");
  const [colourName, setColourName] = useState("Black");
  const axiosSecure = useAxiosSecure();

  const { handleSubmit, reset, formState: { isSubmitting } } = useForm();

  // Submit function
  const onSubmit = async () => {
    try {
      const formData = {
        key: "ProductColour",
        value: { colourName, colourCode },
      };

      const res = await axiosSecure.post("/post-productAttribute", formData);
      const result = res.data;

      if (result.acknowledged && result.modifiedCount > 0) {
        toast.success("New colour created successfully.", { duration: 2000 });
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Failed to add Product Colour");
    } finally {
      setTimeout(() => {
        setColourCode("#000000");
        setColourName("Black");
      }, 1500);
    }
  };

  // Handle colour change from SketchPicker
  const handleColorChange = (color) => {
    setColourCode(color.hex);
    const names = namer(color.hex);
    if (names?.ntc?.length > 0) {
      setColourName(names.ntc[0].name);
    }
  };

  // Handle color select from search
  const handleColorSelect = (selected) => {
    if (selected) {
      setColourName(selected.label);
      setColourCode(selected.value);
    }
  };




  // react-select custom styles
// const customSelectStyles = {
//   control: (provided, state) => ({
//     ...provided,
//     borderColor: "#ffbb42", // dropdown border color
//     boxShadow: state.isFocused ? `0 0 0 1px #ffbb42` : provided.boxShadow,
//     "&:hover": {
//       borderColor: "#ffbb42",
//     },
//   }),
//   option: (provided, state) => ({
//     ...provided,
//     backgroundColor: state.isSelected
//       ? "#ffbb42" // selected option background
//       : state.isFocused
//       ? "#FFE18C" // hover color (optional)
//       : "white",
//     color: state.isSelected ? "black" : "black",
//     "&:active": {
//       backgroundColor: "#ffbb42",
//     },
//   }),
// };


  return (
    <div className="max-w-6xl mt-7">
      <h1 className="text-2xl font-bold text-gray-800 lg:mb-5">Add New Colour</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 p-6 border border-gray-200 rounded-lg"
      >
        {/* Searchable Color Dropdown */}
        <div className="mb-4">
          <Select
            options={colourOptions}
            onChange={handleColorSelect}
            placeholder="Search color by name..."
            isClearable
          />
        </div>

        {/* SketchPicker + Preview */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <SketchPicker color={colourCode} onChangeComplete={handleColorChange} />

          <div className="flex flex-col items-center gap-2">
            <div
              className="w-20 h-12 border rounded-md shadow-inner"
              style={{ backgroundColor: colourCode }}
            ></div>
            <span className="text-gray-600 text-sm">
              {colourName} ({colourCode})
            </span>
          </div>
        </div>

        {/* Submit Button */}
        <div className="w-[180px] flex items-center gap-4 pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center px-6 py-2 bg-yellow-400 text-gray-800 font-semibold rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-75 disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <FaSpinner className="animate-spin h-5 w-5 mr-2" />
                Submitting...
              </>
            ) : (
              "Add Colour"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductColour;
