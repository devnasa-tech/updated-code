"use client";
import React, { useState } from "react";
import { FaTrashAlt, FaEye, FaEdit } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import ProductEditModal from "./ProductEditModal";
import Image from "next/image";
import toast from "react-hot-toast";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import ProductDetailsModal from "./ProductDetailsModal";

const img_api = process.env.NEXT_PUBLIC_API_BASE_URL;

const AllProductsList = ({ product, refetch }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const axiosSecure = useAxiosSecure();

  const handleEditClick = () => {
    setCurrentProduct(product);
    setIsEditModalOpen(true);
  };

  const handleUpdate = (updatedData) => {
    // This function can be expanded later if needed
    console.log("Updated Product:", updatedData);
  };

  const handleDelete = (id, title) => {
    toast(
      (t) => (
        <div className="flex flex-col space-y-3 p-1">
          <p className="text-base font-medium text-gray-800">
            Are you sure you want to delete{" "}
            <span className="font-semibold text-red-600">{title}</span>?
          </p>
          <div className="flex justify-end space-x-2">
            <button
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-200 rounded-lg hover:bg-gray-200 transition-colors"
              onClick={() => toast.dismiss(t.id)}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 text-sm font-medium text-white bg-red-600 border border-red-600 rounded-lg hover:bg-red-700 transition-colors"
              onClick={async () => {
                try {
                  await axiosSecure.delete(`/products/${id}`);
                  toast.dismiss(t.id);
                  toast.success(`${title} deleted successfully`, {
                    duration: 2000,
                  });
                  refetch();
                } catch (error) {
                  toast.dismiss(t.id);
                  toast.error("Failed to delete product");
                }
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ),
      {
        style: {
          maxWidth: "400px",
        },
      }
    );
  };

  const handleViewDetails = () => {
    setCurrentProduct(product);
    setIsDetailsModalOpen(true);
  };

  return (
    <>
      <div className="flex items-center justify-between p-4 my-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300 ease-in-out">
        {/* Left: Image & Info */}
        <div className="flex items-center space-x-4">
          <div className="relative flex-shrink-0 w-16 h-16">
            <Image
              src={`${img_api}${product.mainImage}`}
              alt={product.title || "Product Image"}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-gray-800">{product.title}</h3>
            <div className="flex items-center space-x-2">
                <p className="text-sm font-semibold text-gray-600">Price: ${product.price}</p>
                {product.category && (
                    <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full">
                        {product.category}
                    </span>
                )}
            </div>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center space-x-2">
          {/* View Details Icon Button */}
          <button
            className="p-2 text-gray-500 rounded-full hover:bg-blue-100 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-200"
            onClick={handleViewDetails}
            title="View Details"
          >
            <FaEye className="text-xl" />
          </button>
          
          {/* Edit Icon Button */}
          <button
            className="p-2 text-gray-500 rounded-full hover:bg-green-100 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition-colors duration-200"
            onClick={handleEditClick}
            title="Edit"
          >
            <FaEdit className="text-xl" />
          </button>

          {/* Delete Icon Button */}
          <button
            className="p-2 text-gray-500 rounded-full hover:bg-red-100 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition-colors duration-200"
            onClick={() => handleDelete(product._id, product.title)}
            title="Delete"
          >
            <FaTrashAlt className="text-lg" />
          </button>
        </div>
      </div>

      {/* Edit Modal */}
      <ProductEditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        product={currentProduct}
        onUpdate={handleUpdate}
        refetch={refetch}
      />

      {/* Details Modal */}
      <ProductDetailsModal
        isOpen={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
        product={product}
      />
    </>
  );
};

export default AllProductsList;